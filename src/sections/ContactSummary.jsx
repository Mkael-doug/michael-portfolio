import { useRef } from 'react'
import Marquee from '../components/Marquee';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
const ContactSummary = () => {
    const containerRef = useRef(null);
    const items = [
        "Inovação",
        "Precisão",
        "Qualidade",
        "Confiança",
        "Colaboração",
        "Excelência",
    ];
    const items2 = [
        "Entre em contato",
        "Entre em contato",
        "Entre em contato",
        "Entre em contato",
        "Entre em contato",
        "Entre em contato",
    ];

    useGSAP(() => {
        gsap.to(containerRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        });
    }, []);

    return (
        <section
            ref={containerRef}
            className='flex flex-col items-center justify-between min-h-screen gap-12 mt-16'
        >
            <Marquee items={items} />
            <div className="overflow-hidden font-light text-center contact-text-responsive">
                <p className="">
                    "Vamos construir <span className="text-gold">juntos</span><br />
                    uma aplicação web <br />
                    <span className="font-semibold">memorável</span> &{" "}<span className="italic">inspiradora</span>"
                </p>
            </div>
            <Marquee
                items={items2}
                reverse={true}
                className="text-black bg-transparent border-y-2"
                iconClassName="stroke-gold stroke-2 text-primary"
                icon="material-symbols-light:square"
            />
        </section>
    )
}

export default ContactSummary