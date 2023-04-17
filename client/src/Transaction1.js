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
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css fil
import { DateRangePicker } from 'react-date-range';

export default function Transaction1() {
    const [data, setData] = useState([]);
    const [Alldata, setAllData] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date())
    useEffect(() => {
        axios
            .get("http://localhost:8080/api/transaction/")
            .then((res) => {
                setData(res.data);
                setAllData(res.data)
            })
            .catch((err) => console.log(err));
    }, []);
    // const filtetData = (datas, ranges) =>{
    //     const newData = datas.filter(data => {
    //        return data.Dateoftxn 
    //     })
    //     setData(newData) 
    // }
    // const handleSelect = (ranges) => {
    //     console.log(ranges)
    //     return ranges
    // };
  
    const handleSelect = (dates) => {
        let filtered=Alldata.filter((data)=>{
            let datadate=new Date(data.Dateoftxn);
            return (datadate >=dates.selection.startDate && datadate <= dates.selection.endDate);
        })
        setStartDate(dates.selection.startDate);
        console.log(dates.selection.startDate)
        setEndDate(dates.selection.endDate)
        console.log(dates.selection.endDate)
        setData(filtered)
    }
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }


    return (
        <React.Fragment>
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
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
                                  key={data.Slno}
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
        </React.Fragment>
    );
}