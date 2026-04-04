import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Statute.css';

const STATUTE_SECTIONS = [
    {
        id: 'rozdzial-1',
        title: 'Rozdział I - Postanowienia ogólne',
        content: `
            <h3>§ 1</h3>
            <ul>
                <li>Fundacja Pomocowisko, zwana dalej Fundacją, działa na podstawie ustawy z dnia 6 kwietnia 1984 r. o fundacjach oraz postanowień niniejszego statutu.</li>
                <li>Fundacja została ustanowiona przez Agnieszkę Szabałę, zwaną dalej Fundatorką, aktem notarialnym sporządzonym przez notariusza ………………………………………….…… w kancelarii notarialnej w Chełmie w dniu ………...................................................................</li>
            </ul>
            <h3>§ 2</h3>
            <ul>
                <li>Siedzibą Fundacji jest Ujazdów, gmina Nielisz.</li>
                <li>Czas trwania fundacji jest nieoznaczony.</li>
                <li>Terenem działania Fundacji jest cały obszar Rzeczpospolitej Polskiej, przy czym w zakresie niezbędnym dla właściwego realizowania celów, Fundacja może prowadzić działalność także poza granicami Rzeczpospolitej Polskiej.</li>
            </ul>
            <h3>§ 3</h3>
            <ul>
                <li>Fundacja posiada osobowość prawną.</li>
                <li>Nadzór nad Fundacją sprawuje minister właściwy do spraw zabezpieczenia społecznego.</li>
            </ul>
        `
    },
    {
        id: 'rozdzial-2',
        title: 'Rozdział II - Cele i zasady działania Fundacji',
        content: `
            <h3>§ 4</h3>
            <p>Cele fundacji to:</p>
            <ul>
                <li>działalność na rzecz mniejszości narodowych i etnicznych oraz języka regionalnego;</li>
                <li>działalność na rzecz integracji cudzoziemców;</li>
                <li>ochrona i promocja zdrowia, w tym działalność lecznicza w rozumieniu ustawy z dnia 15 kwietnia 2011 r. o działalności leczniczej;</li>
                <li>działalność na rzecz osób niepełnosprawnych;</li>
                <li>działalność na rzecz równego prawa kobiet i mężczyzn;</li>
                <li>działalność na rzecz osób w wieku emerytalnym;</li>
                <li>działalność na rzecz nauki, szkolnictwa wyższego, edukacji, oświaty i wychowania;</li>
                <li>działalność na rzecz dzieci i młodzieży, w tym wypoczynku dzieci i młodzieży;</li>
                <li>działalność na rzecz kultury, sztuki, ochrony dóbr kultury i dziedzictwa narodowego;</li>
                <li>wspieranie i upowszechnianie kultury fizycznej;</li>
                <li>działalność na rzecz ekologii i ochrony zwierząt oraz ochrony dziedzictwa przyrodniczego;</li>
                <li>działalność na rzecz turystyki i krajoznawstwa;</li>
                <li>upowszechnianie i ochrona wolności i praw człowieka oraz swobód obywatelskich, a także działań wspomagających rozwój demokracji;</li>
                <li>udzielanie nieodpłatnego poradnictwa obywatelskiego;</li>
                <li>pomoc ofiarom katastrof, klęsk żywiołowych, konfliktów zbrojnych i wojen w kraju i za granicą;</li>
                <li>wspieranie rodziny i systemu pieczy zastępczej;</li>
                <li>tworzenie warunków do zaspokajania potrzeb mieszkaniowych wspólnoty samorządowej;</li>
                <li>udzielanie nieodpłatnej pomocy prawnej oraz zwiększanie świadomości prawnej społeczeństwa;</li>
                <li>promocja zatrudnienia i aktywizacja zawodowa osób pozostających bez pracy i zagrożonych zwolnieniem z pracy;</li>
                <li>działalność wspomagająca rozwój gospodarczy, w tym rozwój przedsiębiorczości;</li>
                <li>działalność wspomagająca rozwój techniki, wynalazczości i innowacyjności oraz rozpowszechnianie i wdrażanie nowych rozwiązań technicznych w praktyce gospodarczej;</li>
                <li>działalność wspomagająca rozwój wspólnot i społeczności lokalnych;</li>
                <li>działalność na rzecz ratownictwa i ochrony ludności;</li>
                <li>upowszechnianie i ochrona praw konsumentów;</li>
                <li>działalność na rzecz integracji europejskiej oraz rozwijania kontaktów i współpracy między społeczeństwami;</li>
                <li>promocja i organizacja wolontariatu;</li>
                <li>pomoc Polonii i Polakom za granicą;</li>
                <li>działalność na rzecz kombatantów i osób represjonowanych;</li>
                <li>promocja Rzeczypospolitej Polskiej za granicą;</li>
                <li>działalność na rzecz rodziny, macierzyństwa, rodzicielstwa, upowszechniania i ochrony praw dziecka;</li>
                <li>przeciwdziałanie uzależnieniom i patologiom społecznym;</li>
                <li>działalność na rzecz rewitalizacji;</li>
                <li>działalność na rzecz organizacji pozarządowych oraz podmiotów wymienionych w art. 3 ust. 3, w zakresie określonym art. 4 ust. 1 pkt 1–32a ustawy z dnia 24 kwietnia 2003 r. o działalności pożytku publicznego i o wolontariacie;</li>
                <li>działalność na rzecz podmiotów ekonomii społecznej i przedsiębiorstw społecznych, o których mowa w ustawie z dnia 5 sierpnia 2022 r. o ekonomii społecznej;</li>
                <li>działalność naukowa, naukowo-techniczna, oświatowa, w tym również polegająca na kształceniu studentów, kulturalna, w zakresie kultury fizycznej i sportu, ochrony środowiska, dobroczynności, ochrony zdrowia, rehabilitacji zawodowej i społecznej osób z niepełnosprawnościami.</li>
            </ul>
            
            <h3>§ 5</h3>
            <p>Fundacja realizuje swoje cele poprzez:</p>
            <ul>
                <li>organizowanie wszelkich form pomocy bezpośredniej i pośredniej, w tym pomocy organizacyjnej, materialnej oraz finansowej na rzecz rodzin i osób znajdujących się w trudnej sytuacji życiowej;</li>
                <li>zwiększanie dostępności do usług pośrednictwa pracy i poradnictwa zawodowego oraz tworzenie warunków sprzyjających podnoszeniu zdolności do zatrudnienia osób bezrobotnych, osób biernych zawodowo i osób o niskich i zdezaktualizowanych kwalifikacjach;</li>
                <li>prowadzenie akcji profilaktycznych i charytatywnych;</li>
                <li>organizowanie zbiórek pieniężnych, zbiórek żywności, odzieży, artykułów higienicznych i innych oraz redystrybucję tychże na cele społeczne;</li>
                <li>podejmowanie działań na rzecz kultury, sztuki oraz ochrony dziedzictwa narodowego, rozwoju sektorów kreatywnych, sztuk wizualnych, kultury cyfrowej, ludowej, tradycyjnej oraz literatury i promocji czytelnictwa;</li>
                <li>organizowanie wydarzeń kulturalnych, koncertów, festiwali, wernisaży, wystaw, przedstawień, pokazów, spektakli, plebiscytów, warsztatów artystycznych i literackich, kiermaszów, targów, jarmarków okolicznościowych;</li>
                <li>organizowanie wymiany międzykulturowej, w szczególności poprzez organizację wyjazdów i spotkań integracyjnych;</li>
                <li>inicjowanie kontaktów społeczno-gospodarczych z partnerami krajowymi i zagranicznymi;</li>
                <li>podnoszenie poziomu wiedzy w zakresie ochrony i promocji zdrowia, w tym zdrowia psychicznego i dobrostanu psychicznego, kształtowania zachowań i umiejętności prozdrowotnych;</li>
                <li>prowadzenie działań opiekuńczych, asystenckich i specjalistycznych, skierowanych w szczególności do osób niesamodzielnych i osób niepełnosprawnych;</li>
                <li>walkę z alienacją osób starszych i osób niepełnosprawnych w społeczeństwie oraz ich integrację ze środowiskiem lokalnym oraz aktywizowanie poprzez uczestnictwo tych osób w różnych formach życia społecznego;</li>
                <li>prowadzenie placówek i ośrodków specjalistycznej pomocy, w tym placówek wsparcia dziennego z opieką wytchnieniową, domów opieki, mieszkań chronionych, warsztatów terapii zajęciowej, świetlic środowiskowych, środowiskowych domów samopomocy, gospodarstw opiekuńczych, domów dziecka, domów/klubów seniora;</li>
                <li>prowadzenie placówek wsparcia dziennego, świetlic, klubów środowiskowych, ognisk wychowawczych;</li>
                <li>zakładanie i prowadzenie niepublicznych placówek oświatowych, szkół, przedszkoli, żłobków oraz alternatywnych form edukacji;</li>
                <li>tworzenie warunków do regularnej aktywności fizycznej w różnych grupach społecznych, wiekowych i zawodowych poprzez organizowanie otwartych, ogólnodostępnych zajęć sportowych, turniejów sportowych, eventów, konkursów, zajęć klubowych, wyjazdów na zawody, campów, obozów sportowych i innych wydarzeń sportowych;</li>
                <li>propagowanie wiedzy oraz dobrych praktyk w zakresie ochrony środowiska, ekologii, ochrony zwierząt, poszanowania klimatu, wód oraz krajobrazu z uwzględnieniem uprawy roślin, segregacji śmieci, oszczędzania wody i energii oraz zdrowego odżywiania;</li>
                <li>organizowanie działań angażujących społeczeństwo w działania proekologiczne, walkę ze zjawiskiem zaśmiecania, zwłaszcza na obszarach leśnych, w tym poprzez wspieranie akcji sadzenia drzew, sprzątania świata, warsztatów zero waste;</li>
                <li>upowszechnienie aktywności krajoznawczej i turystycznej u osób w każdym wieku poprzez organizowanie wycieczek, rajdów pieszych i rowerowych, wypraw do lasu, spływów kajakowych i innych przedsięwzięć turystycznych o charakterze edukacyjnym lub wypoczynkowym;</li>
                <li>promowanie zasad partycypacji obywatelskiej i aktywnego uczestnictwa mieszkańców v życiu publicznym, w tym udział w przygotowaniu projektów planów, strategii i aktów normatywnych;</li>
                <li>prowadzenie działalności społecznej, polegającej na utworzeniu społeczności o wspólnych celach i zainteresowaniach oraz zapewnieniu jej przestrzeni do integracji i współpracy – miejsca spotkań, dyskusji, wymiany poglądów;</li>
                <li>pomoc rodzinie w formie konsultacji i poradnictwa specjalistycznego, terapii i mediacji, usług dla rodzin z dziećmi, pomocy prawnej oraz organizowania spotkań dla rodzin, w tym grup wsparcia;</li>
                <li>tworzenie miejsc pracy, staży i przyuczenia dla osób zagrożonych wykluczeniem społecznym i wykluczonych społecznie;</li>
                <li>rozwój edukacji i działalności naukowo-badawczej poprzez wspieranie nowoczesnego kształcenia, fundowanie stypendiów, organizowanie działalności upowszechniającej współpracę międzyuczelnianą i międzynarodową;</li>
                <li>organizowanie warsztatów i szkoleń umiejętności osobistych, społecznych i zawodowych;</li>
                <li>organizowanie szkoleń, warsztatów, kursów, seminariów, sympozjów, dyskusji, konferencji, wykładów, odczytów, webinarów oraz innych form przekazywania wiedzy;</li>
                <li>uczestniczenie w programach pomocowych finansowanych ze środków rządowych, samorządowych i zagranicznych umożliwiających pozyskiwanie środków finansowych na realizację celów statutowych;</li>
                <li>współpracę z władzami rządowymi i samorządowymi, instytucjami, przedsiębiorstwami, organizacjami pozarządowymi, środkami masowego przekazu oraz osobami fizycznymi w zakresie niezbędnym dla realizacji celów statutowych;</li>
                <li>prowadzenie działalności informacyjnej i promocyjnej służącej realizacji celów statutowych.</li>
            </ul>
        `
    },
    {
        id: 'rozdzial-3',
        title: 'Rozdział III - Majątek i dochodzy Fundacji',
        content: `
            <h3>§ 6</h3>
            <p>Majątek Fundacji stanowi fundusz założycielski w kwocie 2000 zł oraz inne mienie nabyte przez Fundację w toku działania.</p>
            <h3>§ 7</h3>
            <ol>
                <ul>
                    <li>darowizn, spadków, zapisów;</li>
                    <li>dotacji, subwencji, grantów;</li>
                    <li>zbiórek publicznych i ofiarności publicznej;</li>
                    <li>przychodów z odpłatnej działalności statutowej;</li>
                    <li>dochodów z działalności gospodarczej;</li>
                    <li>udziałów, lokat, majątku Fundacji.</li>
                </ul>
                <li>Całość przychodów uzyskiwanych przez Fundację jest przeznaczana wyłącznie na działalność statutową.</li>
                <li>Fundacja nie działa w celu osiągnięcia zysku i nie może przeznaczać zysku do podziału między Fundatorkę, członków Zarządu i pracowników.</li>
            </ol>
            <h3>§ 8</h3>
            <ol>
                <li>Fundacja nie może:</li>
                <ul>
                    <li>udzielać pożyczek osobom prawnym organizacyjnie z nim powiązanym ani Fundatorce, członkom organów Fundacji, osobom zatrudnionym w Fundacji ani osobom, z którymi osoby zatrudnione w Fundacji pozostają w związku małżeńskim, we wspólnym pożyciu albo w stosunku pokrewieństwa lub powinowactwa w linii prostej, pokrewieństwa lub powinowactwa w linii bocznej do drugiego stopnia albo są związane z tytułu przysposobienia, opieki lub kurateli, ani zabezpieczać ich zobowiązań mieniem przedsiębiorstwa społecznego;</li>
                    <li>przekazywać majątku na rzecz osób, o których mowa w pkt 1, na zasadach innych niż w przypadku osób trzecich, w szczególności jeżeli przekazanie to następuje nieodpłatnie lub na preferencyjnych warunkach;</li>
                    <li>wykorzystywać majątku na rzecz osób, o których mowa w pkt 1, na zasadach innych niż w przypadku osób trzecich, chyba że to wykorzystanie wynika bezpośrednio z celu statutowego;</li>
                    <li>dokonywać zakupu towarów lub usług od osób prawnych organizacyjnie z nim powiązanych lub podmiotów, w których uczestniczą osoby, o których mowa w pkt 1, na zasadach innych niż w przypadku osób trzecich lub po cenach wyższych niż rynkowe.</li>
                </ul>
                <li>Przez osoby zatrudnione, o których mowa w ust. 1 pkt 1, rozumie się osoby świadczące pracę na podstawie stosunku pracy, stosunku służbowego, umowy o pracę nakładczą lub umowy cywilnoprawnej lub osoby prowadzące jednoosobową działalność gospodarczą niebędące pracodawcami świadczące na rzecz Fundacji usługi przez nieprzerwany okres co najmniej 3 miesięcy.</li>
            </ol>
        `
    },
    {
        id: 'rozdzial-4',
        title: 'Rozdział IV - Działalność gospodarcza',
        content: `
            <h3>§ 9</h3>
            <ol>
                <li>Fundacja może prowadzić działalność gospodarczą na ogólnych zasadach, określonych w odrębnych przepisach.</li>
                <li>Fundacja prowadzi działalność gospodarczą w rozmiarach służących realizacji jej celów statutowych, na którą z funduszu założycielskiego przeznacza kwotę 1000 zł.</li>
                <li>Dochody z działalności gospodarczej służą wyłącznie realizacji celów statutowych.</li>
                <li>Fundacja prowadzi działalność gospodarczą w zakresie:</li>
                <ul>
                    <li>PKD 02.30.Z Pozyskiwanie dziko rosnących produktów leśnych, z wyłączeniem drewna;</li>
                    <li>PKD 10.31.Z Przetwarzanie i konserwowanie ziemniaków;</li>
                    <li>PKD 10.32.Z Produkcja soków z owoców i warzyw;</li>
                    <li>PKD 10.39.Z Pozostałe przetwarzanie i konserwowanie owoców i warzyw;</li>
                    <li>PKD 10.71.Z Produkcja pieczywa; produkcja świeżych wyrobów ciastkarskich i ciastek;</li>
                    <li>PKD 10.72.Z Produkcja sucharów i herbatników; produkcja konserwowanych wyrobów ciastkarskich i ciastek;</li>
                    <li>PKD 10.83.Z Przetwórstwo herbaty i kawy;</li>
                    <li>PKD 10.89.Z Produkcja pozostałych artykułów spożywczych, gdzie indziej niesklasyfikowana;</li>
                    <li>PKD 55.20.Z Obiekty noclegowe turystyczne i miejsca krótkotrwałego zakwaterowania;</li>
                    <li>PKD 55.90.Z Pozostałe zakwaterowanie;</li>
                    <li>PKD 56.10.B Ruchome placówki gastronomiczne;</li>
                    <li>PKD 56.29.Z Pozostała usługowa działalność gastronomiczna.</li>
                </ul>
                <li>Rokiem obrotowym jest rok kalendarzowy, z tym że pierwszy rok obrotowy kończy się w dniu 31 grudnia 2025 roku.</li>
            </ol>
        `
    },
    {
        id: 'rozdzial-5',
        title: 'Rozdział V - Władze Fundacji',
        content: `
            <h3>§ 10</h3>
            <p>Władzą Fundacji jest Zarząd Fundacji, zwany dalej Zarządem.</p>
            <h3>§ 11</h3>
            <ol>
                <li>Zarząd składa się z co najmniej jednej osoby fizycznej, w tym Prezesa Zarządu.</li>
                <li>W skład pierwszego Zarządu wchodzi na czas nieoznaczony Fundatorka jako Prezes Zarządu. Następnych członków Zarządu dla rozszerzenia składu Zarządu lub na miejsce osób, które przestały pełnić tę funkcję powołuje na czas nieoznaczony Fundatorka. Fundatorka może określać funkcje poszczególnych członków Zarządu.</li>
                <li>Członkostwo w Zarządzie ustaje na skutek:</li>
                <ul>
                    <li>złożenia pisemnej rezygnacji;</li>
                    <li>utraty praw obywatelskich;</li>
                    <li>śmierci członka Zarządu;</li>
                    <li>odwołania przez Fundatorkę.</li>
                </ul>
                <li>Zarząd w całości lub każdy z jego członków może być odwołany przez Fundatorkę w dowolnym czasie.</li>
                <li>Członkowie Zarządu mają możliwość otrzymywania wynagrodzenia za czynności wykonywane w związku z pełnioną funkcją.</li>
                <li>W umowach między Fundacją a członkiem Zarządu oraz w sporach z nim Fundację reprezentuje pełnomocnik powołany przez Fundatorkę.</li>
            </ol>
            <h3>§ 12</h3>
            <ol>
                <li>Zarząd kieruje działalnością Fundacji i reprezentuje ją na zewnątrz.</li>
                <li>Do kompetencji Zarządu należy:</li>
                <ul>
                    <li>kierowanie bieżącą działalnością Fundacji;</li>
                    <li>realizacja celów statutowych;</li>
                    <li>sporządzanie planów pracy i budżetu;</li>
                    <li>sprawowanie zarządu nad majątkiem Fundacji;</li>
                    <li>reprezentowanie Fundacji na zewnątrz;</li>
                    <li>zatrudnianie pracowników i ustalanie wysokości ich wynagrodzenia;</li>
                    <li>określanie zakresu nieodpłatnej i odpłatnej działalności statutowej;</li>
                    <li>organizowanie prowadzenia działalności gospodarczej Fundacji;</li>
                    <li>zatwierdzanie rocznych sprawozdań finansowych;</li>
                    <li>podejmowanie decyzji o przeznaczeniu zysku albo pokryciu straty;</li>
                    <li>wnioskowanie do Fundatorki o zmianę statutu Fundacji;</li>
                    <li>wnioskowanie do Fundatorki o likwidację Fundacji;</li>
                    <li>podejmowanie decyzji we wszystkich innych sprawach niezbędnych do realizacji celów Fundacji.</li>
                </ul>
                <li>W przypadku niezdolności Fundatorki do podejmowania czynności prawnych, dotychczasowe kompetencje Fundatorki przechodzą na małżonka i dzieci Fundatorki. Decyzje małżonka i dzieci Fundatorki podejmowane są w drodze uchwały zwykłą większością głosów.</li>
                <li>W przypadku śmierci Fundatorki dotychczasowe kompetencje Fundatorki przechodzą na spadkobierców Fundatorki. W przypadku wielu spadkobierców ich decyzje podejmowane są w drodze uchwały zwykłą większością głosów.</li>
            </ol>
            <h3>§ 13</h3>
            <ol>
                <li>Posiedzenia Zarządu odbywają się w miarę potrzeb, nie rzadziej jednak niż raz na kwartał.</li>
                <li>Posiedzenia Zarządu zwołuje Prezes Zarządu. O posiedzeniu muszą zostać poinformowani wszyscy członkowie Zarządu.</li>
                <li>Zarząd podejmuje decyzje za pomocą uchwał zwykłą większością głosów przy obecności co najmniej połowy swoich członków, jeśli dalsze postanowienia nie stanowią inaczej. W przypadku równego rozłożenia głosów decyduje głos Prezesa Zarządu.</li>
                <li>Zarząd może także obradować w trybie pisemnym, w tym w formie elektronicznej, online lub przy wykorzystaniu innych środków bezpośredniego porozumiewania się na odległość i w tym trybie podejmować decyzje.</li>
            </ol>
            <h3>§ 14</h3>
            <p>Do składania oświadczeń woli w imieniu Fundacji, w tym w sprawach majątkowych, uprawniony jest każdy z członków Zarządu samodzielnie.</p>
            `
    },
    {
        id: 'rozdzial-6',
        title: 'Rozdział VI - Rada Pracownicza',
        content: `
            <h3>§ 15</h3>
            <ol>
                <li>Rada Pracownicza jest organem konsultacyjno-doradczym Fundacji.</li>
                <li>W skład Rady Pracowniczej wchodzą wszystkie osoby zatrudnione w Fundacji.</li>
                <li>Jeżeli liczba osób zatrudnionych w Fundacji przekracza 10, Rada Pracownicza może składać się z przedstawicieli tych osób w liczbie nie mniejszej niż 3.</li>
                <li>Do kompetencji Rady Pracowniczej należy w szczególności:</li>
                <ul>
                    <li>zapoznawanie się nie rzadziej niż raz w roku z wynikami działalności Fundacji oraz wyrażanie opinii w tym zakresie;</li>
                    <li>opiniowanie regulaminu pracy lub zasad organizacji pracy ustalanych przez Fundację oraz proponowanych zmian w tym zakresie;</li>
                    <li>opiniowanie planowanych działań Fundacji, w tym na rzecz reintegracji społecznej i zawodowej.</li>
                </ul>
                <li>Rada Pracownicza jest ciałem niezależnym od władz Fundacji, nie stanowi organu władzy w rozumieniu statutu, stąd też nie podlega ujawnieniu w Krajowym Rejestrze Sądowym.</li>
                <li>Szczegółowe zasady organizacji i funkcjonowania Rady Pracowniczej określi regulamin opracowany i uchwalony przez Zarząd.</li>
            </ol>
        `
    },
    {
        id: 'rozdzial-7',
        title: 'Rozdział VII - Postanowienia końcowe',
        content: `
            <h3>§ 16</h3>
            <p>W sprawie zmiany statutu Fundacji decyzję podejmuje Fundatorka. Zmiana może dotyczyć celów określonych w akcie założycielskim.</p>
            <h3>§ 17</h3>
            <ol>
                <li>Fundacja może się połączyć z inną fundacją dla efektywnego realizowania swoich celów.</li>
                <li>Połączenie z inną fundacją nie może nastąpić, jeżeli w jego wyniku mógłby ulec istotnej zmianie cel Fundacji.</li>
                <li>W sprawach połączenia z inną fundacją decyzję podejmuje Fundatorka.</li>
            </ol>
            <h3>§ 18</h3>
            <ol>
                <li>Fundacja ulega likwidacji w razie osiągnięcia celów, dla których została ustanowiona lub w razie wyczerpania się jej środków finansowych i majątku.</li>
                <li>Decyzję o likwidacji podejmuje Fundatorka.</li>
                <li>Likwidację przeprowadza likwidator powołany przez Fundatorkę.</li>
                <li>Środki finansowe i majątek pozostałe po likwidacji Fundacji mogą zostać przeznaczone mocą decyzji Fundatorki na rzecz działających w Rzeczypospolitej Polskiej organizacji o zbliżonych celach.</li>
            </ol>
        `
    }
];

function Statute() {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    const headerOffset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
    }, [location]);

    useEffect(() => {
        const sections = document.querySelectorAll('.statute-section');
        
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150;
            let currentSection = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSection = section.id;
                }
            });
            if (!currentSection) {
                const scrollBottom = window.scrollY + window.innerHeight;
                const pageHeight = document.documentElement.scrollHeight;
                
                if (pageHeight - scrollBottom < 100) {
                    currentSection = sections[sections.length - 1]?.id || '';
                }
            }
            
            if (currentSection && currentSection !== activeSection) {
                setActiveSection(currentSection);
            }
        };

        handleScroll();
        
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeSection]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="Statute">
            <div className="statute-hero">
                <div className="statute-hero__content">
                    <span className="eyebrow">Dokumenty</span>
                    <h1 className="statute-hero__title">Statut Fundacji</h1>
                    <p className="statute-hero__subtitle">
                        Oficjalny dokument określający zasady działania Fundacji Pomocowisko
                    </p>
                </div>
                <div className="statute-hero__blob" />
                <div className="statute-hero__blob statute-hero__blob--2" />
            </div>

            <div className="statute-container">
                <aside className="statute-toc">
                    <div className="statute-toc__inner">
                        <h2 className="statute-toc__title">Spis treści</h2>
                        <nav className="statute-toc__nav">
                            {STATUTE_SECTIONS.map((section, index) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`statute-toc__item ${activeSection === section.id ? 'active' : ''}`}
                                >
                                    <span className="statute-toc__number">{index + 1}</span>
                                    <span className="statute-toc__label">{section.title}</span>
                                </button>
                            ))}
                        </nav>
                    </div>
                </aside>

                <main className="statute-content">
                    {STATUTE_SECTIONS.map((section) => (
                        <section
                            key={section.id}
                            id={section.id}
                            className="statute-section"
                        >
                            <h2 className="statute-section__title">{section.title}</h2>
                            <div 
                                className="statute-section__content"
                                dangerouslySetInnerHTML={{ __html: section.content }}
                            />
                        </section>
                    ))}

                    <div className="statute-download">
                        <div className="statute-download__icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                        </div>
                        <div className="statute-download__text">
                            <h3>Pobierz pełną wersję</h3>
                            <p>Statut dostępny jest również w wersji PDF do pobrania</p>
                        </div>
                        <button className="statute-download__btn">
                            Pobierz PDF
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Statute;
