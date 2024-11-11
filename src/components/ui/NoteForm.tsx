import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Note, noteSchema, useDatastore } from "@/lib/datastore";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button/button";

type NoteFormProps = {
  note?: Note;
  onSubmit?: () => void;
  onCancel?: () => void;
};

export const NoteForm = ({ note, onSubmit, onCancel }: NoteFormProps) => {
  const { updateOrCreateNote } = useDatastore();

  const form = useForm<Note>({
    resolver: zodResolver(noteSchema),
    defaultValues: {
      id: note?.id || crypto.randomUUID(),
      title: note?.title || "",
      content: note?.content || "",
      createdTime: note?.createdTime || Date.now(),
    },
  });

  const onCancelButton = () => {
    if (onCancel) onCancel();
  };

  const onFormSubmit = (values: Note) => {
    console.log("noteform", values);
    updateOrCreateNote(values);
    form.reset();
    if (onSubmit) onSubmit();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onFormSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant="outline">
          Submit
        </Button>

        <Button type="button" variant="outline" onClick={onCancelButton}>
          Cancel
        </Button>
      </form>
    </Form>
  );
};
