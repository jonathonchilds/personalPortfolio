import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:jonathon.k.childs@gmail.com?subject=${formData.subject}&body=${formData.message}`;
  };

  return (
    <div className="h-screen relative flex items-center justify-center">
      <div className="flex flex-col space-y-6 text-center">
        <a href="https://github.com/jonathonchilds/personalPortfolio/blob/trunk/src/App.tsx">
          <button className="primaryBtn">Source Code For This Portfolio</button>
        </a>
        <p className="text-2xl tracking-widest">(727) 967-3889</p>
        <p className="text-2xl tracking-widest">jonathon.k.childs@gmail.com</p>
        <p className="text-2xl tracking-widest">
          Tampa / Saint Petersburg, Florida
        </p>
        <p className="text-sm text-gray-500">
          (This form will auto-fill your system's default email provider
          after you submit!)
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className=" hover:text-sungold border border-purple py-5 px-10 rounded-md font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
