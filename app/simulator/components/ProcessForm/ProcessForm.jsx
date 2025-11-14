"use client";
import { useState } from "react";
import styles from "./ProcessForm.module.css";

export default function ProcessForm({ processes, setProcesses, setResults }) {
    const [form, setForm] = useState({
        id: "",
        chegada: "",
        execucao: "",
        prioridade: "",
        deadline: "",
    });

    const [textMode, setTextMode] = useState(false);
    const [textInput, setTextInput] = useState("");

    const handleAdd = () => {
        if (form.id === "" || form.chegada === "" || form.execucao === "") return;

        const idExists = processes.some(process => process.id === form.id);
        if (idExists) {
            alert("ID já existe! Por favor, use um ID diferente.");
            return;
        }

        const newProcess = {
            id: form.id,
            chegada: Number(form.chegada),
            execucao: Number(form.execucao),
            prioridade: Number(form.prioridade || 0),
            deadline: form.deadline === "" ? null : Number(form.deadline),
        };

        setProcesses([...processes, newProcess]);

        setForm({
            id: "",
            chegada: "",
            execucao: "",
            prioridade: "",
            deadline: "",
        });
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") handleAdd();
    };

    const handleTextImport = () => {
        try {
            const parsed = JSON.parse(textInput);

            if (!Array.isArray(parsed)) {
                alert("O formato deve ser uma lista de objetos JSON.");
                return;
            }

            const converted = parsed.map((p) => ({
                id: p.id.toUpperCase(),
                chegada: Number(p.arrival),
                execucao: Number(p.runtime),
                prioridade: Number(p.priority || 0),
                deadline: p.deadline === undefined ? null : Number(p.deadline),
            }));

            setProcesses([...processes, ...converted]);
            setTextInput("");

            alert("Processos adicionados com sucesso!");
        } catch (err) {
            alert("Erro ao interpretar texto. Verifique se o JSON está válido.");
        }
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Processos</h3>

            <button
                className={styles.toggleBtn}
                onClick={() => setTextMode(!textMode)}
            >
                {textMode ? "Mudar para formulário" : "Mudar para via texto"}
            </button>

            {textMode ? (
                <div style={{ marginTop: 12 }}>
                    <textarea
                        className={styles.textArea}
                        placeholder='Cole aqui o JSON dos processos...'
                        value={textInput}
                        onChange={(e) => setTextInput(e.target.value)}
                        rows={8}
                    ></textarea>

                    <button
                        className={styles.addBtn}
                        style={{ marginTop: 8 }}
                        onClick={handleTextImport}
                    >
                        Importar processos
                    </button>

                    <button
                        className={styles.removeAllBtn}
                        onClick={() => {
                            if (confirm("Tem certeza que deseja remover todos os processos?")) {
                                setProcesses([]);
                                setResults(null);
                            }
                        }}
                    >
                        Remover todos os processos
                    </button>

                </div>
            ) : (
                <>
                    <div className={styles.grid}>
                        <input
                            className={styles.input}
                            placeholder="ID (ex: P1, A, B)"
                            value={form.id}
                            onChange={(e) =>
                                setForm({ ...form, id: e.target.value.toUpperCase() })
                            }
                            onKeyPress={handleKeyPress}
                            autoFocus
                        />
                        <input
                            className={styles.input}
                            placeholder="chegada"
                            value={form.chegada}
                            onChange={(e) => setForm({ ...form, chegada: e.target.value })}
                            onKeyPress={handleKeyPress}
                        />
                        <input
                            className={styles.input}
                            placeholder="execução"
                            value={form.execucao}
                            onChange={(e) => setForm({ ...form, execucao: e.target.value })}
                            onKeyPress={handleKeyPress}
                        />
                        <input
                            className={styles.input}
                            placeholder="prioridade"
                            value={form.prioridade}
                            onChange={(e) => setForm({ ...form, prioridade: e.target.value })}
                            onKeyPress={handleKeyPress}
                        />
                        <input
                            className={styles.input}
                            placeholder="deadline"
                            value={form.deadline}
                            onChange={(e) => setForm({ ...form, deadline: e.target.value })}
                            onKeyPress={handleKeyPress}
                        />
                    </div>

                    <div style={{ marginTop: 12 }}>
                        <button className={styles.addBtn} onClick={handleAdd}>
                            Adicionar
                        </button>

                        <button
                            className={styles.removeAllBtn}
                            onClick={() => {
                                if (confirm("Tem certeza que deseja remover todos os processos?")) {
                                    setProcesses([]);
                                    setResults(null);
                                }
                            }}
                        >
                            Remover todos os processos
                        </button>

                    </div>
                </>
            )}
        </div>
    );
}
