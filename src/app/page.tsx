'use client';

import { CardcarouselCard } from '@/components/cardCarousel/CardcarouselCard';
import HeroContext from '@/components/landingpage/HeroContext';
import Navbar from '@/components/navbar/Navbar';

export default function Home() {
	return (
		<div>
			<Navbar />
			<HeroContext />
			<CardcarouselCard />
		</div>
	);
}
