import Navbar from './components/Navbar'
import Player from './pages/Player'

function App() {
	return (
		<div className="App bg-[#f4f5fe] h-screen font-quicksand text-lg">
			<div className="flex flex-row">
				<Navbar />
				<Player />
			</div>
		</div>
	)
}

export default App
