"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Calendar, Clock, MoreHorizontal } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    { label: "Total Bookings", value: "128", trend: "+12%", icon: <Calendar /> },
    { label: "Active Clients", value: "84", trend: "+5%", icon: <Users /> },
    { label: "Hours Booked", value: "342", trend: "+18%", icon: <Clock /> },
    { label: "Revenue", value: "$4,250", trend: "+24%", icon: <TrendingUp /> },
  ];

  const upcomingAppointments = [
    { id: 1, client: "Sarah Jenkins", service: "Consultation", time: "09:00 AM", status: "Confirmed" },
    { id: 2, client: "Michael Chen", service: "Follow-up", time: "11:30 AM", status: "Pending" },
    { id: 3, client: "Emily Davis", service: "Initial Strategy", time: "02:00 PM", status: "Confirmed" },
    { id: 4, client: "Robert Wilson", service: "Consultation", time: "04:30 PM", status: "Confirmed" },
  ];

  return (
    <div className="space-y-8">
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="bg-card p-6 rounded-2xl border border-border shadow-sm flex flex-col"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                {stat.icon}
              </div>
              <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                {stat.trend}
              </span>
            </div>
            <h3 className="text-muted-foreground text-sm font-medium">{stat.label}</h3>
            <p className="text-3xl font-bold mt-1 text-foreground">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Today's Schedule */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 bg-card rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col"
        >
          <div className="p-6 border-b border-border flex justify-between items-center bg-secondary/20">
            <h2 className="font-bold text-lg">Today's Schedule</h2>
            <button className="text-sm font-medium text-primary hover:underline">View Calendar</button>
          </div>
          <div className="p-0 flex-1 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground bg-secondary/30 uppercase">
                <tr>
                  <th className="px-6 py-4 font-medium">Time</th>
                  <th className="px-6 py-4 font-medium">Client</th>
                  <th className="px-6 py-4 font-medium">Service</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {upcomingAppointments.map((apt) => (
                  <tr key={apt.id} className="hover:bg-secondary/20 transition-colors">
                    <td className="px-6 py-4 font-semibold">{apt.time}</td>
                    <td className="px-6 py-4 font-medium">{apt.client}</td>
                    <td className="px-6 py-4 text-muted-foreground">{apt.service}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        apt.status === "Confirmed" ? "bg-green-500/10 text-green-600" : "bg-amber-500/10 text-amber-600"
                      }`}>
                        {apt.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-muted-foreground hover:text-foreground"><MoreHorizontal className="w-5 h-5" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* AI Insights Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-card rounded-2xl border border-border shadow-sm p-6 bg-gradient-to-br from-card to-primary/5 flex flex-col"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white text-xs font-bold">AI</span>
            </div>
            <h2 className="font-bold text-lg">Smart Insights</h2>
          </div>
          
          <div className="space-y-4 flex-1">
            <div className="p-4 bg-background rounded-xl border border-border shadow-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
              <h4 className="font-semibold text-sm mb-1">High Cancellation Risk</h4>
              <p className="text-xs text-muted-foreground">Michael Chen has rescheduled twice. Consider sending a manual reminder.</p>
            </div>
            
            <div className="p-4 bg-background rounded-xl border border-border shadow-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
              <h4 className="font-semibold text-sm mb-1">Peak Hours Identified</h4>
              <p className="text-xs text-muted-foreground">Thursdays at 2:00 PM are highly demanded. Consider opening more slots.</p>
            </div>
          </div>

          <button className="mt-6 w-full py-3 bg-secondary text-foreground rounded-xl text-sm font-medium hover:bg-secondary/80 transition-colors">
            Generate Weekly Report
          </button>
        </motion.div>

      </div>
    </div>
  );
}
