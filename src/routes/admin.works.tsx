import { createFileRoute } from "@tanstack/react-router";
import { AdminCrud } from "@/components/admin/AdminCrud";

export const Route = createFileRoute("/admin/works")({
  component: () => <AdminCrud resource="works" />,
});
