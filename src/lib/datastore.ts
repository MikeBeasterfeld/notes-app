import { Notebook } from "lucide-react";
import { useState } from "react";

const DATASTORE_KEY = "my_notes_app";

type Note = {
  id: string;
  title: string;
  content: string;
  createdTime: number;
};

type NewNote = Omit<Note, "id" | "createdTime">;

const defaultValues: Note[] = [
  {
    id: crypto.randomUUID(),
    title: "This is my first note",
    content: "This is the content",
    createdTime: Date.now(),
  },
];

const getDatastore = (): Note[] => {
  localStorage.setItem(DATASTORE_KEY, JSON.stringify(defaultValues));

  const item = localStorage.getItem(DATASTORE_KEY);

  if (!item) return [];

  const parsed = JSON.parse(item) as Note[];

  return parsed;
};

const convertNewNoteToNote = (note: NewNote): Note => ({
  ...note,
  id: crypto.randomUUID(),
  createdTime: Date.now(),
});

type UseDatastoreType = [Note[], (note: NewNote) => void];

export const useDatastore = (): UseDatastoreType => {
  const [datastore, setDatastore] = useState(getDatastore);

  const addNote = (note: NewNote) => {
    setDatastore((prev) => {
      const newData = [...prev, convertNewNoteToNote(note)];
      localStorage.setItem(DATASTORE_KEY, JSON.stringify(newData));
      return newData;
    });
  };

  return [datastore, addNote];
};
