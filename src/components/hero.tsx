const hero = () => {
  const lines = "py-4";

  return (
    <section className="flex justify-center h-[700px] mb-28">
      <div className="flex justify-center items-center flex-col text-center text-3xl">
        <p className={`${lines} font-bold text-4xl`}>Welcome!</p>
        <p className={`${lines}`}>
          {" "}
          Above are some pertinent links, including one for my capstone project
          (ToolBox) and a current freelance project.
        </p>
        <p className={`${lines}`}>
          {" "}
          Below are a couple of games I coded during my bootcamp.
        </p>

        <p className={`${lines}`}>There is more to come!</p>
        <p className={`${lines}`}>
          I wrote this lil portfolio site (from scratch) just last weekend
          (06/11/2023)!
        </p>
        <p className={`${lines} font-bold`}>Check back soon!</p>
      </div>
    </section>
  );
};

export default hero;
