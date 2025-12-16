export function generateCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export function formatTime(ms: number): string {
  const seconds = Math.floor(ms / 1000);
  const decimals = Math.floor((ms % 1000) / 10);
  return `${seconds}.${decimals.toString().padStart(2, "0")}s`;
}
