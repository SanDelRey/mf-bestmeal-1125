import { mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const line: string = "The best meal I ever had was yesterday's rice fried at 5 a.m. by my mother, eaten off the spatula over the sink, and I have been chasing that wok ever since."
const gate = line.length >= 1 && line.length <= 200
if (!gate) throw new Error("entry must be 1..200 characters")

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "."
mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, "entry.txt"), line, "utf8")
