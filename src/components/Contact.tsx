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
    <div className="h-screen relative flex items-center justify-center md:px-0 px-28 md:pt-0 pt-56 md:mb-0 mb-56">
      <div className="flex flex-col space-y-6 text-center">
        <a href="https://github.com/jonathonchilds/personalPortfolio/blob/trunk/src/App.tsx">
          <button className="primaryBtnContactPage">
            Source Code For This Portfolio
          </button>
        </a>
        <p className="md:text-2xl tracking-widest">(727) 967-3889</p>
        <p className="md:text-2xl tracking-widest">
          jonathon.k.childs@gmail.com
        </p>
        <p className="md:text-2xl tracking-widest">
          Tampa / Saint Petersburg, Florida
        </p>
        <p className="text-sm text-gray-500">
          (This form will auto-fill your system's default email provider, after
          you submit!)
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col md:space-y-2 space-y-6 w-fit mx-auto"
        >
          <div className="flex md:flex-row flex-col md:space-x-2 md:space-y-0 space-y-6">
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
