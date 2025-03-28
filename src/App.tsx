import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Main from "./ui/Main";

function App() {
  return (
    <div>
      <div className="mx-auto lg:max-w-[69rem]">
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
