import NavBar from "./Components/NavBar"
import Projects from "./Components/Projects"

export default function App() {
  return (
    <div className="flex flex-row justify-center h-full">
      <div className="flex flex-col ml-2 mr-2 max-w-screen-xl">
        <NavBar />
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-white mb-6 lg:mb-12 text-center">
            Altuğ's Personal Page
          </h1>
          <Projects />
        </div>
        <footer className="text-zinc-400 mt-auto ml-auto mr-auto">contact me at <a href="mailto:mail@alt.ug" className="hover:underline">mail@alt.ug</a></footer>
      </div>
    </div>
  )
}