import React from "react";
import {
   Lock,
   ArrowUpRight,
   ArrowDownRight,
   Wallet,
   CreditCard,
   Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import TransactionsTable from "@/components/shared/TransactionsTable";
import AddTrxnDialog from "@/components/shared/AddTrxnDialog";

const TransactionsPage = () => {
   // Sample data - replace with actual data
   const stats = [
      {
         title: "Total Income",
         amount: "$24,500.00",
         change: "+12.5%",
         trend: "up",
         icon: ArrowUpRight,
         color: "emerald",
      },
      {
         title: "Total Expenses",
         amount: "$12,300.00",
         change: "+5.2%",
         trend: "down",
         icon: ArrowDownRight,
         color: "rose",
      },
      {
         title: "Net Cash Flow",
         amount: "$12,200.00",
         change: "+8.4%",
         trend: "up",
         icon: Wallet,
         color: "blue",
      },
   ];

   const integrations = [
      { name: "Stripe", icon: CreditCard, status: "coming-soon" },
      { name: "PayPal", icon: Wallet, status: "coming-soon" },
      { name: "Bank Feed", icon: CreditCard, status: "coming-soon" },
   ];

   return (
      <div className="w-full p-6 space-y-6">
         {/* Header Section */}
         {/* Quick Tips */}
         <div className="bg-emerald-50 rounded-xl p-6">
            <div className="flex items-start space-x-3">
               <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                     <Lock className="w-5 h-5 text-emerald-600" />
                  </div>
               </div>
               <div>
                  <h3 className="text-sm font-medium text-emerald-900">
                     Pro Tip: Connect Your Accounts
                  </h3>
                  <p className="mt-1 text-sm text-emerald-700">
                     Save time by connecting your payment gateways and bank
                     accounts for automated transaction tracking. Secure
                     integration coming soon!
                  </p>
               </div>
            </div>
         </div>
         <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="space-y-1">
               <h1 className="text-2xl font-semibold text-gray-900">
                  Transactions
               </h1>
               <p className="text-gray-600">
                  Track, manage, and analyze your financial transactions
               </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
               <AddTrxnDialog />
               <Button
                  variant="default"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
               >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Connect Account
               </Button>
            </div>
         </div>

         {/* Stats Cards */}
         <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
               <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
               >
                  <div className="flex items-center justify-between">
                     <span className="text-gray-600">{stat.title}</span>
                     <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${
                           stat.trend === "up"
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-rose-100 text-rose-800"
                        }`}
                     >
                        {stat.change}
                     </span>
                  </div>
                  <div className="mt-2 flex items-baseline">
                     <p className="text-2xl font-semibold text-gray-900">
                        {stat.amount}
                     </p>
                     <stat.icon
                        className={`ml-2 h-4 w-4 ${
                           stat.trend === "up"
                              ? "text-emerald-500"
                              : "text-rose-500"
                        }`}
                     />
                  </div>
               </div>
            ))}
         </div>

         {/* Main Content */}
         <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
               <div className="flex flex-col lg:flex-row justify-between gap-6">
                  <div className="space-y-2">
                     <h2 className="text-lg font-semibold text-gray-900">
                        Transaction History
                     </h2>
                     <p className="text-sm text-gray-600">
                        View and manage all your financial transactions in one
                        place
                     </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                     {integrations.map((integration, index) => (
                        <div
                           key={index}
                           className="flex items-center px-4 py-2 rounded-lg border border-gray-200 bg-gray-50"
                        >
                           <integration.icon className="w-4 h-4 text-gray-500 mr-2" />
                           <span className="text-sm font-medium text-gray-700">
                              {integration.name}
                           </span>
                           <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                              Coming Soon
                           </span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            <TransactionsTable />
         </div>
      </div>
   );
};

export default TransactionsPage;
