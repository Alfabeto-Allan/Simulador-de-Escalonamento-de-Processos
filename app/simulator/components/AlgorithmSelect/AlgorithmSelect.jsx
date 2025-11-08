"use client";
import styles from "./AlgorithmSelect.module.css";

export default function AlgorithmSelect({ config, setConfig }) {
    const algorithms = ["FIFO", "SJF", "RR", "EDF", "CFS"];
    return (
        <div className={styles.wrap}>
            <label className={styles.label}>Algoritmo</label>
            <select value={config.algoritmo} onChange={(e) => setConfig({ ...config, algoritmo: e.target.value })} className={styles.select}>
                {algorithms.map((a) => <option key={a} value={a}>{a}</option>)}
            </select>
        </div>
    );
}
