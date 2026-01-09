

const Footer = () => {
    return(
        <div className="h-[20vh] w-full text-center py-[3rem]">
            {/* NAME */}
            <p className=" xl:text-xl_content
            lg:text-lg_content
            md:text-md_content
            text-sm_content
             font-normal text-font_white font-inter pb-[1rem]">Cristopher Ian Artacho</p>
            <div className="flex gap-4 items-center justify-center gap-[2.5rem]">
  <a
    href="https://github.com/Cristopher-Artacho-WVSU"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/icons/github.png"
      alt="GitHub"
      className="md:w-[2rem] md:h-[2rem] 
      w-[1.5rem] h-[1.5rem] rounded-full hover:scale-110 transition"
    />
  </a>

  <a
    href="https://huggingface.co/CristopherWVSU"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/icons/huggingface.png"
      alt="HuggingFace"
      className="md:w-[2rem] md:h-[2rem] 
      w-[1.5rem] h-[1.5rem] rounded-full hover:scale-110 transition"
    />
  </a>

  <a
    href="https://www.facebook.com/artachocristopherian/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/icons/facebook.png"
      alt="Facebook"
      className="md:w-[2rem] md:h-[2rem] 
      w-[1.5rem] h-[1.5rem] rounded-full hover:scale-110 transition"
    />
  </a>

  <a href="mailto:cristopherian.artacho@wvsu.edu.ph">
    <img
      src="/icons/gmail.png"
      alt="Gmail"
      className="md:w-[2rem] md:h-[2rem] 
      w-[1.5rem] h-[1.5rem] rounded-full hover:scale-110 transition"
    />
  </a>
</div>
        </div>
    )
} 
export default Footer;