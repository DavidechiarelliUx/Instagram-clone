import { useState, useEffect } from "react";
import {filtersData} from "../../mokcs/filters"
import "./Camera.css";

const Camera = () => {
  const [constraints, setConstraints] = useState({
    audio: false,
    video: { width: 396, height: 700 },
  });

  const [filterState, setFilterState] = useState ("");

  console.log (filtersData)
  useEffect(() => {
  navigator.mediaDevices
      .getUserMedia(constraints)
      .then((mediaStream) => {
        const video = document.querySelector("video");

        video.srcObject = mediaStream;
        video.onloadedmetadata = () => {
          video.play();
        };
      })
      .catch((err) => {
        console.error(`${err.name}: ${err.message}`);
      });
  }, []);

  const onSetFilterState = (state) => setFilterState(state);

  return (
  <>
  <video className={`Camera ${filterState}`}></video>
 
  <div className="Camera__filters">
    <ul>
       {filtersData?.map((filter) => (

      <li
       className={filter.name}
       onClick={() => onSetFilterState(filter.name)}>
        <p>{filter.title}</p>
       </li>
    
       ))}
    </ul>
  </div>
  </>
  )
};

export default Camera;
