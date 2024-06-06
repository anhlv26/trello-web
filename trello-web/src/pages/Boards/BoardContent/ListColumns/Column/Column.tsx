import { Tooltip, useColorScheme } from "@mui/material";
import theme from "~/theme";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import React, { useEffect } from "react";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import Cloud from "@mui/icons-material/Cloud";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import AddCardIcon from "@mui/icons-material/AddCard";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import ListCards from "./ListCards/ListCards";
import { FC } from "react";
import { Column as ColumnType } from "~/types/type";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "~/reudx/store";
import { mapOrder } from "~/utils/sort";
import { setOrderedCards } from "~/reudx/slices/boardSlice";
interface ColumnProps {
  columnId: string;
}

const Column: FC<ColumnProps> = ({ columnId }) => {
  const dispatch = useAppDispatch();
  const column = useSelector((state: RootState) =>
    state.board.board.columns.find((col) => col._id === columnId)
  ) as ColumnType;
  const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, "_id");
  const currentTheme = useColorScheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  useEffect(() => {
    if (column) {
      dispatch(setOrderedCards({ columnId, cards: orderedCards }));
    }
  }, []);

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        minWidth: "300px",
        maxWidth: "300px",
        bgcolor: currentTheme.colorScheme === "dark" ? "#333643" : "#ebecf0",
        ml: 2,
        borderRadius: "6px",
        height: "fit-content",
        maxHeight: `calc(${theme.trello.boardContentHeight} - ${theme.spacing(
          5
        )})`,
      }}
    >
      {/* box columns header */}
      <Box
        sx={{
          height: theme.trello.columnHeaderHeight,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontWeight: "bold", cursor: "pointer" }}>
          {column?.title}
        </Typography>
        <Box>
          <Button
            id="basic-column-more"
            aria-controls={open ? "basic-menu-column-more" : undefined}
            aria-haspopup="true"
            // aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            // endIcon={<MoreHorizIcon />}
            sx={{
              color: "text.primary",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "45px",
              minHeight: "30px",
              padding: 0,
              borderRadius: "10px",
            }}
          >
            <MoreHorizIcon />
          </Button>

          <Menu
            id="basic-menu-column-more"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-column-more",
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <AddCardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Add new card</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>Paste</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <DeleteIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Remove this column</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Archive this column</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Box>

      {/* box columns list */}
      <ListCards columnId={column._id} />

      {/* box columns footer */}
      <Box
        sx={{
          height: theme.trello.columnFooterHeight,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button startIcon={<AddCardIcon />}>Add new card</Button>
        <Tooltip title="Drag to move">
          <DragHandleIcon sx={{ cursor: "pointer" }} />
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Column;
