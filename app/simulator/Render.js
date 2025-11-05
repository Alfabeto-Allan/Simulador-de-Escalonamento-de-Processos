export default class Render {
    constructor(id, type, time) {
        this.id = id;
        this.type = type; // "exec" or "overhead" or "burst"
        this.time = time;

        console.log(
            `${this.type} render created at time ${this.time} on process ${this.id}.`
        );
    }
}
