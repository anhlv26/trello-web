import Container from "@mui/material/Container";
import BoardBar from "./BoardBar/BoarBar";
import BoardContent from "./BoardContent/BoardContent";
import AppBar from "../AppBar/AppBar";
import { FC } from "react";

// import { Board as BoardType } from "~/types/type";

// interface BoardProps {
//   board: BoardType;
// }

const Board: FC = () => {

  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  );
};

export default Board;
