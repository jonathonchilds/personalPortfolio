import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className="fixed top-0 px-12 py-4 flex justify-between w-full z-20 bg-black">
      <motion.div
        className="flex flex-row items-center"
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SocialIcon
          url="https://www.linkedin.com/in/jonathonchilds"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.github.com/jonathonchilds"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        className="flex flex-row items-center gray"
        initial={{ opacity: 0, x: 500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <a href="contact">
          <SocialIcon
            network="email"
            url="#contact"
            fgColor="gray"
            bgColor="transparent"
          />
        </a>
      </motion.div>
    </header>
  );
}

export default Header;
