import React from 'react';
import { makeStyles } from '@material-ui/core';

/* 
    CrewTable component
    it takes in data as a json array. each array item is an object with the following properties:
    {
        id: number,
        name: string,
        dept: string,
        subDept: string,
        designation: string,
    }
    all these properties are represented as columns in the table along with an edit button as last column.
*/


const useStyles = makeStyles((theme) => ({

}));

const CrewTable = ({ data }) => {
    const classes = useStyles();
    return (
        <div>
        CrewTable
        </div>
    );
};

export default CrewTable;