import { NextResponse } from "next/server";
import { sim } from "@/app/simulator/simulationEngine";
import Process from "@/app/simulator/Process";

export async function POST(req) {
    try {
        const data = await req.json();
        const { processos, algoritmo } = data;

        const processList = processos.map(
            (p) => new Process(p.id, p.chegada, p.execucao, p.prioridade, p.deadline)
        );

        const output = sim(processList, algoritmo);

        return NextResponse.json({
            renderList: output.renderList,
            processList: output.processList,
            throughput: output.throughput,
            idlePercentage: output.idlePercentage,
            contextChanges: output.contextChanges,
        });
    } catch (err) {
        console.error("Erro na simulação:", err);
        return NextResponse.json(
            { error: "Erro na simulação", details: err.message },
            { status: 500 }
        );
    }
}
