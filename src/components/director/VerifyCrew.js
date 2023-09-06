import React from "react";
import { Button, TextField, Typography, makeStyles } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import CrewTable from "../reusable-components/CrewTable";
import { serverURL, tempCrewData } from "../../constants";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    height: "100%",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: theme.spacing(5),
    boxSizing: "border-box",
  },
  searchContainer: {
    width: "50%",
    margin: "0 auto",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  searchInput: {
    width: "100%",
  },
  gridContainer: {
    flexGrow: 1,
    width: "80%",
    margin: "0 auto",
  },
}));

const modifyColumns = (columns) => {
  const editButtonColumn = {
    field: "edit",
    headerName: "Edit",
    width: 150,
    renderCell: (params) => {
      return (
        <Button
          variant="contained"
          onClick={() => {
            console.log(params.row);
          }}
        >
          Edit
        </Button>
      );
    },
  };

  return [...columns, editButtonColumn];
};

const VerifyCrew = (props) => {
  const classes = useStyles();
  const [rows, setRows] = React.useState([]);
  const [columns, setColumns] = React.useState([]);
  const [filteredRows, setFilteredRows] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${serverURL}/crew`);
      const { rows, columns } = result.data;
      setRows(rows);
      setColumns(columns);
    };
    // TODO: uncomment the following line to fetch data from server
    // fetchData();

    const columnsWithEditButton = modifyColumns(tempCrewData.columns);

    setRows(tempCrewData.rows);
    setFilteredRows(tempCrewData.rows);
    setColumns(columnsWithEditButton);
  }, []);

  const handleSearchChange = (event) => {
    const searchQuery = event.target.value;

    const filteredRowsData = !!searchQuery
      ? rows.filter((row) =>
          row.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : rows;
    setFilteredRows(filteredRowsData);
  };

  return (
    <div className={classes.content}>
      <Typography variant="h4" gutterBottom>
        Crew Details
      </Typography>
      <div className={classes.searchContainer}>
        <TextField
          className={classes.searchInput}
          id="input-with-icon-textfield"
          placeholder="Search Crew..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onChange={handleSearchChange}
        />
      </div>
      <div className={classes.gridContainer}>
        <CrewTable rows={filteredRows} columns={columns} />
      </div>
    </div>
  );
};

export default VerifyCrew;
