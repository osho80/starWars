import { createStyles } from "@material-ui/core/styles";
import { colors } from "../../theme/index";

const style = () =>
  createStyles({
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
      },
      "&:last-child": {
        marginLeft: "10px",
      },
    },
  });

export default style;
