import React, { useEffect, useState } from "react";
import { Button, makeStyles } from "@material-ui/core";
import CharacterCard from "../reusable-components/CharacterCard";
import axios from "axios";
import { serverURL } from "../../constants";
import { Link } from "react-router-dom";

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

const SelectedCharacterList = ({ fetchAPI, fetchType }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState({});

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
    if (selectedCharacter?.id === id) {
      setSelectedCharacter({});
    } else {
      const character = characters?.find((c) => c.id === id);
      setSelectedCharacter(character);
    }

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

  const castingCall = () => {
    console.log("Casting Call", selectedCharacter);
  };

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

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
            showSelectButton={
              isEmpty(selectedCharacter)
                ? true
                : selectedCharacter.id === character.id
            }
            selectButtonAction={cardSelectionToggled}
          />
        ))}
      </div>
      <div className={classes.containerFooter}>
        <Link
          to={"/assistantdirector/castingCall"}
          state={{ characters, id: selectedCharacter.id }}
        >
          <Button
            className={classes.footerButton}
            variant="contained"
            color="primary"
            onClick={castingCall}
            disabled={!selectedCharacter?.id}
          >
            Casting Call
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SelectedCharacterList;
