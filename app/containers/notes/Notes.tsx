import { Link } from "@remix-run/react";
import React from "react";

const NotesContainer = ({
  notesList,
}: {
  notesList: Array<{ id: number; title: string; body: string }>;
}) => {
  return (
    <div className="h-screen flex flex-1 flex-col justify-center items-center">
      <label className="text-3xl font-semibold">My Notes</label>
      <Link to={"/notes/add"} className="btn btn-success mt-5">
        Add Notes
      </Link>
      <div className="flex flex-1 flex-col-reverse justify-center items-center gap-2 p-2">
        {notesList?.map((note) => (
          <Link
            to={`/notes/${note.id}`}
            key={note.id}
            className="card bg-base-100 w-96 shadow-xl"
          >
            <div className="card-body">
              <h2 className="card-title">{note.title}</h2>
              <p>{note.body}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NotesContainer;
