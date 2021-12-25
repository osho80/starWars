import { createStyles } from "@material-ui/core/styles";
import { colors } from "../../theme/index";

const style = () =>
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
