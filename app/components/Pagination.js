'use client';

import Link from 'next/link';

export default function Pagination({ currentPage, totalPages, basePath }) {
    if (totalPages <= 1) return null;

    const pages = [];

    // Simple logic to show a window of pages
    // e.g. 1 ... 4 5 6 ... 10
    // For now, let's keep it simple: show all or a small range
    // Improved logic:

    const showMax = 5;
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + showMax - 1);

    if (endPage - startPage < showMax - 1) {
        startPage = Math.max(1, endPage - showMax + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    return (
        <nav className="flex justify-center items-center gap-2 mt-12" aria-label="Blog pagination">
            {/* Prev Button */}
            {currentPage > 1 ? (
                <Link
                    href={`${basePath}?page=${currentPage - 1}`}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                >
                    &larr; Prev
                </Link>
            ) : (
                <span className="px-4 py-2 rounded-lg border border-gray-100 text-gray-300 cursor-not-allowed">
                    &larr; Prev
                </span>
            )}

            {/* Page Numbers */}
            {startPage > 1 && (
                <>
                    <Link
                        href={`${basePath}?page=1`}
                        className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-colors ${currentPage === 1
                                ? 'bg-blue-600 border-blue-600 text-white'
                                : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                            }`}
                    >
                        1
                    </Link>
                    {startPage > 2 && <span className="text-gray-400">...</span>}
                </>
            )}

            {pages.map((p) => (
                <Link
                    key={p}
                    href={`${basePath}?page=${p}`}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-colors ${p === currentPage
                            ? 'bg-blue-600 border-blue-600 text-white'
                            : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                        }`}
                >
                    {p}
                </Link>
            ))}

            {endPage < totalPages && (
                <>
                    {endPage < totalPages - 1 && <span className="text-gray-400">...</span>}
                    <Link
                        href={`${basePath}?page=${totalPages}`}
                        className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-colors ${currentPage === totalPages
                                ? 'bg-blue-600 border-blue-600 text-white'
                                : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                            }`}
                    >
                        {totalPages}
                    </Link>
                </>
            )}

            {/* Next Button */}
            {currentPage < totalPages ? (
                <Link
                    href={`${basePath}?page=${currentPage + 1}`}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                >
                    Next &rarr;
                </Link>
            ) : (
                <span className="px-4 py-2 rounded-lg border border-gray-100 text-gray-300 cursor-not-allowed">
                    Next &rarr;
                </span>
            )}
        </nav>
    );
}
