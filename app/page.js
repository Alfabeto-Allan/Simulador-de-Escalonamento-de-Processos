"use client";
import { useState } from "react";
import "./globals.css";

import ProcessForm from "./simulator/components/ProcessForm/ProcessForm";
import ConfigForm from "./simulator/components/ConfigForm/ConfigForm";
import AlgorithmSelect from "./simulator/components/AlgorithmSelect/AlgorithmSelect";
import GanttChart from "./simulator/components/GanttChart/GanttChart";

export default function SimulatorPage() {
  const [processes, setProcesses] = useState([]);
  const [config, setConfig] = useState({
    quantum: 2,
    sobrecarga_contexto: 1,
    algoritmo: "FCFS",
  });
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSimulate = async () => {
    try {
      const response = await fetch("/api/simulate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          algoritmo:
            config.algoritmo === "FIFO"
              ? 0
              : config.algoritmo === "SJF"
                ? 1
                : config.algoritmo === "RR"
                  ? 2
                  : config.algoritmo === "EDF"
                    ? 3
                    : config.algoritmo === "CFS"
                      ? 4
                      : 0,

          processos: processes,
        }),
      });

      if (!response.ok) {
        console.error("Resposta não OK:", response.status);
        return;
      }

      const data = await response.json();
      console.log("Resultado da simulação:", data);
      setResults({
        renders: data.renderList,
      });
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };


  return (
    <main className="container">
      <div className="card">
        <h1 className="h1">Simulador de Escalonamento</h1>

        <ConfigForm config={config} setConfig={setConfig} />
        <AlgorithmSelect config={config} setConfig={setConfig} />
        <ProcessForm processes={processes} setProcesses={setProcesses} />

        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 16 }}>
          <button
            onClick={handleSimulate}
            disabled={loading}
            style={{
              padding: "8px 16px",
              borderRadius: 10,
              background: loading ? "#93c5fd" : "var(--accent)",
              color: "white",
              border: "none",
              cursor: loading ? "default" : "pointer",
            }}
          >
            {loading ? "Simulando..." : "Iniciar Simulação"}
          </button>
        </div>
      </div>

      {results && (
        <>
          <div className="card" style={{ marginTop: 20 }}>
            <h2 style={{ margin: 0, fontSize: "1.125rem", fontWeight: 600 }}>Gráfico de Gantt</h2>
            <div style={{ marginTop: 12 }}>
              <GanttChart renders={results.renders} />
            </div>
          </div>

        </>
      )}
    </main>
  );
}
