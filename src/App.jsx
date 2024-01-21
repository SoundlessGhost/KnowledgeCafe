import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div>
      <Header></Header>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "5px",
            color: "#713200",
            fontFamily: "cursive",
          },
        }}
      />
      <Outlet></Outlet>
    </div>
  );
}

export default App;
