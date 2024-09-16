import {
  ActionFunction,
  ActionFunctionArgs,
  LoaderFunction,
  LoaderFunctionArgs,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React from "react";
import NotesContainer from "~/containers/notes/Notes";
import { db } from "~/database";

export const action: ActionFunction = async ({}: ActionFunctionArgs) => {
  return null;
};

export const loader: LoaderFunction = async ({}: LoaderFunctionArgs) => {
  const notesList = await db.notes.findMany();

  return notesList;
};

const NotesPage = () => {

  const loaderData = useLoaderData<typeof loader>()
  

  return <NotesContainer notesList={loaderData}/>;
};

export default NotesPage;
