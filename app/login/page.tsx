import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { GoogleLogin } from '@/components/GoogleLogin'

export default async function LoginPage() {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (user) {
        redirect('/')
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        <a
                            href="/"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            Go Home
                        </a>
                    </p>
                </div>
                <GoogleLogin />
            </div>
        </div>
    )
}
