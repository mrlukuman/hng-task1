import "./App.css";
import Button from "./components/Button";
import Profile from "./components/Profile";

function App() {
  const linksData = [
    {
      id: "twitter",
      name: "Twitter Link",
      link: "https://twitter.com/tj_alani",
    },
    {
      id: "btn__zuri",
      name: "Zuri Team",
      link: "https://training.zuri.team/",
    },
    {
      id: "books",
      name: "Zuri Books",
      link: "https://books.zuri.team",
    },
    {
      id: "book__python",
      name: "Python Books",
      link: "",
    },
    {
      id: "pitch",
      name: "Background Check for Coders",
      link: "https://background.zuri.team",
    },

    {
      id: "book__design",
      name: "Design Books",
      link: "https://books.zuri.team/design-rules",
    },
  ];

  return (
    <div className="app">
      <Profile></Profile>
      {linksData.map((item) => (
        <Button key={item.id} data={item}></Button>
      ))}
    </div>
  );
}

export default App;
