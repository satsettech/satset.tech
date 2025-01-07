"use server";

import { FormData } from "@/components/Contact";

export const sendEmail = async (data: FormData) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return await response.json();
  } catch (err) {
    throw err;
  }
};
