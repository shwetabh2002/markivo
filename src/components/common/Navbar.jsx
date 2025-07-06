import logo from "/assets/logo.png";
import { motion } from "framer-motion";
import Button from "./Button";
import ButtonExtra from "./ButtonExtra";
import { useState } from "react";

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <div className="main-navbar">
      <div style={{ display: "flex", alignItems: "center" }}>
        <motion.img className="logo" src={logo} alt="Company Logo" />

        <div className="navbar-content">
          <ButtonExtra name="Home" />
          <Button
            name="About Us"
            dropdownId="about"
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            dropdownItems={["Our Team"]}
          />
          <Button
            name="Services"
            dropdownId="services"
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          />
          <Button
            name="Blog"
            dropdownId="blog"
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            dropdownItems={["FAQ's"]}
          />
          <ButtonExtra name="Schedule Meeting" />
          <Button
            name="Packages"
            dropdownId="packages"
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            dropdownItems={["SEO Package", "PPC Pricing", "SMO Pricing"]}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
