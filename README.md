> Grupa 1

> TL: Dominik Windorpski
> 2. Miłosz Pituch
> 3. Miłosz Benkowski




## Katalog warsztatów IT

Aplikacja webowa zbudowana w bibliotece **React** z wykorzystaniem stylów **Bootstrap**, umożliwiająca przeglądanie listy warsztatów IT, filtrowanie ich według kategorii oraz dostępności wolnych miejsc, a także zapisywanie uczestników za pomocą formularza zgłoszeniowego.


## Stos technologiczny

- **React** (`useState`) — zarządzanie stanem filtrów, listy warsztatów oraz pól formularza
- **Bootstrap 5** (`bootstrap.min.css`, `bootstrap.bundle.min.js`) — układ kontenera, formularze, checkboxy i przyciski
- **Vite / JavaScript (JSX)** — środowisko uruchomieniowe i logika komponentu głównego (`App.jsx`)


## Instalacja i uruchomienie

1. Zainstaluj zależności projektu:
   ```bash
   npm install



   ## Dane początkowe warsztatów

Aplikacja startuje z predefiniowaną listą 5 warsztatów przechowywaną w stanie `warsztaty`:
- **ID 1:** Architektura aplikacji w React (`Frontend`, Anna Kowalska, wolne miejsca: `4`)
- **ID 2:** Bezpieczeństwo API w .NET (`Backend`, Piotr Nowak, wolne miejsca: `2`)
- **ID 3:** Testy automatyczne w Cypress (`QA`, Marek Zielinski, wolne miejsca: `0`)
- **ID 4:** Projektowanie interfejsów z Bootstrap (`Frontend`, Katarzyna Wisniewska, wolne miejsca: `7`)
- **ID 5:** Bazy danych PostgreSQL w praktyce (`Backend`, Tomasz Wojcik, wolne miejsca: `1`)



## Filtrowanie listy warsztatów

- **Filtr kategorii (`kategorie`):** pozwala włączać i wyłączać kategorie `Frontend`, `Backend` oraz `QA` za pomocą checkboxów.
- **Filtr dostępności (`tylkoDostepne`):** domyślnie włączony (`true`); po zaznaczeniu wyświetla wyłącznie warsztaty z `wolneMiejsca > 0`, a po odznaczeniu pokazuje również pozycje z `0` wolnych miejsc.
- Wynik filtrowania obliczany jest dynamicznie w tablicy `przefiltrowaneWarsztaty`.