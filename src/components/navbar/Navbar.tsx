'use client';

import Navbar1 from './NavPart1';
import Navbar2 from './NavPart2';

export default function Navbar() {
	return (
		<div className="flex justify-between items-center py-3 px-3 sticky top-0 z-50 ">
			<Navbar1 />
			<Navbar2 />
		</div>
	);
}
