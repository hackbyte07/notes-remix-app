import {
  ActionFunction,
  ActionFunctionArgs,
  json,
  LoaderFunction,
  LoaderFunctionArgs,
} from "@remix-run/node";
import { redirect, useLoaderData } from "@remix-run/react";
import React from "react";
import ViewNotesContainer from "~/containers/notes/ViewNotes";
import { db } from "~/database";

export const loader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  const note = await db.notes.findFirst({
    where: {
      id: params?.id ? parseInt(params.id) : -1,
    },
  });
  if (!note) {
    return json({ message: "no notes found" });
  }
  return note;
};

export const action: ActionFunction = async ({
  params,
}: ActionFunctionArgs) => {
  await db.notes.delete({
    where: {
      id: params?.id ? parseInt(params.id) : -1,
    },
  });
  return redirect("/notes");
};

const ViewNotesPage = () => {
  const loaderData = useLoaderData<typeof loader>();
  return <ViewNotesContainer note={loaderData} />;
};

export default ViewNotesPage;
