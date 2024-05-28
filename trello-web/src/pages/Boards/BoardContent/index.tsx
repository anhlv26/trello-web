import { useColorScheme } from "@mui/material";
import Box from "@mui/material/Box";
import theme from "~/theme";

const BoardContent = () => {
  const boardBarHeight = theme.trello.boardBarHeight;
  const appBarHeight = theme.trello.appBarHeight;
  const currentTheme = useColorScheme();
  return (
    <Box
      sx={{
        width: "100%",
        height: `calc(100vh - ${boardBarHeight} - ${appBarHeight})`,
        display: "flex",
        alignItems: "center",
        bgcolor: currentTheme.colorScheme === "dark" ? "#34495e" : "#1976d2",
      }}
    >
      Board Content
    </Box>
  );
};

export default BoardContent;
