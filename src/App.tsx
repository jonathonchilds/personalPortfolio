function App() {
  setTimeout(() => {
    const element = document.getElementById("imJonathon");
    element?.classList.remove("hidden");
    element?.classList.add("animate-slideInFromLeft", "flex");
  }, 1000);

  return (
    <>
      <div className="m-16 columns-1 justify-items-center grid gap-6">
        <div className="animate-slideInFromRight flex items-center justify-center text-[50px] border text-slate-900 border-slate-700 p-8 w-[150px] h-[150px]">
          hi!
        </div>
        <div
          id="imJonathon"
          className="justify-center text-[50px] text-slate-900 p-16 hidden"
        >
          i'm jonathon.
        </div>
      </div>
    </>
  );
}

export default App;
