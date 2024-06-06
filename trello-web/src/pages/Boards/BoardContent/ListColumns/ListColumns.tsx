import Box from "@mui/material/Box";
import Column from "./Column/Column";
import Button from "@mui/material/Button";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "~/reudx/store";
import { Column as ColumnType} from "~/types/type";

// interface ListColumnsProps {
//   columns: ColumnType[];
// }

const ListColumns: FC = () => {
  const columns = useSelector((state: RootState) => state.board.board.columns);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "inherit",
        display: "flex",
        overflowX: "auto",
        overflowY: "hidden",
        // "&::-webkit-scrollbar-track": { m: 2 },
      }}
    >
      {columns.map((column) => (
        <Column key={column._id} columnId={column._id} />
      ))}
      <Box
        sx={{
          minWidth: "200px",
          maxWidth: "200px",
          mx: 2,
          borderRadius: "6px",
          height: "fit-content",
          bgcolor: "#ffffff3d",
        }}
      >
        <Button
          sx={{
            color: "white",
            width: "100%",
            justifyContent: "flex-start",
            p: 2.5,
            py: 1,
          }}
          startIcon={<PlaylistAddIcon />}
        >
          Add new column
        </Button>
      </Box>
    </Box>
  );
};

export default ListColumns;
