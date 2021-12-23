import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  // TableHead,
  TableRow,
  ClickAwayListener,
  Dialog,
  Paper,
  Typography,
} from "@material-ui/core";
import style from "./style";
import { PopVehicle, Planet } from "../../types/types";
type Item = {
  pilot: string;
  planet: Planet;
};
interface Props extends WithStyles<typeof style> {
  //   data: PopVehicle;
  data: any;
}

const PopVehicleTable = ({ classes, data }: Props) => {
  // console.log("My PopVehicleTable data:", data);

  return (
    <div className={classes.tableContainer}>
      <h3>Exercise 1</h3>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow key={"first"} className={classes.tableRow}>
              <TableCell component="th" scope="row">
                {"Vehicle name with the largest sum"}
              </TableCell>
              <TableCell align="right">{data.name}</TableCell>
            </TableRow>
            <TableRow key={"second"} className={classes.tableRow}>
              <TableCell component="th" scope="row">
                {"Related home planets and their respective population"}
              </TableCell>
              <TableCell align="right">
                {data.data.map((item: Item) => {
                  return (
                    <Typography>
                      {`${item.planet.name}, ${item.planet.population}`}
                    </Typography>
                  );
                })}
              </TableCell>
            </TableRow>
            <TableRow key={"third"} className={classes.tableRow}>
              <TableCell component="th" scope="row">
                {"Related pilot names"}
              </TableCell>
              <TableCell>
                {data.data.map((item: Item) => {
                  return (
                    <div className={classes.pilotDetails}>
                      <Typography>{item.pilot}</Typography>
                      <img
                        src="../assets/images/Grievoushead.jpg"
                        alt="Pilot Profile"
                        className={classes.profileImage}
                      />
                    </div>
                  );
                })}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default withStyles(style)(PopVehicleTable);
