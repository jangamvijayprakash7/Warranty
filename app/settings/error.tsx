'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg m-4">
            <h2 className="text-red-800 font-bold mb-2">Something went wrong!</h2>
            <p className="text-red-600 mb-4">{error.message}</p>
            <button
                onClick={() => reset()}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
                Try again
            </button>
        </div>
    );
}
