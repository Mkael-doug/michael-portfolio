import AnimatedHeaderSection from "../components/AnimatedHeaderSection"
import { useRef } from "react"
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const imgRef = useRef(null);
    const text = `Apaixonado por arquitetura limpa, desenvolvo soluções 
    escaláveis e de alto desempenho, 
    do protótipo ao deploy.`
    const aboutText = `Obcecado por criar aplicativos rápidos e intuitivos — de interfaces React com precisão de pixel a backends serverless robustos. Cada linha de código é uma promessa: qualidade que os usuários realmente sentem.

Quando não estou no terminal:
🚀 Estou desenvolvendo projetos pessoais e tirando novas ideias do papel.
📚 Lendo sobre tecnologia, design e desenvolvimento.
🎲 Mestrando/jogando RPG de mesa (storytelling, planejamento e resolução de problemas em grupo).`


    useGSAP(() => {
        gsap.to("#about", {
            scale: 0.95,
            scrollTrigger: {
                trigger: "#about",
                start: "bottom 80%",
                end: "bottom 20%",
                scrub: true,
            },
            ease: "power1.inOut",
        });

        gsap.set(imgRef.current, {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        });
        gsap.to(imgRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 2,
            ease: "power4.out",
            scrollTrigger: { trigger: imgRef.current },
        });
    });

    return (
        <section id='about' className='min-h-screen bg-black rounded-b-4xl'>
            <AnimatedHeaderSection
                subTitle={"Codifique com propósito, construa para escalar."}
                title={"About"}
                text={text}
                textColor={"text-white"}
                withScrollTrigger={true}
            />
            <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
                <img
                    ref={imgRef}
                    src="images/me.jpeg"
                    alt="Me"
                    className="w-md rounded-3xl"
                />
                <AnimatedTextLines text={aboutText} className={"w-full"} />
            </div>
        </section>
    )
}

export default About