import { createStyles, Theme } from "@material-ui/core/styles";
import { colors } from "../../theme/index";

const style = (theme: Theme) =>
  createStyles({
    columnContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    population: {},
    columnBottom: {},
    columnFill: {
      backgroundColor: "lightgrey",
      "&:hover": {
        backgroundColor: colors.primary,
      },
    },
    dataField: {
      fontFamily: '"Days One", sans-serif',
    },
  });

export default style;
