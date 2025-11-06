module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/simulator/Output.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Output
]);
class Output {
    constructor(renderList, processList, throughput, idlePercentage, contextChanges = 0){
        this.renderList = renderList;
        this.processList = processList;
        this.throughput = Number(throughput);
        this.idlePercentage = Number(idlePercentage);
        this.contextChanges = Number(contextChanges);
    }
}
}),
"[project]/app/simulator/Render.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Render
]);
class Render {
    constructor(id, type, time){
        this.id = id;
        this.type = type; // "exec" or "overhead" or "burst"
        this.time = time;
        console.log(`${this.type} render created at time ${this.time} on process ${this.id}.`);
    }
}
}),
"[project]/app/simulator/algorithms/fifo.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>fifo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$Output$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/simulator/Output.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$Render$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/simulator/Render.js [app-route] (ecmascript)");
;
;
function fifo(processList) {
    const list = [
        ...processList
    ].sort((a, b)=>a.arrival - b.arrival);
    let time = 0; // CPU time
    let idle = 0;
    let throughput = 0;
    const renderList = [];
    for(let i = 0; i < list.length; i++){
        const p = list[i];
        if (p.arrival > time) {
            idle += p.arrival - time;
        }
        time = Math.max(time, p.arrival);
        while(p.remaining > 0){
            const render = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$Render$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](p.id, "exec", time);
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
    const idlePercentage = idle / time * 100;
    console.log(`Throughput: ${throughput.toFixed(2)}.\nIdle Percentage: ${idlePercentage.toFixed(2)}`);
    const output = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$Output$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](renderList, list, throughput, idlePercentage);
    return output;
}
}),
"[project]/app/simulator/algorithms/sjf.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>sjf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$Output$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/simulator/Output.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$Render$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/simulator/Render.js [app-route] (ecmascript)");
;
;
function selectSjf(processList, time) {
    let p = null;
    for(let i = 0; i < processList.length; i++){
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
    for(let i = 0; i < processList.length; i++){
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
function sjf(processList) {
    if (!Array.isArray(processList)) return [];
    const list = [
        ...processList
    ];
    let time = 0; // CPU time
    let idle = 0;
    let throughput = 0;
    const renderList = [];
    let wait = checkTime(processList, time);
    idle += wait;
    time += wait;
    let p = selectSjf(list, time);
    while(p != null){
        time = Math.max(time, p.arrival);
        while(p.remaining > 0){
            const render = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$Render$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](p.id, "exec", time);
            renderList.push(render);
            p.remaining = p.remaining - 1;
            time++;
        }
        p.finish = time - 1;
        p.turnaround = p.finish - p.arrival;
        p.wait = p.turnaround - p.runtime;
        throughput += p.turnaround;
        console.log(`Process ${p.id} finished at ${p.finish} with ${p.turnaround} turnaround`);
        p = selectSjf(list, time);
    }
    throughput /= list.length;
    const idlePercentage = idle / time * 100;
    console.log(`Throughput: ${throughput.toFixed(2)}.\nIdle Percentage: ${idlePercentage.toFixed(2)}`);
    const output = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$Output$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](renderList, list, throughput, idlePercentage);
    return output;
}
}),
"[project]/app/simulator/simulationEngine.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sim",
    ()=>sim
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$algorithms$2f$fifo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/simulator/algorithms/fifo.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$algorithms$2f$sjf$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/simulator/algorithms/sjf.js [app-route] (ecmascript)");
;
;
function sim(processList, algorithm) {
    switch(algorithm){
        case 0:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$algorithms$2f$fifo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(processList);
        case 1:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$algorithms$2f$sjf$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(processList);
        default:
            throw new Error("ERROR: invalid algorithm selection.");
    }
}
}),
"[project]/app/simulator/Process.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Process
]);
class Process {
    constructor(id, arrival, runtime, priority = 0, deadline = 0){
        this.id = id;
        this.arrival = Number(arrival) || 0;
        this.runtime = Number(runtime) || 1;
        this.remaining = this.runtime;
        this.finish = -1;
        this.wait = -1;
        this.priority = priority;
        this.deadline = deadline;
        this.burst = false;
        console.log(`Process ${this.id} arrives at ${this.arrival} with t = ${this.runtime} and priority ${this.priority}.`);
    }
}
}),
"[project]/app/api/simulate/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$simulationEngine$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/simulator/simulationEngine.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$Process$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/simulator/Process.js [app-route] (ecmascript)");
;
;
;
async function POST(req) {
    try {
        const data = await req.json();
        const { processos, algoritmo } = data;
        const processList = processos.map((p)=>new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$Process$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](p.id, p.chegada, p.execucao, p.prioridade, p.deadline));
        const output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$simulationEngine$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sim"])(processList, algoritmo);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            renderList: output.renderList,
            processList: output.processList,
            throughput: output.throughput,
            idlePercentage: output.idlePercentage,
            contextChanges: output.contextChanges
        });
    } catch (err) {
        console.error("Erro na simulação:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Erro na simulação",
            details: err.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ff68320f._.js.map