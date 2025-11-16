import Render from "../Render.js";
import Output from "../Output.js";

export default function cfs(processList, overhead) {
    if (!Array.isArray(processList)) return new Output([], [], 0, 0, 0);

    const list = [...processList];
    const totalProcesses = list.length;

    list.sort((a, b) => a.arrival - b.arrival);

    const renderList = [];
    const queue = [];
    let time = 0;
    let idle = 0;
    let throughputSum = 0;
    let contextChanges = 0;
    let completed = 0;
    let nextIdx = 0;
    let previous = null;

    function checkArrival() {
        while (nextIdx < list.length && list[nextIdx].arrival <= time) {
            queue.push(list[nextIdx]);
            console.log(
                `Process ${list[nextIdx].id} added to the ready queue.`
            );
            nextIdx++;
        }
    }

    while (completed < totalProcesses) {
        checkArrival();

        if (queue.length === 0) {
            if (nextIdx < list.length) {
                idle += list[nextIdx].arrival - time;
                time = list[nextIdx].arrival;
                continue;
            } else {
                break;
            }
        }

        queue.sort((a, b) => (a.vruntime || 0) - (b.vruntime || 0));

        const p = queue.shift();
        if (previous !== null && p !== previous) {
            if (previous.finish === -1) {
                for (let h = 0; h < overhead; h++) {
                    renderList.push(new Render(previous.id, "overhead", time));
                    time += 1;
                    checkArrival();
                }
            } else {
                for (let h = 0; h < overhead; h++) {
                    renderList.push(new Render(p.id, "overhead", time));
                    time += 1;
                    checkArrival();
                }
            }
            contextChanges++;
        }

        if (p.start === -1) {
            p.start = time;
        }
        renderList.push(new Render(p.id, "exec", time));
        p.remaining -= 1;

        p.vruntime += Math.pow(1.25, -p.priority);

        time += 1;

        if (p.remaining <= 0) {
            p.finish = time - 1;
            p.turnaround = p.finish - p.arrival;
            p.wait = p.turnaround - p.runtime;
            throughputSum += p.turnaround;
            completed += 1;
            console.log(
                `Process ${p.id} finished at ${p.finish} with ${p.turnaround} turnaround`
            );
        } else {
            queue.push(p);
        }

        previous = p;
    }
    const avgTurnaround =
        totalProcesses > 0 ? throughputSum / totalProcesses : 0;
    const idlePercentage = time > 0 ? (idle / time) * 100 : 0;
    const throughput = time > 0 ? processList.length / time : 0;

    console.log(
        `Average turnaround: ${avgTurnaround.toFixed(2)}\n` +
            `Throughput: ${throughput.toFixed(2)}\n` +
            `Idle Percentage: ${idlePercentage.toFixed(2)}\n` +
            `Context Changes: ${contextChanges}`
    );

    const output = new Output(
        renderList,
        list,
        avgTurnaround,
        throughput,
        idlePercentage,
        contextChanges
    );
    return output;
}
