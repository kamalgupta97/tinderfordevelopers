import React, { useState } from "react";
import { UploadImageBox, UploadImage } from "../Styles/AddProject.style";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

export const UploadImageCont = () => {
  const [image, setImage] = useState(null);

  const handleChange = async (e) => {
    console.log(e.target.files[0]);
    if (!e.target.files[0]) {
      return;
    }
    console.log(e.target.files[0], "I");
    var objectURL = await URL.createObjectURL(e.target.files[0]);
    console.log(objectURL, "II");
    // console.log(URL.revokeObjectURL(objectURL), "III");
    setImage(objectURL);
  };
  return (
    <UploadImageBox>
      {image ? (
        <img
          src={image}
          alt=""
          width={"100%"}
          height={"100%"}
          style={{ borderRadius: "10px" }}
        />
      ) : (
        <UploadImage>
          <label for="avatar">
            <AddAPhotoIcon />
          </label>

          <input
            style={{ display: "none" }}
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
            value=""
            onChange={(e) => handleChange(e)}
          ></input>
        </UploadImage>
      )}
    </UploadImageBox>
  );
};
