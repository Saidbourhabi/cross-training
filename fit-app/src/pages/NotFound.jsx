import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div 
                className="text-center px-6"
                role="alert"
                >
                <h1 className="text-5xl md:text-7xl font-bold text-[#F0DE36]">
                    404
                </h1>
                <p className="mt-2 font-semibold text-lg text-white">
                    Page not found
                </p>
                <p className="mt-2 text-lg text-white/70 space-y-1">
                    <span className="block">The page you are looking for doesn't exist or has been moved.</span>
                    <span className="block">This page isn’t in the program.</span>
                    <span className="block">Get back on track and keep training.</span>
                </p>
                <Link
                    to="/"
                    className="inline-block text-[#F0DE36] mt-6 border border-[#F0DE36] px-6 py-2 text-sm transition hover:bg-white hover:text-black">
                        Back Home
                </Link>
            </div>
        </div>
    )
}