import {
  ActionFunction,
  ActionFunctionArgs,
  json,
  LoaderFunction,
  LoaderFunctionArgs,
} from "@remix-run/node";
import { redirect, useLoaderData } from "@remix-run/react";
import React from "react";
import EditNotesContainer from "~/containers/notes/EditNotes";
import { db } from "~/database";

export const action: ActionFunction = async ({
  request,
  params,
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
  await db.notes.update({
    where: {
      id: params?.id ? parseInt(params.id) : -1,
    },
    data: {
      title: title.trim(),
      body: body.trim(),
    },
  });
  return redirect("/notes");
};

export const loader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  const note = await db.notes.findFirst({
    where: {
      id: params?.id ? parseInt(params.id) : -1,
    },
  });

  if (!note) {
    return json({
      message: "No note found",
    });
  }

  return note;
};

const EditNotesPage = () => {
  const loaderData = useLoaderData<typeof loader>();
  return <EditNotesContainer note={loaderData} />;
};

export default EditNotesPage;
