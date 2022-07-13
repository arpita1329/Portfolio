import { useEffect, useState } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setdata] = useState([]);
    const list = [
        {
            id: "featured",
            title: "All"
        },
        {
            id: "web",
            title: "Zomato-Landing Page"
        },
        {
            id: "mobile",
            title: "Book API"
        },
        {
            id: "design",
            title: "Tasky-todo app"
        },
        {
            id: "content",
            title: "Movie Ticket App"
        },
    ];

    useEffect(()=> {
        switch(selected){
            case "featured":
                setdata(featuredPortfolio);
                break;
            case "web":
                setdata(webPortfolio);
                break;
            case "mobile":
                setdata(mobilePortfolio);
                break;
            case "design":
                setdata(designPortfolio);
                break;
            case "content":
                setdata(contentPortfolio);
                break;
            default:
                setdata(featuredPortfolio);
        }
    },[selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Projects</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item" onClick={() => window.open(d.link,"_blank")}>
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
