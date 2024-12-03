"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
   Drawer,
   DrawerClose,
   DrawerContent,
   DrawerDescription,
   DrawerFooter,
   DrawerHeader,
   DrawerTitle,
   DrawerTrigger,
} from "@/components/ui/drawer";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";

const AddTrxnDialog = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm();
   const onSubmit = (data: any) => console.log(data);
   const [isOpen, setIsOpen] = useState(false);

   const handleCancel = () => {
      reset();
      setIsOpen(false);
   };

   return (
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
         <DrawerTrigger asChild>
            <Button
               variant="outline"
               className="border-dashed border-2 hover:border-emerald-500 hover:text-emerald-600"
            >
               <Plus className="w-4 h-4 mr-2" />
               Add Transaction
            </Button>
         </DrawerTrigger>
         <DrawerContent>
            <DrawerHeader>
               <DrawerTitle>Record new transaction</DrawerTitle>
               <DrawerDescription>
                  Manually add a new transaction
               </DrawerDescription>
            </DrawerHeader>
            <form
               onSubmit={handleSubmit(onSubmit)}
               className="p-4 flex justify-center"
            >
               <div className="w-full max-w-2xl">
                  <div className="mb-4">
                     <label
                        htmlFor="date"
                        className="block text-sm font-medium text-gray-700"
                     >
                        Date
                     </label>
                     <input
                        id="date"
                        {...register("date", { required: true })}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white"
                        type="date"
                        readOnly={false}
                     />
                     {errors.date && (
                        <span className="text-red-500 text-xs">
                           This field is required
                        </span>
                     )}
                  </div>
                  <div className="mb-4">
                     <label
                        htmlFor="transactionType"
                        className="block text-sm font-medium text-gray-700"
                     >
                        Transaction Type
                     </label>
                     <select
                        id="transactionType"
                        {...register("transactionType", { required: true })}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white"
                     >
                        <option value="">Select transaction type</option>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                     </select>
                     {errors.transactionType && (
                        <span className="text-red-500 text-xs">
                           This field is required
                        </span>
                     )}
                  </div>
                  <div className="mb-4">
                     <label
                        htmlFor="transactionTitle"
                        className="block text-sm font-medium text-gray-700"
                     >
                        Transaction Title
                     </label>
                     <input
                        id="transactionTitle"
                        {...register("transactionTitle", { required: true })}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white"
                     />
                     {errors.transactionTitle && (
                        <span className="text-red-500 text-xs">
                           This field is required
                        </span>
                     )}
                  </div>
                  <div className="mb-4">
                     <label
                        htmlFor="amount"
                        className="block text-sm font-medium text-gray-700"
                     >
                        Amount
                     </label>
                     <div className="relative">
                        <input
                           id="amount"
                           {...register("amount", {
                              required: true,
                              valueAsNumber: true,
                           })}
                           defaultValue={0}
                           className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white"
                        />
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 text-sm">
                           INR
                        </span>
                     </div>
                     {errors.amount && (
                        <span className="text-red-500 text-xs">
                           This field is required
                        </span>
                     )}
                  </div>
                  <div className="mb-4">
                     <label
                        htmlFor="transactionDescription"
                        className="block text-sm font-medium text-gray-700"
                     >
                        Transaction Description
                     </label>
                     <textarea
                        id="transactionDescription"
                        {...register("transactionDescription", {
                           required: true,
                        })}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white"
                     />
                     {errors.transactionDescription && (
                        <span className="text-red-500 text-xs">
                           This field is required
                        </span>
                     )}
                  </div>

                  <DrawerFooter>
                     <div className="flex self-end gap-5">
                        <Button className="w-max text-white" type="submit">
                           Submit
                        </Button>
                        <DrawerClose>
                           <Button variant="outline" onClick={handleCancel}>
                              Cancel
                           </Button>
                        </DrawerClose>
                     </div>
                  </DrawerFooter>
               </div>
            </form>
         </DrawerContent>
      </Drawer>
   );
};

export default AddTrxnDialog;
