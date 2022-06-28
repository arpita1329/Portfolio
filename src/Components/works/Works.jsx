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
            icon: "assets/strengths.jpg",
            title: "Strengths",
            desc: "Responsible, committed and enthusiastic Full Stack Developer with a done-on-time & brilliant quality product spirit, and skills from many courses in Web Development. Committed to collaborative and teamwork with independent thinking skills and self awareness.",
            img: "https://www.sampleposts.com/wp-content/uploads/2020/09/Strength-Quotes.jpg",
        },
        {
            id: "3",
            icon: "assets/writing.png",
            title: "Certificates",
            desc: "Intern at ShapeAi as a Full Stack Web Developer in June 2021 - August 2021. Also done intership from Learn & Build in June 2022 - July 2022. Interviewed at Amazon Wow for Software Developer. Also cleared InfyTq coding exam. ",
            img: "https://cdn.searchenginejournal.com/wp-content/uploads/2021/12/google-career-certificates-61bd445f96b29-sej-1520x800.png",
        },
        {
            id: "4",
            icon: "assets/frameworks.jpg",
            title: "Tools & Frameworks",
            desc: "React, Bootstrap4, Node, Express, MongoDB",
            img: "https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/11/Screenshot-2019-11-20-at-11.48.13-AM.png",
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
                                <a href="#portfolio">Projects</a>
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
