import { z } from "zod";

import useLocalStorageState from "use-local-storage-state";

const DATASTORE_KEY = "my_notes_app";

export const noteSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(2).max(50),
  content: z.string().min(10).max(1000),
  createdTime: z.number(),
});

export type Note = z.infer<typeof noteSchema>;

const defaultValue: Note[] = [
  {
    id: crypto.randomUUID(),
    title: "This is my first note",
    content: "This is the content",
    createdTime: Date.now(),
  },
];

type UseDatastoreType = {
  datastore: Note[];
  updateOrCreateNote: (noteValues: Note) => void;
  getNoteById: (noteId: string) => Note | undefined;
  deleteNoteById: (noteId: string) => void;
};

export const useDatastore = (): UseDatastoreType => {
  const [datastore, setDatastore] = useLocalStorageState(DATASTORE_KEY, {
    defaultValue,
  });

  const updateOrCreateNote = (noteValues: Note) => {
    console.log("updateorcreate", noteValues);
    const note = getNoteById(noteValues.id);

    if (note) {
      deleteNoteById(note.id);
    }

    const newData = [...datastore, noteValues];

    setDatastore(newData);

    console.log("fin");
  };

  const getNoteById = (noteId: string): Note | undefined => {
    return datastore.find((note) => note.id === noteId);
  };

  const deleteNoteById = (noteId: string): void => {
    const index = datastore.findIndex((note) => note.id === noteId);

    datastore.splice(index, 1);

    setDatastore(datastore);
  };

  return { datastore, updateOrCreateNote, getNoteById, deleteNoteById };
};
