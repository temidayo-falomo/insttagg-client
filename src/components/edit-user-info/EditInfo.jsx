import React, { useContext, useState } from "react";
import { StyledEditInfo } from "./EditInfo.styled";
import axios from "axios";
import { AppContext } from "../../helper/Context";

function EditInfo(props) {
  axios.defaults.withCredentials = false;
  const { userInfo, setUserInfo } = useContext(AppContext);

  const [firstName, setFirstName] = useState(userInfo.firstName);
  const [lastName, setLastName] = useState(userInfo.lastName);
  const [avatar, setAvatar] = useState(userInfo.avatar);
  const [profession, setProfession] = useState(userInfo.profession);
  const [bio, setBio] = useState(userInfo.bio);
  const [imageLoading, setImageLoading] = useState();

  // TODO: Put "onClick={props.handleShowEdit}" to happen at the end of a promise

  const userData = {
    avatar: avatar,
    firstName: firstName,
    lastName: lastName,
    bio: bio,
    profession: profession,
  };

  // * Uploads Image To Cloudinary
  const uploadImage = async (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "dayo1234");
    setImageLoading(true);

    await axios
      .post(
        "https://api.cloudinary.com/v1_1/temidayo-falomo/image/upload",
        formData
      )
      .then((res) => {
        setAvatar(res.data.url);
        setImageLoading();
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .put(
        `https://insta-clone-temidayo.herokuapp.com/api/edit-user/${userInfo._id}`,
        userData
      )
      .then(() => props.setShowEdit(!props.showEdit))
      .catch((err) => console.error(err));

    const newObj = {
      ...userInfo,
      avatar: avatar,
      firstName: firstName,
      lastName: lastName,
      bio: bio,
      profession: profession,
    };
    setUserInfo(newObj);
  };

  return (
    <StyledEditInfo onSubmit={(e) => handleSubmit(e)}>
      <h4>Edit Your Info.</h4>
      <input type="file" onChange={(e) => uploadImage(e.target.files)} />
      <input
        type="text"
        placeholder="Edit FirstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Edit LastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Edit Profession"
        value={profession}
        onChange={(e) => setProfession(e.target.value)}
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      ></textarea>
      {!imageLoading ? (
        <button>Save Edit</button>
      ) : (
        <button disabled style={{ cursor: "not-allowed" }}>
          Loading...
        </button>
      )}
    </StyledEditInfo>
  );
}

export default EditInfo;
