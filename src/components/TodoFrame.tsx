
const TodoFrame = () => {
  return (
    <iframe
      src="https://e2todo.vercel.app/"
      className="h-screen w-screen overflow-hidden pt-20"
    ></iframe>
  );
};

export default TodoFrame;

{
  /* <motion.div
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="w-full flex justify-center">
          <a href="https://github.com/jonathonchilds/e2todo/blob/trunk/src/app/Provider.tsx">
            <button className="primaryBtn">Source Code</button>
          </a>
          <a href="https://e2todo-jonathonchilds.vercel.app/">
            <button className="primaryBtn">Live Website</button>
          </a>
        </div>
      </motion.div> */
}
