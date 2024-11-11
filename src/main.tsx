import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.css";
import { AddNote } from "./pages/AddNote.tsx";
import Index from "./pages/Index.tsx";
import { Wrapper } from "./wrapper.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/add",
    element: <AddNote />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  </StrictMode>
);
