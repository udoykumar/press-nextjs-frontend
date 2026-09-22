import React from "react";
import RegisterCard from "../_components/RegisterFrom";

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center ">
      <div className="w-full max-w-md space-y-4 rounded-lg p-8 shadow-lg">
        {/* <div className=" text-center border-2 border-gray-50">
          <h1 className="text-5xl font-bold">Welcome Back</h1>
          <p className="text-gray-500">
            Enter your credentials to access your account
          </p>
        </div> */}
        <RegisterCard />
      </div>
    </div>
  );
};

export default RegisterPage;
