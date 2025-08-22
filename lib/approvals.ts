import { promises as fs } from 'fs';
import path from 'path';

const FILE = path.join(process.cwd(), 'data', 'approvals.json');

async function ensureFile() {
  try {
    await fs.access(FILE);
  } catch {
    await fs.mkdir(path.dirname(FILE), { recursive: true });
    await fs.writeFile(FILE, JSON.stringify({ approved: [] }, null, 2), 'utf-8');
  }
}

export async function getApprovedIds(): Promise<Set<string>> {
  await ensureFile();
  const raw = JSON.parse(await fs.readFile(FILE, 'utf-8'));
  return new Set<string>(raw.approved || []);
}

export async function setApproved(id: string, approved: boolean): Promise<void> {
  await ensureFile();
  const raw = JSON.parse(await fs.readFile(FILE, 'utf-8'));
  const set = new Set<string>(raw.approved || []);
  if (approved) set.add(id);
  else set.delete(id);
  await fs.writeFile(FILE, JSON.stringify({ approved: Array.from(set) }, null, 2), 'utf-8');
}
