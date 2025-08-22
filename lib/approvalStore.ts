import fs from 'fs';
import path from 'path';

const STORE_PATH = process.env.APPROVAL_STORE_PATH || path.join(process.cwd(), 'data', 'approvals.json');

export function readApprovalMap(): Record<string, boolean> {
  try {
    const raw = fs.readFileSync(STORE_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export function writeApprovalMap(map: Record<string, boolean>) {
  try {
    fs.mkdirSync(path.dirname(STORE_PATH), { recursive: true });
    fs.writeFileSync(STORE_PATH, JSON.stringify(map, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to write approval store:', err);
  }
}
