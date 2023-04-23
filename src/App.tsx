import { Routes, Route } from "react-router-dom";
import { Detail } from "./Pages/Detail";
import { Home } from "./Pages/Home";
import { Error } from "./Pages/Error";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
