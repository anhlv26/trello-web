import theme from "~/theme";
import Box from "@mui/material/Box";
import Card from "./Card/Card";
import { FC } from "react";
import { Card as CardType } from "~/types/type";
import {
  SortableContext,
  horizontalListSortingStrategy,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { UniqueIdentifier } from "@dnd-kit/core";

interface ListCards {
  cards: CardType[];
}

const ListCards: FC<ListCards> = ({ cards }) => {
  const cardIds: UniqueIdentifier[] = cards.map((card) => card._id);
  return (
    <SortableContext items={cardIds} strategy={verticalListSortingStrategy}>
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
    </SortableContext>
  );
};

export default ListCards;
