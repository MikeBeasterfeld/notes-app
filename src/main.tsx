import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.css";
import Index from "./pages/Index.tsx";
import { Wrapper } from "./wrapper.tsx";
import { Note, noteLoader } from "./pages/Note.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "note/:noteId",
    element: <Note />,
    loader: noteLoader,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  </StrictMode>
);
