const hero = () => {
  const lines = "py-4";

  return (
    <section className="flex justify-center sm:h-[700px] mt-16 mb-28">
      <div className="sm:text-3xl sm:px-96 flex justify-center items-center flex-col text-center text-xl text-slate-100 ">
        <p className={`${lines} font-extrabold text-6xl pb-24`}>Hey there!</p>
        <p className={`${lines}`}>
          The links above include my capstone project, Toolbox, and my recent
          freelance contract for an art studio in Atlanta.
        </p>
        <p className={`${lines}`}>
          {" "}
          Below are two games I coded during my bootcamp.
        </p>
        <p>Enjoy!</p>
      </div>
    </section>
  );
};

export default hero;
