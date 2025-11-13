import Output from "../Output.js";
import Render from "../Render.js";

export default function fifo(processList) {
    const list = [...processList].sort((a, b) => a.arrival - b.arrival);
    let time = 0; // CPU time
    let idle = 0;
    let turnaround = 0;

    const renderList = [];
    for (let i = 0; i < list.length; i++) {
        const p = list[i];
        if (p.arrival > time) {
            idle += p.arrival - time;
        }
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
    }

    turnaround /= list.length;
    const throughput = processList.length / time;
    const idlePercentage = (idle / time) * 100;
    console.log(`Turnaround: ${turnaround.toFixed(2)}\n
    Throughput: ${throughput.toFixed(2)}\n
    Idle Percentage: ${idlePercentage.toFixed(2)}`);
    const output = new Output(
        renderList,
        list,
        turnaround,
        throughput,
        idlePercentage
    );

    return output;
}
