import React from 'react'
import {Button, Table, TableHead, TableBody, TableRow, TableCell, IconButton} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

const Import = (props) => {
    // fill out this component
    // const state (which cell and set cell. need index)

    return (
        <>
        <p>Import Component</p>
        <Button variant="contained" color="primary" onClick={() => props.fetchMakes()}>
            Import
        </Button>
        <h2>
            count: {props.makes.length}
        </h2>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        Id
                    </TableCell>
                    <TableCell>
                        Make
                    </TableCell>
                    <TableCell>
                        Actions
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
               {props.makes.map((make, index) => (
                <TableRow key={make.MakeId}>
                    <TableCell>{make.MakeId}</TableCell>
                    <TableCell>{make.MakeName}</TableCell>
                    <TableCell>
                        <IconButton onClick={() => props.deleteMake(index)}>
                            <DeleteIcon/>
                        </IconButton>
                    </TableCell>
                </TableRow>
               ))}
            </TableBody>
        </Table>
        </>
    )
}

export default Import