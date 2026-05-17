import { useInView } from 'react-intersection-observer';
import './Footer.css';
import { House, Inbox, Phone, Landmark } from 'lucide-react';
function Footer() {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const Informations = [
        {
            title: "Adres siedziby",
            icon: <House />,
            info: "Ujazdów 1, 22-413"
        },
        {
            title: "Dane kontaktowe",
            icon: <Inbox />,
            info: "pomocowisko@gmail.com",
            secIcon: <Phone />,
            secInfo: "+48 603 120 157"
        },
        {
            title: "Konto bankowe",
            icon: <Landmark />,
            info: "PKO BP S.A. 12 1020 1026 0000 0002 1234 5678"
        }
    ]
    return (
        <footer className="Footer" ref={ref}>
            <div className="FooterContainer">
                <div className={`FooterGrid ${inView ? 'reveal' : ''}`}>
                    <div className="FooterColumn FooterBrand">
                        <div className="FooterLogo">POMOCOWISKO</div>
                        <p className="FooterTagline">
                            Budujemy wspólnotę opartą na wzajemnym wsparciu i solidarności. 
                            Miejsce, gdzie pomoc spotyka się z potrzebą.
                        </p>
                    </div>

                    <div className="FooterColumn">
                        <h3>Fundacja</h3>
                        <nav className="FooterLinkList">
                            <a href="/o-fundacji">O nas</a>
                            <a href="/zespol">Nasz zespół</a>
                            <a href="/projekty">Projekty</a>
                            <a href="/statut">Statut</a>
                        </nav>
                    </div>

                    <div className="FooterColumn">
                        <h3>Kontakt</h3>
                        <div className="FooterContactInfo">
                            <a href="mailto:pomocowisko@gmail.com" className="ContactRow">
                                <Inbox size={18} />
                                <span>pomocowisko@gmail.com</span>
                            </a>
                            <a href="tel:+48603120157" className="ContactRow">
                                <Phone size={18} />
                                <span>+48 603 120 157</span>
                            </a>
                            <div className="ContactRow">
                                <House size={18} />
                                <span>Ujazdów 1, 22-413</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`FooterDivider ${inView ? 'reveal delay-3' : ''}`}>
                    <div className="FooterBottom">
                        <p>&copy; 2026 Pomocowisko. Wszystkie prawa zastrzeżone.</p>
                        <p className="FooterAuthor">Realizacja: Igor Sobierajczyk</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;