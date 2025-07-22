import { RouterProvider } from "react-router";
import "./App.css";
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import { router } from "./Layout/Routes";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* <ModeToggle/> */}
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
}

export default App;
