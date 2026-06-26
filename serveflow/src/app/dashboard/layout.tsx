import { ReactNode } from "react";
import Link from "next/link";
import { LayoutDashboard, ChefHat, Package, FileText, Settings, LogOut } from "lucide-react";

export default function ServeFlowDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row font-sans">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-card border-r border-border flex flex-col sticky top-0 md:h-screen z-10 shadow-sm">
        <div className="p-6">
          <div className="font-serif font-bold text-2xl tracking-tight text-primary">ServeFlow</div>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-secondary/30 text-muted-foreground hover:text-foreground font-medium transition-colors">
            <LayoutDashboard className="w-5 h-5" /> Overview
          </Link>
          <Link href="/dashboard/kitchen" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/20 font-medium transition-all">
            <ChefHat className="w-5 h-5" /> Kitchen Queue
          </Link>
          <Link href="#inventory" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-secondary/30 text-muted-foreground hover:text-foreground font-medium transition-colors">
            <Package className="w-5 h-5" /> Inventory
          </Link>
          <Link href="#reports" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-secondary/30 text-muted-foreground hover:text-foreground font-medium transition-colors">
            <FileText className="w-5 h-5" /> Reports
          </Link>
          <Link href="#settings" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-secondary/30 text-muted-foreground hover:text-foreground font-medium transition-colors">
            <Settings className="w-5 h-5" /> Settings
          </Link>
        </nav>
        
        <div className="p-4 mt-auto">
          <div className="bg-secondary/50 p-4 rounded-2xl flex items-center gap-3 border border-border">
            <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold">K</div>
            <div className="flex-1 overflow-hidden">
              <div className="font-medium text-sm truncate">Head Chef</div>
              <div className="text-xs text-muted-foreground truncate">Kitchen Station 1</div>
            </div>
          </div>
          <Link href="/" className="mt-2 flex items-center justify-center gap-2 w-full py-3 text-sm font-medium text-muted-foreground hover:text-red-500 transition-colors">
            <LogOut className="w-4 h-4" /> Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full md:h-screen overflow-hidden bg-background">
        {/* Header */}
        <header className="h-20 border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-10 px-8 flex items-center justify-between shadow-sm">
          <h1 className="text-xl font-bold font-serif">Kitchen Operations</h1>
          <div className="flex items-center gap-4">
            <span className="flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium">Live Sync Active</span>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8 flex-1 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
