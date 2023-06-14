const hero = () => {
  const lines = "py-4";

  return (
    <section className="flex justify-center h-[700px] mb-28">
      <div className="flex justify-center items-center flex-col text-center text-3xl px-96">
        <p className={`${lines} font-extrabold text-6xl pb-24`}>Hey there!</p>
        <p className={`${lines}`}>
          The links above include my capstone project, Toolbox, and my current
          freelance contract, Art Studio!
        </p>
        <p className={`${lines}`}>
          {" "}
          Below are two games I coded during my bootcamp, for now.
        </p>
        <p>Enjoy!</p>
      </div>
    </section>
  );
};

export default hero;
