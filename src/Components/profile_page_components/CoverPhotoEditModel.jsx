import ClearIcon from "@mui/icons-material/Clear";
import styled from "styled-components";
import { Dialog } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {  useState } from "react";
const CoverPhotoEditModel = ({ toggleModel }) => {
  const [imgData, setImgData] = useState();
  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    try {
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImgData({
            file: file,
            imagePreviewUrl: reader.result,
          });
        }
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.log(err.message);
    }
  };
  const uploadImg = async () => {
    let file = imgData.file;
    const form = new FormData();
    form.append("image", file);
    try {
      let req = await fetch(`https://api.imgur.com/3/image`, {
        method: "post",
        headers: {
          Authorization: "Client-ID fc509ad5b921bf3",
        },
        body: form,
      })
      let data = await req.json();
      console.log(data);
    } catch (err) {
      console.log(err.message)
    }
  };
  return (
    <StyledDialog open={true} onClose={() => toggleModel()}>
      <StyledDialogTitle>
        <h3> Cover Photo </h3>
        <StyledClearIcon onClick={() => toggleModel()} />
      </StyledDialogTitle>
      <StyledDialogContent>
        <StyledCoverOverview >
          <img
            src={
              imgData?.imagePreviewUrl ? imgData.imagePreviewUrl : "/rahul.jpg"
            }
            alt=""
          />
        </StyledCoverOverview>
      </StyledDialogContent>
      <footer>
        <StyledIconsCont>
          <div>
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
                onChange={(e) => handleImageChange(e)}
              />
            </label>
          </div>
          <div>
            <DeleteOutlineOutlinedIcon />
            <h4>Delete</h4>
          </div>
        </StyledIconsCont>
        <button onClick={ uploadImg }>Save</button>
      </footer>
    </StyledDialog>
  );
};

export { CoverPhotoEditModel };
const StyledCoverOverview = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
  }
`;
const StyledDialog = styled(Dialog)`
  &
    div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation24.MuiDialog-paper.MuiDialog-paperScrollPaper {
    min-width: 60%;
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
  padding: 2% 5% 2% 5%;
  border: 1px solid gainsboro;
  border-left: none;
  max-height:270px;
  min-height:max-content;
  overflow:auto;
  border-right: none;
  & > input {
    width: 100%;
    padding: 10px;
    font-size: 15px;
    margin-top: 20px;
    box-sizing: border-box;
  }
  & + footer {
    display: flex;
    justify-content: space-between;
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

const StyledClearIcon = styled(ClearIcon)`
  cursor: pointer;
`;
