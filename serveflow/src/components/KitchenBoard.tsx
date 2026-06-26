"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Check, ChefHat, AlertCircle } from "lucide-react";

import { updateOrderStatus } from "@/app/actions/order";

export type OrderStatus = "PENDING" | "PREPARING" | "READY";

export type Order = {
  id: string;
  table: number;
  items: { name: string; qty: number; notes?: string }[];
  status: OrderStatus;
  time: string;
  isUrgent?: boolean;
};

export default function KitchenBoard({ initialOrders }: { initialOrders: Order[] }) {
  const [orders, setOrders] = useState<Order[]>(initialOrders);

  // Sync if props change (poor man's real-time for MVP)
  useEffect(() => {
    setOrders(initialOrders);
  }, [initialOrders]);

  const moveOrder = async (id: string, newStatus: OrderStatus) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
    await updateOrderStatus(id, newStatus);
  };

  const completeOrder = async (id: string) => {
    setOrders(orders.filter(o => o.id !== id));
    await updateOrderStatus(id, "COMPLETED");
  };

  const columns: { title: string; status: OrderStatus; color: string }[] = [
    { title: "New Orders", status: "PENDING", color: "border-blue-500" },
    { title: "Cooking", status: "PREPARING", color: "border-orange-500" },
    { title: "Ready for Pickup", status: "READY", color: "border-green-500" },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-2xl font-bold font-serif mb-1">Live Kitchen Queue</h2>
          <p className="text-muted-foreground text-sm">Manage incoming tickets and track preparation times.</p>
        </div>
        <div className="bg-primary/10 text-primary px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
          <Clock className="w-4 h-4" /> Avg Prep: 18m
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {columns.map((col) => {
          const columnOrders = orders.filter((o) => o.status === col.status);

          return (
            <div key={col.status} className="bg-secondary/30 rounded-3xl p-4 border border-border min-h-[500px] flex flex-col">
              <div className={`border-l-4 ${col.color} pl-3 mb-6`}>
                <h3 className="font-bold text-lg">{col.title}</h3>
                <span className="text-xs font-semibold text-muted-foreground">{columnOrders.length} TICKETS</span>
              </div>

              <div className="flex-1 space-y-4">
                <AnimatePresence mode="popLayout">
                  {columnOrders.map((order) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                      key={order.id}
                      className={`bg-card rounded-2xl p-5 shadow-sm border ${order.isUrgent ? 'border-red-500/50 shadow-red-500/10' : 'border-border'}`}
                    >
                      <div className="flex justify-between items-start mb-3 border-b border-border pb-3">
                        <div>
                          <span className="text-xs font-bold text-muted-foreground">{order.id}</span>
                          <h4 className="font-bold text-lg text-primary">Table {order.table}</h4>
                        </div>
                        <div className={`text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1 ${order.isUrgent ? 'bg-red-500/10 text-red-500' : 'bg-secondary text-muted-foreground'}`}>
                          {order.isUrgent ? <AlertCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                          {order.time}
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {order.items.map((item, idx) => (
                          <li key={idx} className="text-sm">
                            <div className="flex items-start gap-2 font-medium">
                              <span className="bg-secondary px-1.5 rounded text-xs mt-0.5">{item.qty}x</span>
                              <span>{item.name}</span>
                            </div>
                            {item.notes && (
                              <p className="text-xs text-orange-500 ml-6 italic mt-0.5">Note: {item.notes}</p>
                            )}
                          </li>
                        ))}
                      </ul>

                      <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                        {col.status === "PENDING" && (
                          <button 
                            onClick={() => moveOrder(order.id, "PREPARING")}
                            className="flex-1 bg-primary text-primary-foreground py-2 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                          >
                            <ChefHat className="w-4 h-4" /> Start Cooking
                          </button>
                        )}
                        {col.status === "PREPARING" && (
                          <button 
                            onClick={() => moveOrder(order.id, "READY")}
                            className="flex-1 bg-green-500 text-white py-2 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
                          >
                            <Check className="w-4 h-4" /> Mark Ready
                          </button>
                        )}
                        {col.status === "READY" && (
                          <button 
                            onClick={() => completeOrder(order.id)}
                            className="flex-1 bg-foreground text-background py-2 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-foreground/90 transition-colors"
                          >
                            <Check className="w-4 h-4" /> Order Served
                          </button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {columnOrders.length === 0 && (
                  <div className="h-32 flex items-center justify-center border-2 border-dashed border-border rounded-2xl text-muted-foreground text-sm font-medium">
                    No tickets
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
