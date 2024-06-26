import React, { useState } from "react";
import { Paper, TextField, Box, Stack, Typography, FormControl, InputLabel, FilledInput } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import moment from "moment";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Alert from '@mui/material/Alert';

import TableRow from "@mui/material/TableRow";
import "moment/locale/vi";
import Button from '@mui/material/Button';

const _Volumn = () => {
    moment.locale("vi");
    const [data, setData] = useState({
        total: null,
        speed: null,
        time: null, // moment().format("HH:mm")
        start: null, // moment().format("YYYY-MM-DD")
        _time: null,
        end: null,
        give: null,
        remail: null
    });
    const [error, setError] = useState(null);

    const Cal = (e) => {
        e.preventDefault();

        const [hour, minute] = data.time.split(":");
        const timeStart = moment(data.start).set({ hour: hour, minute });
        const [_hour, _minute] = data._time.split(":");
        const timeEnd = moment(data.end).set({ hour: _hour, minute: _minute});

        const remain = parseFloat(data.total) - (timeEnd.unix() - timeStart.unix()) / 3600 * data.speed;
        if(parseFloat(remain) < 0 ){
            setError("Thời giời kết thúc đã vượt qua thời gian kết thúc thực");
        } else {
            setData({ ...data, remain: parseFloat(remain), give: (parseFloat(data.total) - remain).toFixed(2) });
            setError(null);
        }
        
        
    };
    return (
        <Box >
            <Stack width="100%">
                <Paper>
                    <form onSubmit={Cal}>
                        <Grid marginLeft="3%" marginRight="3%">
                            <TextField
                                label="Tổng thể tích (mL)"
                                name={data.total}
                                value={data.total}
                                type="number" 
                                fullWidth
                                variant="standard"
                                inputProps={{ min: "0", step: "0.5" }}
                                onChange={(e) => {
                                    setData({ ...data, total: e.target.value });
                                }}
                            
                                required
                            />
                        </Grid>
                        <Grid marginLeft="3%" marginTop="2%" marginRight="3%">
                            <TextField
                                label="Tốc độ (mL/h)"
                                name={data.speed}
                                value={data.speed}
                                inputProps={{ min: "0", step: "0.5" }}
                                type="number" 
                                fullWidth
                                variant="standard"
                         
                                onChange={(e) => {
                                    setData({ ...data, speed: e.target.value });
                                }}
                                required
                            />

                        </Grid>
                        <Grid container marginTop="2%" xs={12} spacing={2} >
                            <Grid xs={5} marginLeft="3%" >
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
                            <Grid xs={5} >
                                <TextField
                                    label="Ngày"
                                    name={data.start}
                                    value={data.start}
                                    type="date"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => {
                                        setData({ ...data, start: e.target.value });
                                    }}
                                    required
                                />
                            </Grid>
                        </Grid>
                        <Grid container marginTop="2%" xs={12} spacing={2} >
                            <Grid xs={5} marginLeft="3%" >
                                <TextField
                                    label="Thời gian kết thúc truyền"
                                    name={data._time}
                                    value={data._time}
                                    type="time"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => {
                                        setData({ ...data, _time: e.target.value });
                                    }}
                                    required
                                />

                            </Grid>
                            <Grid xs={5} >
                                <TextField
                                    label="Ngày"
                                    name={data.end}
                                    value={data.end}
                                    type="date"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => {
                                        setData({ ...data, end: e.target.value });
                                    }}
                                    required
                                />
                            </Grid>
                        </Grid>
                        <Grid marginTop="2%" marginLeft="40%" marginBottom="2%" >
                            <Button variant="contained" type="submit" >Tính Toán</Button>
                        </Grid>
                    </form>
                </Paper>
       
                <div hidden={error == null}> <Alert variant="filled" severity="error">{error}</Alert></div>
            
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableBody>
                            <TableRow
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}

                            >
                                <TableCell component="th" scope="row">
                                    Thể tích đã truyền
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h6">
                                        {data.give} (mL)
                                    </Typography>

                                </TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                style={{ backgroundColor: "rgba(0, 128, 0, 0.2)" }}
                            >
                                <TableCell component="th" scope="row">
                                    Thể tích còn lại
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h4">
                                        {data.remain} (mL)
                                    </Typography>

                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
        </Box>
    )
}

export default _Volumn;