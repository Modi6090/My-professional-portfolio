"use client";

import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ShoppingCart, Info, Loader2 } from "lucide-react";
import { createOrder } from "@/app/actions/order";

const categories = ["Starters", "Mains", "Desserts", "Drinks"];

const menuData = [
  { id: 1, category: "Starters", name: "Truffle Arancini", desc: "Crispy risotto balls with black truffle and mozzarella.", price: 14, img: "bg-orange-100" },
  { id: 2, category: "Starters", name: "Burrata Salad", desc: "Fresh burrata, heirloom tomatoes, and basil pesto.", price: 16, img: "bg-green-100" },
  { id: 3, category: "Mains", name: "Wagyu Ribeye", desc: "A5 Wagyu with roasted garlic and asparagus.", price: 85, img: "bg-red-100" },
  { id: 4, category: "Mains", name: "Lobster Ravioli", desc: "Handmade pasta, brown butter, and sage.", price: 32, img: "bg-yellow-100" },
  { id: 5, category: "Desserts", name: "Tiramisu", desc: "Classic Italian dessert with espresso and mascarpone.", price: 12, img: "bg-amber-100" },
];

export default function InteractiveMenu() {
  const [activeCategory, setActiveCategory] = useState("Starters");
  const [cart, setCart] = useState<{[key: number]: number}>({});
  const [isPending, startTransition] = useTransition();
  const [justOrdered, setJustOrdered] = useState(false);

  const filteredItems = menuData.filter(item => item.category === activeCategory);

  const addToCart = (id: number) => setCart(prev => ({...prev, [id]: (prev[id] || 0) + 1}));
  const removeFromCart = (id: number) => setCart(prev => {
    const newCart = {...prev};
    if (newCart[id] > 1) newCart[id]--;
    else delete newCart[id];
    return newCart;
  });

  const cartTotalCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartTotalPrice = Object.entries(cart).reduce((total, [id, qty]) => {
    const item = menuData.find(i => i.id === Number(id));
    return total + (item?.price || 0) * qty;
  }, 0);

  const handleCheckout = () => {
    if (cartTotalCount === 0) return;
    
    startTransition(async () => {
      const payload = Object.entries(cart).map(([id, qty]) => {
        const item = menuData.find(i => i.id === Number(id))!;
        return { id: item.id, qty, name: item.name, price: item.price };
      });
      
      await createOrder(payload, cartTotalPrice);
      setCart({});
      setJustOrdered(true);
      setTimeout(() => setJustOrdered(false), 3000);
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-card rounded-3xl shadow-2xl border border-border overflow-hidden flex flex-col md:flex-row h-[600px]">
      
      {/* Category Sidebar */}
      <div className="w-full md:w-48 bg-secondary/30 p-6 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-y-auto border-r border-border menu-scroll shrink-0">
        <h3 className="font-serif font-bold text-xl mb-4 hidden md:block">Menu</h3>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`
              px-4 py-3 rounded-xl text-left font-medium transition-all text-sm whitespace-nowrap
              ${activeCategory === cat 
                ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20' 
                : 'hover:bg-secondary text-muted-foreground hover:text-foreground'}
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Items List */}
      <div className="flex-1 p-6 overflow-y-auto menu-scroll bg-background relative">
        <AnimatePresence>
          {justOrdered && (
            <motion.div 
              initial={{ opacity: 0, y: -20, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: -20, x: "-50%" }}
              className="absolute top-4 left-1/2 bg-green-500 text-white px-6 py-2 rounded-full font-bold shadow-lg z-50 flex items-center gap-2"
            >
              Order Sent to Kitchen!
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-serif text-3xl font-bold">{activeCategory}</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-primary font-bold bg-primary/10 px-4 py-2 rounded-full relative">
              <ShoppingCart className="w-5 h-5" />
              <span>${cartTotalPrice.toFixed(2)}</span>
              {cartTotalCount > 0 && <span className="bg-primary text-primary-foreground w-5 h-5 rounded-full text-xs flex items-center justify-center absolute -top-1 -right-1">{cartTotalCount}</span>}
            </div>
            {cartTotalCount > 0 && (
              <button 
                onClick={handleCheckout} 
                disabled={isPending}
                className="bg-foreground text-background px-6 py-2 rounded-full font-bold text-sm hover:bg-foreground/90 transition-all flex items-center gap-2 disabled:opacity-50"
              >
                {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : "Place Order"}
              </button>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05 }}
                key={item.id}
                className="bg-card border border-border p-4 rounded-2xl flex gap-4 hover:shadow-md transition-shadow group"
              >
                {/* Abstract Image Placeholder */}
                <div className={`w-24 h-24 rounded-xl ${item.img} flex items-center justify-center shrink-0`}>
                  <Info className="w-6 h-6 text-black/20" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-lg">{item.name}</h4>
                      <span className="font-bold text-primary">${item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{item.desc}</p>
                  </div>
                  
                  <div className="flex justify-end mt-2">
                    {cart[item.id] ? (
                      <div className="flex items-center gap-3 bg-secondary rounded-full px-3 py-1">
                        <button onClick={() => removeFromCart(item.id)} className="w-6 h-6 bg-background rounded-full flex items-center justify-center hover:text-primary transition-colors">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-bold text-sm w-4 text-center">{cart[item.id]}</span>
                        <button onClick={() => addToCart(item.id)} className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-sm">
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    ) : (
                      <button 
                        onClick={() => addToCart(item.id)}
                        className="bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground px-4 py-2 rounded-full text-sm font-bold transition-colors flex items-center gap-2"
                      >
                        <Plus className="w-4 h-4" /> Add
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
