import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./main.css";
const myProject = [
  {
    projectTitle: "Himma Youth Association ",
    category: ["graphicDesign"],
    imgPath: "/01.jpg",
  },

  {
    projectTitle: "Charitable Society for the Holy Quran in Syria",
    category: ["graphicDesign"],
    imgPath: "/02.jpg",
  },

  {
    projectTitle: "Panorama Property",
    category: ["graphicDesign"],
    imgPath: "/03.jpg",
  },

  {
    projectTitle: "Panorama Tourism",
    category: ["graphicDesign"],
    imgPath: "/04.jpg",
  },

  {
    projectTitle: "Get Your Own Amazing Apartment",
    category: ["wordpress"],
    imgPath: "/05.jpg",
  },
  {
    projectTitle: "react project",
    category: ["react"],
    imgPath: "/08.jpg",
  },
  {
    projectTitle: "react project",
    category: ["react"],
    imgPath: "/public/3.png",
  },
  {
    projectTitle: "html & css project",
    category: ["css", "html"],
    imgPath: "/06.jpg",
  },
  {
    projectTitle: "html & css project",
    category: ["css", "html"],
    imgPath: "/07.jpg",
  },
  {
    projectTitle: " React project",
    category: ["react"],
    imgPath: "/6.jpg",
  },
];

//[{ projectTitle: "css project", category: "css", imgPath: "b" }];
function openInNewTab(url) {
  window.open(url, "_blank");
}
const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");

  const [arr, setArr] = useState(myProject);

  const handleClick = (buttoncategory) => {
    setcurrentActive(buttoncategory);

    const newArr = myProject.filter((item) => {
      const twoArr = item.category.filter((myItem) => {
        return myItem === buttoncategory;
      });
      return twoArr[0] === buttoncategory;
    });
    setArr(newArr);
  };
  return (
    <main className="flex">
      <section className="flex  left-section">
        {/* // button all projects ------------------------------------------ */}
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProject);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>

        {/* //graphic Design ------------------------------------------ */}

        <button
          onClick={() => {
            handleClick("graphicDesign");
          }}
          className={currentActive === "graphicDesign" ? "active" : null}
        >
          graphic Design
        </button>

        {/* wordpress ------------------------------------------ */}
        <button
          onClick={() => {
            handleClick("wordpress");
          }}
          className={currentActive === "wordpress" ? "active" : null}
        >
          wordpress
        </button>

        {/* //Html & css ------------------------------------------ */}
        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          html & css
        </button>

        {/* //react ------------------------------------------ */}
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          react
        </button>

        {/* end section right ------------------------------------------ */}
      </section>

      <section className=" flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className="  card"
              >
                <img width={266} src={item.imgPath} alt="" />

                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">
                    I've worked on numerous small projects over the years, but
                    these are the ones I'm most proud of.
                  </p>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <div
                        onClick={() =>
                          openInNewTab("https://www.behance.net/ahmadawad1")
                        }
                        className="icon-link"
                      ></div>
                      <div
                        onClick={() =>
                          openInNewTab("https://github.com/Ahmadhku")
                        }
                        className="icon-github"
                      ></div>
                    </div>

                    <a
                      className="link flex"
                      href="https://www.behance.net/ahmadawad1"
                      target="_blank"
                    >
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
