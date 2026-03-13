import { useEffect, useRef, useState } from "react";
import "./Card.css";

function Card({ element, index }) {
    
    function useReveal() {
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
        return [ref, visible];
    }


    const [ref, visible] = useReveal();
    return (
        <div
            ref={ref}
            className={`tm-card${visible ? " tm-card--visible" : ""}`}
            style={{ transitionDelay: `${index * 160}ms` }}
        >
            <div className="tm-card__img-wrap">
                <img src={element.img} alt={element.name} className="tm-card__img" />
                <div className="tm-card__img-overlay" />
                <div className="tm-card__shine" />
            </div>

            <div className="tm-card__body">
                <span className="tm-card__role">{element.role}</span>
                <h3 className="tm-card__name">{element.name}</h3>
                <p className="tm-card__desc">{element.desc}</p>
            </div>

            <div className="tm-card__accent-bar" />
        </div>
    );
}
export default Card;