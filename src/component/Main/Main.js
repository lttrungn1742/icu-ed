import { Paper, TextField, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React, { useState } from "react";
import moment from "moment";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "moment/locale/vi";
import Button from '@mui/material/Button';

const Main = () => {
  moment.locale("vi");
  const [data, setData] = useState({
    total: null,
    speed: null,
    time: moment().format("HH:mm"),
    start: moment().format("YYYY-MM-DD"),
    end: null,
  });

  const Cal = (e) => {
    e.preventDefault();
    const [hour, minute] = data.time.split(":");
    var timeData = moment(data.date).set({ hour: hour, minute });
    timeData.add((data.total / data.speed) * 60, "minutes");
    setData({ ...data, end: timeData.format("HH:mm - DD/MM/YYYY") });

  };

  return (
    <Box width="90%" margin="auto" marginTop="3%" >
      <Grid container spacing={2}>
        <Grid xs={6}>
          <Paper>
            <form onSubmit={Cal}>
              <Grid xs={12}>
                <TextField
                  label="Thể tích (mL)"
                  name={data.total}
                  value={data.total}
                  type="number"
                  inputProps={{ min: 0 }}
                  fullWidth
                  variant="standard"
                  helperText="Tổng thể tích"
                  onChange={(e) => {
                    setData({ ...data, total: parseInt(e.target.value) });
                  }}
                  required
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  label="Tốc độ (mL/h)"
                  name={data.speed}
                  value={data.speed}
                  type="number"
                  inputProps={{ min: 0 }}
                  fullWidth
                  variant="standard"
                  helperText="Tốc độ truyền dịch"
                  onChange={(e) => {
                    setData({ ...data, speed: e.target.value });
                  }}
                  required
                />
              </Grid>
              <Grid container xs={12} spacing={2}>
                <Grid xs={5}>
                  <TextField
                    label="Thời gian bắt đầu truyền"
                    name={data.time}
                    value={data.time}
                    type="time"
                    fullWidth
                    variant="standard"
                    onChange={(e) => {
                      setData({ ...data, time: e.target.value });
                    }}
                    required
                  />
                </Grid>
                <Grid xs={7}>
                  <TextField
                    label="Ngày"
                    name={data.start}
                    value={data.start}
                    type="date"
                    fullWidth
                    variant="standard"
                    onChange={(e) => {
                      setData({ ...data, date: e.target.value });
                    }}
                    required
                  />
                </Grid>
              </Grid>
              <Grid xs={12}>
                <Button variant="contained" type="submit">Tính Toán</Button>
              </Grid>
            </form>
          </Paper>
        </Grid>
        <Grid xs={6}>
          <TableContainer component={Paper}>
            <Table  aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Tên</TableCell>
                  <TableCell align="right">Chỉ số</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Tổng thể tích
                  </TableCell>
                  <TableCell align="right">{data.total} (mL)</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Tốc độ
                  </TableCell>
                  <TableCell align="right">{data.speed} (mL/h)</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={{ backgroundColor: "rgba(0, 128, 0, 0.2)" }}
                >
                  <TableCell component="th" scope="row">
                   Ngày kết thúc truyền dịch
                  </TableCell>
                  <TableCell align="right">{data.end}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>

  );
};

export default Main;
