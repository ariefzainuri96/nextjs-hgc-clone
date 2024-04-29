import CustomInput from "@/components/CustomInput";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex h-full w-full flex-col lg:flex-row">
      {/* login form */}
      <div className="flex flex-1 flex-col items-center">
        <Image
          src={"/assets/img/img_logo.png"}
          alt={"img_logo"}
          width={354}
          height={265}
          className="h-[25vh] w-[30vw] object-contain"
        />
        <div className="items-start">
          <p className="mt-[64px] text-[36px] font-semibold text-[#101828]">
            Log in
          </p>
          <p className="mt-[12px] text-[16px] text-[#475467]">
            Welcome back! Please enter your details.
          </p>
          <CustomInput
            className="mt-[32px]"
            label={"Email"}
            placeholder={"Enter your email"}
            name={"email"}
            type="email"
          />
          <CustomInput
            className="mt-[20px]"
            label={"Password"}
            placeholder={"*******"}
            name={"password"}
            type="password"
          />
          <div className="mt-[24px] flex w-full flex-row justify-center">
            <Link
              href={"/forgot-password"}
              className="text-sm font-semibold text-[#E24955]"
            >
              Forgot password
            </Link>
          </div>
          <Link href={"/dashboard/user-management?parents=master-data"}>
            <button className="btn mt-[24px] w-full bg-[#E24955] py-[10px] text-[16px] font-semibold text-white hover:bg-[#c02c38]">
              Log In
            </button>
          </Link>
        </div>
      </div>
      {/* image */}
      <div className="hidden flex-1 bg-red-200 lg:block">
        <Image
          src={"/assets/img/img_login_bg.png"}
          alt={"login-bg"}
          width={720}
          height={960}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
