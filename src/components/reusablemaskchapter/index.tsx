export const MaskIntroExample = () => {
    return (<>
        <svg width="400" height="1050" viewBox="0 0 400 1050">
            <defs>
                <g id="simple_pattern" stroke="black" fill="none">
                    <rect x="0" y="0" width="50" height="50" />
                    <circle cx="25" cy="25" r="20"
                        fill="black"
                        fill-opacity=".1"
                        stroke="black"
                    />
                </g>

                <radialGradient id="gradient">
                    <stop offset="0%" stopColor="white" />
                    <stop offset="100%" stopColor="black" />
                </radialGradient>

                <pattern id="simple_tile" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                    <use href="#simple_pattern" x="0" y="0"></use>
                </pattern>

                <mask id="gradient_mask">
                    <rect x="50" y="700" width="300" height="300" fill="url(#gradient)">
                    </rect>
                </mask>


            </defs>
            <rect x="50" y="0" width="300" height="300" fill="url(#simple_tile)">
            </rect>
            <text textAnchor="middle" dominantBaseline="hanging" x="200" y="310" fill="black" fontSize={20}>pattern</text>
            <rect x="50" y="350" width="300" height="300" fill="url(#gradient)">
            </rect>
            <text textAnchor="middle" dominantBaseline="hanging" x="200" y="660" fill="black" fontSize={20}>pattern</text>
            <rect mask="url(#gradient_mask)" x="50" y="700" width="300" height="300" fill="url(#simple_tile)">
            </rect>
            <text textAnchor="middle" dominantBaseline="hanging" x="200" y="1010" fill="black" fontSize={20}>pattern with mask applied</text>
        </svg>
    </>)
}

export const FinalExample = () => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500">
            <defs>
                <g id="final_pattern" stroke="black" fill="none">
                    <rect x="0" y="0" width="50" height="50" />
                    <circle cx="25" cy="25" r="20"
                        fill="black"
                        fill-opacity=".1"
                        stroke="black"
                    />
                </g>

                <radialGradient id="final_gradient">
                    <stop offset="0%" stopColor="white" />
                    <stop offset="100%" stopColor="black" />
                </radialGradient>

                <pattern id="final_tile" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                    <use href="#final_pattern" x="0" y="0"></use>
                </pattern>

                <mask id="final_gradient_mask">
                    <rect x="0" y="0" width="500" height="500" fill="url(#final_gradient)">
                    </rect>
                </mask>


            </defs>

            <rect mask="url(#final_gradient_mask)" x="0" y="0" width="500" height="500" fill="url(#final_tile)">
            </rect>

        </svg>
    </>)
}