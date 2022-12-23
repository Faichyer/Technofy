import React from 'react'

type Props = {
	name: string
	icon: string
}

function NavbarTile({ name, icon }: Props) {
	return (
		<div>
			{icon}
			<div>{name}</div>
		</div>
	)
}

export default NavbarTile
