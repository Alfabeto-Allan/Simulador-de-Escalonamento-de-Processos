module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/simulator/components/ProcessForm/ProcessForm.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "addBtn": "ProcessForm-module__0NP0Iq__addBtn",
  "container": "ProcessForm-module__0NP0Iq__container",
  "grid": "ProcessForm-module__0NP0Iq__grid",
  "input": "ProcessForm-module__0NP0Iq__input",
  "list": "ProcessForm-module__0NP0Iq__list",
  "title": "ProcessForm-module__0NP0Iq__title",
});
}),
"[project]/app/simulator/components/ProcessForm/ProcessForm.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProcessForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ProcessForm$2f$ProcessForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/simulator/components/ProcessForm/ProcessForm.module.css [app-ssr] (css module)");
"use client";
;
;
;
function ProcessForm({ processes, setProcesses }) {
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ProcessForm$2f$ProcessForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ProcessForm$2f$ProcessForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                children: "Processos"
            }, void 0, false, {
                fileName: "[project]/app/simulator/components/ProcessForm/ProcessForm.jsx",
                lineNumber: 45,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ProcessForm$2f$ProcessForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grid,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ProcessForm$2f$ProcessForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ProcessForm$2f$ProcessForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ProcessForm$2f$ProcessForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ProcessForm$2f$ProcessForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 12
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ProcessForm$2f$ProcessForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].addBtn,
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
            processes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ProcessForm$2f$ProcessForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].list,
                children: processes.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
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
}),
"[project]/app/simulator/components/ConfigForm/ConfigForm.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "field": "ConfigForm-module__r-qDZq__field",
  "input": "ConfigForm-module__r-qDZq__input",
  "label": "ConfigForm-module__r-qDZq__label",
  "row": "ConfigForm-module__r-qDZq__row",
});
}),
"[project]/app/simulator/components/ConfigForm/ConfigForm.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConfigForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ConfigForm$2f$ConfigForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/simulator/components/ConfigForm/ConfigForm.module.css [app-ssr] (css module)");
"use client";
;
;
function ConfigForm({ config, setConfig }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ConfigForm$2f$ConfigForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].row,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ConfigForm$2f$ConfigForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ConfigForm$2f$ConfigForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                        children: "Quantum"
                    }, void 0, false, {
                        fileName: "[project]/app/simulator/components/ConfigForm/ConfigForm.jsx",
                        lineNumber: 8,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ConfigForm$2f$ConfigForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ConfigForm$2f$ConfigForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ConfigForm$2f$ConfigForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                        children: "Sobrecarga"
                    }, void 0, false, {
                        fileName: "[project]/app/simulator/components/ConfigForm/ConfigForm.jsx",
                        lineNumber: 13,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ConfigForm$2f$ConfigForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
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
}),
"[project]/app/simulator/components/AlgorithmSelect/AlgorithmSelect.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "label": "AlgorithmSelect-module__jzvV7q__label",
  "select": "AlgorithmSelect-module__jzvV7q__select",
  "wrap": "AlgorithmSelect-module__jzvV7q__wrap",
});
}),
"[project]/app/simulator/components/AlgorithmSelect/AlgorithmSelect.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AlgorithmSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$AlgorithmSelect$2f$AlgorithmSelect$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/simulator/components/AlgorithmSelect/AlgorithmSelect.module.css [app-ssr] (css module)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$AlgorithmSelect$2f$AlgorithmSelect$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wrap,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$AlgorithmSelect$2f$AlgorithmSelect$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                children: "Algoritmo"
            }, void 0, false, {
                fileName: "[project]/app/simulator/components/AlgorithmSelect/AlgorithmSelect.jsx",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: config.algoritmo,
                onChange: (e)=>setConfig({
                        ...config,
                        algoritmo: e.target.value
                    }),
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$AlgorithmSelect$2f$AlgorithmSelect$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].select,
                children: algorithms.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
}),
"[project]/app/simulator/components/GanttChart/GanttChart.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/app/simulator/components/GanttChart/GanttChart.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GanttChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/simulator/components/GanttChart/GanttChart.module.css [app-ssr] (css module)");
"use client";
;
;
function GanttChart({ renders }) {
    if (!renders || renders.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].legend,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].legendItem,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorBox,
                                style: {
                                    backgroundColor: "#4ade80"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                                lineNumber: 33,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].legendItem,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorBox,
                                style: {
                                    backgroundColor: "#f87171"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                                lineNumber: 37,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].legendItem,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorBox,
                                style: {
                                    backgroundColor: "#dc2626"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                                lineNumber: 41,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ganttWrapper,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ganttContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].processRows,
                            children: uniqueProcesses.map((processId)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].processRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].processLabel,
                                            children: processId
                                        }, void 0, false, {
                                            fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                                            lineNumber: 51,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].processGantt,
                                            children: timeSlots.map((time)=>{
                                                const renderAtTime = renders.find((r)=>r.time === time && r.id === processId);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timeSlot,
                                                    children: renderAtTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quadradinho,
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timelineWrapper,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timelineLabel
                                }, void 0, false, {
                                    fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                                    lineNumber: 77,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ruler,
                                    children: timeSlots.map((time)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rulerUnit,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rulerTick
                                                }, void 0, false, {
                                                    fileName: "[project]/app/simulator/components/GanttChart/GanttChart.jsx",
                                                    lineNumber: 81,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rulerNumber,
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
}),
"[project]/app/simulator/components/MetricsTable/MetricsTable.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "summary": "MetricsTable-module__FIE_-a__summary",
  "table": "MetricsTable-module__FIE_-a__table",
});
}),
"[project]/app/simulator/components/MetricsTable/MetricsTable.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MetricsTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$MetricsTable$2f$MetricsTable$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/simulator/components/MetricsTable/MetricsTable.module.css [app-ssr] (css module)");
"use client";
;
;
function MetricsTable({ metrics }) {
    if (!metrics || metrics.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        style: {
            color: "#6b7280"
        },
        children: "Nenhuma métrica disponível."
    }, void 0, false, {
        fileName: "[project]/app/simulator/components/MetricsTable/MetricsTable.jsx",
        lineNumber: 6,
        columnNumber: 16
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$MetricsTable$2f$MetricsTable$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].table,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                children: "Processo"
                            }, void 0, false, {
                                fileName: "[project]/app/simulator/components/MetricsTable/MetricsTable.jsx",
                                lineNumber: 13,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                children: "Turnaround"
                            }, void 0, false, {
                                fileName: "[project]/app/simulator/components/MetricsTable/MetricsTable.jsx",
                                lineNumber: 14,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/simulator/components/MetricsTable/MetricsTable.jsx",
                        lineNumber: 12,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/simulator/components/MetricsTable/MetricsTable.jsx",
                    lineNumber: 11,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: metrics.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    children: m.id
                                }, void 0, false, {
                                    fileName: "[project]/app/simulator/components/MetricsTable/MetricsTable.jsx",
                                    lineNumber: 20,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    children: m.turnaround
                                }, void 0, false, {
                                    fileName: "[project]/app/simulator/components/MetricsTable/MetricsTable.jsx",
                                    lineNumber: 21,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/app/simulator/components/MetricsTable/MetricsTable.jsx",
                            lineNumber: 19,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/simulator/components/MetricsTable/MetricsTable.jsx",
                    lineNumber: 17,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/simulator/components/MetricsTable/MetricsTable.jsx",
            lineNumber: 10,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/simulator/components/MetricsTable/MetricsTable.jsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
}),
"[project]/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SimulatorPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ProcessForm$2f$ProcessForm$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/simulator/components/ProcessForm/ProcessForm.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ConfigForm$2f$ConfigForm$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/simulator/components/ConfigForm/ConfigForm.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$AlgorithmSelect$2f$AlgorithmSelect$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/simulator/components/AlgorithmSelect/AlgorithmSelect.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/simulator/components/GanttChart/GanttChart.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$MetricsTable$2f$MetricsTable$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/simulator/components/MetricsTable/MetricsTable.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function SimulatorPage() {
    const [processes, setProcesses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedAlgorithm, setSelectedAlgorithm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [config, setConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        quantum: 2,
        sobrecarga_contexto: 1,
        algoritmo: "FCFS"
    });
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "h1",
                        children: "Simulador de Escalonamento"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ConfigForm$2f$ConfigForm$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        config: config,
                        setConfig: setConfig
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$AlgorithmSelect$2f$AlgorithmSelect$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        config: config,
                        setConfig: setConfig
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$ProcessForm$2f$ProcessForm$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        processes: processes,
                        setProcesses: setProcesses
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "flex-end",
                            marginTop: 16
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            results && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card",
                    style: {
                        marginTop: 20
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                margin: 0,
                                fontSize: "1.125rem",
                                fontWeight: 600
                            },
                            children: "Gráfico de Gantt"
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 91,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: 12
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$simulator$2f$components$2f$GanttChart$2f$GanttChart$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                renders: results.renders
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 90,
                    columnNumber: 11
                }, this)
            }, void 0, false)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c289fd1c._.js.map