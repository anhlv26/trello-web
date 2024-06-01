import theme from "~/theme";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { useColorScheme } from "@mui/material";

const BoardBar = () => {
  const boardBarHeight = theme.trello.boardBarHeight;
  const currentTheme = useColorScheme();
  const MENU_STYLES = {
    bgcolor: "transparent",
    color: "white",
    border: "none",
    paddingX: "5px",
    borderRadius: "4px",
    "& .MuiSvgIcon-root": {
      color: "white",
    },
    "&:hover": {
      bgcolor: "primary.50",
    },
  };
  return (
    <Box
      sx={{
        width: "100%",
        paddingX: 2,
        height: boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        bgcolor: currentTheme.colorScheme === "dark" ? "#34495e" : "#1976d2",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          textAlign: "center",
        }}
      >
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="VietanhLe full stack"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Publish private workspace"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add to google drive"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Add to google drive"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filter"
          clickable
        />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          variant="outlined"
          sx={{
            color: "white",
            border: "1px solid white",
            "&:hover": { border: "1px solid white" },
          }}
          startIcon={<GroupAddIcon />}
        >
          Invite
        </Button>
        <AvatarGroup
          max={4}
          sx={{
            gap: "10px",
            "& .MuiAvatar-root": {
              width: 34,
              height: 34,
              fontSize: 16,
              border: "none",
              color:"white",
              cursor:"pointer",
              "&:first-of-type":{bgcolor:"#a4b0be"}
            },
          }}
        >
          <Tooltip title="VietanhLe">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="VietanhLe">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="VietanhLe">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="VietanhLe">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="VietanhLe">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default BoardBar;
