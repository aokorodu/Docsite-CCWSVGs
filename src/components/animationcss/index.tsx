import styles from './CSSAnim.module.scss';

export const HoverExample = () => {
    return (<>
        <svg width="300" height="300" viewBox="0 0 300 300">
            <circle className={styles.circle}
                id="my-circle"
                cx="150" cy="150"
                r="100"></circle>
        </svg>
    </>)
}

type strokedashprops = {
    hover: boolean
}
export const StrokeDash = ({ hover = false }: strokedashprops) => {
    return (<>
        <svg width="300" height="300" viewBox="0 0 300 300">
            <circle className={!hover ? styles.strokeDash : styles.strokeDashHover}
                id="my-circle"
                cx="150" cy="150"
                r="100" pathLength={100}></circle>
        </svg>
    </>)
}

export const GeoProperties = () => {
    return (<>
        <svg width="300" height="300" viewBox="0 0 300 300">
            <circle className={styles.geoPropAnimation}
                id="my-circle"
                fill="orange"></circle>
        </svg>
    </>)
}

export const KeyframeExample = () => {
    return (<>
        <svg width="500" height="500" viewBox="0 0 500 500">
            <circle r={50} className={styles.zoomCircle}></circle>
        </svg>
    </>)
}

type BalloonProps = {
    linear: boolean
}

export const BalloonExample = ({ linear = true }: BalloonProps) => {
    return (<>
        <svg width="300" height="300" viewBox="0 0 500 500">
            <defs>
                <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop stop-color="#42D2FF" offset="0%" />
                    <stop stop-color="#DAF6FF" offset="100%" />
                </linearGradient>
            </defs>
            <rect x="0" y="0" width="500" height="500" fill="url(#sky)"></rect>
            <g className={styles.clouds}>
                <g opacity="0.5" fill="white">
                    <ellipse cx="198.987" cy="107.667" rx="37.9283" ry="36.6667" />
                    <ellipse cx="259.072" cy="107.667" rx="37.9283" ry="36.6667" />
                    <ellipse cx="214.759" cy="144.333" rx="37.9283" ry="36.6667" />
                    <ellipse cx="156.928" cy="132.6" rx="37.9283" ry="36.6667" />
                </g>
                <g opacity="0.5" fill="white">
                    <ellipse rx="30.6835" ry="19.6667" transform="matrix(-1 0 0 1 435.291 188.667)" />
                    <ellipse rx="30.6835" ry="19.6667" transform="matrix(-1 0 0 1 386.684 188.667)" />
                    <ellipse rx="30.6835" ry="19.6667" transform="matrix(-1 0 0 1 422.532 208.333)" />
                    <ellipse rx="30.6835" ry="19.6667" transform="matrix(-1 0 0 1 469.316 202.04)" />
                </g>
                <g opacity="0.5" fill="white">
                    <ellipse cx="44" cy="290" rx="25" ry="20" />
                    <ellipse cx="69" cy="314" rx="25" ry="20" />
                    <ellipse cx="22" cy="302.5" rx="22" ry="15.5" />
                    <ellipse cx="81" cy="294" rx="25" ry="20" />
                </g>
                <g opacity="0.5" fill="white">
                    <ellipse rx="25" ry="20" transform="matrix(1 0 0 -1 297 417)" />
                    <ellipse rx="25" ry="20" transform="matrix(1 0 0 -1 322 393)" />
                    <ellipse rx="22" ry="15.5" transform="matrix(1 0 0 -1 275 404.5)" />
                    <ellipse rx="25" ry="20" transform="matrix(1 0 0 -1 334 413)" />
                </g>
                <g opacity="0.5" fill="white">
                    <ellipse cx="698.987" cy="107.667" rx="37.9283" ry="36.6667" />
                    <ellipse cx="759.072" cy="107.667" rx="37.9283" ry="36.6667" />
                    <ellipse cx="714.759" cy="144.333" rx="37.9283" ry="36.6667" />
                    <ellipse cx="656.928" cy="132.6" rx="37.9283" ry="36.6667" />
                </g>
                <g opacity="0.5" fill="white">
                    <ellipse rx="30.6835" ry="19.6667" transform="matrix(-1 0 0 1 935.291 188.667)" />
                    <ellipse rx="30.6835" ry="19.6667" transform="matrix(-1 0 0 1 886.684 188.667)" />
                    <ellipse rx="30.6835" ry="19.6667" transform="matrix(-1 0 0 1 922.532 208.333)" />
                    <ellipse rx="30.6835" ry="19.6667" transform="matrix(-1 0 0 1 969.316 202.04)" />
                </g>
                <g opacity="0.5" fill="white">
                    <ellipse cx="544" cy="290" rx="25" ry="20" />
                    <ellipse cx="569" cy="314" rx="25" ry="20" />
                    <ellipse cx="522" cy="302.5" rx="22" ry="15.5" />
                    <ellipse cx="581" cy="294" rx="25" ry="20" />
                </g>
                <g opacity="0.5" fill="white">
                    <ellipse rx="25" ry="20" transform="matrix(1 0 0 -1 797 417)" />
                    <ellipse rx="25" ry="20" transform="matrix(1 0 0 -1 822 393)" />
                    <ellipse rx="22" ry="15.5" transform="matrix(1 0 0 -1 775 404.5)" />
                    <ellipse rx="25" ry="20" transform="matrix(1 0 0 -1 834 413)" />
                </g>
            </g>
            <g className={linear ? styles.balloon : styles.balloonEase}>
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M85.1286 39.9427C85.1286 54.8019 70.3959 73.3782 54.4949 84.6169C41.5326 84.4155 46.5612 84.355 31.8291 84.8384C14.6879 74.2724 0.875977 54.8563 0.875977 39.9427C0.875977 18.451 22.0542 -1.29145 43.4984 1.00907C64.8712 -1.73858 85.1286 18.451 85.1286 39.9427Z"
                    fill="#BA0505" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M71.3168 40.0881C71.3168 54.9567 60.5411 74.2361 52.3597 84.8516C42.386 84.8567 46.482 84.7969 35.7659 85.0034C27.7135 74.4052 14.2275 54.9789 14.2275 40.0881C14.2275 18.4807 29.4324 0.944168 44.3296 0.944168C56.9637 0.944371 67.5786 13.5576 70.518 30.5689C71.0399 33.6164 71.3168 36.8057 71.3168 40.0881Z"
                    fill="#FFC875" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M53.2365 39.9417C53.2365 54.6982 49.2728 73.8267 46.2588 84.3843C40.3832 84.4266 46.4122 84.3823 40.0929 84.4477C37.1286 73.8881 33.3359 54.679 33.3359 39.9417C33.3359 18.4691 37.7932 1.0423 43.2862 1.0423C48.7782 1.04179 53.2365 18.4691 53.2365 39.9417Z"
                    fill="#BA0505" />
                <path d="M32.5305 84.8257C34.4839 91.6416 36.0267 98.6478 37.0645 105.685"
                    stroke="#696767" />
                <path d="M39.4045 84.8235L41.8411 105.63" stroke="#696767" />
                <path d="M46.804 84.8477L45.7527 105.615" stroke="#696767" />
                <path d="M53.4461 84.8275C51.5633 91.9233 50.4269 98.7704 49.6846 105.645"
                    stroke="#696767" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M32.051 85.2125L31.354 84.3771L54.7107 84.4011L54.1917 85.3853L32.051 85.2125Z"
                    fill="#600070" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M34.3781 105.463C33.5465 105.463 32.8757 106.118 32.8757 106.923C32.8757 107.729 33.5465 108.383 34.3781 108.383H34.912C34.8861 108.554 34.8737 108.736 34.8737 108.947V115.895C34.8737 118.724 37.221 121 40.1303 121H47.0158C49.9251 121 52.2714 118.724 52.2714 115.895V108.947C52.2714 108.736 52.259 108.554 52.233 108.383H52.768C53.5985 108.383 54.2693 107.729 54.2693 106.923C54.2693 106.118 53.5985 105.463 52.768 105.463H34.3781V105.463Z"
                    fill="#431102" stroke="black" strokeWidth="0.0574834" stroke-linecap="round" />
            </g>
        </svg>
    </>)
}

type EaseType = {
    type: "ease-in-out" | "ease-in" | "ease-out" | "linear" | "default" | "custom"
}
export const EaseExample = ({ type }: EaseType) => {

    const getImage = () => {
        let path = "'";
        switch (type) {
            case "ease-in-out":
                path = "/css_anim_easing_in_out.png"
                break;

            case "ease-in":
                path = "/css_anim_easing_in.png"
                break;

            case "ease-out":
                path = "/css_anim_easing_out.png"
                break;

            case "custom":
                path = "/css_anim_easing_custom.png"
                break;

            default:
                path = "/css_anim_easing_linear.png"


        }

        return path;
    }

    const getEasing = () => {
        let ease = "";

        switch (type) {
            case "ease-in":
                ease = styles.easeIn;
                break;

            case "ease-out":
                ease = styles.easeOut;
                break;

            case "ease-in-out":
                ease = styles.easeInOut;
                break;

            case "linear":
                ease = styles.easeLinear;
                break;

            case "custom":
                ease = styles.easeCustom;
                break;

            case 'default':
                ease = styles.easeLinear;
                break;
        }

        return ease;
    }
    return (<>
        <img className={styles.exampleImage} src={getImage()} height="300px" />
        <svg width="200" height="300" viewBox="0 0 200 300">
            <circle className={getEasing()} cx="100" cy="250" r="10" fill="green" />
        </svg>
    </>)
}