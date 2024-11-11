import { Link } from "react-router-dom";
import { BodyText } from "../components/ui/bodyText";
import { useDatastore } from "@/lib/datastore";

function Index() {
  const { datastore } = useDatastore();

  return (
    <>
      <Link to="/add">Add Note</Link>
      {datastore.map((note) => (
        <BodyText key={note.id}>
          <Link to={`/note/${note.id}`}>{note.title}</Link> -{" "}
          {new Date(note.createdTime).toString()}
        </BodyText>
      ))}
    </>
  );
}

export default Index;
