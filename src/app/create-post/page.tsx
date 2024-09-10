import React from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Form from "@/components/form";

const CreatePost = async () => {
  return (
    <div>
      <div className="flex gap-5 mb-2">
        <h1>Create post</h1>
        <LogoutLink>Logout</LogoutLink>
      </div>

      <Form />
    </div>
  );
};

export default CreatePost;
