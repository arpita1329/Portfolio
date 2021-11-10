import { useEffect, useRef } from "react";
import "./intro.scss";
import { ExpandMore } from "@material-ui/icons";
import { init } from "ityped";

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            backDelay: 1500,
            backSpeed: 60,
            showCursor: true,
            strings: ["Student", "Learner", "Web Developer"] 
        });
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/main.jpeg" alt="image" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Arpita Dubey</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <ExpandMore className="icon" />
                </a>
            </div>
        </div>
    )
}
