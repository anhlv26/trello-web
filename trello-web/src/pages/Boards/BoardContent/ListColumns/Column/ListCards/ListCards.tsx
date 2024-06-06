import theme from "~/theme";
import Box from "@mui/material/Box";
import Card from "./Card/Card";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "~/reudx/store";

interface ListCards {
  columnId: string;
}

const ListCards: FC<ListCards> = ({ columnId }) => {
  const cards = useSelector(
    (state: RootState) =>
      state.board.board.columns.find((column) => column._id === columnId)
        ?.cards ?? []
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        p: "0 5px",
        m: "0 5px",
        overflowX: "hidden",
        overflowY: "auto",
        maxHeight: `calc(${theme.trello.boardContentHeight} - ${theme.spacing(
          5
        )} - ${theme.trello.columnHeaderHeight} - ${
          theme.trello.columnFooterHeight
        })`,
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#ced0da",
          borderRadius: "8px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#bfc2df",
        },
      }}
    >
      {cards.map((card) => (
        <Card key={card._id} cardId={card._id} />
      ))}
    </Box>
  );
};

export default ListCards;
