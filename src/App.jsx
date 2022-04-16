import NavBar from "./Components/NavBar"
import Projects from "./Components/Projects"

export default function App() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-white mb-2 lg:mb-12">
          Altuğ's Personal Page
        </h1>
        <Projects />
      </div>
    </>
  )
}