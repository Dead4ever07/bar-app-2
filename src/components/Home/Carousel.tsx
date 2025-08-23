import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";


const slides = [
    { img: "/home/Carousel1.jpeg", title: "Ricardo e Nelson", desc: "" },
    { img: "/home/Carousel2.jpeg", title: "Barbara", desc: "" },
    { img: "/home/Carousel3.jpeg", title: "Inês", desc: "" },
    { img: "/home/Carousel4.jpeg", title: "Bia Carvalho e Gonçalo", desc: "" },
];

export default function Carousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    <Image
                        src={slide.img}
                        alt={slide.title}
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />

                    {/* Bottom animated arrow */}
                    <button onClick={() =>
                        window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
                    } className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white animate-bounce">
                        <ChevronDown size={64} />
                    </button>



                    {/* Centered title */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                        <span className="bg-black bg-opacity-60 text-white text-3xl md:text-5xl font-bold px-4 py-2 rounded">
                            Comissão de Festas S.Sebastião '05
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}
