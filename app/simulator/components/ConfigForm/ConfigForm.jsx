"use client";
import styles from "./ConfigForm.module.css";

export default function ConfigForm({ config, setConfig, setResults }) {
    return (
        <div className={styles.row}>
            <div className={styles.field}>
                <label className={styles.label}>Quantum</label>

                <input
                    className={styles.input}
                    type="number"
                    value={config.quantum}
                    onChange={(e) => {
                        setConfig({ ...config, quantum: Number(e.target.value) });
                        setResults(null); 
                    }}
                />
            </div>

            <div className={styles.field}>
                <label className={styles.label}>Sobrecarga</label>

                <input
                    className={styles.input}
                    type="number"
                    value={config.sobrecarga_contexto}
                    onChange={(e) => {
                        setConfig({
                            ...config,
                            sobrecarga_contexto: Number(e.target.value),
                        });
                        setResults(null);
                    }}
                />
            </div>
        </div>
    );
}
