import { ThemeProvider } from "./components/theme-provider";
import LayoutPage from "./routes/Routes";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <LayoutPage />
    </ThemeProvider>
  );
};

export default App;
