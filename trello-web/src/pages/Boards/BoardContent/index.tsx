import Box from "@mui/material/Box";
import React from "react";
import theme from "../../../theme";

const BoardContent = () => {
  const boardBarHeight = theme.trello.boardBarHeight;
  const appBarHeight = theme.trello.appBarHeight;
  return (
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
  );
};

export default BoardContent;
