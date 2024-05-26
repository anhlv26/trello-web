import ModeSelect from "../../components/ModeSelect";
import theme from "../../theme";
import Box from "@mui/material/Box";

const AppBar = () => {
  const appBarHeight = theme.trello.appBarHeight;

  return (
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
  );
};

export default AppBar;
