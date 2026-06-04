import { useEffect, useState } from "react";
import {
  SCHEMAS,
  type ResourceKey,
  type Record as AdminRecord,
  readAll,
  upsert,
  remove,
  newId,
} from "@/lib/admin-store";

type Props = { resource: ResourceKey };

export function AdminCrud({ resource }: Props) {
  const schema = SCHEMAS[resource];
  const [items, setItems] = useState<AdminRecord[]>([]);
  const [editing, setEditing] = useState<AdminRecord | null>(null);

  useEffect(() => {
    setItems(readAll(resource));
  }, [resource]);

  const refresh = () => setItems(readAll(resource));

  const startNew = () => {
    const blank: AdminRecord = { id: newId(), createdAt: Date.now() };
    schema.fields.forEach((f) => (blank[f.key] = ""));
    setEditing(blank);
  };

  const save = (rec: AdminRecord) => {
    upsert(resource, rec);
    setEditing(null);
    refresh();
  };

  const onDelete = (id: string) => {
    if (!confirm("确定删除这条记录吗？")) return;
    remove(resource, id);
    refresh();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">
            {schema.label}
          </h1>
          <p className="text-sm text-muted-foreground">
            共 {items.length} 条记录（本地存储 / 仅在本浏览器可见）
          </p>
        </div>
        <button
          onClick={startNew}
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          + 新增
        </button>
      </div>

      <div className="rounded-xl border border-border bg-card/60 backdrop-blur">
        {items.length === 0 ? (
          <div className="p-10 text-center text-sm text-muted-foreground">
            还没有数据，点右上角「新增」添加第一条吧。
          </div>
        ) : (
          <ul className="divide-y divide-border">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex items-start justify-between gap-4 p-4"
              >
                <div className="min-w-0 flex-1">
                  {schema.fields.slice(0, 3).map((f) => {
                    const v = item[f.key];
                    if (!v) return null;
                    return (
                      <div key={f.key} className="text-sm">
                        <span className="text-muted-foreground">
                          {f.label}：
                        </span>
                        <span className="break-all text-foreground">
                          {String(v)}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex shrink-0 gap-2">
                  <button
                    onClick={() => setEditing(item)}
                    className="rounded-md border border-border px-3 py-1 text-xs hover:bg-accent"
                  >
                    编辑
                  </button>
                  <button
                    onClick={() => onDelete(item.id)}
                    className="rounded-md border border-destructive/40 px-3 py-1 text-xs text-destructive hover:bg-destructive/10"
                  >
                    删除
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {editing && (
        <EditDialog
          schema={schema}
          record={editing}
          onCancel={() => setEditing(null)}
          onSave={save}
        />
      )}
    </div>
  );
}

function EditDialog({
  schema,
  record,
  onCancel,
  onSave,
}: {
  schema: (typeof SCHEMAS)[ResourceKey];
  record: AdminRecord;
  onCancel: () => void;
  onSave: (r: AdminRecord) => void;
}) {
  const [draft, setDraft] = useState<AdminRecord>(record);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-lg rounded-xl border border-border bg-background p-6 shadow-2xl">
        <h2 className="mb-4 text-lg font-semibold">
          {record.createdAt === draft.createdAt &&
          !schema.fields.some((f) => record[f.key])
            ? "新增"
            : "编辑"}
          {schema.label}
        </h2>
        <div className="space-y-3">
          {schema.fields.map((f) => (
            <label key={f.key} className="block">
              <span className="mb-1 block text-xs text-muted-foreground">
                {f.label}
              </span>
              {f.type === "textarea" ? (
                <textarea
                  rows={3}
                  value={(draft[f.key] as string) ?? ""}
                  onChange={(e) =>
                    setDraft({ ...draft, [f.key]: e.target.value })
                  }
                  placeholder={f.placeholder}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              ) : (
                <input
                  type={f.type ?? "text"}
                  value={(draft[f.key] as string) ?? ""}
                  onChange={(e) =>
                    setDraft({ ...draft, [f.key]: e.target.value })
                  }
                  placeholder={f.placeholder}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              )}
            </label>
          ))}
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <button
            onClick={onCancel}
            className="rounded-md border border-border px-4 py-2 text-sm hover:bg-accent"
          >
            取消
          </button>
          <button
            onClick={() => onSave(draft)}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            保存
          </button>
        </div>
      </div>
    </div>
  );
}
