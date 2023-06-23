import { useState } from "react";
import "./Stories.css"

//data
import { storiesData } from "../../mokcs/Stories";

import Story from "../Story";
import ModalStories from "../ModalStories/ModalStories";

const Stories = ({user, stories}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModalStories = () => {
        setIsModalOpen(true)
    }

   
    // const [stories, setStories] = useState(storiesData)
   
    return (
    <>
    <div className="Stories">
        <ul className="Stories__List">
      <li className="Stories__Item">
          <Story story={user} />
        </li>
            {stories && stories.map((story) =>(
            <li className="Stories__Items" key={story.id}>
                <Story story= {story}/>
            </li>))}
        </ul>
    </div>
    <ModalStories/>
    </>
    )
}

export default Stories;