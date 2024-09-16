import {
  ActionFunction,
  ActionFunctionArgs,
  json,
  LoaderFunction,
  LoaderFunctionArgs,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React from "react";
import EditNotesContainer from "~/containers/notes/EditNotes";
import { db } from "~/database";

export const action: ActionFunction = async ({}: ActionFunctionArgs) => {
  
};
export const loader: LoaderFunction = async ({params}: LoaderFunctionArgs) => {
  const note = await db.notes.findFirst({where: {
    id: params?.id ? parseInt(params.id) : -1
  }})

  if(!note) {
    return json({
      message: 'No note found'
    })
  }

  return note
};

const EditNotesPage = () => {
  const loaderData = useLoaderData<typeof loader>()
  return <EditNotesContainer note={loaderData} />;
};

export default EditNotesPage;
