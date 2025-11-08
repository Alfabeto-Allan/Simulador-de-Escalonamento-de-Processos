"use client";
import styles from "./ProcessTable.module.css";

export default function ProcessTable({ processList = [] }) {
    if (!processList || processList.length === 0) {
        return <p style={{ color: "#6b7280" }}>Nenhum processo disponível.</p>;
    }

    return (
        <div className={styles.tableContainer}>
            <h3 className={styles.title}>Tabela de Processos</h3>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Chegada</th>
                        <th>Execução</th>
                        <th>Prioridade</th>
                        <th>Deadline</th>
                        <th>Início</th>
                        <th>Término</th>
                        <th>Espera</th>
                        <th>Turnaround</th>
                        <th>Deadline OK?</th>
                    </tr>
                </thead>
                <tbody>
                    {processList.map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.arrival}</td>
                            <td>{p.runtime}</td>
                            <td>{p.priority ?? "-"}</td>
                            <td>{p.deadline ?? "-"}</td>
                            <td>{Array.isArray(p.startTimes) ? p.startTimes.join(", ") : p.start ?? "-"}</td>
                            <td>{p.finish ?? "-"}</td>
                            <td>{p.wait ?? "-"}</td>
                            <td>{p.turnaround ?? "-"}</td>
                            <td>{p.deadline ? (p.finish <= p.deadline ? "✅" : "❌") : "-"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
