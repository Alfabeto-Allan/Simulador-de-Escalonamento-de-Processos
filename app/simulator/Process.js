export default class Process {
    constructor(id, arrival, runtime, priority = 0, deadline = 0) {
        this.id = id;
        this.arrival = Number(arrival) || 0;
        this.runtime = Number(runtime) || 1;
        this.remaining = this.runtime;
        this.finish = -1;
        this.wait = -1;
        this.priority = priority;
        this.deadline = deadline;
        this.burst = false;
        this.vruntime = 0;

        console.log(
            `Process ${this.id} arrives at ${this.arrival} with t = ${this.runtime} and priority ${this.priority}.`
        );
    }
}
