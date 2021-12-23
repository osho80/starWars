import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import style from "./style";

interface Props extends WithStyles<typeof style> {}

const Title = ({ classes }: Props) => {
  return (
    <div className={classes.title}>
      <h2>Home assignment By Oshri Hayke</h2>
    </div>
  );
};

export default withStyles(style)(Title);
