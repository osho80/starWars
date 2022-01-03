import { createStyles, Theme } from "@material-ui/core/styles";
import { colors } from "../../theme/index";

const style = (theme: Theme) =>
  createStyles({
    columnContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
    population: {},
    columnBottom: {},
    columnFill: {
      backgroundColor: "lightgrey",
      margin: "auto",
      width: "80px",
      "&:hover": {
        backgroundColor: colors.primary,
      },
      [theme.breakpoints.down("xs")]: {
        width: "40px",
      },
    },
    dataField: {
      fontFamily: '"Days One", sans-serif',
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.7rem",
      },
    },
  });

export default style;
