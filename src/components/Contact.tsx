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
      <div className="flex flex-col space-y-10 ">
        <div className="space-y-10">
          <div className="text-center">
            <a href="https://github.com/jonathonchilds/personalPortfolio/blob/trunk/src/App.tsx">
              <button className="primaryBtn">
                Source Code For This Portfolio
              </button>
            </a>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            {/* <PhoneIcon className="text-sungold/80 h-7 w-7 " /> */}
            <p className="text-2xl tracking-widest">(727) 967-3889</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            {/* <EnvelopeIcon className="text-sungold/80 h-7 w-7 " /> */}
            <p className="text-2xl tracking-widest">jonathon.k.childs@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            {/* <MapPinIcon className="text-sungold/80 h-7 w-7" /> */}
            <p className="text-2xl tracking-widest">Tampa / Saint Petersburg, Florida</p>
          </div>
        </div>
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
            className="bg-sungold/80 hover:bg-sungold py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
