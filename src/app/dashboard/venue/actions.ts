"use server";

import { delay } from "@/lib/utils";

export async function deleteVenue(prevState: any, formData: FormData) {
  await delay(1000);
  console.log(`delete venue Data => ${formData.get("id")}`);
}
