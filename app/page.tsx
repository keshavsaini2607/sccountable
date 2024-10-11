import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const App = () => {
    return (
        <div>
            <Link href={'/home'}>
                <Button>Go To Dashboard</Button>
            </Link>
        </div>
    )
}

export default App