import "./App.css";
import { Sidebar } from "./pagecomponents/sidebar/side_bar";
import { Header } from "./pagecomponents/header/header";
import { Footer } from "./pagecomponents/footer/footer";
import { Contentcontainer } from "./pagecomponents/contentcontainer/contentcontainer";

function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <Header />
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Contentcontainer />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
