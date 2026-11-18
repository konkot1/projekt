import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'

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

  const przefiltrowaneWarsztaty = warsztaty.filter((warsztat) => {
  const pasujeKategoria = kategorie[warsztat.kategoria];

  const pasujeDostepnosc = tylkoDostepne
    ? warsztat.wolneMiejsca > 0
    : true;

    return pasujeKategoria && pasujeDostepnosc;
  });

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
        <ol>
          {przefiltrowaneWarsztaty.map((warsztat) => (
            <li key={warsztat.id}>
              {warsztat.tytul} ({warsztat.kategoria}) - Prowadzący:{" "}
              {warsztat.prowadzacy} | wolne miejsca: {warsztat.wolneMiejsca}
            </li>
          ))}
        </ol>
      ) : (
        <p>Brak warsztatów spełniających wybrane kryteria.</p>
      )}

      <h2>Formularz zgłoszeniowy</h2>

      <form>
        <div className="mb-3">
          <label htmlFor="imieNazwisko" className="form-label">
            Imię i nazwisko uczestnika:
          </label>
          <input
            type="text"
            className="form-control"
            id="imieNazwisko"
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
          />
        </div>
      </form>
    </div>
  );
}

export default App;