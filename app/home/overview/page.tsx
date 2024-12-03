import React from "react";
import {
   Calendar,
   TrendingUp,
   TrendingDown,
   DollarSign,
   Users,
   ShoppingCart,
   ArrowRight,
   Bell,
} from "lucide-react";
import TransactionsTable from "@/components/shared/TransactionsTable";
import RevenueWidget from "@/components/shared/widgets/RevenueWidget";

const OverviewPage = () => {
   // Sample data - replace with actual data
   const quickStats = [
      {
         title: "Total Revenue",
         amount: "₹2,30,000",
         change: "+12.5%",
         trend: "up",
         icon: DollarSign,
      },
      {
         title: "Net Profit",
         amount: "₹30,000",
         change: "+8.2%",
         trend: "up",
         icon: TrendingUp,
      },
      {
         title: "Expenses",
         amount: "₹45,000",
         change: "-2.4%",
         trend: "down",
         icon: TrendingDown,
      },
      {
         title: "Active Customers",
         amount: "1,234",
         change: "+5.3%",
         trend: "up",
         icon: Users,
      },
   ];

   const recentAlerts = [
      {
         title: "New tax saving opportunity detected",
         description:
            "AI has identified potential tax deductions worth ₹15,000",
         time: "2 hours ago",
         type: "success",
      },
      {
         title: "Upcoming tax payment reminder",
         description: "GST payment due in 5 days",
         time: "1 day ago",
         type: "warning",
      },
   ];

   return (
      <div className="h-screen bg-gray-50 p-6 overflow-scroll">
         {/* Header Section */}
         <div className="mb-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
               <div>
                  <h1 className="text-2xl font-semibold text-gray-900">
                     Financial Overview
                  </h1>
                  <p className="text-gray-600 mt-1">
                     Track your business performance and financial health
                  </p>
               </div>
               <div className="flex items-center gap-4">
                  {/* Notifications */}
                  <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
                     <Bell className="w-5 h-5" />
                     <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                  </button>
                  {/* Date Range Selector */}
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                     <Calendar className="w-5 h-5 text-gray-500" />
                     <span className="text-sm text-gray-700">
                        March 24 - May 24
                     </span>
                  </div>
               </div>
            </div>
         </div>

         {/* Quick Stats Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {quickStats.map((stat, index) => (
               <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all"
               >
                  <div className="flex items-center justify-between mb-4">
                     <div className="p-2 bg-gray-50 rounded-lg">
                        <stat.icon className="w-6 h-6 text-gray-700" />
                     </div>
                     <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${
                           stat.trend === "up"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                        }`}
                     >
                        {stat.change}
                     </span>
                  </div>
                  <h3 className="text-gray-600 text-sm mb-1">{stat.title}</h3>
                  <p className="text-2xl font-semibold text-gray-900">
                     {stat.amount}
                  </p>
               </div>
            ))}
         </div>

         {/* Main Content Grid */}
         <div className="grid lg:grid-cols-3 gap-8">
            {/* Transactions and Chart Section */}
            <div className="lg:col-span-2 space-y-8">
               {/* Revenue Chart */}
               <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-6">
                     <h2 className="text-lg font-semibold text-gray-900">
                        Revenue Overview
                     </h2>
                     <select className="text-sm border border-gray-300 rounded-lg px-3 py-2">
                        <option>Last 30 days</option>
                        <option>Last 90 days</option>
                        <option>This year</option>
                     </select>
                  </div>
                  <RevenueWidget />
               </div>

               {/* Recent Transactions */}
               <div className="bg-white rounded-xl border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                     <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-900">
                           Recent Transactions
                        </h2>
                        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center">
                           View All <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                     </div>
                  </div>
                  <TransactionsTable />
               </div>
            </div>

            {/* Side Panel */}
            <div className="space-y-8">
               {/* Alerts & Notifications */}
               <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                     Recent Alerts
                  </h2>
                  <div className="space-y-4">
                     {recentAlerts.map((alert, index) => (
                        <div key={index} className="p-4 rounded-lg bg-gray-50">
                           <div className="flex items-start gap-4">
                              <div
                                 className={`w-2 h-2 rounded-full mt-2 ${
                                    alert.type === "success"
                                       ? "bg-green-500"
                                       : "bg-yellow-500"
                                 }`}
                              />
                              <div>
                                 <h3 className="text-sm font-medium text-gray-900">
                                    {alert.title}
                                 </h3>
                                 <p className="text-sm text-gray-600 mt-1">
                                    {alert.description}
                                 </p>
                                 <span className="text-xs text-gray-500 mt-2 block">
                                    {alert.time}
                                 </span>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Quick Actions */}
               <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                     Quick Actions
                  </h2>
                  <div className="space-y-3">
                     <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center">
                           <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                              <ShoppingCart className="w-4 h-4 text-blue-600" />
                           </div>
                           <span className="text-sm font-medium text-gray-700">
                              Record Transaction
                           </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                     </button>
                     <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center">
                           <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center mr-3">
                              <Users className="w-4 h-4 text-green-600" />
                           </div>
                           <span className="text-sm font-medium text-gray-700">
                              Add Customer
                           </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default OverviewPage;
