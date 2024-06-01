import theme from "~/theme";
import Box from "@mui/material/Box";
import { useColorScheme } from "@mui/material";
import ListColumns from "./ListColumns/ListColumns";

const BoardContent = () => {
  const currentTheme = useColorScheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: theme.trello.boardContentHeight,
        display: "flex",
        bgcolor: currentTheme.colorScheme === "dark" ? "#34495e" : "#1976d2",
        p: "10px 0",
      }}
    >
      <ListColumns />
    </Box>
  );
};

export default BoardContent;
