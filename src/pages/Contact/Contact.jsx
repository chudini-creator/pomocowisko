import './Contact.css';
import {useInView} from 'react-intersection-observer';
function Contact() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });
    return (
        <div className="Contact ">
            <div className='ContactContent content'>
                <div className={`HeaderText content${inView ? " HeaderText--visible" : ""}`} ref={ref}>
                    <span className='eyebrow'>Kontakt</span>
                    <h2 className='HeaderTitle'>Skontaktuj się z nami</h2>
                    <p className='HeaderTitleSub'>Masz pytania lub chcesz dowiedzieć się więcej o naszej fundacji? <br /> Skontaktuj się z nami!</p>
                    <div className='ContactInfo'>
                        <div className='ContactInfoItem'>
                            <h3>Email</h3>
                            <p>kontakt@fundacja.pl</p>
                        </div>
                        <div className='ContactInfoItem'>
                            <h3>Telefon</h3>
                            <p>+48 123 456 789</p>
                        </div>
                        <div className='ContactInfoItem'>
                            <h3>Adres</h3>
                            <p>ul. Przykładowa 1, 00-000 Warszawa</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;