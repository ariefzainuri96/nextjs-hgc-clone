import CustomInput from "@/components/CustomInput";
import Image from "next/image";
import Link from "next/link";

export default async function ForgotPasswordPage() {
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
            Forgot Password
          </p>
          <p className="mt-[12px] text-[16px] text-[#475467]">
            Re-enter new password
          </p>
          <CustomInput
            className="mt-[32px]"
            label={"New Password"}
            placeholder={"*****"}
            name={"password"}
            type="password"
          />
          <CustomInput
            className="mt-[32px]"
            label={"Re-enter New Password"}
            placeholder={"*****"}
            name={"new-password"}
            type="password"
          />
          <button className="btn mt-[24px] w-full bg-[#E24955] py-[10px] text-[16px] font-semibold text-white hover:bg-[#c02c38]">
            Reset Password
          </button>
          <Link href={"/"}>
            <button className="btn btn-outline mt-[12px] w-full py-[10px] text-[16px] font-semibold">
              Back to Login
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
