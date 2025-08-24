import './App.css'
import {Route, Routes} from "react-router-dom";
import News from "./pages/News.jsx";
import Home from "./pages/Home.jsx";

function App() {

  return (
      <div>
          <Routes>
              <Route path={'/'} element={<Home />} />
              <Route path={'/dongnenews'} element={<News />} />
          </Routes>
      </div>
  )
}

export default App
