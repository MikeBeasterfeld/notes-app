import { BodyText } from "@/components/ui/bodyText";
import { Button } from "@/components/ui/button/button";
import { H1 } from "@/components/ui/H1";
import { NoteForm } from "@/components/ui/NoteForm";
import { useDatastore } from "@/lib/datastore";
import { useReducer } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

export function noteLoader({ params }: { params: { noteId: string } }) {
  return { noteId: params.noteId };
}

export const Note = () => {
  const { noteId } = useLoaderData();
  const navigate = useNavigate();
  const [isEditing, toggleIsEditing] = useReducer((state) => !state, false);

  const { getNoteById, deleteNoteById } = useDatastore();

  const note = getNoteById(noteId);

  if (!note) {
    return <BodyText>Note not found</BodyText>;
  }

  const deleteNote = () => {
    deleteNoteById(noteId);
    navigate("/");
  };

  if (isEditing) {
    return (
      <NoteForm
        note={note}
        onSubmit={toggleIsEditing}
        onCancel={toggleIsEditing}
      />
    );
  }

  return (
    <>
      <Button type="button" variant="outline" onClick={() => navigate("/")}>
        Home
      </Button>
      <H1>{note.title}</H1>
      <BodyText>{note.content}</BodyText>
      <Button variant="outline" onClick={toggleIsEditing}>
        Edit
      </Button>
      <Button variant="outline" onClick={deleteNote}>
        Delete
      </Button>
    </>
  );
};
