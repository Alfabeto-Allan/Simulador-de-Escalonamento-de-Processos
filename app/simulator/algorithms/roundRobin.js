import Render from "../Render.js";
import Output from "../Output.js";


export default function roundRobin(processList, quantum = 2, overhead = 0) {
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

    while (completed < totalProcesses) {
        while (nextIdx < list.length && list[nextIdx].arrival <= time) {
            queue.push(list[nextIdx]);
            console.log(`Process ${list[nextIdx].id} added to the ready queue.`);
            nextIdx++;
        }

        if (queue.length === 0) {
            if (nextIdx < list.length) {
                idle += list[nextIdx].arrival - time;
                time = list[nextIdx].arrival;
                continue;
            } else {
                break;
            }
        }

        queue.sort((a, b) => b.priority - a.priority);

        const p = queue.shift();

        for (let q = 0; q < quantum && p.remaining > 0; q++) {
            renderList.push(new Render(p.id, "exec", time));
            p.remaining -= 1;
            time += 1;
        }

        if (p.remaining <= 0) {
            p.finish = time - 1;
            p.turnaround = p.finish - p.arrival;
            p.wait = p.turnaround - p.runtime;
            throughputSum += p.turnaround;
            completed += 1;
            console.log(`Process ${p.id} finished at ${p.finish} with ${p.turnaround} turnaround`);
        } else {
            for (let h = 0; h < overhead; h++) {
                renderList.push(new Render(p.id, "overhead", time));
                time += 1;
            }
            contextChanges += 1;
            queue.push(p);
        }
    }

    const avgTurnaround = totalProcesses > 0 ? throughputSum / totalProcesses : 0;
    const idlePercentage = time > 0 ? (idle / time) * 100 : 0;
    console.log(`Average turnaround: ${avgTurnaround.toFixed(2)}.\nIdle Percentage: ${idlePercentage.toFixed(2)}\nContext Changes: ${contextChanges}`);

    const output = new Output(renderList, list, avgTurnaround, idlePercentage, contextChanges);
    return output;
}
