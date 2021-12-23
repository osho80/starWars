import React, { useState, useEffect } from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { getPopularVehicle } from "../../service/getPopularVehicle";
import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  ClickAwayListener,
  Dialog,
  Paper,
  Typography,
} from "@material-ui/core";
import style from "./style";
import { PopularVehicle, Planet } from "../../types/types";
type Item = {
  pilot: string;
  planet: Planet;
};
interface Props extends WithStyles<typeof style> {}

const PopVehicleTable = ({ classes }: Props) => {
  const [popularVehicle, setPopularVehicle] = useState<null | PopularVehicle>(
    null
  );
  useEffect(() => {
    const getTableData = async () => {
      const data = await getPopularVehicle();
      setPopularVehicle(data);
    };
    // getTableData();
  }, []);
  return !popularVehicle ? (
    <div>
      <CircularProgress />
      <h3>Loading...</h3>
    </div>
  ) : (
    <div className={classes.tableContainer}>
      <h3 className={classes.title}>Exercise 1</h3>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow key={"first"} className={classes.tableRow}>
              <TableCell component="th" scope="row" className={classes.rowText}>
                {"Vehicle name with the largest sum"}
              </TableCell>
              <TableCell align="right" className={classes.rowText}>
                {popularVehicle.name}
              </TableCell>
            </TableRow>
            <TableRow key={"second"} className={classes.tableRow}>
              <TableCell component="th" scope="row" className={classes.rowText}>
                {"Related home planets and their respective population"}
              </TableCell>
              <TableCell align="right">
                {popularVehicle.data.map((item: Item) => {
                  return (
                    <Typography className={classes.rowText}>
                      {`${item.planet.name}, ${item.planet.population}`}
                    </Typography>
                  );
                })}
              </TableCell>
            </TableRow>
            <TableRow key={"third"} className={classes.tableRow}>
              <TableCell component="th" scope="row" className={classes.rowText}>
                {"Related pilot names"}
              </TableCell>
              <TableCell>
                {popularVehicle.data.map((item: Item) => {
                  return (
                    <div className={classes.pilotDetails}>
                      <Typography className={classes.rowText}>
                        {item.pilot}
                      </Typography>
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
