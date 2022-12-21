import Link from 'next/link'
import React from 'react'

export const AdminCard = ({ name, route }: { name: string, route: string }) => {
	return (
		<Link href={`/admin/${route}`} className='flex items-center justify-center py-6 text-center border rounded-lg hover:border-yellow-400 hover:scale-105'>
			<h1 className='text-4xl md:text-5xl'>{name}</h1>
		</Link>
	)
}
