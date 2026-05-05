import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { NavLink } from 'react-router-dom';
import { Heart, Users, Target, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import './Landing.css';

function Landing() {
  const heroRef = useRef(null);

  const [missionRef, missionInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const stats = [
    { value: '10+', label: 'Rodzin Wspieranych' },
    { value: '50+', label: 'Wolontariuszy' },
    { value: '10+', label: 'Zrealizowanych Projektów' },
    { value: '24/7', label: 'Gotowość Pomocy' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Empatia',
      description: 'Słuchamy i rozumiemy potrzeby każdej osoby, która do nas trafia.'
    },
    {
      icon: Users,
      title: 'Wspólnota',
      description: 'Razem tworzymy sieć wzajemnego wsparcia i solidarności.'
    },
    {
      icon: Target,
      title: 'Skuteczność',
      description: 'Nasze działania przynoszą realne i trwałe zmiany w życiu ludzi.'
    },
    {
      icon: Globe,
      title: 'Otwartość',
      description: 'Jesteśmy dla każdego, kto potrzebuje pomocy lub chce jej udzielić.'
    }
  ];

  return (
    <div className="landing">
      <Helmet>
        <title>Fundacja Pomocowisko | Pomagamy Razem</title>
        <meta name="description" content="Witamy na stronie Fundacji Pomocowisko. Wspieramy lokalną społeczność, organizujemy warsztaty i pomagamy wykluczonym. Poznaj naszą misję i dołącz do nas!" />
        <link rel="canonical" href="https://fundacjapomocowisko.pl/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fundacjapomocowisko.pl/" />
        <meta property="og:title" content="Fundacja Pomocowisko | Pomagamy Razem" />
        <meta property="og:description" content="Wspieramy lokalną społeczność i osoby w kryzysie. Dołącz do naszej misji!" />
        <meta property="og:image" content="https://fundacjapomocowisko.pl/img/PomocowiskoLogo2.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://fundacjapomocowisko.pl/" />
        <meta property="twitter:title" content="Fundacja Pomocowisko | Pomagamy Razem" />
        <meta property="twitter:description" content="Wspieramy lokalną społeczność i osoby w kryzysie. Dołącz do naszej misji!" />
        <meta property="twitter:image" content="https://fundacjapomocowisko.pl/img/PomocowiskoLogo2.png" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Fundacja Pomocowisko",
              "image": "https://fundacjapomocowisko.pl/img/PomocowiskoLogo2.png",
              "@id": "https://fundacjapomocowisko.pl",
              "url": "https://fundacjapomocowisko.pl",
              "telephone": "+48603120157",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ujazdów 1",
                "addressLocality": "Nielisz",
                "postalCode": "22-413",
                "addressCountry": "PL"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 50.8123,
                "longitude": 23.0567
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.facebook.com/fundacjapomocowisko"
              ]
            }
          `}
        </script>
      </Helmet>

      <section className="hero" ref={heroRef}>
        <div className="hero__background">
          <div className="hero__orb hero__orb--1"></div>
          <div className="hero__orb hero__orb--2"></div>
        </div>

        <div className="hero__content">
          <h1 className="hero__title">
            POMOCOWISKO
          </h1>

          <p className="hero__description">
            Pomocowisko to miejsce, gdzie ludzie dobrej woli spotykają się z tymi,
            którzy potrzebują wsparcia.
          </p>

          <div className="hero__actions">
            <NavLink to="/o-fundacji" className="btn btn--primary">
              Poznaj nas bliżej
            </NavLink>
          </div>
        </div>
      </section>

      <section
        className={`stats ${statsInView ? 'stats--visible' : ''}`}
        ref={statsRef}
      >
        <div className="stats__container">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card"
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="stat-card__value">{stat.value}</div>
              <div className="stat-card__label">{stat.label}</div>
              <div className="stat-card__glow"></div>
            </div>
          ))}
        </div>
      </section>

      <section
        className={`mission ${missionInView ? 'mission--visible' : ''}`}
        ref={missionRef}
      >
        <div className="mission__container">
          <div className="mission__content">
            <h2 className="section-title">
              Nasza <span className="text-accent">Misja</span>
            </h2>
            <p className="mission__text">
              Wierzymy, że każdy zasługuje na godne życie i wsparcie w trudnych chwilach.
              Nasze działania skupiają się na pomocy potrzebującym rodzinom, osobom
              w kryzysie oraz budowaniu silnej społeczności opartej na wzajemnym szacunku
              i solidarności.
            </p>
          </div>

          <div className="mission__visual">
            <div className="glass-card glass-card--large">
              <div className="glass-card__content">
                <Heart className="glass-card__icon" size={64} />
                <h3 className="glass-card__title">Pomoc z Sercem</h3>
                <p className="glass-card__description">
                  Każdego dnia zmieniamy świat na lepsze, jedno działanie na raz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`values ${valuesInView ? 'values--visible' : ''}`}
        ref={valuesRef}
      >
        <div className="values__container">
          <h2 className="section-title section-title--center">
            Nasze <span className="text-accent">Wartości</span>
          </h2>

          <div className="values__grid">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card"
                style={{ '--delay': `${index * 0.15}s` }}
              >
                <div className="value-card__icon-wrapper">
                  <value.icon className="value-card__icon" size={32} />
                </div>
                <h3 className="value-card__title">{value.title}</h3>
                <p className="value-card__description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;