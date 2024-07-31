import { useState } from "react";
import { Header, Footer, Card } from "./components";
import { MovieDetail, MovieList, PageNotFound, Search } from "./pages";
import AllRoutes from "./routes/AllRoutes";
import "./App.css";
function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <AllRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
