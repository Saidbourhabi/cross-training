export default function Testimonials() {
return (
    <section className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <img
                alt="Logo"
                src="https://res.cloudinary.com/dgzn9nczh/image/upload/v1780082213/samples/cloudinary-icon.png"
                className="mx-auto h-12"
                fetchPriority="high"
                loading="lazy"
            />
            <figure className="mt-10">
                <blockquote className="text-center text-xl/7 font-semibold text-white sm:text-2xl/8">
                    <p>
                        “ We believe everyone should have access to quality facilities without having to pay exorbitant prices. 
                        We are committed to democratizing sport. That's why we created a concept designed by Moroccans, for Moroccans. 
                        With us, you'll always feel free to train, eat, drink, laugh, and create memorable moments, rich in personal and collective experiences. 
                        At Punch, you'll never be just a customer; you'll always feel at home, because Punch wants to be Dar Lkbira for you. ”
                    </p>
                </blockquote>
                <figcaption className="mt-10">
                    <img
                        alt="Badr Hari"
                        src="https://res.cloudinary.com/dgzn9nczh/image/upload/v1784229667/badrhari_nqut6n.jpg"
                        className="mx-auto size-15 rounded-full object-cover"
                        fetchPriority="high"
                        loading="lazy"
                />
                <div className="mt-4 flex flex-col items-center justify-center gap-1 text-center">
                    <div className="font-semibold text-white">BADR HARI</div>
                    <div className="text-[#F0DE36]">Founder</div>
                </div>
                </figcaption>
            </figure>
        </div>
    </section>
)
}
