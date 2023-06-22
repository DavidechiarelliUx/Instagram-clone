import "./TopBar.css"

// icons
import { CameraIcon, IGTVIcon, InstagramLogo, MessageIcon } from "../../icons"

const TopBar = ({setSection}) => {
    const onHandleClick = (sectionName) => setSection (sectionName)
    return (
    <div className="TopBar">
        <div className="TopBar__Camera" onClick={() => onHandleClick('camera')}>
            <CameraIcon />
        </div>
        <div className="TopBar__Logo" onClick={() => onHandleClick('home')} >
            <InstagramLogo/>
        </div>

        <div className="TopBar__Action">
            <div className="TopBar__Action--tv" onClick={() => onHandleClick('tv')}>
            <IGTVIcon/>
            </div> 
            <div className="TopBar__Action--msg" onClick={() => onHandleClick('messages')}>
            <MessageIcon/>
            </div> 
        </div>
    </div>
    );
};

export default TopBar;