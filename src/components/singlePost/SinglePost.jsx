import "./singlePost.css"
import icon2 from "../../images/icon2.jpg";

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img 
                src={icon2} 
                alt="" 
                className="SinglePostImg" 
                />
                <h1 className="singlePostTitle">Visit to Someh
                <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"></i>
                <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>DerricK GREY</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Optio exercitationem consequatur nulla id molestias debitis
                     libero nostrum quos blanditiis aliquid? Explicabo quo perspiciatis 
                    libero veniam dolores excepturi ex, doloremque voluptate!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Optio exercitationem consequatur nulla id molestias debitis
                     libero nostrum quos blanditiis aliquid? Explicabo quo perspiciatis 
                    libero veniam dolores excepturi ex, doloremque voluptate!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Optio exercitationem consequatur nulla id molestias debitis
                     libero nostrum quos blanditiis aliquid? Explicabo quo perspiciatis 
                    libero veniam dolores excepturi ex, doloremque voluptate!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Optio exercitationem consequatur nulla id molestias debitis
                     libero nostrum quos blanditiis aliquid? Explicabo quo perspiciatis 
                    libero veniam dolores excepturi ex, doloremque voluptate!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Optio exercitationem consequatur nulla id molestias debitis
                     libero nostrum quos blanditiis aliquid? Explicabo quo perspiciatis 
                    libero veniam dolores excepturi ex, doloremque voluptate!
                </p>
            </div>
        </div>
    )
}
