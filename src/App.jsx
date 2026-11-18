import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'

import { useState } from "react";

function App() {
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
    <div>
      {}
    </div>
  );
}

export default App;