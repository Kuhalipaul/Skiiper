import { CardCarousel } from '../ui/card-carousel';
export const CardcarouselCard = () => {
	const images = [
		{ src: '/images/image1.jpg', alt: 'image 1' },
		{ src: '/images/image2.jpg', alt: 'image 2' },
		{ src: '/images/image3.jpg', alt: 'image 3' },
	];
	return (
		<div>
			<CardCarousel images={images} />
		</div>
	);
};
