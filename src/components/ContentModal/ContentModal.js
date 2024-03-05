import React, { useEffect, useState } from "react";
// import axios from "axios";
import "./ContentModal.css";

export default function TransitionsModal({ children, media_type, id }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  // const fetchData = async () => {
  //   const { data } = await axios.get(
  //     `https://api.themoviedb.org/3/${media_type}/${id}?api_key=a75e698856e51ac29c54abb654b187bc&language=en-US`
  //   );

  //   setContent(data);
  //   // console.log(data);
  // };

  // const fetchVideo = async () => {
  //   const { data } = await axios.get(
  //     `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=a75e698856e51ac29c54abb654b187bc&language=en-US`
  //   );

  //   setVideo(data.results[0]?.key);
  // };

  // useEffect(() => {
  //   fetchData();
  //   fetchVideo();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <>
      <div
        className="media"
        style={{ cursor: "pointer" }}
        color="inherit"
        // onClick={handleOpen}
      >
        {children}
      </div>
    </>
  );
}
