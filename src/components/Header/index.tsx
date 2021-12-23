import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import style from "./style";

interface Props extends WithStyles<typeof style> {}

const Header = ({ classes }: Props) => {
  return (
    <div className={classes.header}>
      <img
        src="../assets/images/SW_opening_crawl_logo.svg"
        alt="logo"
        className={classes.logo}
      />
    </div>
  );
};

export default withStyles(style)(Header);
