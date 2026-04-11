import { Link } from "react-router";
import CustomInput from "../components/CustomInput";

export default function SignIn() {
  return (
    <section className="grid lg:grid-cols-7 px-2 md:w-4/5 mx-auto ">
      <div
        id="sign-in-leftPart"
        className="relative hidden lg:col-span-4 lg:block h-screen"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  max-w-4xl px-6 text-center md:text-left">
          <p className="text-white/80 tracking-[0.3em] uppercase text-sm md:text-base mb-4">
            LUMIÈRE
          </p>

          <h1 className="text-white font-light leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">
            Precision meets <span className="font-semibold">poetry.</span>
          </h1>

          <p className="text-[#D6D3D1] font-light text-base md:text-lg leading-relaxed max-w-3xl">
            Clinically proven results, curated through the lens of aesthetic
            excellence.
          </p>
        </div>
        <div className="absolute bottom-5 left-5 flex">
          <div className="text-gray-100 w-['48px'] h-2 ml-4"></div>
          <p className="text-gray-100 font-normal text-[10px]">
            CLINICAL EXCELLENCE SERIES
          </p>
        </div>
      </div>
      <div className="py-24  lg:px-24  lg:col-span-3">
        <h2 className="font-bold text-4xl text-[#1B1C1B] mb-3">Welcome Back</h2>
        <p className="text-[#43474C] text-base font-normal mb-6">
          Access your personalized clinical regimen.
        </p>
        <form action="">
          <CustomInput id={"email"} label={"EMAIL ADDRESS"} type={"text"} />
          <CustomInput id={"password"} label={"PASSWORD"} type={"password"} />
          <button className="bg-[#272727] w-full text-sm font-medium text-white my-8 px-6 py-4 rounded-sm ">
            SIGN IN
          </button>
          <div className="bg-[#C4C6CD4D] h-0.5 relative mb-6">
            <span className="bg-[#F5F3F1] text-[10px] font-normal px-4 absolute bottom-1/2 right-1/2 translate-1/2 text-[#74777D]">
              or
            </span>
          </div>
          <p className="text-sm font-light text-center text-[#43474C] ">
            New to Lumière?{" "}
            <Link
              to="/sign-up"
              className="text-sm font-medium text-[#272727] border-b border-b-[#272727] ms-2"
            >
              Create Account
            </Link>
          </p>
          <div className="bg-[#C4C6CD4D] h-0.5 relative mt-6"></div>
          <div className="flex justify-between mt-6 flex-wrap gap-2">
            <div className="py-1.5 px-4 text-[#6A635C] text-[10px] font-normal bg-[#EBE1D7] rounded-xl">
              SAFE FOR ALL SKINS
            </div>
            <div className="py-1.5 px-4 text-[#6A635C] text-[10px] font-normal bg-[#EBE1D7] rounded-xl">
              DERMATOLOGIST VERIFIED
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
