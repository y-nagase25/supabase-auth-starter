'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export function GoogleLogin() {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const router = useRouter()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setMessage('')

        const supabase = createClient()

        const { data: { provider, url }, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: 'http://localhost:3000/auth/callback',
            }
        })

        if (error) {
            setMessage(error.message)
        } else {
            router.push('/')
            router.refresh()
        }

        setLoading(false)
    }

    return (
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            {message && (
                <div className="rounded-md bg-red-50 p-4">
                    <div className="text-sm text-red-700">{message}</div>
                </div>
            )}

            <div>
                <button
                    type="submit"
                    disabled={loading}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? 'Signing in...' : 'Sign in with Google'}
                </button>
            </div>
        </form>
    )
}
