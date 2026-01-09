import Navbar from "./components/Navbar";
import Specializations from "./components/Specializations";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const App: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="bg-misc">
      {/* LAYER 1 */}
      <Navbar />
      <div
        id="home"
        className="
        md:flex min-h-screen relative"
      >
        {/* INTRODUCTION */}
        <div
          className=" xl:pl-[5rem] xl:pt-[5rem] xl:mr-[2rem]
          lg:pl-[4rem] lg:pt-[7rem]
          md:pl-[3rem] md:pt-[9rem] md:order-1 md:items-start md:text-start md:px-[0rem]
          pt-[20rem] px-[5rem]
          flex flex-col items-center justify-center text-center relative
          order-2 z-10 h-full
          text-shadow-light dark:text-shadow-none
          "
        >
          <p
            className="
                xl:text-xl_heading1
                lg:text-lg_heading1
                md:text-md_heading1
                text-sm_heading1
                font-bold text-font font-DM_Sans w-full
              "
          >
            <span
              className="xl:text-xl_heading1 
              lg:text-lg_heading1 
              md:text-md_heading1 
              text-sm_intro font-light"
            >
              Hello!
              <br className="hidden md:block" /> I'm
            </span>
            <br className="block md:hidden" /> Cristopher Ian
          </p>

          {/* LINE + PROFESSION */}
          <motion.div
            className="
                md:gap-[1rem] md:px-[0rem] md:pr-[2rem]
                w-full flex items-center justify-center md:justify-start gap-[0.2rem]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.hr
              className="
                  block md:flex-1 border-t border-gray-300 my-0
                  w-1/5 md:w-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.15 }}
              style={{ originX: 0 }}
            />

            <motion.p
              className="
                  xl:text-xl_heading3 
                  lg:text-lg_heading3 
                  md:text-md_heading3 md:text-start
                  text-sm_heading3
                  font-light text-font font-inter text-center 
                  ml-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              Computer Programmer
            </motion.p>
          </motion.div>

          <p
            className="xl:text-xl_content xl:pt-[1rem] 
            lg:text-lg_content lg:pt-[1rem] 
            md:text-md_content md:pt-[1rem] 
            text-sm_content pt-[1rem]
            font-normal font-inter text-font"
          >
            Hello there! I’m Cristopher Ian, a Computer Programmer. I specialize
            in game development, website design, and computer science, creating
            engaging games, intuitive websites, and innovative tech solutions.
          </p>

          <div
            className="xl:gap-[5rem] xl:pt-[3rem]
            lg:gap-[5rem]
            md:gap-[4rem] md:pt-[2rem] md:-mx-[0rem]
            gap-[2rem] pt-[1rem] -mx-[2rem]
            flex"
          >
            <a href="/assets/cv.pdf" download="Cristopher_Ian_Artacho_CV.pdf">
              <button
                className=" xl:px-[2rem] xl:py-[1rem] xl:text-xl_content
    lg:px-[1.75em] lg:py-[0.75rem] lg:text-md_content
    md:px-[1.50rem] md:py-[0.50rem] md:text-md_content
    px-[1rem] py-[0.50rem] text-sm_content
    font-bold text-inter bg-highlight text-misc"
              >
                Download CV
              </button>
            </a>
            <button
              onClick={scrollToContact}
              className=" xl:gap-[5rem]
              lg:gap-[4rem]
              md:gap-[3rem]
              gap-[2rem]
              flex items-center group font-light font-inter text-font"
            >
              Contact Me
              <ArrowRight
                size={16}
                className="scale-x-[2] transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
        {/* PHOTO */}
        <div
          className="
              absolute inset-0 z-0 bg-cover bg-center
              md:relative md:top-0 md:w-full order-1 md:order-2 
            "
        >
          <img
            src="/images/portrait.png"
            alt="Main"
            className="
                md:relative md:mt-[15vh] md:w-auto md:h-auto 
                order-1 md:order-2 
                mt-[20vh] aspect-[1] 
              "
          />
        </div>
      </div>
      {/* EXTENSION (LAYER 1)*/}
      <div
        className=" md:mt-[0rem]
      mt-[2rem] min-h-screen md:flex"
      >
        {/* BIO */}
        <div
          className=" xl:px-[9rem]
        lg:px-[6rem]
        md:px-[5rem] md:py-[6rem]
        px-[2rem]
        w-full text-font "
        >
          {/* BIO */}
          <div
            className=" xl:-mx-[4rem] xl:gap-[1rem]
        lg:-mx-[3rem] 
        md:-mx-[2rem] 
        -mx-[1rem] gap-[0.5rem]
        flex items-center "
          >
            <motion.div
              className=" xl:w-[4rem]
          lg:w-[3rem]
          md:w-[2rem]
          w-[1rem]
          h-px bg-font"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.15 }}
              style={{ originX: 0 }}
            ></motion.div>
            <motion.p
              className="xl:text-xl_heading3 
            lg:text-lg_heading3
            md:text-md_heading3
            text-sm_heading3
            font-light text-font font-inter whitespace-nowrap"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              Wanna know more?
            </motion.p>
          </div>
          <p
            className="xl:text-xl_heading2
        lg:text-lg_heading2 lg:-mr-[5rem]
        md:text-md_heading2 
        text-sm_heading2
        font-normal text-font font-inter"
          >
            Biography
          </p>
          <p
            className="xl:text-xl_content xl:pt-[1rem] xl:pr-[3rem] xl:-mr-[0rem]
        lg:text-lg_content lg:pt-[0.75rem] lg:-mr-[3rem]
        md:text-md_content md:pt-[0.75rem] md:-mr-[2.25rem] md:mr-[0rem]
        text-sm_content pt-[0.5rem] mr-[5rem] 
        font-normal font-inter text-font"
          >
            I’m a Computer Science student from WVSU specializing in game
            development, website development, and intelligent systems. I
            transform ideas into interactive digital experiences by blending
            creativity with purposeful engineering. My work spans game
            development, interactive applications, and intelligent
            systems—focused on usability, performance, and meaningful design.
          </p>
          <motion.div
            className="xl:pt-[3rem] xl:text-xl_content
          lg:pt-[3rem] lg:text-lg_content
          md:pt-[2rem] md:text-md_content
          pt-[2rem] text-sm_content
          font-inter"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="font-bold">Soft Skills:</p>
            <ul
              className="xl:ml-[2rem]
            ml-[1.5rem]
            list-disc list-inside"
            >
              <li>Detail-oriented</li>
              <li>Analytical thinker</li>
              <li>Adaptability</li>
              <li>Decision-Making</li>
            </ul>
          </motion.div>
          <motion.div
            className="xl:pt-[3rem] xl:text-xl_content xl:space-y-2
          lg:pt-[2.25rem] lg:text-lg_content lg:space-y-1
          md:text-md_content
          pt-[2rem] text-sm_content space-y-1
          font-inter"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p>
              <span className="font-bold">4</span> Years of Experience
            </p>
            <p>
              <span className="font-bold">10+</span> Projects and Outputs
            </p>
          </motion.div>
        </div>
        {/* SPECIALIZATION */}
        <div
          className=" xl:-ml-[5rem]
        w-full  flex justify-center items-center"
        >
          <Specializations />
        </div>
      </div>

      {/* LAYER 2 - PROJECTS */}
      <div
        id="projects"
        className="xl:px-[5rem]
      lg:px-[6rem]
      md:px-[5rem] md:pt-[0]
      px-[2rem] pt-[2rem]
      min-h-screen "
      >
        <p
          className="xl:text-xl_heading1 xl:-mr-[5rem] 
      lg:text-lg_heading1 
      md:text-md_heading1 
      text-sm_heading1 
      font-bold text-font font-DM_Sans"
        >
          Portfolio
        </p>

        <motion.div
          className="md:gap-3 
      gap-1
      flex items-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            className="xl:w-[4rem] 
        lg:w-[3rem]
        md:w-[3rem]  
        w-[1rem] h-px
        bg-font"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ originX: 0 }}
          ></motion.div>
          <motion.p
            className="xl:text-xl_heading3 
          lg:text-lg_heading3
          md:text-md_heading3 
          text-sm_heading3 
          font-light text-font font-inter whitespace-nowrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            Explore my projects!
          </motion.p>
        </motion.div>
        <div className="mt-[3rem]">
          <Portfolio ref={scrollRef} />
        </div>

        {/* ARROW BUTTONS */}
        <div
          className="xl:gap-[65rem] xl:mt-[4rem] 
      lg:gap-[50rem] lg:mt-[3rem] 
      md:gap-[40rem] md:mt-[3rem] 
      gap-[15rem] mt-[3rem] 
      flex justify-center text-font"
        >
          <button
            className="xl:text-xl_content
        lg:text-lg_content
        md:text-md_content
        text-sm_content
        text-inter text-start"
            onClick={scrollLeft}
          >
            <ArrowLeft
              size={16}
              className="
                  scale-x-[2]
                  transition-transform duration-300 group-hover:translate-x-1"
            />
            <p className="pt-[1rem]">Previous</p>
          </button>
          <button
            className="xl:text-xl_content
        lg:text-lg_content
        md:text-md_content
        text-sm_content
        text-start"
            onClick={scrollRight}
          >
            <ArrowRight
              size={16}
              className="
                  scale-x-[2] 
                  transition-transform duration-300 group-hover:translate-x-1"
            />
            <p className="pt-[1rem]">Next</p>
          </button>
        </div>
      </div>
      {/* LAYER 3 - CONTACT */}
      <div
        id="contact"
        className="md:flex
      pt-[3rem] min-h-screen relative"
      >
        <div className="flex">
          {/* PHOTO */}
          <div
            className="hidden md:block md:static
          absolute inset-0 pl-[10rem] w-full h-full bg-cover z-10"
          >
            <img
              src="/images/sub.jpg"
              alt="Background"
              className=" xl:aspect-[1] 
            lg:aspect-[1] 
            md:aspect-[1/1.5] 
            md:relative md:mt-[15vh] md:w-auto md:h-auto 
            order-1 md:order-2 
            mt-[5vh] aspect-[1/1.45] 
          "
            />
          </div>
          {/* FORM */}
          <div
            className=" xl:px-[5rem] 
          lg:px-[3.75rem] 
          md:px-[2rem] md:mt-[4rem]
          px-[2rem] 
          mt-[4rem]
          w-full relative z-20"
          >
            <motion.div
              className="
            md:gap-[1rem] 
            gap-[0.5rem]
            flex items-center"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div
                className="xl:w-[4rem] 
              lg:w-[3rem]
              md:w-[3rem]
              w-[2rem]
              h-px bg-font"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.15 }}
                style={{ originX: 0 }}
              />
              <motion.p
                className="xl:text-xl_heading3 
                lg:text-lg_heading3
                md:text-md_heading3 
                text-sm_heading3 
                font-light text-font font-inter whitespace-nowrap"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                Inquire me Now!
              </motion.p>
            </motion.div>
            <p
              className="xl:text-xl_heading1
            lg:text-lg_heading1 
            md:text-md_heading1 md:-mr-[5rem]
            text-md_heading1 
            font-bold text-font font-DM_Sans"
            >
              Contact Me!
            </p>
            <p
              className="xl:text-xl_content
            lg:text-lg_content
            md:text-md_content
            text-sm_content
            font-normal font-inter text-font"
            >
              Have questions, ideas, or opportunities to share? I’d love to hear
              from you! Whether you’re looking to collaborate, need assistance
              with a project, or just want to connect, feel free to reach out.
              Let’s bring ideas to life together!
            </p>
            <Contact />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
