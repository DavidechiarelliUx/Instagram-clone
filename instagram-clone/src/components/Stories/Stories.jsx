import { useState } from "react";
import "./Stories.css"

//data
import { storiesData } from "../../mokcs/Stories";
import Story from "../Story";

const Stories = ({user, stories}) => {
    console.log(stories)
    console.log(user)
    // const [stories, setStories] = useState(storiesData)
   
    return (
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
    )
}

export default Stories;