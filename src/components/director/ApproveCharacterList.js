import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import CharacterCard from "../reusable-components/CharacterCard";
import axios from "axios";
import { serverURL } from "../../constants";
import { useNavigate } from "react-router-dom";

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
}));

const ApproveCharacterList = ({ fetchAPI, fetchType }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
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
    navigate("/director/approveSelectedCharacter");
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
            showSelectButton={true}
            selectButtonAction={cardSelectionToggled}
          />
        ))}
      </div>
    </div>
  );
};

export default ApproveCharacterList;
