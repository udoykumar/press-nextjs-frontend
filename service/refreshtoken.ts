"use server";

import { cookies } from "next/headers";

export const getNewAccessToken = async () => {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refreshToken")?.value;
  console.log(refreshToken);
  if (!refreshToken) {
    // throw new Error("User Not Logged In!");
    return {
      success: false,
      message: "refresh token not found",
    };
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/auth/refresh-token`,
    {
      method: "POST",
      headers: {
        cookie: `refreshToken=${refreshToken}`,
      },
      cache: "no-cache",
    },
  );
  const result = await res.json();
  return result;
};
