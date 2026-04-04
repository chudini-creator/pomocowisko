import './Contact.css';
import { useInView } from 'react-intersection-observer';

function Contact() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <div className="Contact">
            <div className="contact-hero">
                <div className="contact-blob" />
                <div className="contact-blob contact-blob-secondary" />
                
                <div className={`contact-hero-content${inView ? " contact-hero-content-visible" : ""}`} ref={ref}>
                    <span className='eyebrow'>Kontakt</span>
                    <h1 className='contact-hero-title'>Skontaktuj się z nami</h1>
                    <p className='contact-hero-subtitle'>
                        Masz pytania lub chcesz dowiedzieć się więcej o naszej fundacji? 
                        <br /> Jesteśmy tutaj, aby pomóc!
                    </p>
                </div>
            </div>

            <div className='contact-container content'>
                <div className='contact-info'>
                    <div className='contact-card'>
                        <div className='contact-icon'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </div>
                        <h3>Email</h3>
                        <a href="mailto:kontakt@fundacja.pl">kontakt@fundacja.pl</a>
                    </div>

                    <div className='contact-card'>
                        <div className='contact-icon'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                        </div>
                        <h3>Telefon</h3>
                        <a href="tel:+48123456789">+48 123 456 789</a>
                    </div>

                    <div className='contact-card'>
                        <div className='contact-icon'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                        </div>
                        <h3>Adres</h3>
                        <p>Ujazdów, gmina Nielisz</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;