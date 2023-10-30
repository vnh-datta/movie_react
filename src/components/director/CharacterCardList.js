import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  makeStyles,
} from "@material-ui/core";
import CharacterCard from "../reusable-components/CharacterCard";
import axios from "axios";
import { serverURL } from "../../constants";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  container: {
    flex: 1,
    width: "100%",
    overflow: "auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  containerFooter: {
    height: "75px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderTop: "1px solid #ccc",
    padding: "0 4rem",
    boxSizing: "border-box",
  },
  assignedAD: {
    width: "20rem",
  },
}));

const CharacterCardList = ({ fetchAPI, fetchType }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [assignedAD, setAssignedAD] = useState("");

  useEffect(() => {
    let isCancelled = false;
    if (isCancelled === false) setLoading(true);
    axios({
      method: fetchType,
      url: `${serverURL}/${fetchAPI}`,
    })
      .then((result) => {
        setCharacters([...result.data]);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [fetchAPI, fetchType]);

  const cardSelectionToggled = (id) => {
    setCharacters(
      characters.map((character) => {
        if (character.id === id) {
          return {
            ...character,
            selected: !character.selected,
          };
        }
        return character;
      })
    );
  };

  const handleAssignAD = (event) => {
    setAssignedAD(event.target.value);
  };

  const handleAssign = async () => {
    try {
      const response = await saveCharacters();
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const saveCharacters = async () => {
    return axios.post(`${serverURL}/saveCharacters`, {
      characters: characters.filter((character) => character.selected),
      assignedAD: assignedAD,
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            id={character.id}
            title={character.title}
            description={character.description}
            keyFeatures={character.keyFeatures}
            subHeader={character.subHeader}
            status={character.status}
            selected={character.selected ?? false}
            characterDetails={character.characterDetails}
            showStatusButton={character.showStatusButton}
            showSelectButton={character.showSelectButton}
            showMoreButton={character.showMoreButton}
            selectButtonAction={cardSelectionToggled}
          />
        ))}
      </div>
      <div className={classes.containerFooter}>
        <FormControl className={classes.assignedAD}>
          <InputLabel id="assign-to-AD">Assign to AD</InputLabel>
          <Select
            inputProps={{
              name: "assignedAD",
            }}
            labelId="assign-to-AD"
            variant="outlined"
            label="Assign to AD"
            onChange={handleAssignAD}
          >
            <MenuItem value={"ad1"}>AD1</MenuItem>
            <MenuItem value={"ad2"}>AD2</MenuItem>
            <MenuItem value={"ad3"}>AD3</MenuItem>
          </Select>
        </FormControl>
        <Button
          className={classes.footerButton}
          variant="contained"
          color="primary"
          onClick={handleAssign}
        >
          Assign
        </Button>
      </div>
    </div>
  );
};

export default CharacterCardList;
