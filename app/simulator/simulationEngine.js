import fifo from "./algorithms/fifo.js";
import sjf from "./algorithms/sjf.js";
import roundRobin from "./algorithms/roundRobin.js";

export function sim(processList, algorithm, quantum = 2, overhead = 1) {
    switch (algorithm) {
        case 0:
            return fifo(processList);
        case 1:
            return sjf(processList);
        case 2:
            return roundRobin(processList, quantum, overhead);
        case 3:
            return edf(processList, overhead);
        default:
            throw new Error("ERROR: invalid algorithm selection.");
    }
}
