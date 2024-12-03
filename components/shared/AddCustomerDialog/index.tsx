"use client";
import React from "react";
import { useForm } from "react-hook-form";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const AddCustomerDialog = () => {
   const { register, handleSubmit, formState: { errors } } = useForm();
   const onSubmit = (data: any) => console.log(data);

   return (
      <Dialog>
         <DialogTrigger>
            <Button
               variant="outline"
               className="border-dashed border-2 hover:border-blue-500 hover:text-blue-600"
            >
               <Plus className="w-4 h-4 mr-2" />
               Add Customer
            </Button>
         </DialogTrigger>
         <DialogContent>
            <DialogHeader>
               <DialogTitle>Add Customer</DialogTitle>
               <DialogDescription>
                  Fill in the form to add a new customer.
               </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
               <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name*</label>
                  <input
                     id="name"
                     {...register("name", { required: true })}
                     className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white"
                     type="text"
                     required
                  />
                  {errors.name && <span className="text-red-500 text-xs">This field is required</span>}
               </div>
               <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone*</label>
                  <input
                     id="phone"
                     {...register("phone", { required: true, valueAsNumber: true })}
                     className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white"
                     type="text"
                     required
                  />
                  {errors.phone && <span className="text-red-500 text-xs">This field is required</span>}
               </div>
               <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                     id="email"
                     {...register("email")}
                     className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white"
                     type="email"
                  />
               </div>
               <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                     id="address"
                     {...register("address")}
                     className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white"
                     type="text"
                  />
               </div>
               <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
                  <input
                     id="companyName"
                     {...register("companyName")}
                     className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white"
                     type="text"
                  />
               </div>
               <div>
                  <label htmlFor="gstNo" className="block text-sm font-medium text-gray-700">GST No</label>
                  <input
                     id="gstNo"
                     {...register("gstNo")}
                     className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white"
                     type="text"
                  />
               </div>
               <div className="text-right">
                  <Button type="submit" variant="default" className="bg-blue-500 hover:bg-blue-700 text-white">
                     Add Customer
                  </Button>
               </div>
            </form>
         </DialogContent>
      </Dialog>
   );
};

export default AddCustomerDialog;
