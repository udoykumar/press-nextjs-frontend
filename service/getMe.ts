"use server";

import { cookies } from "next/headers";

export const getMe = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  if (!accessToken) {
    // throw new Error("User Not Logged In!");
    return {
      success: false,
      message: "user not logged in",
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/user/me`, {
    // headers: { Authorization: accessToken as unknown as string },
    // headers: {
    //   Authorization: `${accessToken}`,
    //   cookie: `accessToken=${accessToken}`,
    // },
    headers: {
      cookie: `accessToken=${accessToken}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["my-profile"],
    },
  });
  const result = await res.json();
  return result;
};
