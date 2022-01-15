import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import ConstructionIcon from '@mui/icons-material/Construction';
import Styled from "styled-components";

const Skills = () => {
  return (
    <StyledSkills>
      <h2 id="title">Tech Stack / Skills</h2>
      <ChipsArray />
    </StyledSkills>
  );
};
const StyledSkills = Styled.div`
  border: 1px solid gainsboro;
  width: 100%;
  /* height: 150px; */
  border-radius: 20px;
  margin-top:20px;
  box-sizing: border-box;
   padding:0 20px 20px 20px;
  & > #title {
      text-align: left;
  }
`;
export { Skills };

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

function ChipsArray() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
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
              onDelete={handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}
