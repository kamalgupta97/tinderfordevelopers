import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import ConstructionIcon from '@mui/icons-material/Construction'

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const ChipsArray = ({ chips,removeSkill,isEditable = false  }) => {
  
  const [chipData, setChipData] = React.useState(chips);

  React.useEffect(() => {
    setChipData(chips);
  }, [chips])

  const handleDelete = (chipToDelete) => () => {
    removeSkill (chipToDelete.key)
  };

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((data) => {
        let icon;
          icon = <ConstructionIcon />;        

        return (
          <ListItem key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={isEditable ? handleDelete(data) :  null}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}
export {ChipsArray}