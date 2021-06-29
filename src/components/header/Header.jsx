import "./header.css"
import icon1 from "../../images/icon1.jpg"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Events & Brands Management</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg"
             src={icon1} 
             alt=""
              />
        </div>
    )
}
