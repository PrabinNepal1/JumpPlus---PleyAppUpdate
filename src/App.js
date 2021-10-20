import { Slider } from "material-ui";
import Footer from "./component/footer/Footer";
import Header from "./component/header/header";
import Cards from "./component/card/Cards";

function App() {
  return (
    <div className="App">

      <Header/>

      <h1>Pley App</h1>
      <Cards/>
      <Footer/>
     
    </div>
  );
}

export default App;
