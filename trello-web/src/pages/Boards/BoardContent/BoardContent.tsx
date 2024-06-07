import theme from "~/theme";
import Box from "@mui/material/Box";
import { useColorScheme } from "@mui/material";
import ListColumns from "./ListColumns/ListColumns";
import { FC, SetStateAction, useEffect, useState } from "react";
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
  DragStartEvent,
  DragOverlay,
  DropAnimation,
  defaultDropAnimationSideEffects,
} from "@dnd-kit/core";
import { Column as ColumnType } from "~/types/type";
import { arrayMove } from "@dnd-kit/sortable";
import Column from "./ListColumns/Column/Column";
import Card from "./ListColumns/Column/ListCards/Card/Card";

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: "ACTIVE_DRAG_ITEM_TYPE_COLUMN",
  CARD: "ACTIVE_DRAG_ITEM_TYPE_CARD",
};

const BoardContent: FC = () => {
  const board = useSelector((state: RootState) => state.board.board);
  const [orderColumnsState, setOrderedColumnsState] = useState<ColumnType[]>(
    []
  );
  const currentTheme = useColorScheme();

  // const pointerSensor = useSensor(PointerSensor, {
  //   activationConstraint: { distance: 10 },
  // });

  const mouserSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 500 },
  });

  // const sensors = useSensors(pointerSensor);
  const sensors = useSensors(mouserSensor, touchSensor);

  const [activeDragItemId, setActiveDragItemId] = useState<string | null>(null);
  const [activeDragItemType, setActiveDragItemType] = useState<string | null>(
    null
  );
  const [activeDragItemData, setActiveDragItemData] = useState<any>(null);

  const dropAnimation: DropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5",
        },
      },
    }),
  };

  useEffect(() => {
    const orderedColumns = mapOrder(
      board?.columns,
      board?.columnOrderIds,
      "_id"
    );
    setOrderedColumnsState(orderedColumns);
  }, []);

  console.log(activeDragItemData);

  const handleDragStart = (e: DragStartEvent) => {
    setActiveDragItemId(String(e?.active?.id));
    setActiveDragItemType(
      e?.active?.data?.current?.columnId
        ? ACTIVE_DRAG_ITEM_TYPE.CARD
        : ACTIVE_DRAG_ITEM_TYPE.COLUMN
    );
    // setActiveDragItemData(e?.active?.data?.current);
    if (e?.active?.data?.current) {
      setActiveDragItemData(e?.active?.data?.current);
    }
  };

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
    setActiveDragItemId(null);
    setActiveDragItemType(null);
    setActiveDragItemData(null);
  };

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
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
        <DragOverlay dropAnimation={dropAnimation}>
          {!activeDragItemType && null}
          {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
            <Column columnId={activeDragItemData?._id} />
          )}
          {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD && (
            <Card cardId={activeDragItemData?._id} />
          )}
        </DragOverlay>
      </Box>
    </DndContext>
  );
};

export default BoardContent;
