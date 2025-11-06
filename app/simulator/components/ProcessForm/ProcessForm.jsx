"use client";
import { useState } from "react";
import styles from "./ProcessForm.module.css";

export default function ProcessForm({ processes, setProcesses }) {
    const [form, setForm] = useState({
        chegada: "",
        execucao: "",
        prioridade: "",
        deadline: "",
    });

    const generateId = (index) => {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return alphabet[index] || `P${index + 1}`;
    };

    const handleAdd = () => {
        if (form.chegada === "" || form.execucao === "") return;

        const newId = generateId(processes.length); 

        const newProcess = {
            id: newId,
            chegada: Number(form.chegada),
            execucao: Number(form.execucao),
            prioridade: Number(form.prioridade || 0),
            deadline: form.deadline === "" ? null : Number(form.deadline),
        };

        setProcesses([...processes, newProcess]);

        setForm({
            chegada: "",
            execucao: "",
            prioridade: "",
            deadline: "",
        });
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Processos</h3>

            <div className={styles.grid}>
                <input
                    className={styles.input}
                    placeholder="chegada"
                    value={form.chegada}
                    onChange={(e) => setForm({ ...form, chegada: e.target.value })}
                />
                <input
                    className={styles.input}
                    placeholder="execução"
                    value={form.execucao}
                    onChange={(e) => setForm({ ...form, execucao: e.target.value })}
                />
                <input
                    className={styles.input}
                    placeholder="prioridade"
                    value={form.prioridade}
                    onChange={(e) => setForm({ ...form, prioridade: e.target.value })}
                />
                <input
                    className={styles.input}
                    placeholder="deadline"
                    value={form.deadline}
                    onChange={(e) => setForm({ ...form, deadline: e.target.value })}
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
