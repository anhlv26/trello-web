import theme from "~/theme";
import Box from "@mui/material/Box";
import { useColorScheme } from "@mui/material";
import ListColumns from "./ListColumns/ListColumns";
import { FC, useEffect } from "react";
import { mapOrder } from "~/utils/sort";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "~/reudx/store";
import { setOrderedColumns } from "~/reudx/slices/boardSlice";

// interface BoardBarProps {
//   board: Board;
// }

const BoardContent: FC = () => {
  const dispatch = useAppDispatch();
  const board = useSelector((state: RootState) => state.board.board);
  const currentTheme = useColorScheme();
  const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, "_id");

  console.log("orderedColumns ",orderedColumns)

  useEffect(() => {
    dispatch(setOrderedColumns(orderedColumns));
  }, []);


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
