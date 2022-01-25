
import styled from "styled-components";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCover } from "../../../Redux/action";
import AvatarEditor from "react-avatar-editor";
import { Model } from './Model.material';

const CoverPhotoEditModel = ({ toggleModel }) => {
  // for showing input ranges for zoom level and straight level
  const [showEditCont, setShowEditCont] = useState(false);
  /// this is what avatar model will give me
  const [editedImg, setEditedImg] = useState();
  const [imgZoomLevel, setImgZoomLevel] = useState(1);
  const [imgRotateLevel, setImgRotateLevel] = useState(0);
  const dispatch = useDispatch();
  const { cover_photo } = useSelector((state) => state.user_profile);
  const [imgData, setImgData] = useState({});
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
    if (editedImg) {
      dispatch(updateCover(editedImg.getImageScaledToCanvas().toDataURL()));
     
    } else if (imgData.imagePreviewUrl) {
      dispatch(updateCover(imgData.imagePreviewUrl));
      
    }

    /// --------------------------------it is under construction right now

    // let file = imgData.file;
    // const form = new FormData();
    // form.append("image", file);
    // try {
    //   let req = await fetch(`https://api.imgur.com/3/image`, {
    //     method: "post",
    //     headers: {
    //       Authorization: "Client-ID fc509ad5b921bf3",
    //     },
    //     body: form,
    //   })
    //   let data = await req.json();
    //   console.log(data)

    //   dispatch(updateDP(data.data.link))
    // } catch (err) {
    //   console.log(err.message)
    // }
  };
  
  return (
    <Model modelName={"Cover Photo"} onSave={uploadImg} toggleModel={toggleModel} isImgModel={{onEdit:() => setShowEditCont(!showEditCont), onImgInputChange: (e) => handleImageChange(e) }}>
        {showEditCont ?
          <>
            <div style={{"width":"100%"}}>
                <StyledAvatarEditor
                  ref={(editor) => setEditedImg(editor)}
                  image={imgData.imagePreviewUrl || cover_photo}
                  border={10}
                  borderRadius ={0}
                  color={[0, 0, 0, 0.6]}
                  scale={+imgZoomLevel}
                  rotate={+imgRotateLevel}
                />
            </div>
              <StyledEditingMode>
                <div className="inputRange">
                  <label htmlFor="">
                    Zoom {imgZoomLevel}
                    <input
                      type="range"
                      value={imgZoomLevel}
                      onChange={(e) => setImgZoomLevel(e.target.value)}
                      min="1"
                      max="10"
                    />
                  </label>
                  <label htmlFor="">
                    Straighten {imgRotateLevel}
                    <input
                      type="range"
                      value={imgRotateLevel}
                      onChange={(e) => setImgRotateLevel(e.target.value)}
                      min="-180"
                      max="180"
                    />
                  </label>
                </div>
              </StyledEditingMode>
            </> : <StyledImagePreview>
              <img src={imgData.imagePreviewUrl || cover_photo} alt="" />
            </StyledImagePreview>
      }
    </Model>
  );
};

export { CoverPhotoEditModel };
const StyledImagePreview = styled.div`
  width:100%;
  height:280px;
  margin:auto;
  margin-top:20px;
  margin-bottom:20px;
  & > img {
    width:100%;
    /* height:100%; */
  }
`;
const StyledEditingMode = styled.div`
  margin: 2% 0;
  padding: 2% 0;
  & > .inputRange {
    display: flex;
    justify-content: space-between;
    align-items: center;
    label {
      width: 48%;
    }
    label > input {
      display: block;
      width: 100%;
    }
  }
`;

const StyledAvatarEditor = styled(AvatarEditor)`
  width: 100% !important;
  /* height: 200% !important; */
`;
