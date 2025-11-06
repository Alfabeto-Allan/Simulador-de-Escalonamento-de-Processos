"use client";
import styles from "./GanttChart.module.css";

export default function GanttChart({ renders }) {
    if (!renders || renders.length === 0)
        return <p style={{ color: "#6b7280" }}>Nenhum dado para exibir.</p>;

    const maxTime = Math.max(...renders.map((r) => r.time));
    const minTime = Math.min(...renders.map((r) => r.time));
    const totalTimeSlots = maxTime - minTime + 1;

    const uniqueProcesses = [...new Set(renders.map(r => r.id))].sort();

    const getColor = (type) => {
        switch (type) {
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

    const timeSlots = Array.from({ length: totalTimeSlots }, (_, i) => minTime + i);

    return (
        <div className={styles.container}>
            <div className={styles.legend}>
                <div className={styles.legendItem}>
                    <div className={styles.colorBox} style={{ backgroundColor: "#4ade80" }}></div>
                    <span>Executado</span>
                </div>
                <div className={styles.legendItem}>
                    <div className={styles.colorBox} style={{ backgroundColor: "#f87171" }}></div>
                    <span>Sobrecarga</span>
                </div>
                <div className={styles.legendItem}>
                    <div className={styles.colorBox} style={{ backgroundColor: "#dc2626" }}></div>
                    <span>Estouro da deadline</span>
                </div>
            </div>

            <div className={styles.ganttWrapper}>
                <div className={styles.ganttContainer}>
                    <div className={styles.processRows}>
                        {uniqueProcesses.map(processId => (
                            <div key={processId} className={styles.processRow}>
                                <div className={styles.processLabel}>{processId}</div>
                                <div className={styles.processGantt}>
                                    {timeSlots.map((time) => {
                                        const renderAtTime = renders.find(r => 
                                            r.time === time && r.id === processId
                                        );
                                        return (
                                            <div key={time} className={styles.timeSlot}>
                                                {renderAtTime && (
                                                    <div
                                                        className={styles.quadradinho}
                                                        style={{ 
                                                            backgroundColor: getColor(renderAtTime.type) 
                                                        }}
                                                    >
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.timelineWrapper}>
                        <div className={styles.timelineLabel}></div>
                        <div className={styles.ruler}>
                            {timeSlots.map((time) => (
                                <div key={time} className={styles.rulerUnit}>
                                    <div className={styles.rulerTick}></div>
                                    <div className={styles.rulerNumber}>{time + 1}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}