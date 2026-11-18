import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'

import { useState } from "react";

function App() {
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
      </form>
    </div>
  );
}

export default App;