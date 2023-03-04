import { useContext, useEffect, useState } from "react";
import { SnapShotContext } from "./SearchContext";
import "./styles/gallery.css"

function Gallery({category}){
        const { image, getImage,searchKeyword,setSearchKeyword} = useContext(SnapShotContext);
        const [hoveredImg, setHoveredImg] = useState(null);

  const handleMouseEnter = (img) => {
    setHoveredImg(img);
  };

  const handleMouseLeave = () => {
    setHoveredImg(null);
  };      
        useEffect(() => {
        if(searchKeyword || category)
          getImage(category);
          console.log("inside useeffect")
        }, [category, searchKeyword]);
      
        return (<>
          <div className="gallery">
            {image.map((image) => (
              <div className={hoveredImg === image ? 'hovered' : "gallery-item"} key={image.id} onMouseEnter={() => handleMouseEnter(image)}
                onMouseLeave={handleMouseLeave}>
                <img
                  src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_w.jpg`}
                  alt={image.title}
                /> 
                </div>))}
                </div></>
        )
}


export default Gallery