// //TODO:
// //Change avatar to my picture
// // Change navigation links
// // add link back to home page
// // add link to github
// // add link to linkedin
// // add link to resume
// // add link to email
// // add link to phone number
// //
// icons by
// <a target="_blank" href="https://icons8.com">Icons8</a>
// implement codewars API with my data, a link to my favorite codewar, etc.

const navbar = () => {
  const buttonStyling =
    "shadow-2xl rounded-xl w-[175px] flex justify-center items-center hover:opacity-80 my-2 h-[50px] sm:h-auto py-2 sm:my-0 ";

  return (
    <nav className="sm:flex sm:flex-row sm:justify-evenly sm:pt-16 sm:items-stretch flex flex-col justify-center mt-6 items-center ">
      <div className={`${buttonStyling} bg-[#FAE169]`}>
        <a href="https://www.linkedin.com/in/jonathonchilds/" target="_blank">
          <img
            src="./assets/logos/LinkedIn-Logos/LI-Logo.png"
            alt="LinkedIn Logo"
            width={125}
          />{" "}
        </a>
      </div>
      <div className={`${buttonStyling} bg-[#FAE169]`}>
        <a href="https://www.github.com/jonathonchilds/" target="_blank">
          <img
            src="./assets/logos/GitHub-Logos/GitHub_Logo.png"
            alt="GitHub Logo"
            width={100}
          />{" "}
        </a>
      </div>
      <div className={`${buttonStyling} bg-[#FAE169]`}>
        <a
          href="https://docs.google.com/document/d/1K2EI_wYVG9oVDB105Pzyzr9EU__4w6Ga/edit?usp=sharing&ouid=115700595236121989336&rtpof=true&sd=true"
          target="_blank"
        >
          <span className="text-3xl text-slate-900 font-kaushan">Resume</span>
        </a>
      </div>
      <div className={`${buttonStyling} bg-[#FAE169] py-2 pb-3`}>
        <a href="https://toolboxapp.herokuapp.com" target="_blank">
          <img
            src="./assets/logos/toolbox.png"
            alt="Capstone App Logo"
            width={150}
          />{" "}
        </a>
      </div>

      <div className={`${buttonStyling} bg-[#FAE169]`}>
        <a href="https://artcalculatorapp.vercel.app/" target="_blank">
          <span className="text-3xl text-slate-900 font-diphy">Art Studio</span>
        </a>
      </div>
    </nav>
  );
};

export default navbar;
