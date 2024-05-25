import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme,
} from "@mui/material/styles";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}

const theme = extendTheme({
  // ...your custom theme
});

function App() {
  return (
    <>
      <ModeToggle />
      <div>Hello world</div>

      <Typography variant="body2" color="text.secondary">
        Test Typo
      </Typography>
    </>
  );
}

export default App;
