(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/simulator/components/ProcessForm/ProcessForm.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "addBtn": "ProcessForm-module__0NP0Iq__addBtn",
  "container": "ProcessForm-module__0NP0Iq__container",
  "grid": "ProcessForm-module__0NP0Iq__grid",
  "input": "ProcessForm-module__0NP0Iq__input",
  "list": "ProcessForm-module__0NP0Iq__list",
  "title": "ProcessForm-module__0NP0Iq__title",
});
}),
"[project]/app/simulator/components/ProcessForm/ProcessForm.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProcessForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ProcessForm$2f$ProcessForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/simulator/components/ProcessForm/ProcessForm.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ProcessForm({ processes, setProcesses }) {
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        chegada: "",
        execucao: "",
        prioridade: "",
        deadline: ""
    });
    // Função para gerar a letra com base no número de processos
    const generateId = (index)=>{
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return alphabet[index] || `P${index + 1}`; // caso passe de Z, usa P1, P2, etc.
    };
    const handleAdd = ()=>{
        if (form.chegada === "" || form.execucao === "") return;
        const newId = generateId(processes.length); // gera letra automática
        const newProcess = {
            id: newId,
            chegada: Number(form.chegada),
            execucao: Number(form.execucao),
            prioridade: Number(form.prioridade || 0),
            deadline: form.deadline === "" ? null : Number(form.deadline)
        };
        setProcesses([
            ...processes,
            newProcess
        ]);
        // limpa o formulário, mas sem o campo id
        setForm({
            chegada: "",
            execucao: "",
            prioridade: "",
            deadline: ""
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ProcessForm$2f$ProcessForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ProcessForm$2f$ProcessForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                children: "Processos"
            }, void 0, false, {
                fileName: "[project]/app/simulator/components/ProcessForm/ProcessForm.jsx",
                lineNumber: 45,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ProcessForm$2f$ProcessForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ProcessForm$2f$ProcessForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                        placeholder: "chegada",
                        value: form.chegada,
                        onChange: (e)=>setForm({
                                ...form,
                                chegada: e.target.value
                            })
                    }, void 0, false, {
                        fileName: "[project]/app/simulator/components/ProcessForm/ProcessForm.jsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ProcessForm$2f$ProcessForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                        placeholder: "execução",
                        value: form.execucao,
                        onChange: (e)=>setForm({
                                ...form,
                                execucao: e.target.value
                            })
                    }, void 0, false, {
                        fileName: "[project]/app/simulator/components/ProcessForm/ProcessForm.jsx",
                        lineNumber: 54,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ProcessForm$2f$ProcessForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                        placeholder: "prioridade",
                        value: form.prioridade,
                        onChange: (e)=>setForm({
                                ...form,
                                prioridade: e.target.value
                            })
                    }, void 0, false, {
                        fileName: "[project]/app/simulator/components/ProcessForm/ProcessForm.jsx",
                        lineNumber: 60,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ProcessForm$2f$ProcessForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                        placeholder: "deadline",
                        value: form.deadline,
                        onChange: (e)=>setForm({
                                ...form,
                                deadline: e.target.value
                            })
                    }, void 0, false, {
                        fileName: "[project]/app/simulator/components/ProcessForm/ProcessForm.jsx",
                        lineNumber: 66,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/simulator/components/ProcessForm/ProcessForm.jsx",
                lineNumber: 47,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 12
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ProcessForm$2f$ProcessForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addBtn,
                    onClick: handleAdd,
                    children: "Adicionar"
                }, void 0, false, {
                    fileName: "[project]/app/simulator/components/ProcessForm/ProcessForm.jsx",
                    lineNumber: 75,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/simulator/components/ProcessForm/ProcessForm.jsx",
                lineNumber: 74,
                columnNumber: 13
            }, this),
            processes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ProcessForm$2f$ProcessForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
                children: processes.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            "Processo ",
                            p.id,
                            ": chegada ",
                            p.chegada,
                            ", execução ",
                            p.execucao
                        ]
                    }, p.id, true, {
                        fileName: "[project]/app/simulator/components/ProcessForm/ProcessForm.jsx",
                        lineNumber: 83,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/simulator/components/ProcessForm/ProcessForm.jsx",
                lineNumber: 81,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/simulator/components/ProcessForm/ProcessForm.jsx",
        lineNumber: 44,
        columnNumber: 9
    }, this);
}
_s(ProcessForm, "x7vm8Z4sGxQK0sl4jOEvRkdpeic=");
_c = ProcessForm;
var _c;
__turbopack_context__.k.register(_c, "ProcessForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/simulator/components/ConfigForm/ConfigForm.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "field": "ConfigForm-module__r-qDZq__field",
  "input": "ConfigForm-module__r-qDZq__input",
  "label": "ConfigForm-module__r-qDZq__label",
  "row": "ConfigForm-module__r-qDZq__row",
});
}),
"[project]/app/simulator/components/ConfigForm/ConfigForm.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConfigForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ConfigForm$2f$ConfigForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/simulator/components/ConfigForm/ConfigForm.module.css [app-client] (css module)");
"use client";
;
;
function ConfigForm({ config, setConfig }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ConfigForm$2f$ConfigForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ConfigForm$2f$ConfigForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ConfigForm$2f$ConfigForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                        children: "Quantum"
                    }, void 0, false, {
                        fileName: "[project]/app/simulator/components/ConfigForm/ConfigForm.jsx",
                        lineNumber: 8,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ConfigForm$2f$ConfigForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                        type: "number",
                        value: config.quantum,
                        onChange: (e)=>setConfig({
                                ...config,
                                quantum: Number(e.target.value)
                            })
                    }, void 0, false, {
                        fileName: "[project]/app/simulator/components/ConfigForm/ConfigForm.jsx",
                        lineNumber: 9,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/simulator/components/ConfigForm/ConfigForm.jsx",
                lineNumber: 7,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ConfigForm$2f$ConfigForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ConfigForm$2f$ConfigForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                        children: "Sobrecarga"
                    }, void 0, false, {
                        fileName: "[project]/app/simulator/components/ConfigForm/ConfigForm.jsx",
                        lineNumber: 13,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ConfigForm$2f$ConfigForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                        type: "number",
                        value: config.sobrecarga_contexto,
                        onChange: (e)=>setConfig({
                                ...config,
                                sobrecarga_contexto: Number(e.target.value)
                            })
                    }, void 0, false, {
                        fileName: "[project]/app/simulator/components/ConfigForm/ConfigForm.jsx",
                        lineNumber: 14,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/simulator/components/ConfigForm/ConfigForm.jsx",
                lineNumber: 12,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/simulator/components/ConfigForm/ConfigForm.jsx",
        lineNumber: 6,
        columnNumber: 9
    }, this);
}
_c = ConfigForm;
var _c;
__turbopack_context__.k.register(_c, "ConfigForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/simulator/components/AlgorithmSelect/AlgorithmSelect.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "label": "AlgorithmSelect-module__jzvV7q__label",
  "select": "AlgorithmSelect-module__jzvV7q__select",
  "wrap": "AlgorithmSelect-module__jzvV7q__wrap",
});
}),
"[project]/app/simulator/components/AlgorithmSelect/AlgorithmSelect.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AlgorithmSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$AlgorithmSelect$2f$AlgorithmSelect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/simulator/components/AlgorithmSelect/AlgorithmSelect.module.css [app-client] (css module)");
"use client";
;
;
function AlgorithmSelect({ config, setConfig }) {
    const algorithms = [
        "FIFO",
        "SJF",
        "RR",
        "EDF",
        "CFS"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$AlgorithmSelect$2f$AlgorithmSelect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrap,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$AlgorithmSelect$2f$AlgorithmSelect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                children: "Algoritmo"
            }, void 0, false, {
                fileName: "[project]/app/simulator/components/AlgorithmSelect/AlgorithmSelect.jsx",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: config.algoritmo,
                onChange: (e)=>setConfig({
                        ...config,
                        algoritmo: e.target.value
                    }),
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$AlgorithmSelect$2f$AlgorithmSelect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
                children: algorithms.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: a,
                        children: a
                    }, a, false, {
                        fileName: "[project]/app/simulator/components/AlgorithmSelect/AlgorithmSelect.jsx",
                        lineNumber: 10,
                        columnNumber: 40
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/simulator/components/AlgorithmSelect/AlgorithmSelect.jsx",
                lineNumber: 9,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/simulator/components/AlgorithmSelect/AlgorithmSelect.jsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
_c = AlgorithmSelect;
var _c;
__turbopack_context__.k.register(_c, "AlgorithmSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/simulator/components/GanttChart/GanttChart.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "colorBox": "GanttChart-module__TCLGGG__colorBox",
  "container": "GanttChart-module__TCLGGG__container",
  "ganttContainer": "GanttChart-module__TCLGGG__ganttContainer",
  "ganttWrapper": "GanttChart-module__TCLGGG__ganttWrapper",
  "legend": "GanttChart-module__TCLGGG__legend",
  "legendItem": "GanttChart-module__TCLGGG__legendItem",
  "processGantt": "GanttChart-module__TCLGGG__processGantt",
  "processLabel": "GanttChart-module__TCLGGG__processLabel",
  "processRow": "GanttChart-module__TCLGGG__processRow",
  "processRows": "GanttChart-module__TCLGGG__processRows",
  "quadradinho": "GanttChart-module__TCLGGG__quadradinho",
  "ruler": "GanttChart-module__TCLGGG__ruler",
  "rulerNumber": "GanttChart-module__TCLGGG__rulerNumber",
  "rulerTick": "GanttChart-module__TCLGGG__rulerTick",
  "rulerUnit": "GanttChart-module__TCLGGG__rulerUnit",
  "timeSlot": "GanttChart-module__TCLGGG__timeSlot",
  "timelineLabel": "GanttChart-module__TCLGGG__timelineLabel",
  "timelineWrapper": "GanttChart-module__TCLGGG__timelineWrapper",
});
}),
"[project]/app/simulator/components/GanttChart/GanttChart.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GanttChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/simulator/components/GanttChart/GanttChart.module.css [app-client] (css module)");
"use client";
;
;
function GanttChart({ renders }) {
    if (!renders || renders.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        style: {
            color: "#6b7280"
        },
        children: "Nenhum dado para exibir."
    }, void 0, false, {
        fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
        lineNumber: 6,
        columnNumber: 16
    }, this);
    const maxTime = Math.max(...renders.map((r)=>r.time));
    const minTime = Math.min(...renders.map((r)=>r.time));
    const totalTimeSlots = maxTime - minTime + 1;
    const uniqueProcesses = [
        ...new Set(renders.map((r)=>r.id))
    ].sort();
    const getColor = (type)=>{
        switch(type){
            case "exec":
                return "#4ade80";
            case "contexto":
                return "#f87171";
            case "deadline":
                return "#dc2626";
            default:
                return "#93c5fd";
        }
    };
    const timeSlots = Array.from({
        length: totalTimeSlots
    }, (_, i)=>minTime + i);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].legend,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].legendItem,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorBox,
                                style: {
                                    backgroundColor: "#4ade80"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                                lineNumber: 33,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Executado"
                            }, void 0, false, {
                                fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                                lineNumber: 34,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                        lineNumber: 32,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].legendItem,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorBox,
                                style: {
                                    backgroundColor: "#f87171"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                                lineNumber: 37,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Sobrecarga"
                            }, void 0, false, {
                                fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                                lineNumber: 38,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                        lineNumber: 36,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].legendItem,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorBox,
                                style: {
                                    backgroundColor: "#dc2626"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                                lineNumber: 41,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Estouro da deadline"
                            }, void 0, false, {
                                fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                                lineNumber: 42,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ganttWrapper,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ganttContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processRows,
                            children: uniqueProcesses.map((processId)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processLabel,
                                            children: processId
                                        }, void 0, false, {
                                            fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                                            lineNumber: 51,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processGantt,
                                            children: timeSlots.map((time)=>{
                                                const renderAtTime = renders.find((r)=>r.time === time && r.id === processId);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timeSlot,
                                                    children: renderAtTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quadradinho,
                                                        style: {
                                                            backgroundColor: getColor(renderAtTime.type)
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                                                        lineNumber: 60,
                                                        columnNumber: 53
                                                    }, this)
                                                }, time, false, {
                                                    fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                                                    lineNumber: 58,
                                                    columnNumber: 45
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                                            lineNumber: 52,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, processId, true, {
                                    fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                                    lineNumber: 50,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                            lineNumber: 48,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timelineWrapper,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timelineLabel
                                }, void 0, false, {
                                    fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                                    lineNumber: 77,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ruler,
                                    children: timeSlots.map((time)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rulerUnit,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rulerTick
                                                }, void 0, false, {
                                                    fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                                                    lineNumber: 81,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rulerNumber,
                                                    children: time + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                                                    lineNumber: 82,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, time, true, {
                                            fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                                            lineNumber: 80,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                                    lineNumber: 78,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                            lineNumber: 76,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                    lineNumber: 47,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                lineNumber: 46,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
_c = GanttChart;
var _c;
__turbopack_context__.k.register(_c, "GanttChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SimulatorPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ProcessForm$2f$ProcessForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/simulator/components/ProcessForm/ProcessForm.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ConfigForm$2f$ConfigForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/simulator/components/ConfigForm/ConfigForm.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$AlgorithmSelect$2f$AlgorithmSelect$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/simulator/components/AlgorithmSelect/AlgorithmSelect.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/simulator/components/GanttChart/GanttChart.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function SimulatorPage() {
    _s();
    const [processes, setProcesses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [config, setConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        quantum: 2,
        sobrecarga_contexto: 1,
        algoritmo: "FCFS"
    });
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSimulate = async ()=>{
        try {
            const response = await fetch("/api/simulate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    algoritmo: config.algoritmo === "FIFO" ? 0 : config.algoritmo === "SJF" ? 1 : config.algoritmo === "RR" ? 2 : config.algoritmo === "EDF" ? 3 : config.algoritmo === "CFS" ? 4 : 0,
                    processos: processes
                })
            });
            if (!response.ok) {
                console.error("Resposta não OK:", response.status);
                return;
            }
            const data = await response.json();
            console.log("Resultado da simulação:", data);
            setResults({
                renders: data.renderList
            });
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "h1",
                        children: "Simulador de Escalonamento"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ConfigForm$2f$ConfigForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        config: config,
                        setConfig: setConfig
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$AlgorithmSelect$2f$AlgorithmSelect$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        config: config,
                        setConfig: setConfig
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ProcessForm$2f$ProcessForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        processes: processes,
                        setProcesses: setProcesses
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "flex-end",
                            marginTop: 16
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSimulate,
                            disabled: loading,
                            style: {
                                padding: "8px 16px",
                                borderRadius: 10,
                                background: loading ? "#93c5fd" : "var(--accent)",
                                color: "white",
                                border: "none",
                                cursor: loading ? "default" : "pointer"
                            },
                            children: loading ? "Simulando..." : "Iniciar Simulação"
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            results && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card",
                    style: {
                        marginTop: 20
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                margin: 0,
                                fontSize: "1.125rem",
                                fontWeight: 600
                            },
                            children: "Gráfico de Gantt"
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 89,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: 12
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                renders: results.renders
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 91,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 88,
                    columnNumber: 11
                }, this)
            }, void 0, false)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(SimulatorPage, "+itE26AnLSJU2MJX47OlWGJenRM=");
_c = SimulatorPage;
var _c;
__turbopack_context__.k.register(_c, "SimulatorPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_bfcf96ac._.js.map