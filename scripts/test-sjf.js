import Process from "../app/simulator/Process.js";
import { sim } from "../app/simulator/simulationEngine.js";

// Simple FIFO test scenario
const processes = [
  new Process("P1", 0, 3), // P1 arrives at t=0, needs 3 units
  new Process("P2", 0, 2), // P2 arrives at t=2, needs 2 units
  new Process("P3", 4, 1), // P3 arrives at t=4, needs 1 unit
];

const renders = sim(processes, 1).renderList;

console.log("\n=== SJF Simulation Result ===");
if (!renders || renders.length === 0) {
  console.log("No renders produced.");
  process.exit(1);
}

renders.forEach((r) => {
  console.log(`${r.time}: ${r.type} - ${r.id}`);
});

console.log("=== End ===\n");
