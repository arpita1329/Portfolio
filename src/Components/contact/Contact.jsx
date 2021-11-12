import "./contact.scss";
import { useState } from "react";

export default function Contact() {
    const [message, setMessage] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIY_CiG_NZBQLa2ILt0kS868US8N7nFF5Uog" alt="contact" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Submit</button>
                    { message && <span>Thanks for your message. I'll reply ASAP :)</span>}
                </form>
            </div>
        </div>
    )
}
