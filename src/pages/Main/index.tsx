import React, { useState } from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import {
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import style from "./style";
import PopularVehicleTable from "../../components/PopularVehicleTable/index";
import Chart from "../../components/Chart/index";

interface Props extends WithStyles<typeof style> {}

const Main = ({ classes }: Props) => {
  const [value, setValue] = useState("1");

  const handleSetValue = (target: any) => {
    setValue(target.value);
  };

  return (
    <div className={classes.mainContainer}>
      {/* <h2 className={classes.title}>Home assignment By Oshri Hayke</h2> */}
      <FormControl component="fieldset">
        <RadioGroup
          row
          aria-label="exercise"
          name="row-radio-buttons-group"
          defaultValue={value}
        >
          <FormControlLabel
            value="1"
            control={<Radio />}
            label="Popular Vehicle Table"
            onChange={(e) => handleSetValue(e.target)}
            className={classes.RadioButton}
          />
          <FormControlLabel
            value="2"
            control={<Radio />}
            label="Planets Chart"
            onChange={(e) => handleSetValue(e.target)}
            className={classes.RadioButton}
          />
        </RadioGroup>
      </FormControl>

      {value === "1" && <PopularVehicleTable />}
      {value === "2" && <Chart />}
    </div>
  );
};

export default withStyles(style)(Main);
