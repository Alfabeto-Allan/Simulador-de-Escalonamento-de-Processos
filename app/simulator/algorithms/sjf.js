import Output from "../Output.js";
import Render from "../Render.js";

function selectSjf(processList, time) {
    let p = null;
    for (let i = 0; i < processList.length; i++) {
        const proc = processList[i];
        if (proc.finish !== -1) continue;
        if (proc.arrival > time) continue;

        if (p == null) {
            p = proc;
            continue;
        }

        if (proc.runtime < p.runtime) {
            p = proc;
        }
    }
    return p;
}

function checkTime(processList, time) {
    let wait = null;
    for (let i = 0; i < processList.length; i++) {
        const proc = processList[i];
        if (proc.finish !== -1) continue;

        const diff = proc.arrival - time;
        if (wait === null || diff < wait) {
            wait = diff;
            if (wait <= 0) return 0;
        }
    }
    return wait === null ? 0 : Math.max(0, wait);
}

export default function sjf(processList) {
    if (!Array.isArray(processList)) return [];

    const list = [...processList];
    let time = 0; // CPU time
    let idle = 0;
    let turnaround = 0;

    const renderList = [];
    let wait = checkTime(processList, time);
    idle += wait;
    time += wait;

    let p = selectSjf(list, time);
    while (p != null) {
        time = Math.max(time, p.arrival);

        while (p.remaining > 0) {
            const render = new Render(p.id, "exec", time);
            renderList.push(render);

            p.remaining = p.remaining - 1;
            if (p.start === -1) {
                p.start = time;
            }
            time++;
        }

        p.finish = time - 1;
        p.turnaround = p.finish - p.arrival + 1;
        p.wait = p.turnaround - p.runtime;
        turnaround += p.turnaround;

        console.log(
            `Process ${p.id} finished at ${p.finish} with ${p.turnaround} turnaround`
        );
        p = selectSjf(list, time);
    }

    turnaround /= list.length;
    const throughput = processList.length / time;
    const idlePercentage = (idle / time) * 100;
    console.log(`Turnaround: ${turnaround.toFixed(2)}\n
    Throughput: ${throughput.toFixed(2)}\n
    Idle Percentage: ${idlePercentage.toFixed(2)}`);
    const output = new Output(renderList, list, turnaround, throughput, idlePercentage);

    return output;
}
