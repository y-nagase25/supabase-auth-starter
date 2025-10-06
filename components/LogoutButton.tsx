'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export function LogoutButton() {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleLogout = async () => {
        setLoading(true)

        const supabase = await createClient()
        await supabase.auth.signOut()

        router.push('/login')
        router.refresh()
    }

    return (
        <button
            onClick={handleLogout}
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {loading ? 'Signing out...' : 'Sign out'}
        </button>
    )
}
