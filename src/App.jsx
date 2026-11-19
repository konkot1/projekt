import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { useState } from "react";

/**
 * nazwa funkcji: App
 * opis funkcji: Glowny komponent aplikacji Katalog warsztatow IT odpowiedzialny za filtrowanie listy warsztatow oraz obsluge formularza zgloszeniowego.
 * parametry: brak
 * zwracany typ: JSX.Element
 */
function App() {
  const [onlyAvailable, setOnlyAvailable] = useState(true);

  const [selectedCategories, setSelectedCategories] = useState({
    Frontend: true,
    Backend: true,
    QA: true,
  });

  const [workshops, setWorkshops] = useState([
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

  const [participantName, setParticipantName] = useState("");
  const [participantEmail, setParticipantEmail] = useState("");
  const [workshopIdInput, setWorkshopIdInput] = useState("");

  /**
   * nazwa funkcji: handleCategoryChange
   * opis funkcji: Aktualizuje stan zaznaczenia wybranej kategorii warsztatow.
   * parametry: categoryName - nazwa kategorii, isChecked - wartosc logiczna oznaczajaca zaznaczenie checkboxa
   * zwracany typ: void (brak)
   */
  const handleCategoryChange = (categoryName, isChecked) => {
    setSelectedCategories((prevCategories) => ({
      ...prevCategories,
      [categoryName]: isChecked,
    }));
  };

  /**
   * nazwa funkcji: handleAvailabilityChange
   * opis funkcji: Przelacza filtr wyswietlajacy wylacznie warsztaty z wolnymi miejscami.
   * parametry: isChecked - wartosc logiczna oznaczajaca zaznaczenie filtra dostepnosci
   * zwracany typ: void (brak)
   */
  const handleAvailabilityChange = (isChecked) => {
    setOnlyAvailable(isChecked);
  };

  const filteredWorkshops = workshops.filter((workshop) => {
    const matchesCategory = selectedCategories[workshop.kategoria];
    const matchesAvailability = onlyAvailable ? workshop.wolneMiejsca > 0 : true;
    return matchesCategory && matchesAvailability;
  });

  /**
   * nazwa funkcji: handleFormSubmit
   * opis funkcji: Waliduje dane formularza, aktualizuje liczbe wolnych miejsc dla wybranego warsztatu oraz loguje wynik w konsoli.
   * parametry: event - obiekt zdarzenia wyslania formularza (SyntheticEvent)
   * zwracany typ: void (brak)
   */
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!participantName.trim() || !participantEmail.trim()) {
      console.error(
        "Błąd: Uzupełnij imię, nazwisko oraz adres e-mail."
      );
      return;
    }

    const selectedWorkshop = workshops.find(
      (workshop) => workshop.id === Number(workshopIdInput)
    );

    if (!selectedWorkshop) {
      console.error("Błąd: Nieprawidłowy numer warsztatu.");
      return;
    }

    if (selectedWorkshop.wolneMiejsca === 0) {
      console.error(
        `Brak wolnych miejsc na wybrany warsztat: ${selectedWorkshop.tytul}`
      );
      return;
    }

    const updatedSeatsCount = selectedWorkshop.wolneMiejsca - 1;

    setWorkshops((previousWorkshops) =>
      previousWorkshops.map((workshop) =>
        workshop.id === selectedWorkshop.id
          ? { ...workshop, wolneMiejsca: updatedSeatsCount }
          : workshop
      )
    );

    console.log(
      `Zapisano uczestnika: ${participantName.trim()} (${participantEmail.trim()})`
    );

    console.log(
      `Wybrany warsztat: ${selectedWorkshop.tytul} (Pozostało miejsc: ${updatedSeatsCount})`
    );

    setParticipantName("");
    setParticipantEmail("");
    setWorkshopIdInput("");
  };

  return (
    <div className="container mt-4">
      <h1>Katalog warsztatów IT</h1>

      <form>
        <div className="mb-3">
          <h5>Filtruj według kategorii:</h5>

          {Object.keys(selectedCategories).map((category) => (
            <div className="form-check form-check-inline" key={category}>
              <input
                className="form-check-input"
                type="checkbox"
                id={category}
                checked={selectedCategories[category]}
                onChange={(e) => handleCategoryChange(category, e.target.checked)}
              />

              <label className="form-check-label" htmlFor={category}>
                {category}
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
              checked={onlyAvailable}
              onChange={(e) => handleAvailabilityChange(e.target.checked)}
            />

            <label className="form-check-label" htmlFor="tylkoDostepne">
              Tylko warsztaty z wolnymi miejscami
            </label>
          </div>
        </div>
      </form>

      <h3>Lista warsztatów:</h3>

      {filteredWorkshops.length > 0 ? (
        <ul>
          {filteredWorkshops.map((workshop) => (
            <li key={workshop.id}>
              ID: {workshop.id} | {workshop.tytul} ({workshop.kategoria}) - Prowadzący:{" "}
              {workshop.prowadzacy} | Wolne miejsca: {workshop.wolneMiejsca}
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
            value={participantName}
            onChange={(e) => setParticipantName(e.target.value)}
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
            value={participantEmail}
            onChange={(e) => setParticipantEmail(e.target.value)}
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
            value={workshopIdInput}
            onChange={(e) => setWorkshopIdInput(e.target.value)}
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