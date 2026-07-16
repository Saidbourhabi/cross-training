import { useState } from 'react'
import { FaCircle, FaArrowRight, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Banner() {
    const [isClosed, setIsClosed] = useState(false)
    if (isClosed) return null
    return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-black px-6 py-2.5 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 sm:px-3.5 sm:before:flex-1">
      {/* // *Banner Content */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm/6 text-white">
            <strong className="font-semibold text-[#F0DE36]">Special offer</strong>
            <FaCircle aria-hidden="true" className="mx-2 inline size-0.5 fill-current" />
                Your first month for 190 DHS
        </p>
        <Link
            to="/join"
            className="flex-none rounded-full bg-[#F0DE36] px-3.5 py-1 text-sm font-semibold text-black hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
            Register now 
            <FaArrowRight aria-hidden="true" className="ml-1 inline size-3" />
        </Link>
    </div>

      {/* // *Close button */}
        <div className="flex flex-1 justify-end">
            <button
                type="button"
                onClick={() => setIsClosed(true)}
                className="-m-3 p-3 focus-visible:-outline-offset-4 cursor-pointer"
            >
                <span className="sr-only">Dismiss</span>
                <FaTimes aria-hidden="true" className="size-5 text-[#F0DE36] hover:text-white transition" />
            </button>
        </div>
    </div>
    )
}