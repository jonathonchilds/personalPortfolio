// Add scrollbars?

import { Link } from "react-router-dom";

function projects() {
  return (
    <div className="grid p-10 grid-cols-3 gap-2  h-[20rem] text-center ">
      <div className="overflow-auto p-4">
        <button className="shadow p-4 mb-6">
          <Link to="/minesweeper" className="text-[40px]">
            {" "}
            Minesweeper{" "}
          </Link>
        </button>
        <p>
          Initially, coming up with the logic for the game to render the proper
          grid was a challenge. I had to think about how to render the grid, how
          to render the cells, and how to render the values of the cells. I
          decided to use a 2D array to represent the grid, and each cell would
          be represented by a number. The number would represent the value of
          the cell, and the value would be used to determine what to render. I
          used a switch statement to determine what to render based on the value
          of the cell. I also used a ternary operator to determine whether or
          not to render the value of the cell. I used a ternary operator because
          I wanted to render the value of the cell if the cell was revealed, and
          I wanted to render an empty string if the cell was not revealed. I
          also used a ternary operator to determine whether or not to render the
          flag emoji.
          <br />
          <br />
          My initial Minesweeper app was built using SASS (scss). When I made my
          portfolio I was using Tailwind, so I decided to rebuild my Minesweeper
          app using Tailwind. I leveraged ChatGPT to create a chatbot that would
          give the user hints.
          <br />
          <br />
          I also leveraged the Minesweeper API to create a leaderboard. I used
          the Minesweeper API to create a leaderboard that would display the top
          10 scores. I used a useEffect hook to fetch the leaderboard data from
          the API. I used a useState hook to store the leaderboard data. I used
          a map function to render the leaderboard data. I used a ternary
          operator to determine whether or not to render the leaderboard data.
          <br />
          <br />
          I also leveraged ChatGPT to create a chatbot that would coach the user
          through the game. I used a useEffect hook to fetch the chatbot data
          from the API. I used a useState hook to store the chatbot data. I used
          a map function to render the chatbot data. I used a ternary operator
          to determine whether or not to render the chatbot data.
          <br />
          <br />I also leveraged ChatGPT to convert my more complex SCSS classes
          into Tailwind classes.
          <br />
          <br />
          During this project I also learned Tailwind more in-depth, including
          realizing that I could apply classes to the index.html file in order
          to create global styles for my background gradient and for
          justifications, such as centering everything on each page. This was
          nice to realize that I didn't need to apply some of these styles to
          each page individually, which would have been a lot of repetitive
          code. (DRY - Don't Repeat Yourself!)
          <br />
          <br />I also learned how to configure CSS nesting by enabling the
          builtin Tailwind plugin. I used this because my grid layout was built
          using SCSS and I wanted to maintain my original design.
        </p>
      </div>
      <div className="overflow-auto p-4">
        <button className="shadow p-4 mb-6">
          <Link to="/minesweeper" className="text-[40px]">
            {" "}
            Minesweeper{" "}
          </Link>
        </button>
        <p>
          I've been introduced to using third-party libraries for customizing my
          scrollbar, avoiding cross-browser incompatibility issues that are
          encountered when using Webkit (which isn't supported by all browsers;
          i.e., Firefox).
          <br />
          <br />
          Fast forward 10 minutes...
          <br />
          <br />
          Creating custom scrollbars is a decently complex task. I've decided to
          table this for now.
          <br />
          <br />
          <h2 className="text-xl font-semibold">Priority TODO Lists! </h2>
          <br />
          In the past I have spent hours implement a feature I thought I needed
          (i.e., custom scrollbars). I would chase that rabbit down the hole,
          only to eliminate the feature in the final build; thus depending on
          their complexity, some features are better left as TODO's for later.
        </p>
      </div>
      <div className="overflow-auto p-4">
        <button className="shadow p-4 mb-6">
          <Link to="/minesweeper" className="text-[40px]">
            {" "}
            Minesweeper{" "}
          </Link>
        </button>
        <p>
          Initially, coming up with the logic for the game to render the proper
          grid was a challenge. I had to think about how to render the grid, how
          to render the cells, and how to render the values of the cells. I
          decided to use a 2D array to represent the grid, and each cell would
          be represented by a number. The number would represent the value of
          the cell, and the value would be used to determine what to render. I
          used a switch statement to determine what to render based on the value
          of the cell. I also used a ternary operator to determine whether or
          not to render the value of the cell. I used a ternary operator because
          I wanted to render the value of the cell if the cell was revealed, and
          I wanted to render an empty string if the cell was not revealed. I
          also used a ternary operator to determine whether or not to render the
          flag emoji.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
}

export default projects;
