import Container from "@mui/material/Container";
import BoardBar from "./BoardBar/BoarBar";
import BoardContent from "./BoardContent/BoardContent";
import AppBar from "../AppBar/AppBar";

const Board = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  );
};

export default Board;
