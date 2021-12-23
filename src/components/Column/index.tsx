import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import style from "./style";
import { PopVehicle, Planet } from "../../types/types";
import { lightSaborSound } from "../../service/audioService";

interface Props extends WithStyles<typeof style> {
  data: Planet;
  height: string;
}

const Column = ({ classes, height, data }: Props) => {
  return (
    <div className={classes.columnContainer}>
      <p className={classes.dataField}>{data.population}</p>
      <div className={classes.columnBottom}>
        <div
          className={classes.columnFill}
          style={{ height }}
          onMouseEnter={() => lightSaborSound.play()}
        />
        <p className={classes.dataField}>{data.name}</p>
      </div>
    </div>
  );
};

export default withStyles(style)(Column);
