import './Projects.css';
import Card from '../../components/Card/Card';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
function Projects() {
    const projects = [
        {
            name: "Przedsiębiorstwo społeczne",
            img: "/img/ps.jpeg",
            desc: "Przedsiębiorstwo społeczne to organizacja, która łączy cele biznesowe z misją społeczną. Działa na rynku, oferując produkty lub usługi, ale jednocześnie angażuje się w rozwiązywanie problemów społecznych."
        },
    ]

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });


    return (
        <div className='Projects'>
            <Helmet>
                <title>Nasze Projekty i Inicjatywy | Fundacja Pomocowisko</title>
                <meta name="description" content="Zobacz, co robimy! Sprawdź aktualne i zrealizowane projekty Fundacji Pomocowisko. Warsztaty, wsparcie społeczne i lokalne inicjatywy." />
                <link rel="canonical" href="https://fundacjapomocowisko.pl/projekty" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://fundacjapomocowisko.pl/projekty" />
                <meta property="og:title" content="Nasze Projekty i Inicjatywy | Fundacja Pomocowisko" />
                <meta property="og:description" content="Poznaj projekty Fundacji Pomocowisko." />
                <meta property="og:image" content="https://fundacjapomocowisko.pl/img/PomocowiskoLogo2.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://fundacjapomocowisko.pl/projekty" />
                <meta name="twitter:title" content="Nasze Projekty i Inicjatywy | Fundacja Pomocowisko" />
                <meta name="twitter:description" content="Poznaj projekty Fundacji Pomocowisko." />
                <meta name="twitter:image" content="https://fundacjapomocowisko.pl/img/PomocowiskoLogo2.png" />
            </Helmet>
            <section className="tm-section">
                <div className={`HeaderText content${inView ? " HeaderText--visible" : ""}`} ref={ref}>
                    <span className="eyebrow">Nasze działania</span>
                    <h1 className="HeaderTitle">Projekty, które realizujemy</h1>
                    <p className="HeaderTitleSub">
                        Nasze projekty to konkretne działania, które podejmujemy, aby realizować naszą misję. Każdy z nich jest starannie zaplanowany i realizowany z myślą o maksymalnym wpływie społecznym.
                    </p>
                </div>
                <div className='ProjectsContent'>
                    {projects.map((element, index) => (
                        <Card key={index} element={element} index={index} />
                    ))}
                </div>
            </section>
        </div>
    )
}
export default Projects;