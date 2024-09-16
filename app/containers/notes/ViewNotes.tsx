import { Link } from "@remix-run/react";
import React from "react";

const ViewNotesContainer = ({
  note,
}: {
  note: { id: number; title: string; body: string };
}) => {
  return (
    <div className="h-screen text-center flex flex-col justify-around items-center ">
      <div>
        <label className="text-3xl font-semibold">{note.title}</label>
        <p className="text-xl ">{note.body}</p>
      </div>
      <div className="flex justify-center items-center gap-2">
        <Link to={`/notes/${note.id}/edit`} className="btn btn-ghost w-20">
          Edit
        </Link>
        <button className="btn btn-error">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ViewNotesContainer;
