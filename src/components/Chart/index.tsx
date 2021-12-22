import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import style from "./style";
import Column from "../Column/index";
import { PopVehicle, Planet } from "../../types/types";
import { getColumnHeight } from "../../utils/getColumnHeight";

interface Props extends WithStyles<typeof style> {
  data: Planet[];
}

const Chart = ({ classes, data }: Props) => {
  return (
    <div className={classes.chartContainer}>
      {data.map((planet: any) => {
        const columnHeight = getColumnHeight(parseInt(planet.population, 10));
        return <Column data={planet} height={columnHeight} />;
      })}
    </div>
  );
};

export default withStyles(style)(Chart);
