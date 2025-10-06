import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { LogoutButton } from '@/components/LogoutButton'
import Image from 'next/image'

export default async function Home() {
    const supabase = await createClient()

    const {
        data: { user },
        error
    } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                <div className="text-center">
                    <div className="space-y-4">
                        <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                            <p className="text-sm text-green-800">
                                🎉 Authentication is working correctly!
                            </p>
                        </div>
                    </div>
                    <div className="my-4 text-left">
                        <p className="text-gray-600 mb-2">
                            Your email: <strong>{user?.email}</strong>
                        </p>
                        <p className="text-gray-600 mb-2">
                            Your name: <strong>{user?.user_metadata.name}</strong>
                        </p>
                    </div>
                    <div className="mx-auto my-4 flex items-center justify-center">
                        <Image
                            src={user?.user_metadata.avatar_url}
                            alt={`${user?.user_metadata.name}'s profile`}
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                    </div>

                    <LogoutButton />
                </div>
            </div>
        </div>
    )
}
