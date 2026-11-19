import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { useState } from "react";

function App() {
  const [tylkoDostepne, setTylkoDostepne] = useState(true);

  const [kategorie, setKategorie] = useState({
    Frontend: true,
    Backend: true,
    QA: true,
  });

  const [warsztaty, setWarsztaty] = useState([
    {
      id: 1,
      tytul: "Architektura aplikacji w React",
      kategoria: "Frontend",
      prowadzacy: "Anna Kowalska",
      wolneMiejsca: 4,
    },
    {
      id: 2,
      tytul: "Bezpieczeństwo API w .NET",
      kategoria: "Backend",
      prowadzacy: "Piotr Nowak",
      wolneMiejsca: 2,
    },
    {
      id: 3,
      tytul: "Testy automatyczne w Cypress",
      kategoria: "QA",
      prowadzacy: "Marek Zielinski",
      wolneMiejsca: 0,
    },
    {
      id: 4,
      tytul: "Projektowanie interfejsów z Bootstrap",
      kategoria: "Frontend",
      prowadzacy: "Katarzyna Wisniewska",
      wolneMiejsca: 7,
    },
    {
      id: 5,
      tytul: "Bazy danych PostgreSQL w praktyce",
      kategoria: "Backend",
      prowadzacy: "Tomasz Wojcik",
      wolneMiejsca: 1,
    },
  ]);

  const [imieNazwisko, setImieNazwisko] = useState("");
  const [email, setEmail] = useState("");
  const [numerWarsztatu, setNumerWarsztatu] = useState("");

  const przefiltrowaneWarsztaty = warsztaty.filter((warsztat) => {
    const pasujeKategoria = kategorie[warsztat.kategoria];

    const pasujeDostepnosc = tylkoDostepne
      ? warsztat.wolneMiejsca > 0
      : true;

    return pasujeKategoria && pasujeDostepnosc;
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!imieNazwisko.trim() || !email.trim()) {
      console.error(
        "Błąd: Uzupełnij imię, nazwisko oraz adres e-mail."
      );
      return;
    }

    const wybranyWarsztat = warsztaty.find(
      (warsztat) => warsztat.id === Number(numerWarsztatu)
    );

    if (!wybranyWarsztat) {
      console.error("Błąd: Nieprawidłowy numer warsztatu.");
      return;
    }

    if (wybranyWarsztat.wolneMiejsca === 0) {
      console.error(
        `Brak wolnych miejsc na wybrany warsztat: ${wybranyWarsztat.tytul}`
      );
      return;
    }

    const nowaLiczbaMiejsc = wybranyWarsztat.wolneMiejsca - 1;

    setWarsztaty((poprzednieWarsztaty) =>
      poprzednieWarsztaty.map((warsztat) =>
        warsztat.id === wybranyWarsztat.id
          ? { ...warsztat, wolneMiejsca: nowaLiczbaMiejsc }
          : warsztat
      )
    );

    console.log(
      `Zapisano uczestnika: ${imieNazwisko.trim()} (${email.trim()})`
    );

    console.log(
      `Wybrany warsztat: ${wybranyWarsztat.tytul} (Pozostało miejsc: ${nowaLiczbaMiejsc})`
    );

    setImieNazwisko("");
    setEmail("");
    setNumerWarsztatu("");
  };

  return (
    <div className="container mt-4">
      <h1>Katalog warsztatów IT</h1>

      <form>
        <div className="mb-3">
          <h5>Filtruj według kategorii:</h5>

          {Object.keys(kategorie).map((kategoria) => (
            <div className="form-check form-check-inline" key={kategoria}>
              <input
                className="form-check-input"
                type="checkbox"
                id={kategoria}
                checked={kategorie[kategoria]}
                onChange={(e) =>
                  setKategorie({
                    ...kategorie,
                    [kategoria]: e.target.checked,
                  })
                }
              />

              <label className="form-check-label" htmlFor={kategoria}>
                {kategoria}
              </label>
            </div>
          ))}
        </div>

        <div className="mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="tylkoDostepne"
              checked={tylkoDostepne}
              onChange={(e) => setTylkoDostepne(e.target.checked)}
            />

            <label className="form-check-label" htmlFor="tylkoDostepne">
              Tylko warsztaty z wolnymi miejscami
            </label>
          </div>
        </div>
      </form>

      <h3>Lista warsztatów:</h3>

      {przefiltrowaneWarsztaty.length > 0 ? (
        <ul>
          {przefiltrowaneWarsztaty.map((warsztat) => (
            <li key={warsztat.id}>
              ID: {warsztat.id} | {warsztat.tytul} ({warsztat.kategoria}) - Prowadzący:{" "}
              {warsztat.prowadzacy} | Wolne miejsca: {warsztat.wolneMiejsca}
            </li>
          ))}
        </ul>
      ) : (
        <p>Brak warsztatów spełniających wybrane kryteria.</p>
      )}

      <h2>Formularz zgłoszeniowy</h2>

      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="imieNazwisko" className="form-label">
            Imię i nazwisko uczestnika:
          </label>

          <input
            type="text"
            className="form-control"
            id="imieNazwisko"
            value={imieNazwisko}
            onChange={(e) => setImieNazwisko(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Adres e-mail:
          </label>

          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="numerWarsztatu" className="form-label">
            Numer warsztatu (ID):
          </label>

          <input
            type="number"
            className="form-control"
            id="numerWarsztatu"
            value={numerWarsztatu}
            onChange={(e) => setNumerWarsztatu(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Zapisz na warsztat
        </button>
      </form>
    </div>
  );
}

export default App;