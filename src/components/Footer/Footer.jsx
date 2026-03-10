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
            <div className={`FooterHeader ${inView ? 'reveal' : ''}`} style={{opacity: inView ? 1 : 0}}>
                <h1>POMOCOWISKO</h1>
                <div className="FooterRegistration">
                    <p><span>KRS:</span> 0000123456</p>
                    <p><span>NIP:</span> 123-456-78-90</p>
                </div>
            </div>

            <div className="FooterInfo">
                {Informations.map((info, index) => (
                    <div key={index} className={`FooterInfoPart ${inView ? 'reveal' : ''} delay-${index + 1}`}
                        style={{ opacity: inView ? 1 : 0 }}>
                        <h3>{info.title}</h3>
                        <div className="FooterInfoRow">
                            {info.icon}
                            <p>{info.info}</p>
                        </div>
                        {info.secInfo && (
                            <div className="FooterInfoRow">
                                {info.secIcon}
                                <p> {info.secInfo}</p>
                            </div>
                        )}

                    </div>
                ))}
            </div>

            <div className={`FooterDivider ${inView ? 'reveal delay-3' : ''}`} style={{opacity: inView ? 1 : 0}}>
                <p className="FooterCopyright">&copy; 2026 Pomocowisko. Wszystkie prawa zastrzeżone.</p>
            </div>
        </footer>
    )
}
export default Footer;