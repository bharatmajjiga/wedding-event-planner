import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

const sampleEvents = [
  {
    id: "1",
    date: "Aug 14th",
    day: "Thursday",
    name: "Inti Pellikoduku",
    place: "Home",
    people: "Photographer, Sannayi",
    decoration: "Pelli koduku Set",
    catering: "No",
    cost: "Rs.4000",
    notes: "Traditional ceremony at home. Set up early morning, contact photographer the day before."
  }
];

function EventList() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">💍 Wedding Events</h1>
      <table className="table-auto w-full text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-2 py-1">Date</th>
            <th className="px-2 py-1">Day</th>
            <th className="px-2 py-1">Event</th>
            <th className="px-2 py-1">Place</th>
            <th className="px-2 py-1">People</th>
            <th className="px-2 py-1">Decoration</th>
            <th className="px-2 py-1">Catering</th>
            <th className="px-2 py-1">Cost</th>
          </tr>
        </thead>
        <tbody>
          {sampleEvents.map((e) => (
            <tr key={e.id} className="border-t">
              <td className="px-2 py-1">{e.date}</td>
              <td className="px-2 py-1">{e.day}</td>
              <td className="px-2 py-1 text-blue-600 underline">
                <Link to={`/event/${e.id}`}>{e.name}</Link>
              </td>
              <td className="px-2 py-1">{e.place}</td>
              <td className="px-2 py-1">{e.people}</td>
              <td className="px-2 py-1">{e.decoration}</td>
              <td className="px-2 py-1">{e.catering}</td>
              <td className="px-2 py-1">{e.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EventDetails() {
  const { id } = useParams();
  const event = sampleEvents.find((e) => e.id === id);

  if (!event) return <div className="p-6">Event not found.</div>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Link to="/" className="text-blue-600 underline">← Back to Events</Link>
      <h2 className="text-xl font-bold mt-4 mb-2">📝 {event.name} - Notes</h2>
      <p className="whitespace-pre-wrap bg-gray-50 p-4 rounded shadow">{event.notes}</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/event/:id" element={<EventDetails />} />
      </Routes>
    </Router>
  );
}
