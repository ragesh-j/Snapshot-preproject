import {  createContext, useState } from "react";
import axios from "axios"
const SnapShotContext=createContext()

function SearchContext({children}){
    const [image,setImage]=useState([])
    const [searchKeyword,setSearchKeyword]=useState("")
    const API_KEY=`10b56e002667e64a57632ccdcc11daa7`
    const getImage=(category)=>{
        let API_URL=`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${API_KEY}&format=json&nojsoncallback=1&extras=url_s`
        if (searchKeyword){
            let tempVar=searchKeyword;
            API_URL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&format=json&nojsoncallback=1&extras=url_s`
            API_URL=API_URL+`&text=${tempVar}`
                setSearchKeyword("")
            
            
        }
        else{
            switch (category) {
                case "mountains":
                     API_URL=`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&format=json&nojsoncallback=1&extras=url_s&text=mountains`
                     break;
                case "beaches":
                    API_URL=`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&format=json&nojsoncallback=1&extras=url_s&text=beaches`                
                    break;
                case "food":
                    API_URL=`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&format=json&nojsoncallback=1&extras=url_s&text=food`
                    break;
                case "birds":
                    API_URL=`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&format=json&nojsoncallback=1&extras=url_s&text=mountains&text=bird`
                    break;    
                default:
                    break;
            }
        }
        axios.get(API_URL)
        .then(resposnse=>{
            setImage(resposnse.data.photos.photo)

        }).catch(err=>console.log(err))
    }

   

    return <SnapShotContext.Provider value={{image,setImage,searchKeyword,setSearchKeyword,getImage}}>
        {children}
    </SnapShotContext.Provider>
}

export {
    SnapShotContext,
    SearchContext
};