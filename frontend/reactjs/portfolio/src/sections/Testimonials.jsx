import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {

  useGSAP(() => {
    gsap.from(".testimonial-card", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#testimonials",
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
      <TitleHeader
        title="Lo Que Opinan de Mi Trabajo"
        sub="⭐️ Opiniones destacadas de mis clientes"
      />
       <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex items-center gap-3">
                <div>
                  <img src={testimonial.imgPath} alt="" className="w-[100px] h-[100px] object-cover rounded-full border border-white/10" />
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;