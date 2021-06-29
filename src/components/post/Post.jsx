import image4 from "../../images/image4.jpg"
import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img 
            className="postImg"
            src={image4} 
            alt=""
             />
         <div className="postInfo">
             <div className="postCats">
                 <span className="postCat">Someh</span>
                 <span className="postCat">Life</span>
             </div>
             <span className="postTitle">
                 Lorem, ipsum dolor sit amet
              </span>
              <hr/>
            <span className="postDate">1 hour ago</span>
        
         </div>
         <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Enim incidunt explicabo praesentium tempora aspernatur atque 
             dignissimos quis ex cum fugit odit cumque, fugiat autem, 
             ipsa repellat ducimus consequuntur! Praesentium, id?
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Enim incidunt explicabo praesentium tempora aspernatur atque 
             dignissimos quis ex cum fugit odit cumque, fugiat autem, 
             ipsa repellat ducimus consequuntur! Praesentium, id?
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Enim incidunt explicabo praesentium tempora aspernatur atque 
             dignissimos quis ex cum fugit odit cumque, fugiat autem, 
             ipsa repellat ducimus consequuntur! Praesentium, id?
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Enim incidunt explicabo praesentium tempora aspernatur atque 
             dignissimos quis ex cum fugit odit cumque, fugiat autem, 
             ipsa repellat ducimus consequuntur! Praesentium, id?
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Enim incidunt explicabo praesentium tempora aspernatur atque 
             dignissimos quis ex cum fugit odit cumque, fugiat autem, 
             ipsa repellat ducimus consequuntur! Praesentium, id?
         </p>
        </div>
    );
}
