import React from 'react'

export const UnderConstructionPage = () => {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <div className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Under Construction</h1>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        We are working hard to improve the platform. Stay tuned for updates.
                    </p>
                </div>
            </div>
        </div>
    )
}

