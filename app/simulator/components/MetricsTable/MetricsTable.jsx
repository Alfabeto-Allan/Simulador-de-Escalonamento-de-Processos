"use client";
import styles from "./MetricsTable.module.css";

export default function MetricsTable({ metrics }) {
    if (!metrics || metrics.length === 0)
        return <p style={{ color: "#6b7280" }}>Nenhuma métrica disponível.</p>;

    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Processo</th>
                        <th>Turnaround</th>
                    </tr>
                </thead>
                <tbody>
                    {metrics.map((m, i) => (
                        <tr key={i}>
                            <td>{m.id}</td>
                            <td>{m.turnaround}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
