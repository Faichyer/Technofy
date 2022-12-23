import React from 'react'
import FavArtists from '../components/player/FavArtists'
import Header from '../components/player/Header'
import Playlists from '../components/player/Playlists'
import Shortcuts from '../components/player/Shortcuts'
import Trending from '../components/player/Trending'

type Props = {}

function Player({}: Props) {
	return (
		<div className="basis-3/4 h-screen">
			{/* Left Side */}
			<div>
				<Header />
				<Trending />
				<Playlists />
			</div>

			{/* Right Side  */}
			<div>
				<Shortcuts />
				<FavArtists />
			</div>
		</div>
	)
}

export default Player
