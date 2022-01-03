import { createStyles, Theme } from "@material-ui/core/styles";
import { colors } from "../../theme/index";

const style = (theme: Theme) =>
  createStyles({
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      padding: "10px",
    },
    RadioButtonsContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "10px",
    },
    RadioButton: {
      "& .MuiRadio-root": {
        color: colors.primary,
      },
      "& .Mui-checked": {
        color: colors.primary,
      },
      "& .MuiFormControlLabel-label": {
        fontFamily: '"Audiowide", sans-serif',
        fontSize: "1.2rem",
        [theme.breakpoints.down("xs")]: {
          fontSize: "0.9rem",
        },
      },
      [theme.breakpoints.down("xs")]: {
        margin: "auto",
      },

      "&:last-child": {
        marginLeft: "10px",
        [theme.breakpoints.up("xs")]: {
          margin: "auto",
        },
      },
    },
  });

export default style;
