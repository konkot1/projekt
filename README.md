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



## Formularz zgłoszeniowy

Formularz zbiera trzy dane:
- **Imię i nazwisko uczestnika** (`imieNazwisko`)
- **Adres e-mail** (`email`)
- **Numer warsztatu (ID)** (`numerWarsztatu`)

Po poprawnym wysłaniu formularza aplikacja zmniejsza liczbę `wolneMiejsca` wybranego warsztatu o `1`, wypisuje potwierdzenie i aktualną liczbę miejsc w konsoli przeglądarki oraz czyści pola formularza do `""`.




## Walidacja danych i obsługa błędów

Funkcja `handleFormSubmit` weryfikuje zgłoszenie przed aktualizacją stanu:
- brak uzupełnionego imienia, nazwiska lub e-maila → komunikat błędu w konsoli o konieczności uzupełnienia danych,
- podanie numeru ID, którego nie ma na liście warsztatów → `Błąd: Nieprawidłowy numer warsztatu.`,
- wybór warsztatu z `wolneMiejsca === 0` → `Brak wolnych miejsc na wybrany warsztat: <tytuł>`.


## Jakość kodu i komentarze dokumentacyjne

- Stosowane są czytelne nazwy stanów, zmiennych pomocniczych oraz funkcji obsługujących zdarzenia.
- Komponent główny oraz funkcje obsługi zdarzeń (m.in. `handleFormSubmit`) posiadają komentarze dokumentacyjne opisujące przeznaczenie, parametry i zwracany typ.



## Scenariusze testowe (plik `testy.docx`)

Szczegółowa dokumentacja testów wraz ze zrzutami ekranu przeglądarki i zakładki `Console` znajduje się w pliku `testy.docx` i obejmuje:
- **Test 1:** stan początkowy aplikacji (5 warsztatów, aktywne kategorie, odznaczony filtr miejsc, puste pola).
- **Test 2:** filtrowanie wyłącznie po kategorii `Frontend` z zaznaczoną opcją wolnych miejsc.
- **Test 3:** poprawny zapis na warsztat ID `5`, spadek miejsc z `1` na `0`, wyczyszczenie pól i log w konsoli.
- **Test 4:** próba zapisu na warsztat bez wolnych miejsc (ID `5` lub ID `3`) i komunikat o braku miejsc.
- **Test 5:** próba zapisu na nieistniejące ID `99` i komunikat o nieprawidłowym numerze warsztatu.



## Zarządzanie stanem aplikacji

Stan komponentu `App` opiera się na hooku `useState`:
- `tylkoDostepne` — wartość logiczna sterująca filtrem dostępności miejsc (`true` domyślnie),
- `kategorie` — obiekt przechowujący aktywność filtrów (`Frontend`, `Backend`, `QA`),
- `warsztaty` — tablica obiektów warsztatów z aktualizowaną liczbą `wolneMiejsca`,
- `imieNazwisko`, `email`, `numerWarsztatu` — kontrolowane pola formularza zgłoszeniowego.