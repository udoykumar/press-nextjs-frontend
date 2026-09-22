"use server";
import { Replace } from "lucide-react";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

type RegisterState = {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
};

export const registerAction = async (
  prevState: RegisterState,
  formData: FormData,
) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const photoUrl = formData.get("profilePhoto");
  // console.log({ name, email, password, photoUrl }, "user regisnter");

  const payload = {
    name,
    email,
    password,
    photoUrl,
  };
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/user/register`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const result = await res.json();
  if (result.success) {
    const cookieStore = await cookies();
    cookieStore.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
    });
    cookieStore.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "lax",
    });

    redirect("/login", RedirectType.replace);
  }
  return result;
};
