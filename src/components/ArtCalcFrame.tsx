// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

const ArtCalcFrame = () => {
  // const { ref, inView } = useInView();

  return (
    <iframe
      src="https://app.digitalartsstudio.net/"
      className="h-screen w-screen overflow-hidden pt-20"

    ></iframe>
  );
};

export default ArtCalcFrame;

// {inView === true ? (
//   <motion.div
//     initial={{
//       opacity: 0,
//       y: -75,
//     }}
//     transition={{ duration: 1 }}
//     whileInView={{ opacity: 1, y: 0 }}
//   >
//     <div className="w-full flex justify-center py-12 ">
//       <a href="https://github.com/jonathonchilds/artcalculatorapp/blob/trunk/app/page.jsx">
//         <button className="primaryBtn">Source Code</button>
//       </a>
//       <a href="https://app.digitalartsstudio.net">
//         <button className="primaryBtn">Live Website</button>
//       </a>
//     </div>
//   </motion.div>
// ) : (
//   ""
// )}
