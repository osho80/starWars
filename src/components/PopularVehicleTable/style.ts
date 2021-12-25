import { createStyles } from "@material-ui/core/styles";
import { colors, container } from "../../theme/index";
const style = () =>
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
    planetDetails: {
      "&:hover": {
        cursor: "pointer",
      },
    },
    pilotDetails: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      "&:hover": {
        cursor: "pointer",
      },
    },
    profileImage: {
      width: "70px",
      borderRadius: "50%",
      margin: "0 10px 10px 10px",
    },
  });

export default style;
