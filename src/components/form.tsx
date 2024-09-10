import { handleCreatePostClick } from "@/actions/actions";
import React from "react";

const Form = () => {
  return (
    <form
      action={handleCreatePostClick}
      className="flex flex-col gap-2 max-w-64"
    >
      <input
        type="text"
        name="title"
        placeholder="Title for new post"
        required
        className="focus:outline-none focus:border focus:border-sky-500"
      />
      <textarea
        name="body"
        rows={5}
        placeholder="Body for new post"
        required
        className="focus:outline-none focus:border focus:border-sky-500"
      />

      <button>Submit</button>
    </form>
  );
};

export default Form;
