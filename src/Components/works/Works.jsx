import "./works.scss"
import { useState } from "react";
import { ChevronLeft, ChevronRight} from "@material-ui/icons";

export default function Works() {
    const [ currentSlide, setCurrentSlide ] = useState(0);

    const data = [
        {
            id: "1",
            icon: "assets/degree.png",
            title: "Education",
            desc: "Bachelor of Technology (B.Tech), Information Technology, SKIT Jaipur (2019-2023) CGPA: 9.93 (Aggregrate), Senior Secondary School - SBIOA Public School, 88.2%, 2017-2019, Secondary School - SBIOA Public School, 74.1%",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjqV-cmWdF_CHkspXrTo5v0_tHydyNTo9_w",
        },
        {
            id: "2",
            icon: "assets/globe.jpg",
            title: "Mobile Application",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, debitis quasi temporibus fuga repellendus quos recusandae, odio laboriosam quam commodi fugit tempore porro ipsa voluptatum est provident et reiciendis cumque!",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1QRtDv1PfEpZVmQlki9VH2-ECScaNHXUPdQ&usqp=CAU",
        },
        {
            id: "3",
            icon: "assets/writing.png",
            title: "Branding",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, debitis quasi temporibus fuga repellendus quos recusandae, odio laboriosam quam commodi fugit tempore porro ipsa voluptatum est provident et reiciendis cumque!",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIlXYAYUF_D_otOsGB1qvOdCUyqMI2Mf_23Q&usqp=CAU",
        },
    ];

    const handledClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide+1 : 0);
    }

    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                { data.map(d=> (
                  <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="project" />
                        </div>
                    </div>
                  </div>
                ))}
            </div>
            <ChevronLeft className="arrow left" onClick={()=>handledClick("left")} />
            <ChevronRight className="arrow right"  onClick={()=>handledClick("right")} />
        </div>
    )
}
