import React, { useContext, useState } from "react"
import "./styles/navBar.css"
import searchImg from "./images/search-icon.png"
import { SnapShotContext } from "./SearchContext";
import { Link, useNavigate } from "react-router-dom";
function NavBar() {
    const { setSearchKeyword } = useContext(SnapShotContext);
  const [keyword, setKeyword] = useState('');
    const navigate=useNavigate()
  const onHandleSubmit=(e)=>{
        setSearchKeyword(keyword)
        setKeyword("")
  }

    return <>
    <nav id="nav-bar">
        <h1 id="heading">SnapShot</h1>
        <div id="search-div">
        <input type="text" placeholder="Search..." id="search-input" onChange={(e)=>{
            navigate("/")
            setKeyword(e.target.value)
        }} value={keyword}/>
        <div id="img-div">
            <img id="search-img" src={searchImg} onClick={onHandleSubmit}/>
        </div>
        </div>
        
        <div id="content-type-div">
           <Link to="/mountains"><div>Mountain</div></Link> 
           <Link to="/beaches"><div>Beaches</div></Link>
           <Link to="/birds"><div>Birds</div></Link>
           <Link to="/food"><div>Food</div></Link>
        </div>
    </nav>
    </>
}

export default NavBar