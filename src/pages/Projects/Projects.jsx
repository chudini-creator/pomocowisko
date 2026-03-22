import './Projects.css';
import Card from '../../components/Card/Card';
import { useInView } from 'react-intersection-observer';
function Projects() {
    const projects = [
        {
            name: "Przedsiębiorstwo społeczne",
            img: "./img/ps.jpeg",
            desc: "Przedsiębiorstwo społeczne to organizacja, która łączy cele biznesowe z misją społeczną. Działa na rynku, oferując produkty lub usługi, ale jednocześnie angażuje się w rozwiązywanie problemów społecznych."
        },
        {
            name: "Przedsiębiorstwo społeczne",
            img: "./img/ps.jpeg",
            desc: "Przedsiębiorstwo społeczne to organizacja, która łączy cele biznesowe z misją społeczną. Działa na rynku, oferując produkty lub usługi, ale jednocześnie angażuje się w rozwiązywanie problemów społecznych."
        },
        {
            name: "Przedsiębiorstwo społeczne",
            img: "./img/ps.jpeg",
            desc: "Przedsiębiorstwo społeczne to organizacja, która łączy cele biznesowe z misją społeczną. Działa na rynku, oferując produkty lub usługi, ale jednocześnie angażuje się w rozwiązywanie problemów społecznych."
        }
    ]

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });


    return (
        <div className='Projects'>
            <section className="tm-section">
                <div className={`HeaderText content${inView ? " HeaderText--visible" : ""}`} ref={ref}>
                    <span className="eyebrow">Nasze działania</span>
                    <h2 className="HeaderTitle">Projekty, które realizujemy</h2>
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