import { useEffect, useRef,  } from "react";
import { Globe, Gamepad, Code } from "lucide-react";

const Specializations = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
  const slider = sliderRef.current;
  if (!slider) return;

  if (window.innerWidth >= 768) return;

  let direction = 1;
  const speed = 0.6;
  const edgeBuffer = 2; // IMPORTANT

  let rafId: number;

  const animate = () => {
    const maxScroll =
      slider.scrollWidth - slider.clientWidth;

    if (slider.scrollLeft >= maxScroll - edgeBuffer) {
      direction = -1;
    }

    if (slider.scrollLeft <= edgeBuffer) {
      direction = 1;
    }

    slider.scrollLeft += speed * direction;

    rafId = requestAnimationFrame(animate);
  };

  rafId = requestAnimationFrame(animate);

  return () => cancelAnimationFrame(rafId);
}, []);


  return (
    <div ref={sliderRef}
     className="xl:gap-y-[3rem] xl:-mt-[0rem]
    lg:-mt-[1rem]
    md:gap-y-[2rem] md:-mt-[2rem] md:flex-col md:overflow-visible
    gap-x-[6rem] mt-[2rem]
    overflow-x-auto overflow-x-hidden
     scrollbar-hide
    flex flex-row scroll-smooth scrollbar-hide">


    
      {/* WEBDEV */}
        <div className="xl:h-[15rem] xl:w-[15rem]
        lg:h-[14rem] lg:w-[14rem] 
        md:h-[13rem] md:w-[13rem] md:gap-[0.5rem] md:p-[1rem]
        h-[13rem] w-[13rem] gap-[0.5rem] p-[1rem] flex-none snap-center shrink-0
        bg-misc flex flex-col text-font relative">

     <Globe className="w-12 h-12 text-font"/>

      <p className="xl:text-xl_content xl:pt-[1rem]
      lg:text-lg_content lg:pt-[1rem]
      md:text-md_content md:pt-[1rem]
      text-sm_content pt-[1rem]
      font-bold text-inter">Website Development</p>
      <p className="xl:text-xl_intro 
      lg:text-lg_content
      md:text-md_content
      text-sm_content
      font-light text-inter">
        TailwindCSS, MongoDB, React, NodeJS, Firebase, Vercel
      </p>
        <p className="xl:text-xl_intro
        lg:text-lg_intro
        md:text-md_intro
        text-sm_intro
        absolute bottom-4 right-4 font-light">
        5+ Projects
        </p>
    </div>
    {/* GAMEDEV */}
    <div className="xl:h-[15rem] xl:w-[15rem] xl:gap-[0.5rem] xl:p-[1rem]
    lg:h-[15rem] lg:w-[15rem] lg:gap-[0.5rem] lg:p-[1rem]
    md:h-[13rem] md:w-[13rem] md:gap-[0.5rem] md:p-[1rem]
    h-[13rem] w-[13rem] gap-[0.5rem] p-[1rem] flex-none snap-center shrink-0
        bg-highlight flex flex-col text-misc relative">

      <Gamepad className="w-12 h-12 text-misc"/>

      <p className="xl:text-xl_content xl:pt-[1rem]
      lg:text-lg_content lg:pt-[1rem]
      md:text-md_content md:pt-[1rem]
      text-sm_content pt-[1rem]
      font-bold text-inter">Game Development</p>
      <p className="xl:text-xl_intro 
      lg:text-lg_content
      md:text-md_content
      text-sm_content
      font-light text-inter">
        Godot, Unreal Engine 5, RPG Maker
      </p>
      <p className="xl:text-xl_intro
      lg:text-lg_intro
      md:text-md_intro
      text-sm_intro
        absolute bottom-4 right-4 font-light">
        5+ Projects
        </p>
    </div>
    {/* COMPSCI */}
    <div className="xl:h-[15rem] xl:w-[15rem] xl:gap-[0.5rem] xl:p-[1rem]
    lg:h-[15rem] lg:w-[15rem] lg:gap-[0.5rem] lg:p-[1rem]
    md:h-[13rem] md:w-[13rem] md:gap-[0.5rem] md:p-[1rem]
    h-[13rem] w-[13rem] gap-[0.5rem] p-[1rem] flex-none snap-center shrink-0
        bg-misc flex flex-col text-font relative">
          
      <Code className="w-12 h-12 text-font"/>

      <p className="xl:text-xl_content xl:pt-[1rem]
      lg:text-lg_content lg:pt-[1rem]
      md:text-md_content md:pt-[1rem]
      text-sm_content pt-[1rem]
      font-bold text-inter">Computer Science</p>
      <p className="xl:text-xl_intro 
      lg:text-lg_content
      md:text-md_content
      text-sm_content
      font-light text-inter">
        AI & ML using Python, Java and C++, Arduino
      </p>
      <p className="xl:text-xl_intro
      lg:text-lg_intro
      md:text-md_intro
      text-sm_intro
        absolute bottom-4 right-4 font-light">
        5+ Projects
    </p>
    </div>
    </div>
    
  );
};

export default Specializations;
