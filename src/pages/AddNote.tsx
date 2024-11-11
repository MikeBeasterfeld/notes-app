import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDatastore } from "@/lib/datastore";
import { Textarea } from "@/components/ui/textarea";

import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  content: z.string().min(10).max(1000),
});

export const AddNote = () => {
  const navigate = useNavigate();
  const [datastore, addNote] = useDatastore();
  const [isSubmitting, toggleIsSubmitting] = useReducer((state) => {
    return !state;
  }, false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toggleIsSubmitting();
    addNote(values);
    console.log(datastore);
    form.reset();
    toggleIsSubmitting();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
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

        <Button type="submit" variant="outline" disabled={isSubmitting}>
          Submit
        </Button>
      </form>
    </Form>
  );
};
