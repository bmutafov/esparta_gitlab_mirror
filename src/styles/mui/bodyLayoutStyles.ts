import { asStyle } from "./_sx_interface";

export const drawerWidth = 260;

const bodyLayoutStyles = asStyle({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    display: "block",
    "& .MuiDrawer-paper": {
      width: drawerWidth,
    },
  },
  listItem: {
    "&.Mui-selected": {
      backgroundColor: "primary.main",
      "&, & svg": {
        color: "primary.contrastText",
      },
      "&:hover": {
        backgroundColor: "primary.light",
      },
    },
  },
  appBar: {
    backgroundColor: "background.paper",
    backgroundImage: "none",
  },
  container: {
    m: 2,
    p: 2,
  },
});

export default bodyLayoutStyles;
