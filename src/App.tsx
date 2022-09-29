import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import PageHeader from "./components/MainPage/MainPage";
import { routes } from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<HomePage />}> */}
        <Route path="/" element={<PageHeader />}>
          {routes.map((value) => (
            <Route path={value.path} element={value.element} key={`${value.path}${Math.random()}`}/>
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
