import { IconButton, Tooltip, useColorScheme } from "@mui/material";
import theme from "~/theme";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import React from "react";
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
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import GroupIcon from "@mui/icons-material/Group";
import AttachmentIcon from "@mui/icons-material/Attachment";
import CommentIcon from "@mui/icons-material/Comment";

const COLUMN_HEADER_HEIGHT = "50px";
const COLUMN_FOOTER_HEIGHT = "50px";

const BoardContent = () => {
  const currentTheme = useColorScheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        {/* Box column */}
        <Box
          sx={{
            minWidth: "300px",
            maxWidth: "300px",
            bgcolor:
              currentTheme.colorScheme === "dark" ? "#333643" : "#ebecf0",
            ml: 2,
            borderRadius: "6px",
            height: "fit-content",
            maxHeight: `calc(${
              theme.trello.boardContentHeight
            } - ${theme.spacing(5)})`,
          }}
        >
          {/* box columns header */}
          <Box
            sx={{
              height: COLUMN_HEADER_HEIGHT,
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontWeight: "bold", cursor: "pointer" }}>
              Column Title
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              p: "0 5px",
              m: "0 5px",
              overflowX: "hidden",
              overflowY: "auto",
              maxHeight: `calc(${
                theme.trello.boardContentHeight
              } - ${theme.spacing(
                5
              )} - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`,
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#ced0da",
                borderRadius: "8px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#bfc2df",
              },
            }}
          >
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
                overflow: "unset",
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image="https://img5.thuthuatphanmem.vn/uploads/2021/11/20/hinh-anh-con-than-lan-cute_103235780.jpg"
                title="green iguana"
              />
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>VietanhLe full stack</Typography>
              </CardContent>
              <CardActions sx={{ p: "0 4px 8px 4px" }}>
                <Button size="small" startIcon={<GroupIcon />}>
                  20
                </Button>
                <Button size="small" startIcon={<CommentIcon />}>
                  15
                </Button>
                <Button size="small" startIcon={<AttachmentIcon />}>
                  20
                </Button>
              </CardActions>
            </Card>

            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>

            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
          </Box>

          {/* box columns footer */}
          <Box
            sx={{
              height: COLUMN_FOOTER_HEIGHT,
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
      </Box>
    </Box>
  );
};

export default BoardContent;
