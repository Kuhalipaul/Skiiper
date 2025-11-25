'use client';

export default function Navbar1() {
	return (
		<div className="flex items-center gap-4">
			<a href="https://legacy.skiper-ui.com/" className="flex gap-2 items-center">
				<svg
					width="62"
					height="62"
					viewBox="0 0 62 62"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="size-6"
				>
					<ellipse
						cx="30.882"
						cy="30.803"
						rx="30.3097"
						ry="30.2769"
						fill="url(#paint0_radial_36_64)"
					></ellipse>
					<defs>
						<radialGradient
							id="paint0_radial_36_64"
							cx="0"
							cy="0"
							r="1"
							gradientUnits="userSpaceOnUse"
							gradientTransform="translate(0.572266 0.526062) rotate(44.969) scale(85.6825 85.6824)"
						>
							<stop offset="0.352001" stop-color="#090909"></stop>
							<stop offset="0.591494" stop-color="#2770EA"></stop>
							<stop offset="0.793825" stop-color="#FF7E97"></stop>
							<stop offset="0.972489" stop-color="#FF9203"></stop>
						</radialGradient>
					</defs>
				</svg>
				<h4 className="font-bold text-lg">skiper/ui</h4>
				<p className="text-[10px] border border-orange-600 text-orange-600 rounded-full px-1.5">Beta</p>
			</a>
			<a href="" className="text-gray-400  text-sm">
				Components
			</a>
			<a href="" className="text-gray-400  text-sm">
				Pricing
			</a>
			<a href="" className="text-gray-400  text-sm">
				Newsletter
			</a>

			<div className="jsx-e5c4fe5cc6436fc7 relative hidden h-[50px] w-[360px] overflow-hidden lg:w-[600px]  xl:block xl:w-full">
				<div className="jsx-e5c4fe5cc6436fc7 pointer-events-none absolute bottom-0  z-10 size-full overflow-hidden ">
					<div className="jsx-e5c4fe5cc6436fc7 glass-effect size-full"></div>
				</div>
				<svg className="jsx-e5c4fe5cc6436fc7">
					<defs className="jsx-e5c4fe5cc6436fc7">
						<filter id="fractal-noise-glass" className="jsx-e5c4fe5cc6436fc7">
							<feTurbulence
								type="fractalNoise"
								baseFrequency="0.12 0.12"
								numOctaves="1"
								result="warp"
								className="jsx-e5c4fe5cc6436fc7"
							></feTurbulence>
							<feDisplacementMap
								xChannelSelector="R"
								yChannelSelector="G"
								scale="30"
								in="SourceGraphic"
								in2="warp"
								className="jsx-e5c4fe5cc6436fc7"
							></feDisplacementMap>
						</filter>
					</defs>
				</svg>
			</div>
		</div>
	);
}
