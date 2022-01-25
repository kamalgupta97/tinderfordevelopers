import ClearIcon from "@mui/icons-material/Clear";
import styled from "styled-components";
import { Dialog } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
const Model = ({ toggleModel , modelName, children, onSave, isImgModel}) => {
  return (
    <StyledDialog open={true} onClose={() => toggleModel()}>
      <StyledDialogTitle>
        <h3> {modelName} </h3> <StyledClearIcon onClick={() => toggleModel()} />
      </StyledDialogTitle>
      <StyledDialogContent>
        {children}
      </StyledDialogContent>
      <footer>
        {isImgModel && 
         <StyledIconsCont>
          <div onClick={isImgModel.onEdit}>
            <ModeEditOutlineOutlinedIcon />
            <h4>Edit</h4>
          </div>
          <div>
            <label htmlFor="fileInput">
              <CameraAltOutlinedIcon />
              <h4>Add photo</h4>
              <input
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                onChange={isImgModel.onImgInputChange}
              />
            </label>
          </div>
          <div>
            <DeleteOutlineOutlinedIcon />
            <h4>Delete</h4>
          </div>
        </StyledIconsCont>

        }
        <button onClick={() => {
          onSave();
          toggleModel();
        }}>Save</button>
      </footer>
    </StyledDialog>
  );
};

export { Model };
const StyledDialog = styled(Dialog)`
  &
    div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation24.MuiDialog-paper.MuiDialog-paperScrollPaper {
    min-width: 40%;
    background-color: white;
  }
`;
const StyledDialogTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5% 0 5%;
`;
const StyledDialogContent = styled.div`
  padding: 0 5% 0 5%;
  border: 1px solid gainsboro;
  border-left: none;
  border-right: none;
  overflow: auto;
  & + footer {
    display: flex;
    justify-content: flex-end;
    padding: 2% 5% 2% 5%;
    button {
      padding: 10px 20px 10px 20px;
      background-color: rgb(0, 200, 5);
      color: white;
      cursor: pointer;
      font-size: 15px;
      border: none;
      border-radius: 30px;
    }
  }
`;

const StyledClearIcon = styled(ClearIcon)`
  cursor: pointer;
`;
const StyledIconsCont = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    cursor: pointer;
    text-align: center;
    h4 {
      margin: 0;
    }
    label {
      cursor: inherit;
    }
  }
  & > div:hover {
    color: rgb(0, 200, 5);
  }
`;
