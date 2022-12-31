import React, { useContext, useState } from "react";
import { AppContext } from "../../helper/Context";
import { StyledAddPostForm } from "./AddPostForm.styled";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Loading from "../../pages/loading/Loading";

function AddPostForm() {
  //Setting Axios to not set Credentials by default, because of security/cors
  axios.defaults.withCredentials = false;

  // States And Global Context
  const { userInfo } = useContext(AppContext);
  const [location, setLocation] = useState("Anywhere");
  const [text, setText] = useState("");
  const [selectedImage, setSelectedImage] = useState(
    "https://i.pinimg.com/736x/a9/d2/ba/a9d2bae0d810b55002e61d89e1e33832.jpg"
  );
  const [imageLoading, setImageLoading] = useState();
  const [error, setError] = useState(false);

  //Router Navigation Variable
  const navigate = useNavigate();

  //Object to be passed to MongoDb
  const postData = {
    avatar: userInfo.avatar,
    location: location,
    username: userInfo.firstName + " " + userInfo.lastName,
    userInfoName: userInfo.username,
    image: selectedImage,
    postText: text,
    userDetail: userInfo._id,
  };

  //Uploads Image To Cloudinary
  const uploadImage = async (e) => {
    const types = [
      "image/png",
      "image/jpg",
      "image/jpeg",
      "image/heic",
      "image/webp",
      "image/gif",
      "image/svg",
    ];

    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      formData.append("upload_preset", "dayo1234");
      setImageLoading(true);

      await axios
        .post(
          "https://api.cloudinary.com/v1_1/temidayo-falomo/image/upload",
          formData
        )
        .then((res) => {
          setSelectedImage(res.data.url);
          setImageLoading();
        })
        .catch((err) => console.log(err));
    } else {
      setError(true);
    }
  };

  //* Handling the submit function.

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://insttagg-server.vercel.app/api/posts/upload-post",
        postData
      )
      .then(() => navigate("/"))
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  //* Getting The Random text

  const getRandomText = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => setText(res.data.slip.advice))
      .catch((err) => console.error(err));
  };

  return (
    <StyledAddPostForm onSubmit={(e) => handleSubmit(e)}>
      {error && <div className="error">Upload A supported image format!</div>}
      <div
        className="image"
        style={{ backgroundImage: `url(${selectedImage})` }}
      >
        <div className="choose">
          <input type="file" onChange={uploadImage} />
        </div>
      </div>

      <div className="col form-right">
        <div className="col">
          <h4>Location</h4>
          <input
            type="text"
            required
            placeholder="Somewhere in the world..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="col btm">
          <div className="row btw center">
            <h4>Write Some Stuff</h4>
          </div>
          <textarea
            required
            placeholder="Add a caption..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <span onClick={getRandomText}>Not Feeling Chatty?</span>
        </div>

        {!imageLoading ? <button>Share</button> : <button>Loading...</button>}
      </div>
    </StyledAddPostForm>
  );
}

export default AddPostForm;
