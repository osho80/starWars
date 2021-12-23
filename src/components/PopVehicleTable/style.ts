import { createStyles, Theme } from "@material-ui/core/styles";
import { colors, container } from "../../theme/index";
const style = (theme: Theme) =>
  createStyles({
    tableContainer: container.normal,
    title: {
      fontFamily: '"Audiowide", sans-serif',
    },
    tableRow: {
      "&:hover": {
        backgroundColor: colors.primary,
      },
    },
    rowText: {
      fontFamily: '"Days One", sans-serif',
    },
    pilotDetails: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    profileImage: {
      width: "70px",
      borderRadius: "50%",
      margin: "0 10px 10px 10px",
    },
  });

export default style;
