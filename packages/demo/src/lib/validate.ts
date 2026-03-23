export function verifyWebhookSecret(req: Request): boolean {
  const secret = process.env.WEBHOOK_SECRET;
  const token = req.headers.get('X-Telegram-Bot-Api-Secret-Token');
  return token === secret;
}

export function escapeMarkdown(text: string): string {
  return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, '\\$&');
}

export function parseNewCommand(text: string): { ok: boolean; error?: string; value?: any } {
  // Implement based on your needs
  return { ok: true, value: {} };
}

export function isValidProductId(id: string): boolean {
  return /^[a-zA-Z0-9_-]{6,20}$/.test(id);
}

export function generateShortId(): string {
  return Math.random().toString(36).substring(2, 10);
}

export function sanitizeErrorMessage(msg: string, fallback: string): string {
  return msg || fallback;
}
