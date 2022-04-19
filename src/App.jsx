import NavBar from "./Components/NavBar"
import Projects from "./Components/Projects"

export default function App() {
  return (
    <div className="flex justify-center">
      <div className="h-screen max-w-screen-xl">
        <NavBar />
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-white mb-6 lg:mb-12">
            Altuğ's Personal Page
          </h1>
          <Projects />
          <footer className="text-zinc-400 fixed bottom-0">contact me at <a href="mailto:mail@alt.ug" className="hover:underline">mail@alt.ug</a></footer>
        </div>
      </div>
    </div>
  )
}