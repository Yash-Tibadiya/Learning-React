import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="p-4 mb-4 text-white bg-slate-700 rounded-xl">
        Tailwind test
      </h1>
      <div className="flex flex-row">
        <Card username="Yash" btnText="View profile Yash" />
        <Card username="Raj" btnText="View profile Raj" />
        <Card username="Meet" />
      </div>
    </>
  );
}

export default App;
