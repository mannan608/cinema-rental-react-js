import { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MovieList from "../components/cine/MovieList";
import { ThemeContext } from "../context";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      {/* Begin header */}
      <Header />
      {/* End Header */}
      {/* Begin Main */}
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          {/* Sidebar */}
          <Sidebar />
          {/* Content */}
          <MovieList />
        </div>
      </main>
      {/* End Main */}
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
