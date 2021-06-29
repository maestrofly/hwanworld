import "./sidebar.css"
import icon3 from "../../images/icon3.jpg";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT US</span>
                <img 
                className="sidebarImg"
                  src={icon3} 
                   alt=""
                />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Possimus commodi cupiditate nisi vitae quo sunt odit at 
                     labore fugiat ipsam nulla fuga, voluptatum laborum 
                    minima consequuntur blanditiis nemo magni iure.
                </p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span> 
            <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
            </div>
            </div>
        </div>
    );
}
