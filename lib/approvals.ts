import { promises as fs } from 'fs'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'path'
export const runtime = 'node' // for Vercel compatibility

const PERSIST_PATH = process.env.VERCEL
  ? path.join('/tmp', 'approvals.json') // ephemeral on Vercel
  : path.join(process.cwd(), 'data', 'approvals.json') // dev/local

/*    
async function ensureFile() {
  try {
    await fs.access(PERSIST_PATH);
  } catch {
    await fs.mkdir(path.dirname(PERSIST_PATH), { recursive: true });
    await fs.writeFile(PERSIST_PATH, JSON.stringify({ approved: [] }, null, 2), 'utf-8');
  }
}*/

async function ensureFile() {
  try {
    await mkdir(path.dirname(PERSIST_PATH), { recursive: true })
  } catch {}
  try {
    await readFile(PERSIST_PATH, 'utf8')
  } catch {
    await writeFile(PERSIST_PATH, JSON.stringify({ approved: [] }, null, 2))
  }
}

export async function getApprovedIds(): Promise<Set<string>> {
  await ensureFile()
  const raw = JSON.parse(await fs.readFile(PERSIST_PATH, 'utf-8'))
  return new Set<string>(raw.approved || [])
}

export async function setApproved(
  id: number,
  approved: boolean
): Promise<void> {
  await ensureFile()
  const raw = JSON.parse(await fs.readFile(PERSIST_PATH, 'utf-8'))
  const set = new Set<number>(raw.approved || [])
  if (approved) set.add(id)
  else set.delete(id)
  await fs.writeFile(
    PERSIST_PATH,
    JSON.stringify({ approved: Array.from(set) }, null, 2),
    'utf-8'
  )
}
