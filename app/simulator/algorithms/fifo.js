import Output from "../Output.js";
import Render from "../Render.js";

export default function fifo(processList) {
    const list = [...processList].sort((a, b) => a.arrival - b.arrival);
    let time = 0; // CPU time
    let idle = 0;
    let throughput = 0;

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
            time++;
        }
        p.finish = time - 1;
        p.turnaround = p.finish - p.arrival;
        p.wait = p.turnaround - p.runtime;
        throughput += p.turnaround;
        console.log(`Process ${p.id} finished at ${p.finish} with ${p.turnaround} turnaround`);
    }

    throughput /= list.length;
    const idlePercentage = (idle / time) * 100;
    console.log(`Throughput: ${throughput.toFixed(2)}.\nIdle Percentage: ${idlePercentage.toFixed(2)}`)
    const output = new Output(renderList, list, throughput, idlePercentage);
    
    return output;
}
