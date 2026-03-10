import { useEffect, useRef, useState } from "react";
import "./TextSection.css";

function TextSection({ title, text, delay = 0 }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`TextSection${visible ? " visible" : ""}`}
            style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
        >
            <div className="TextSection__inner">
                <span className="TextSection__quote">&</span>
                <h2 className="title">{title}</h2>
                <p className="text">{text}</p>
            </div>
        </div>
    );
}

export default TextSection;