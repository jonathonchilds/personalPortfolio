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
    "text-sm px-4 sm:px-10 sm:py-3 rounded-lg py-1 shadow-lg bg-green-400 bg-opacity-60 m-2 hover:cursor-pointer hover:shadow-lg hover:opacity-75";

  return (
    <nav className="flex justify-evenly pt-16">
      <div className=" shadow-2xl rounded-xl bg-slate-50  flex w-[175px] justify-center items-center hover:opacity-80">
        <a href="https://www.linkedin.com/in/jonathonchilds/" target="_blank">
          <img
            src="./assets/logos/LinkedIn-Logos/LI-Logo.png"
            alt="LinkedIn Logo"
            width={125}
          />{" "}
        </a>
      </div>
      <div className=" shadow-2xl rounded-xl bg-gray-300 w-[175px] flex justify-center items-center hover:opacity-80">
        <a href="https://www.github.com/jonathonchilds/" target="_blank">
          <img
            src="./assets/logos/GitHub-Logos/GitHub_Logo.png"
            alt="GitHub Logo"
            width={100}
          />{" "}
        </a>
      </div>
      <div className=" shadow-2xl rounded-xl bg-green-200 w-[175px]  flex justify-center items-center hover:opacity-80">
        <a
          href="https://docs.google.com/document/d/1K2EI_wYVG9oVDB105Pzyzr9EU__4w6Ga/edit?usp=sharing&ouid=115700595236121989336&rtpof=true&sd=true"
          target="_blank"
        >
          <span className="text-3xl text-slate-900 font-kaushan">Resume</span>
        </a>
      </div>
      <div className=" shadow-2xl rounded-xl bg-[#FAE169] w-[190px] py-2 pb-3 flex justify-center items-center hover:opacity-80">
        <a href="https://toolboxapp.herokuapp.com" target="_blank">
          <img
            src="./assets/logos/toolbox.png"
            alt="Capstone App Logo"
            width={150}
          />{" "}
        </a>
      </div>

      <div className=" shadow-lg rounded-xl bg-indigo-200 w-[175px] flex justify-center items-center hover:opacity-80">
        <a href="https://app.digitalartsstudio.net/" target="_blank">
          <span className="text-3xl text-slate-900 font-diphy">Art Studio</span>
        </a>
      </div>
    </nav>
  );
};

export default navbar;
