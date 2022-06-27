import "./testimonials.scss";
import { SubdirectoryArrowRight, YouTube } from "@material-ui/icons";

export default function Testimonials() {
    const data = [
        {
            id: 1,
            name: "Alex",
            title: "CEO of Pic Hub",
            img: "https://images.unsplash.com/photo-1536063211352-0b94219f6212?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa voluptatum hic, repellendus ducimus acc",
            featured: false
        },
        {
            id: 2,
            name: "Martin Luther",
            title: "CEO of ALBI",
            img: "https://images.unsplash.com/photo-1536063211352-0b94219f6212?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa voluptatum hic, repellendus ducimus acc",
            featured: false
        },
        {
            id: 3,
            name: "Sam Dsouza",
            title: "CEO of Amaze",
            img: "https://images.unsplash.com/photo-1536063211352-0b94219f6212?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa voluptatum hic, repellendus ducimus acc",
            featured: false
        },
        {
            id: 4,
            name: "Sam Dsouza",
            title: "CEO of Amaze",
            img: "https://images.unsplash.com/photo-1536063211352-0b94219f6212?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa voluptatum hic, repellendus ducimus acc",
            featured: false
        },
        
    ];
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(d=> (
                  <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <SubdirectoryArrowRight className="left" />
                        <img 
                            src={d.img}
                            alt="girl image" 
                            className="user"
                        />
                        <img src={d.icon} alt="icon" className="right" />
                    </div>
                    <div className="center">{d.desc}</div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                  </div>
                ))}
            </div>
        </div>
    )
}
