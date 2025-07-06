import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Body from "../components/Body";
import "./Home.css";
import FadeInWords from "../components/FadeInWords";

const serviceImages = {
  1: "/assets/seo_image.webp",
  2: "/assets/ppc_image.webp",
  3: "/assets/web_design_image.webp",
  4: "/assets/ui_ux_image.webp",
  5: "/assets/cro_image.webp",
  6: "/assets/va_image.webp",
};

const imageVariants = {
  hidden: {
    opacity: 0,
    x: 50, // start off right
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
    rotate: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  visible: {
    opacity: 1,
    x: 0, // slides to its place
    boxShadow: "-5px 4px 20px rgba(0, 0, 0, 0.5)", // stronger shadow shifted left
    rotate: -5, // slight tilt counter-clockwise
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    x: 50, // slides out to right
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
    rotate: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const Home = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  const handleClick = (id) => () => {
    const routes = {
      1: "/services/seo",
      2: "/services/ppc",
      3: "/services/web_design",
      4: "/services/ui_ux",
      5: "/services/cro",
      6: "/services/virtual-assistant",
    };

    if (routes[id]) navigate(routes[id]);
  };

  return (
    <div>
      <Body />
      <div className="we-do">
        <p>WHAT WE DO</p>
        <FadeInWords text="At the heart of a digital agency's services lies strategic planning and execution tailored to meet the unique needs and goals of each client." />
      </div>

      <div className="we-do-special-wrapper">
        <div className="we-do-special">
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <div
              key={id}
              onClick={handleClick(id)}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              className="service-item"
              style={{ position: "relative" }}
            >
              <div>
                <p>({String(id).padStart(2, "0")})</p>
                <p>
                  {
                    [
                      "SEO",
                      "PPC",
                      "Web Design",
                      "UI/UX",
                      "CRO",
                      "Virtual Assistant",
                    ][id - 1]
                  }
                </p>
              </div>
              <p>
                {
                  [
                    "SEARCH ENGINE OPTIMIZATION",
                    "PAY PER CLICK/GOOGLE META ADS",
                    "Development",
                    "USER INTERFACE & EXPERIENCE",
                    "CONVERSION RATE OPTIMIZATION",
                    "YOUR SMART TECH COMPANION",
                  ][id - 1]
                }
              </p>

              <AnimatePresence>
                {hovered === id && (
                  <motion.div
                    className="hover-image-inline"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={imageVariants}
                    style={{
                      position: "absolute",
                      top: -50,
                      right: "-15vw",
                      width: "35vw",
                      maxWidth: "350px",
                      zIndex: 10,
                      pointerEvents: "auto",
                      borderRadius: 8,
                      overflow: "hidden",
                      background: "white", // Optional: to highlight shadow
                    }}
                  >
                    <motion.img
                      src={serviceImages[id]}
                      alt="Service Preview"
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
