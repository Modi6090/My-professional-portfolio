import { ReactNode } from "react";
import Link from "next/link";
import { Calendar, Users, Settings, Home, LogOut } from "lucide-react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-card border-r border-border flex flex-col sticky top-0 md:h-screen z-10">
        <div className="p-6">
          <div className="font-bold text-2xl tracking-tight text-primary">BookEase</div>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary/50 text-foreground font-medium transition-colors">
            <Home className="w-5 h-5" /> Dashboard
          </Link>
          <Link href="#appointments" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-secondary/30 text-muted-foreground hover:text-foreground font-medium transition-colors">
            <Calendar className="w-5 h-5" /> Appointments
          </Link>
          <Link href="#clients" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-secondary/30 text-muted-foreground hover:text-foreground font-medium transition-colors">
            <Users className="w-5 h-5" /> Clients
          </Link>
          <Link href="#settings" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-secondary/30 text-muted-foreground hover:text-foreground font-medium transition-colors">
            <Settings className="w-5 h-5" /> Settings
          </Link>
        </nav>
        
        <div className="p-4 mt-auto">
          <div className="bg-secondary/30 p-4 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">A</div>
            <div className="flex-1 overflow-hidden">
              <div className="font-medium text-sm truncate">Admin User</div>
              <div className="text-xs text-muted-foreground truncate">admin@bookease.com</div>
            </div>
          </div>
          <Link href="/" className="mt-2 flex items-center justify-center gap-2 w-full py-3 text-sm font-medium text-muted-foreground hover:text-red-500 transition-colors">
            <LogOut className="w-4 h-4" /> Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full md:h-screen overflow-y-auto">
        {/* Header */}
        <header className="h-20 border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-10 px-8 flex items-center justify-between">
          <h1 className="text-xl font-bold">Overview</h1>
          <div className="flex items-center gap-4">
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm shadow-primary/20">
              + New Booking
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8 flex-1">
          {children}
        </div>
      </main>
    </div>
  );
}
