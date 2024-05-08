"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";
import { IcClose } from "@/components/Icons";
import Image from "next/image";

type CourseImageDialogProps = {
  formAction: (prevState: any, formData: FormData) => void;
};

const CourseImageDialog = ({ formAction }: CourseImageDialogProps) => {
  const searchParams = useSearchParams();
  const showDelete = searchParams.get("showimage");
  const image = searchParams.get("image");
  const hole = searchParams.get("hole");

  const [message, dispatch] = useFormState(formAction, undefined);

  const router = useRouter();

  return (
    showDelete && (
      <div className="parent-dialog">
        <div className="flex w-full max-w-[400px] flex-col rounded-lg bg-white p-[32px]">
          <div className="flex flex-row">
            <p className="flex-1 text-[16px] font-semibold">
              Detail Hole {hole}
            </p>
            <button
              onClick={(e) => {
                e.preventDefault();

                router.back();
              }}
            >
              <IcClose />
            </button>
          </div>
          <div className="mt-3 rounded-lg border-[1px]">
            <Image
              height={448}
              width={340}
              src={image ?? ""}
              alt={"image hole"}
              className="rounded-lg"
            />
          </div>
          <div className="mt-8 flex flex-row gap-3">
            <button
              onClick={(e) => {
                e.preventDefault();

                router.back();
              }}
              className="btn-outlined flex-1"
            >
              Delete
            </button>
            <button className="btn-filled-primary flex-1">Download</button>
          </div>
        </div>
      </div>
    )
  );
};

export default CourseImageDialog;
