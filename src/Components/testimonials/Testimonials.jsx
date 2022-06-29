import "./testimonials.scss";
import { SubdirectoryArrowRight, YouTube } from "@material-ui/icons";

export default function Testimonials() {
    const data = [
        {
            id: 1,
            name: "Programming Languages",
            img: "https://images.ctfassets.net/mrop88jh71hl/60N2q8kDv42gi9xNIaSYJU/dacbb854f1f5e124643041f99e5f5c00/best-coding-languages-for-kids.jpeg?w=1024&h=684&fl=progressive&q=100&fm=jpg",
            icon: "assets/linkedin.png",
            desc: "C, C++, Java, Python (basic), JavaScript, HTML5, CSS3",
            featured: false
        },
        {
            id: 2,
            name: "NodeJs",
            img: "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png?w=700&fm=webp",
            icon: "assets/linkedin.png",
            desc: "Node.js is an open source server environment. Node.js allows us to run JavaScript on the server.",
            featured: false
        },
        {
            id: 3,
            name: "React",
            img: "https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png",
            icon: "assets/linkedin.png",
            desc: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. ",
            featured: false
        },
        {
            id: 4,
            name: "MongoDB",
            img: "https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png",
            icon: "assets/linkedin.png",
            desc: "MongoDB is an open-source document database and leading NoSQL database. MongoDB is written in C++.  ",
            featured: false
        },
        
    ];
    return (
        <div className="testimonials" id="testimonials">
            <h1>Skills</h1>
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
                        
                    </div>
                  </div>
                ))}
            </div>
        </div>
    )
}
