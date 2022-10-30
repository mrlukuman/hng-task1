import "./App.css";
import Button from "./components/Button";
import { Profile } from "./components/Profile";
import Social from "./components/Social";
import Footer from "./components/Footer";

function App() {
  const linksData = [
    {
      subtext: "Meet the zuri team",
      id: "btn__zuri",
      name: "Zuri Team",
      link: "https://training.zuri.team",
    },
    {
      subtext: "Get access to some amazing programming and design books",
      id: "books",
      name: "Zuri Books",
      link: "https://books.zuri.team",
    },
    {
      subtext:
        "Do you wanna learn python with no previous programming experience? If so, then you don't want to miss this book",
      id: "book__python",
      name: "Python Book For Beginners",
      link: "https://books.zuri.team/python-for-beginners?ref_id=tjalani",
    },
    {
      subtext:
        "Wanna be self concious about your amazing programming skills. Let's find out together.",
      id: "pitch",
      name: "Background check for coders",
      link: "https://background.zuri.team",
    },
    {
      subtext:
        "Wanna take your designing superpowers to the next level? Get a free copy of this wonderful design guide.",
      id: "book__design",
      name: "Free Design Handbook",
      link: "https://training.zuri.team",
    },
  ];

  return (
    <div className="app">
      <Profile></Profile>
      {linksData.map((item) => {
        return <Button key={item.id} data={item}></Button>;
      })}
      <Social></Social>
      <Footer></Footer>
    </div>
  );
}

export default App;
