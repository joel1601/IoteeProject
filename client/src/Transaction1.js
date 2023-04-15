import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Grid } from "@mui/material";
// import TextField from '@mui/material/TextField';
// import moment from "moment";
// import Box from '@mui/material/Box';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
export default function Transaction1() {
    // const [currentDate, setCurrentDate] = useState( moment().format("YYYY-MM-DD"));
    const [data, setData] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    useEffect(() => {
        axios
            .get("http://localhost:8082/api/transaction/")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    const filtetData = (datas) =>{
        const ranges = handleSelect
        const newData = datas.filter(data => {
            data.Dateoftxn >= ranges.selection.startDate && data.Dateoftxn <= ranges.selection.endDate
        })
        setData(newData) 
    }
    const handleSelect = (ranges) => {
        return ranges
    };

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    };
    return (
        <>
            {/* this grid give two box right yes, we need to get value of both input */}
            <Grid item pt={15}>
                <DateRangePicker
                    ranges={[selectionRange]}
                    onChange={()=>{
                        filtetData(data)
                        {this.handleSelect}}}
                /></Grid>
            {/* <Box pt={3} pb={3} px={3}>
              <Grid container spacing={3} mb={3}>
                <Grid item xs={6} md={6}>
                  <TextField
                    label="Search"
                    name="search"
                  />
                </Grid>
                <Grid item xs={4} sm={2}>
                  <TextField
                    // label="From"
                    name="from"
                    inputProps={{ type: "date", min: "1970-01-01", max: currentDate}}
                    // value={x.from}
                    // onChange={(e) => handleInputChange(e, i)}
                    // {...formik.getFieldProps("from")}
                  ></TextField>
                </Grid>
                <Grid item xs={4} sm={2}>
                  <TextField
                    // label="To"
                    name="to"
                    inputProps={{ type: "date", min:"1970-01-01", max: currentDate }}
                    // value={x.to}
                    // onChange={(e) => handleInputChange(e, i)}
                    // {...formik.getFieldProps("to")}
                  ></TextField>
                </Grid>
                </Grid>
                </Box> */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow style={{ backgroundColor: "red" }}>
                            <TableCell>Slno</TableCell>
                            <TableCell align="right">Dateoftxn</TableCell>
                            <TableCell align="right">Subject</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">DebitCredit</TableCell>
                            <TableCell align="right">Closingbalance</TableCell>
                            <TableCell align="right">CategoryINS</TableCell>
                            <TableCell align="right">Classification</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((data) => (
                            <TableRow
                                //   key={data.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {data.Slno}
                                </TableCell>
                                <TableCell align="right">{data.Dateoftxn}</TableCell>
                                <TableCell align="right">{data.Subject}</TableCell>
                                <TableCell align="right">{data.Description}</TableCell>
                                <TableCell align="right">{data.DebitCredit}</TableCell>
                                <TableCell align="right">{data.Closingbalance}</TableCell>
                                <TableCell align="right">{data.CategoryINS}</TableCell>
                                <TableCell align="right">{data.Classification}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}