import { getActiveOrders } from "@/app/actions/order";
import KitchenBoard, { Order, OrderStatus } from "@/components/KitchenBoard";

export default async function KitchenPage() {
  const dbOrders = await getActiveOrders();

  // Map DB orders to the expected format for the Kitchen Board UI
  const mappedOrders: Order[] = dbOrders.map(o => ({
    id: o.id,
    table: o.tableNumber || 0,
    status: o.status as OrderStatus,
    time: new Date(o.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    items: o.items.map(i => ({
      name: i.menuItem?.name || "Unknown Item",
      qty: i.quantity,
      notes: i.notes || undefined
    })),
    isUrgent: false, // For MVP logic, keep false
  }));

  return <KitchenBoard initialOrders={mappedOrders} />;
}
