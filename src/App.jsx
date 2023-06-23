import { useState, useEffect} from 'react'
import viteLogo from '/vite.svg'
import './App.css'

import { storiesData } from './mokcs/Stories'
import { userData} from './mokcs/user'
import { postsData } from './mokcs/posts.' 

// import {Swiper, swiper-slide} from 'swiper';

// import 'swiper/css'
// components
import TopBar from "./components/TopBar"
import Stories from "./components/Stories"
import Posts from "./components/Posts"
import Camera from "./components/Camera/Camera";
import Messages from "./components/Messages/Messages"
import BottomMenu from "./components/BottomMenu"


function App() {
  const [section, setSection] = useState ("home");
  const [message, setMessage] = useState ("message");
  
  const [stories, setStories] = useState(storiesData)
  const [user, setUser] = useState (userData)
  const [posts, setPosts] = useState (postsData);
 
    
   useEffect(() => {
    fetch("https://api.npoint.io/468828b928e6f1dc3d7b")

      .then((res) => res.json())
      .then((data) => setPosts(data))
  }, []);

  // useEffect(() => {
  //   fetch("https://api.npoint.io/bb10d5041eb32372170d")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data); 
  //       setStories(data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  const onSectionRender = () => {
    switch(section) {
      case "home": 
      return (
        <>

          <Stories user={user} stories={stories} />
          <Posts posts={posts} />
        </>
      );
      case "camera":
        return <Camera/>;
      case "tv" :
        return <h1>Tv</h1>;
      case "messages" :
        return <Messages/>;

    }
  }
return (
  <>
    <div className='IphoneData'>t
    </div>
        <TopBar setSection={setSection} />
        {onSectionRender()}

    <BottomMenu/>
  </>
  );
};

export default App

