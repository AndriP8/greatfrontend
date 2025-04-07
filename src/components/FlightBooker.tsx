import { useState } from "react";

export default function FlightBooker() {
  const [isReturnFlight, setIsReturnFlight] = useState(true);
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const TODAY = new Date().toISOString();
  console.log(TODAY);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isReturnFlight) {
      alert(`You have booked a one-way flight on ${departureDate}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        style={{ display: "block" }}
        defaultValue="one-way"
        onChange={(e) => setIsReturnFlight(e.target.value === "return-way")}
      >
        <option value="one-way">One-way flight</option>
        <option value="return-way">Return flight</option>
      </select>
      <input
        style={{ display: "block" }}
        type="date"
        min={TODAY}
        value={departureDate}
        onChange={(e) => setDepartureDate(e.target.value)}
      />
      {isReturnFlight && (
        <input
          style={{ display: "block" }}
          type="date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />
      )}
      <button type="submit">Book</button>
    </form>
  );
}
