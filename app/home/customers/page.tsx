import React from "react";
import {
   Lock,
   Users,
   TrendingUp,
   DollarSign,
   Star,
   Building2,
   Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomersTable from "@/components/shared/CustomersTable";
import AddCustomerDialog from "@/components/shared/AddCustomerDialog";

const CustomersPage = () => {
   // Sample data - replace with actual data
   const stats = [
      {
         title: "Total Customers",
         amount: "1,234",
         change: "+15.3%",
         trend: "up",
         icon: Users,
         color: "blue",
      },
      {
         title: "Revenue per Customer",
         amount: "$850.00",
         change: "+8.2%",
         trend: "up",
         icon: DollarSign,
         color: "emerald",
      },
      {
         title: "Customer Satisfaction",
         amount: "4.8/5.0",
         change: "+2.4%",
         trend: "up",
         icon: Star,
         color: "amber",
      },
   ];

   const integrations = [
      { name: "Salesforce", icon: Building2, status: "coming-soon" },
      { name: "HubSpot", icon: Users, status: "coming-soon" },
      { name: "Pipedrive", icon: TrendingUp, status: "coming-soon" },
   ];

   return (
      <div className="w-full p-6 space-y-6">
         {/* Quick Tips */}
         <div className="bg-blue-50 rounded-xl p-6">
            <div className="flex items-start space-x-3">
               <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                     <Lock className="w-5 h-5 text-blue-600" />
                  </div>
               </div>
               <div>
                  <h3 className="text-sm font-medium text-blue-900">
                     Pro Tip: Integrate Your CRM
                  </h3>
                  <p className="mt-1 text-sm text-blue-700">
                     Save time by connecting your CRM platform for automated
                     customer data synchronization. Get a unified view of your
                     customer relationships. Secure integration coming soon!
                  </p>
               </div>
            </div>
         </div>
         {/* Header Section */}
         <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="space-y-1">
               <h1 className="text-2xl font-semibold text-gray-900">
                  Customers
               </h1>
               <p className="text-gray-600">
                  Manage and analyze your customer relationships
               </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
               <AddCustomerDialog />
               <Button
                  variant="default"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
               >
                  <Building2 className="w-4 h-4 mr-2" />
                  Connect CRM
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
                     <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {stat.change}
                     </span>
                  </div>
                  <div className="mt-2 flex items-baseline">
                     <p className="text-2xl font-semibold text-gray-900">
                        {stat.amount}
                     </p>
                     <stat.icon className="ml-2 h-4 w-4 text-blue-500" />
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
                        Customer Directory
                     </h2>
                     <p className="text-sm text-gray-600">
                        View and manage all your customer relationships in one
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

            <CustomersTable />
         </div>
      </div>
   );
};

export default CustomersPage;
