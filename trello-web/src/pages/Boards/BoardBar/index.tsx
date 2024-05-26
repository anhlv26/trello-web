import theme from "~/theme";
import Box from "@mui/material/Box";

const BoardBar = () => {
  const boardBarHeight = theme.trello.boardBarHeight;
  return (
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
  );
};

export default BoardBar;
