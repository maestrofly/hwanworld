import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css"

export default function Home() {
    return (
        <div className="home">
            <Header/>
            <Posts />
            <Sidebar />
        </div>
    );
}
