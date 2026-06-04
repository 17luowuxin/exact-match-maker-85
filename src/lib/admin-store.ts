// Simple localStorage-backed mock store for the admin panel.
// Each resource is an array of records keyed by `id`.

export type Field = {
  key: string;
  label: string;
  type?: "text" | "textarea" | "url" | "number";
  placeholder?: string;
};

export type ResourceKey =
  | "works"
  | "characters"
  | "comics"
  | "music"
  | "services"
  | "inquiries";

export type ResourceSchema = {
  key: ResourceKey;
  label: string;
  fields: Field[];
};

export const SCHEMAS: Record<ResourceKey, ResourceSchema> = {
  works: {
    key: "works",
    label: "创意作品",
    fields: [
      { key: "title", label: "标题" },
      { key: "category", label: "分类", placeholder: "AI 绘画 / 立绘 / 海报" },
      { key: "cover", label: "封面图链接", type: "url" },
      { key: "description", label: "描述", type: "textarea" },
    ],
  },
  characters: {
    key: "characters",
    label: "角色档案",
    fields: [
      { key: "name", label: "角色名" },
      { key: "title", label: "称号" },
      { key: "avatar", label: "形象图链接", type: "url" },
      { key: "bio", label: "角色介绍", type: "textarea" },
    ],
  },
  comics: {
    key: "comics",
    label: "AI 漫剧",
    fields: [
      { key: "title", label: "剧名" },
      { key: "episode", label: "集数" },
      { key: "cover", label: "封面图链接", type: "url" },
      { key: "summary", label: "剧情简介", type: "textarea" },
    ],
  },
  music: {
    key: "music",
    label: "AI 音乐",
    fields: [
      { key: "title", label: "曲名" },
      { key: "style", label: "风格", placeholder: "国风 / 电子 / 治愈" },
      { key: "url", label: "音频/视频链接", type: "url" },
      { key: "description", label: "描述", type: "textarea" },
    ],
  },
  services: {
    key: "services",
    label: "创作服务",
    fields: [
      { key: "title", label: "服务名称" },
      { key: "tag", label: "标签", placeholder: "Midjourney / Niji / IP" },
      { key: "description", label: "服务介绍", type: "textarea" },
    ],
  },
  inquiries: {
    key: "inquiries",
    label: "咨询留言",
    fields: [
      { key: "name", label: "称呼" },
      { key: "contact", label: "联系方式" },
      { key: "topic", label: "咨询主题" },
      { key: "message", label: "留言内容", type: "textarea" },
    ],
  },
};

export type Record = {
  id: string;
  createdAt: number;
  [k: string]: unknown;
};

const STORAGE_PREFIX = "loluo-admin:";

function storageKey(key: ResourceKey) {
  return `${STORAGE_PREFIX}${key}`;
}

export function readAll(key: ResourceKey): Record[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(storageKey(key));
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Record[]) : [];
  } catch {
    return [];
  }
}

export function writeAll(key: ResourceKey, items: Record[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(storageKey(key), JSON.stringify(items));
}

export function upsert(key: ResourceKey, record: Record) {
  const items = readAll(key);
  const idx = items.findIndex((i) => i.id === record.id);
  if (idx >= 0) items[idx] = record;
  else items.unshift(record);
  writeAll(key, items);
}

export function remove(key: ResourceKey, id: string) {
  const items = readAll(key).filter((i) => i.id !== id);
  writeAll(key, items);
}

export function newId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

// --- Auth (mock) ---
const AUTH_KEY = "loluo-admin:auth";
export const ADMIN_PASSWORD = "loluo2026";

export function isLoggedIn(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(AUTH_KEY) === "1";
}

export function login(password: string): boolean {
  if (password !== ADMIN_PASSWORD) return false;
  window.localStorage.setItem(AUTH_KEY, "1");
  return true;
}

export function logout() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(AUTH_KEY);
}
