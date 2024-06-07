import theme from "~/theme";
import Box from "@mui/material/Box";
import { useColorScheme } from "@mui/material";
import ListColumns from "./ListColumns/ListColumns";
import { FC, useEffect, useState } from "react";
import { mapOrder } from "~/utils/sort";
import { useSelector } from "react-redux";
import { RootState } from "~/reudx/store";
import {
  DndContext,
  DragEndEvent,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  PointerSensor,
} from "@dnd-kit/core";
import { Column } from "~/types/type";
import { arrayMove } from "@dnd-kit/sortable";

const BoardContent: FC = () => {
  const board = useSelector((state: RootState) => state.board.board);
  const [orderColumnsState, setOrderedColumnsState] = useState<Column[]>([]);
  const currentTheme = useColorScheme();

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });

  const mouserSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 500 },
  });

  // const sensors = useSensors(pointerSensor);
  const sensors = useSensors(mouserSensor, touchSensor);

  useEffect(() => {
    const orderedColumns = mapOrder(
      board?.columns,
      board?.columnOrderIds,
      "_id"
    );
    setOrderedColumnsState(orderedColumns);
  }, []);

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;

    if (!over) return;

    if (active.id !== over?.id) {
      const oldIndex = orderColumnsState.findIndex(
        (column) => column._id === active.id
      );
      const newIndex = orderColumnsState.findIndex(
        (column) => column._id === over?.id
      );
      const dndOrderColumns = arrayMove(orderColumnsState, oldIndex, newIndex);
      // const dndOrderColumnIds = dndOrderColumns.map(
      //   (column) => column._id
      // );
      setOrderedColumnsState(dndOrderColumns);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box
        sx={{
          width: "100%",
          height: theme.trello.boardContentHeight,
          display: "flex",
          bgcolor: currentTheme.colorScheme === "dark" ? "#34495e" : "#1976d2",
          p: "10px 0",
        }}
      >
        <ListColumns columns={orderColumnsState} />
      </Box>
    </DndContext>
  );
};

export default BoardContent;
