import "./Story.css";

// components

const Story = ( {story}) => {
    return (
    <div className="Story">
        <div className="StoryImg">
            <img src={story?.userImage} alt={story?.username}/>
            {story?.isLive &&<div className="Story__Live">{"LIVE"}</div>}
        </div>
        <p className="Story__Username">{story.username}</p>
    </div>
    )
};
export default Story