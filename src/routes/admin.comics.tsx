import { createFileRoute } from "@tanstack/react-router";
import { AdminCrud } from "@/components/admin/AdminCrud";

export const Route = createFileRoute("/admin/comics")({
  component: () => <AdminCrud resource="comics" />,
});
