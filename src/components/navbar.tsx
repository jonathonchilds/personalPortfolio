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
  return (
    <nav className="flex justify-evenly mt-10 mb-24 ">
      <div className=" shadow-2xl rounded-xl bg-slate-50  flex w-[175px] justify-center items-center">
        <a href="https://www.linkedin.com/in/jonathonchilds/" target="_blank">
          <img
            src="./assets/logos/LinkedIn-Logos/LI-Logo.png"
            alt="LinkedIn Logo"
            width={125}
          />{" "}
        </a>
      </div>
      <div className=" shadow-2xl rounded-xl bg-slate-400 w-[175px]  flex justify-center items-center">
        <a href="https://www.github.com/jonathonchilds/" target="_blank">
          <img
            src="./assets/logos/GitHub-Logos/GitHub_Logo.png"
            alt="GitHub Logo"
            width={100}
          />{" "}
        </a>
      </div>
      <div className=" shadow-2xl rounded-xl bg-slate-50 w-[175px]  flex justify-center items-center">
        <a
          href="https://docs.google.com/document/d/1K2EI_wYVG9oVDB105Pzyzr9EU__4w6Ga/edit?usp=sharing&ouid=115700595236121989336&rtpof=true&sd=true"
          target="_blank"
        >
          <span className="text-3xl text-slate-900 font-kaushan">Resume</span>
        </a>
      </div>
      <div className=" shadow-2xl rounded-xl bg-[#FAE169] w-[190px] py-2 pb-3 flex justify-center items-center">
        <a href="https://toolboxapp.herokuapp.com" target="_blank">
          <img
            src="./assets/logos/toolbox.png"
            alt="Capstone App Logo"
            width={150}
          />{" "}
        </a>
      </div>

      <div className=" shadow-lg rounded-xl bg-slate-50 w-[175px] flex justify-center items-center">
        <a href="app.artstudio.net" target="_blank">
          <span className="text-3xl text-slate-900 font-diphy">Art Studio</span>
        </a>
      </div>
    </nav>
  );
};

export default navbar;
