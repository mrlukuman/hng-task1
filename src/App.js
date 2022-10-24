import "./App.css";
import Button from "./components/Button";

function App() {
  const linksData = [
    {
      id: "twitter",
      name: "Twitter",
      link: "https://twitter.com/tj_alani",
    },
    {
      id: "linkedin",
      name: "linkedIn",
      link: "https://www.linkedin.com/in/tajudeen-lukuman-aleru-561931199/",
    },
    {
      id: "github",
      name: "Github",
      link: "https://github.com/tjalani",
    },
  ];

  return (
    <div className="app">
      {linksData.map((item) => {
        return <Button key={item.id} data={item}></Button>;
      })}
    </div>
  );
}

export default App;
