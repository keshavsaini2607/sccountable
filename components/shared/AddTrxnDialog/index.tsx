'use client'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'


const AddTrxnDialog = () => {
    return (
        <Dialog>
            <DialogTrigger className='text-sm'>
                Add New Transaction
                {/* <Button variant={'outline'} className='border-primary text-primary' size={'sm'}>Add New Transaction</Button> */}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default AddTrxnDialog