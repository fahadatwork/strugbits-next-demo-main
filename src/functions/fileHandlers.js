import {promises as fs} from 'fs'
import path from "path";


export async function handleFileUpload(file) {
  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = file.name

  const dir = path.join(process.cwd(), 'public', 'uploads');

  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }

  const filePath = path.join(dir, filename);
  await fs.writeFile(filePath, buffer);

  const file_url = `uploads/${filename}`;

  return file_url;
}
