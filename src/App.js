import "./App.css";
import { Sidebar } from "./pagecomponents/sidebar/side_bar";
import { Header } from "./pagecomponents/header/header";
import { Footer } from "./pagecomponents/footer/footer";

function App() {
  return (
    <div class="wrapper">
      <div class="header">
        <Header />
      </div>
      <div class="sidebar">
        <Sidebar />
      </div>
      <div class="content">content</div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
