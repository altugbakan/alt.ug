import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import VisitorNFT from "./components/VisitorNFT";

const App = () => {
  return (
    <div className="flex flex-row justify-center h-full">
      <div className="flex flex-col ml-2 mr-2 max-w-screen-md">
        <NavBar />
        <div className="flex flex-col items-center mt-4">
          <h1 className="text-3xl font-bold text-white mb-6 md:mb-12 text-center">
            Altuğ's Personal Page
          </h1>
          <div>
            <Projects className="mb-8" />
            <Skills className="mb-8" />
            {
              window.ethereum ? <VisitorNFT className="mb-8" /> : null
            }
          </div>
        </div>
        <footer className="text-zinc-400 mt-auto ml-auto mr-auto">contact me at <a href="mailto:mail@alt.ug" className="hover:underline">mail@alt.ug</a></footer>
      </div>
    </div>
  );
}

export default App;