import { Link } from "react-router-dom";
import { BodyText } from "../components/ui/bodyText";
import { useDatastore } from "@/lib/datastore";
import { useReducer, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { NoteForm } from "@/components/ui/NoteForm";
import { Button } from "@/components/ui/button/button";

function Index() {
  const { datastore } = useDatastore();
  const [isDialogOpen, toggleIsDialogOpen] = useReducer(
    (state) => !state,
    false
  );

  return (
    <>
      {datastore.map((note) => (
        <BodyText key={note.id}>
          <Link to={`/note/${note.id}`}>{note.title}</Link> -{" "}
          {new Date(note.createdTime).toString()}
        </BodyText>
      ))}
      <Dialog open={isDialogOpen} onOpenChange={toggleIsDialogOpen}>
        <DialogTrigger>
          <Button variant="outline" type="button">
            Add Note
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Note</DialogTitle>
            <DialogDescription>
              <NoteForm
                onCancel={toggleIsDialogOpen}
                onSubmit={toggleIsDialogOpen}
              />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Index;
