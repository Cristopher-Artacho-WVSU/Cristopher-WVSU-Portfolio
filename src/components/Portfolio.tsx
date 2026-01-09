import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { forwardRef } from "react";

const Portfolio = forwardRef<HTMLDivElement>((_, ref) => {
  const [projectList, setProjectList] = useState<any[]>([]);

  useEffect(() => {
    const getProjectList = async () => {
      try {
        const projectCollectionRef = collection(db, "projects");
        const data = await getDocs(projectCollectionRef);

        const filteredData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProjectList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getProjectList();
  }, []);

  return (
    <div
      ref={ref}
      className="flex gap-[3rem] overflow-x-auto scrollbar-hide snap-x snap-mandatory"
    >
      {projectList.map((project) => (
        <div
          key={project.id}
          className="xl:w-[30rem] xl:gap-[2rem]
          lg:w-[21.5rem] lg:px-[1rem]
          md:w-[21.5rem]
          w-[23rem] px-[1rem] gap-[3rem]
          flex-none snap-center
          flex flex-col"
        >
          {/* PHOTO */}
          <div className="xl:h-[10rem] 
          h-[7.5rem] 
          w-full overflow-hidden">
            <img
              src={`/portfolio/${project.image}.png`}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* TAGS */}
        <div
          className="xl:gap-[0.2rem] 
          lg:gap-[0.75rem] 
          md:gap-[0.75rem] md:h-[5rem] 
          gap-[1rem] flex flex-wrap items-start h-[2.5rem]"
        >
          {project.tech?.map((tag: string, index: number) => (
            <span
              key={index}
              className={`xl:px-[1rem] xl:py-[0.5rem] xl:text-xl_intro
                lg:text-lg_intro md:text-md_intro
                py-[0.375rem] text-sm_intro px-[0.75rem]
                ${index === 0 ? "bg-highlight text-misc" : "text-font"}`}
            >
              {tag}
            </span>
          ))}
        </div>
          {/* DESCRIPTION */}
          <div className="xl:h-[10rem] 
          md:h-[7.5rem] 
          h-[8rem] w-full">
            <h3 className="xl:text-xl_heading3 
            lg:text-lg_heading3
              md:text-md_heading3 
              text-sm_heading3
              font-bold text-font">
              {project.title}
            </h3>
            <p className="xl:text-xl_intro lg:text-lg_intro
              md:text-md_intro text-sm_intro
              font-light text-font">
              {project.description}
            </p>
          </div>

          {/* LINK */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="xl:text-xl_intro lg:text-lg_intro
              md:text-md_intro text-sm_intro
              text-font text-inter"
          >
            View Project →
          </a>
        </div>
      ))}
    </div>
  );
});

export default Portfolio;
