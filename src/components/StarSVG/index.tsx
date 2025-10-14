const StarSVG = ({fill}:{fill: string}) => {
    return (
        <svg width="60px" height="60px" viewBox="0 -0.5 33 33" fill={`${fill}`}>
            <defs>
                <linearGradient id="FillGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#ffeb98"/>
                    <stop offset="100%" stopColor="#ffc718"/>
                </linearGradient>
                <linearGradient id="StrokeGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#ffefa6"/>
                    <stop offset="100%" stopColor="#ff8b18"/>
                </linearGradient>
            </defs>
            <g stroke="url('#StrokeGradient')" strokeWidth="2">
                <g transform="translate(-903.000000, -411.000000)">
                    <g transform="translate(37.000000, 169.000000)">
                        <g transform="translate(858.000000, 234.000000)">
                            <g transform="translate(7.000000, 8.000000)">
                                <polygon points="27.865 31.83 17.615 26.209 7.462 32.009 9.553 20.362 0.99 12.335 12.532 10.758 17.394 0 22.436 10.672 34 12.047 25.574 20.22">
                                </polygon>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default StarSVG