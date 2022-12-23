import React from 'react'
import { RiMenu4Line } from 'react-icons/ri'
import NavbarTile from './NavbarTile'

type Props = {}

function Navbar({}: Props) {
	return (
		<div className="bg-white basis-1/4 h-screen justify-start">
			{/* Burger Button */}
			<div className="flex py-10 px-5 justify-end text-3xl">
				<RiMenu4Line />
			</div>

			{/* Logo  */}
			<div className="py-10 text-3xl text-center">
				<span className="text-purple-700">Techno</span>fy
			</div>

			{/* 3 Lists  */}
			<div className="flex flex-col items-center">
				<div className="py-10 flex flex-col justify-between">
					<NavbarTile name={'Home'} icon={''} />
					<NavbarTile name={'Trends'} icon={''} />
					<NavbarTile name={'Feed'} icon={''} />
				</div>
				<div className="py-10">
					<div className="text-sm">Discover</div>
					<div>
						<NavbarTile name={'New and Notable'} icon={''} />
						<NavbarTile name={'Release Calendar'} icon={''} />
						<NavbarTile name={'Events'} icon={''} />
					</div>
				</div>
				<div className="py-10">
					<div className="text-sm">Your Collection</div>
					<div>
						<NavbarTile name={'Favorite Songs'} icon={''} />
						<NavbarTile name={'Artists'} icon={''} />
						<NavbarTile name={'Albums'} icon={''} />
					</div>
				</div>
			</div>

			{/* Account */}
			<div className="py-10 ">Faichyer</div>
		</div>
	)
}

export default Navbar
