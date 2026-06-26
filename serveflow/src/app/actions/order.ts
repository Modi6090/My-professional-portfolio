"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

type CartItem = {
  id: number;
  qty: number;
  name: string;
  price: number;
};

export async function createOrder(cartItems: CartItem[], totalAmount: number) {
  try {
    // For MVP, we'll ensure items exist in DB first or just use a basic string representation.
    // Since we didn't seed the DB, creating actual MenuItem relationships might fail if they don't exist.
    // But since this is a portfolio demo, we'll just create a single "Order" and store the items in a simplified way,
    // or we can seed the DB on the fly if the item doesn't exist.
    
    // Auto-seed items if missing (MVP workaround)
    for (const item of cartItems) {
      const existing = await prisma.menuItem.findUnique({ where: { id: item.id.toString() } });
      if (!existing) {
        // Ensure category exists
        let category = await prisma.category.findFirst({ where: { name: "General" } });
        if (!category) {
          category = await prisma.category.create({ data: { name: "General" } });
        }
        await prisma.menuItem.create({
          data: {
            id: item.id.toString(),
            name: item.name,
            price: item.price,
            categoryId: category.id,
          }
        });
      }
    }

    const order = await prisma.order.create({
      data: {
        tableNumber: Math.floor(Math.random() * 20) + 1, // Random table for demo
        totalAmount,
        status: "PENDING",
        items: {
          create: cartItems.map(item => ({
            menuItemId: item.id.toString(),
            quantity: item.qty,
            price: item.price,
          }))
        }
      }
    });

    revalidatePath("/dashboard/kitchen");
    return { success: true, orderId: order.id };
  } catch (error) {
    console.error("Order creation failed:", error);
    return { success: false, error: "Failed to create order" };
  }
}

export async function getActiveOrders() {
  const orders = await prisma.order.findMany({
    where: {
      status: {
        in: ["PENDING", "PREPARING", "READY"]
      }
    },
    include: {
      items: {
        include: {
          menuItem: true
        }
      }
    },
    orderBy: {
      createdAt: 'asc'
    }
  });

  return orders;
}

export async function updateOrderStatus(orderId: string, status: string) {
  await prisma.order.update({
    where: { id: orderId },
    data: { status }
  });
  revalidatePath("/dashboard/kitchen");
}
