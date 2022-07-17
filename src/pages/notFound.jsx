import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-full pt-16 pb-12 flex flex-col bg-white">
            <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-16">
                    <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-wide">404 error</p>
                        <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found.</h1>
                        <div className="mt-6">
                            <a href="/" className="text-base font-medium">
                                Go back home<span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default NotFound;