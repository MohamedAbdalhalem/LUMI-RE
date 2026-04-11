import { Link } from "react-router";
import CustomInput from "../components/CustomInput";
export default function SignUp() {
  return (
    <section className="grid lg:grid-cols-7 px-2 md:w-4/5 mx-auto ">
      <div
        id="sign-up-leftPart"
        className="relative hidden lg:col-span-4 lg:block  h-full"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  max-w-4xl px-6 text-center md:text-left">
          <p className="text-[#1E293B] font-normal bg-white-50 backdrop-blur-md  text-[10px] rounded-xl w-fit py-1 px-3 mb-4">
            THE CLINICAL CURATOR
          </p>

          <h1 className="text-[#0F172A] font-light leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">
            The science of radiance
          </h1>

          <p className="text-[#475569] font-normal text-lg md:text-lg leading-relaxed max-w-3xl">
            Where molecular precision meets sensory luxury. Discover formulas
            designed for the skin's biological clock.
          </p>
        </div>
      </div>
      <div className="py-16  lg:px-16  lg:col-span-3">
        <h2 className="font-bold text-4xl text-[#1B1C1B] mb-3">Create Account</h2>
        <p className="text-[#43474C] text-base font-normal mb-6">
          Join the clinical inner circle for curated regimens.
        </p>
        <form action="">
          <CustomInput id={"name"} label={"YOUR NAME"} type={"text"} />
          <CustomInput id={"eamil"} label={"EAMIL ADDRESS"} type={"email"} />
          <CustomInput id={"password"} label={"PASSWORD"} type={"password"} />
          <CustomInput id={"confirm-password"} label={"CONFIRM PASSWORD"} type={"password"} />
          <button className="bg-[#272727] w-full text-sm font-medium text-white my-8 px-6 py-4 rounded-sm ">
            CREATE ACCOUNT
          </button>
          <p className="text-sm font-light text-center text-[#43474C] ">
            Already part of LUMIÈRE? {" "}
            <Link
              to="/sign-in"
              className="text-sm font-medium text-[#272727] border-b border-b-[#272727] ms-2"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
