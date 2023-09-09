import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

export const getListEditButton = () => {
  const editButtonConfigs = {
    verifyCrew: {
      field: "edit",
      headerName: "Edit",
      width: 150,
      renderCell: (params) => {
        return (
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
        );
      },
    },
    sceneSetup: {
      field: "edit",
      headerName: "Edit",
      renderCell: (params) => {
        return (
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
        );
      },
    },
    characterSetup: {
      field: "edit",
      headerName: "Edit",
      renderCell: (params) => {
        return (
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
        );
      },
    },
    locationSetup: {
      field: "edit",
      headerName: "Edit",
      renderCell: (params) => {
        return (
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
        );
      },
    },
  };

  return editButtonConfigs;
};
