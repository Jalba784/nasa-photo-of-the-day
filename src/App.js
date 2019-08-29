import React, { useState, useEffect } from "react";
import "./Sass/App.css";
import NavBar from "./Components/Navigation/NavBar";
import Footer from "./Components/Footer/Footer";
// import Pics from "./Components/MainBody/Pics";
import axios from 'axios';



function App() {
    const [nasaImages, setNasaImages] = useState([]);
    var _0x1b91=["\x64\x49\x4D\x66\x44\x71\x6D\x33\x65\x7A\x4A\x4C\x48\x75\x37\x43\x71\x6B\x70\x79\x39\x36\x54\x30\x78\x4E\x4B\x70\x4F\x79\x79\x47\x53\x58\x44\x79\x4E\x65\x78\x76"];const llave_de_ipa=_0x1b91[0]


    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${llave_de_ipa}`)
            .then(res => {
                console.log(res);
                setNasaImages(res.data);
            })
            .catch(err => console.log(err));
    }, []);

  return (
    <div className="App">
      <NavBar/>
      <div>
          {nasaImages.copyright}
          {/*<Pics pic={eachPic} />*/}
      </div>
    <Footer/>
    </div>
  );
}

export default App;
