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
      link: "https://twitter.com/tj_alani",
    },
    {
      id: "github",
      name: "Github",
      link: "https://twitter.com/tj_alani",
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
