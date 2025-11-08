export default class Output {
    constructor(renderList, processList, throughput, idlePercentage, contextChanges = 0) {
        this.renderList = renderList;
        this.processList = processList;
        this.turnaround = Number(throughput);
        this.idlePercentage = Number(idlePercentage);
        this.contextChanges = Number(contextChanges);
    }

}