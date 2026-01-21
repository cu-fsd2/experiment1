import { useState } from "react";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    if (page === "about")
      return <About/>
    else if(page==="contact")
      return <Contact />
    else
      return <Home/>
  };

  return (
    <MainLayout setPage={setPage}>
      {renderPage()}
    </MainLayout>
  );
}

export default App;
