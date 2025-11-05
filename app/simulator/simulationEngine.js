import fifo from "./algorithms/fifo.js";
import sjf from "./algorithms/sjf.js";

export function sim(processList, algorithm) {
    switch (algorithm) {
        case 0:
            return fifo(processList);
        case 1:
            return sjf(processList);
        default:
            throw new Error("ERROR: invalid algorithm selection.");
    }
}
