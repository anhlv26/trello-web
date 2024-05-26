import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useColorScheme } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import Box from "@mui/system/Box";
import Container from "@mui/material/Container";
import { Mode } from "./types/mode";
import theme from "./theme";

function ModeSelect() {
  const { mode, setMode } = useColorScheme();

  const handleChange = (event: SelectChangeEvent) => {
    const selectedMode = event.target.value as Mode;
    setMode(selectedMode);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LightModeIcon fontSize="small" /> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <DarkModeOutlinedIcon fontSize="small" /> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <SettingsBrightnessIcon fontSize="small" /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function App() {
  const appBarHeight = theme.trello.appBarHeight;
  const boardBarHeight = theme.trello.boardBarHeight;

  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "primary.light",
          height: appBarHeight,
          display: "flex",
          alignItems: "center",
        }}
      >
        <ModeSelect />
      </Box>

      <Box
        sx={{
          width: "100%",
          backgroundColor: "primary.main",
          height: boardBarHeight,
          display: "flex",
          alignItems: "center",
        }}
      >
        Board Bar
      </Box>
      <Box
        sx={{
          width: "100%",
          height: `calc(100vh - ${boardBarHeight} - ${appBarHeight})`,
          display: "flex",
          alignItems: "center",
        }}
      >
        Board Content
      </Box>
    </Container>
  );
}

export default App;
