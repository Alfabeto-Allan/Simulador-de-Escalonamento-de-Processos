"use client";
import styles from "./MetricsPanel.module.css";

export default function MetricsPanel({ turnaround, throughput, idlePercentage, contextChanges }) {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>Métricas da Simulação</h2>
            <div className={styles.metricsGrid}>
                <div className={styles.metricBox}>
                    <span className={styles.metricLabel}>Turnaround</span>
                    <span className={styles.metricValue}>{turnaround?.toFixed(2) ?? "-"}</span>
                </div>

                <div className={styles.metricBox}>
                    <span className={styles.metricLabel}>Throughput</span>
                    <span className={styles.metricValue}>{throughput?.toFixed(2) ?? "-"}</span>
                </div>

                <div className={styles.metricBox}>
                    <span className={styles.metricLabel}>% ociosidade</span>
                    <span className={styles.metricValue}>{idlePercentage?.toFixed(2) ?? "-"}%</span>
                </div>

                <div className={styles.metricBox}>
                    <span className={styles.metricLabel}>Trocas de contexto</span>
                    <span className={styles.metricValue}>{contextChanges ?? "-"}</span>
                </div>
            </div>
        </div>
    );
}
