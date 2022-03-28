import "./App.css";
import Circle from "./Circle";
import Header from "./Header";
import Footer from "./Footer.js";
import Square from "./Square";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section className="circleContainer">
          <Circle count="0" />
        </section>
        <section className="boxContainer">
          <Square text="Add five" />
          <Square text="Add one" />
          <Square text="Reset" />
          <Square text="Remove one" />
          <Square text="Remove five" />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
