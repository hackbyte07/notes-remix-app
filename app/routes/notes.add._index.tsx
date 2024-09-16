import {
  ActionFunction,
  ActionFunctionArgs,
  json,
  LoaderFunction,
  LoaderFunctionArgs,
  redirect,
} from "@remix-run/node";
import React from "react";
import AddNotesContainer from "~/containers/notes/AddNotes";
import { db } from "~/database";

export const action: ActionFunction = async ({
  request,
}: ActionFunctionArgs) => {
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  if (!title || title?.trim().length < 3) {
    return json({
      message: "Title must be longer",
    });
  }
  if (!body || body?.trim().length < 3) {
    return json({
      message: "Body must be longer",
    });
  }
  await db.notes.create({
    data: {
      title: title.trim(),
      body: body.trim(),
    },
  });
  return redirect("/notes");
};

export const loader: LoaderFunction = async ({
  request,
}: LoaderFunctionArgs) => {
  return null;
};

const AddNotesPage = () => {
  return <AddNotesContainer />;
};

export default AddNotesPage;
