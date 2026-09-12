import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
export const AnimatedTextLines = ({ text, className }) => {

    const containerRef = useRef(null);
    const lineRefs = useRef([]);
    const lines = text.split('\n').filter((line) => line.trim() !== '');

    useGSAP(() => {
        if (lineRefs.current.length > 0) {
            gsap.from(lineRefs.current, {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "back.out",
                stagger: 0.3,
                scrollTrigger: {
                    trigger: containerRef.current,

                }
            })
        }
    })

    return (
        <div
            ref={containerRef}
            className={className}
        >
            {lines.map((line, index) => (
                <span
                    key={index}
                    ref={(el) => (lineRefs.current[index] = el)}
                    className='block leading-relaxed tracking-wide text-pretty'
                >
                    {line}
                </span>
            ))}
        </div>
    )
}
