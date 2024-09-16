import { Form } from "@remix-run/react";
import React from "react";

const EditNotesContainer = ({
  note,
}: {
  note: { id: number; body: string; title: string };
}) => {
  return (
    <div className="h-screen flex flex-1 justify-center items-center">
      <Form
        method="post"
        className="flex flex-col justify-center items-center gap-2"
      >
        <label className="font-semibold text-3xl">Edit a note</label>
        <label className="w-80 input input-bordered flex items-center gap-2">
          Title
          <input
            name="title"
            type="text"
            className="grow"
            placeholder="Hi world"
            defaultValue={note.title}
          />
        </label>
        <label className="w-80 input input-bordered flex items-center gap-2">
          Body
          <input
            name="body"
            type="text"
            className="grow"
            placeholder="Type here..."
            defaultValue={note.body}
          />
        </label>
        <button className="form-action btn btn-active btn-primary">Save</button>
      </Form>
    </div>
  );
};

export default EditNotesContainer;
