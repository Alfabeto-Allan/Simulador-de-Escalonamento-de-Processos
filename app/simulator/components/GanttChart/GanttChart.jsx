"use client";
import { useState, useEffect } from "react";
import styles from "./GanttChart.module.css";

export default function GanttChart({ renders = [], processes = [] }) {
    const [visibleRenders, setVisibleRenders] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!renders || renders.length === 0) return;

        setVisibleRenders([]);
        setCurrentIndex(0);

        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                const next = prev + 1;
                if (next <= renders.length) {
                    setVisibleRenders(renders.slice(0, next));
                    return next;
                } else {
                    clearInterval(interval);
                    return prev;
                }
            });
        }, 150);

        return () => clearInterval(interval);
    }, [renders]);

    if (renders.length === 0 && processes.length === 0)
        return <p style={{ color: "#6b7280" }}>Nenhum processo adicionado.</p>;

    const maxTime = Math.max(...renders.map((r) => r.time), 0);
    const minTime = Math.min(...renders.map((r) => r.time), 0);
    const totalTimeSlots = maxTime - minTime + 1;

    const uniqueProcesses = [...new Set([...processes.map(p => p.id), ...renders.map(r => r.id)])].sort();

    const getColor = (type) => {
        switch (type) {
            case "exec": return "#4ade80";
            case "contexto": return "#f87171";
            case "burst": return "#413f3fff";
            default: return "#dc2626";
        }
    };

    const timeSlots = Array.from({ length: totalTimeSlots }, (_, i) => minTime + i);

    return (
        <div className={styles.container}>
            <div className={styles.ganttWrapper}>
                <div className={styles.scrollArea}>
                    <div className={styles.ganttContainer}>
                        <div className={styles.processRows}>
                            {uniqueProcesses.map((processId) => {
                                const process = processes.find((p) => p.id === processId);
                                return (
                                    <div key={processId} className={styles.processRow}>
                                        <div className={styles.processLabel}><b>{processId}</b></div>
                                        <div className={styles.processLabel}>{process?.chegada ?? "-"}</div>
                                        <div className={styles.processLabel}>{process?.execucao ?? "-"}</div>
                                        <div className={styles.processLabel}>{process?.prioridade ?? "-"}</div>
                                        <div className={styles.processLabel}>{process?.deadline ?? "-"}</div>

                                        <div className={styles.processGantt}>
                                            {timeSlots.map((time) => {
                                                const renderAtTime = renders.find(
                                                    (r) => r.time === time && r.id === processId
                                                );
                                                return (
                                                    <div key={time} className={styles.timeSlot}>
                                                        {renderAtTime && (
                                                            <div
                                                                className={styles.quadradinho}
                                                                style={{
                                                                    backgroundColor: getColor(renderAtTime.type),
                                                                }}
                                                            ></div>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>

                                    </div>
                                );
                            })}
                        </div>

                        <div className={styles.timelineWrapper}>
                            <div className={styles.processRows}>
                                <div className={styles.processRow}>
                                    <div className={styles.processLabel}></div>
                                    <div className={styles.processLabel}>TC</div>
                                    <div className={styles.processLabel}>TE</div>
                                    <div className={styles.processLabel}>Nº</div>
                                    <div className={styles.processLabel}>D</div>
                                    <div className={styles.processGantt}>
                                        {timeSlots.map((_, i) => (
                                            <div key={i} className={styles.rulerUnit}>
                                                <div className={styles.rulerTick}></div>
                                                <div className={styles.rulerNumber}>{i + 1}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.legend}>
                <div className={styles.legendItem}>
                    <div className={styles.colorBox} style={{ backgroundColor: "#4ade80" }}></div>
                    <span>Executado</span>
                </div>
                <div className={styles.legendItem}>
                    <div className={styles.colorBox} style={{ backgroundColor: "#dc2626" }}></div>
                    <span>Sobrecarga</span>
                </div>
                <div className={styles.legendItem}>
                    <div className={styles.colorBox} style={{ backgroundColor: "#413f3fff" }}></div>
                    <span>Estouro da deadline</span>
                </div>
            </div>
        </div>
    );
}
