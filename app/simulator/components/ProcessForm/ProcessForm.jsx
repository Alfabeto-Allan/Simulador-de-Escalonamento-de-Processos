"use client";
import { useState } from "react";
import styles from "./ProcessForm.module.css";

export default function ProcessForm({ processes, setProcesses }) {
    const [form, setForm] = useState({
        id: "",
        chegada: "",
        execucao: "",
        prioridade: "",
        deadline: "",
    });

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
        if (e.key === 'Enter') {
            handleAdd();
        }
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Processos</h3>

            <div className={styles.grid}>
                <input
                    className={styles.input}
                    placeholder="ID (ex: P1, A, B)"
                    value={form.id}
                    onChange={(e) => setForm({ ...form, id: e.target.value.toUpperCase() })}
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
            </div>
        </div>
    );
}