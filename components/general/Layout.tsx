import React from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';


export const Layout = ({ children }: { children: React.ReactNode }) => {
	return <div>
		<Navbar />
		{children}
		<Footer />
	</div>;
};
