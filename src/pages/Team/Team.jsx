import { useEffect, useRef, useState } from "react";
import "./Team.css";
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";
const TEAM_MEMBERS = [
    {
        img: "./img/1.jpg",
        name: "Agnieszka",
        role: "Prezes Fundacji",
        desc: "Serce i dusza organizacji. Od początku prowadzi fundację z niezachwianym zaangażowaniem i empatią.",
    },
    {
        img: "./img/2.jpg",
        name: "Mariusz",
        role: "Wiceprezes?",
        desc: "Serce i dusza organizacji. Od początku prowadzi fundację z niezachwianym zaangażowaniem i empatią.",
    },
    {
        img: "./img/3.jpg",
        name: "Lidka",
        role: "Wiceprezes?",
        desc: "Łącznik między fundacją a ukraińską społecznością. Jej historia zainspirowała wielu do działania.",
    },
];

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


function Team() {
    const [headerRef, headerVisible] = useReveal();

    return (
        <div className="Team">
            <Hero title="Nasz zespół" bgImage="" />

            <section className="tm-section">
                <div
                    ref={headerRef}
                    className={`tm-header content${headerVisible ? " tm-header--visible" : ""}`}
                >
                    <span className="tm-header__eyebrow">Poznaj nas</span>
                    <h2 className="tm-header__title">Ludzie, którzy tworzą&nbsp;<em>pomocowisko</em></h2>
                    <p className="tm-header__sub">
                        Za każdym działaniem stoją prawdziwi ludzie – z pasją, historią i chęcią zmieniania świata na lepsze.
                    </p>
                </div>

                <div className="tm-grid content">
                    {TEAM_MEMBERS.map((element, i) => (
                        <Card key={i} element={element} index={i} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Team;