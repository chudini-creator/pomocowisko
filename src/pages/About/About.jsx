import { useEffect, useRef, useState } from 'react';
import './About.css';
import Hero from '../../components/Hero/Hero';
import TextSection from '../../components/TextSection/TextSection';

const STATS = [
    { value: 2,    suffix: "+",  label: "Lata działalności" },
    { value: 50,   suffix: "+",  label: "Rodzin objętych pomocą" },
    { value: 1000, suffix: "+",  label: "Posiłków rozdanych" },
    { value: 100,  suffix: "%",  label: "Zaangażowania" },
];

function useCountUp(target, duration = 2000, active) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!active) return;
        let startTime = null;
        const step = (ts) => {
            if (!startTime) startTime = ts;
            const progress = Math.min((ts - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [active, target, duration]);
    return count;
}

function StatCard({ value, suffix, label, index }) {
    const ref = useRef(null);
    const [started, setStarted] = useState(false);
    const count = useCountUp(value, 1800, started);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStarted(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.4 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`stat-card${started ? " visible" : ""}`}
            style={{ transitionDelay: `${index * 120}ms` }}
        >
            <span className="stat-value">{count}{suffix}</span>
            <span className="stat-label">{label}</span>
        </div>
    );
}

function About() {
    return (
        <div className="About">
            <Hero title="O fundacji" bgImage="/path/to/hero-image.jpg" nextID="#about-content" />

            <div id="about-content" className="about-stats">
                <div className="about-stats__grid">
                    {STATS.map((s, i) => (
                        <StatCard key={i} index={i} value={s.value} suffix={s.suffix} label={s.label} />
                    ))}
                </div>
                <div className="about-stats__blob" />
                <div className="about-stats__blob about-stats__blob--2" />
            </div>

            <div className="content about-sections">
                <TextSection
                    title="Skąd pomysł?"
                    text="Pomysł na fundacje powstał po wybuchu wojny w Ukrainie. Od początku konfliktu zaangażowaliśmy się w działania pomocowe, wspierając potrzebujące rodziny. Rozdzierający widok dzieci, kobiet i osób z niepełnosprawnościami, wysiadających z ostrzelanych pociągów, bardzo szybko zmotywował nas do szukania sposobów pomocy najbardziej potrzebującym. Zaczęliśmy od przygotowywania zup i kanapek, które trafiały do osób oczekujących na przekroczenie granicy. Później, przez dwa lata, udostępnialiśmy przestrzeń Dworu Ujazdowskiego wielu potrzebującym rodzinom. Oprócz zakwaterowania, zapewniliśmy im codzienne posiłki, opiekę medyczną i psychologiczną. Do tej pory pomagamy kilku rodzinom, które zostały w Polsce. To zmotywowało nas do stworzenia przedsiębiorstwa społecznego, które wspiera ich w odnalezieniu się w nowym kraju."
                    delay={0}
                />
                <TextSection
                    title="Skąd nazwa?"
                    text="Nazwa fundacji powstała z potrzeby działania i niesienia pomocy. Od początku naszej działalności dążyliśmy do stworzenia miejsca, które będzie nie tylko punktem pomocy, ale też bezpieczną przestrzenią dla każdego, kto znalazł się w trudnej sytuacji. Chcieliśmy, aby nazwa była prosta, ciepła i bliska ludziom – tak jak my jesteśmy blisko tych, którym pomagamy."
                    delay={150}
                />
            </div>
        </div>
    );
}


export default About;