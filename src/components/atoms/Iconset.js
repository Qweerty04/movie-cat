import React from 'react';
import './Iconset.scss';

/**
 * Array of JSX elements representing paths in an SVG.
 * @typedef {Array<JSX.Element>} SVGPathArray
 */

/**
 * A collection of icon paths to be used in SVG.
 * @type {SVGPathArray}
 */
const iconPaths = {
    bookmark: <>
        <path className='optional-fill f1 stroke s1 nss'
            d="M4 5.61651V21.2513C4 22.088 5.17005 22.507 5.85495 21.9155L10.9684 17.4973C11.3926 17.1302 12.0814 17.1302 12.5056 17.4973L17.619 21.9155C18.3039 22.507 19.474 22.088 19.474 21.2513V5.61651C19.474 3.61887 17.5995 2 15.288 2H8.18597C5.87441 2 4 3.61887 4 5.61651Z"
        />
    </>,
    search: <>
        <path className='optional-fill f1 stroke s1 nss'
            d="M9.51129 17.9199C6.57905 17.6145 4.21354 16.2913 2.79671 13.0052C2.02052 11.2167 1.86036 9.60268 2.10677 8.07592C2.36549 6.53462 3.05543 5.03694 4.10266 3.51018C4.53387 2.87039 4.97741 2.4778 5.43326 2.25969C5.90143 2.02704 6.43121 1.95434 7.08418 2.02704C10.768 2.44872 13.8111 4.74613 16.768 7.34889C17.6674 8.13408 18 8.99198 18 9.86441C18 10.7805 17.6181 11.8565 16.8542 13.0197C14.9446 15.8842 13.2813 18.2543 10.1643 17.9781L9.49897 17.9199H9.51129Z"
        />
        <path className='stroke s1 nss'
            d="M14 16L20 22"
        />
    </>,
    arrow: <>
        <path className='stroke s1 nss' 
            d="M3.72412 10.5517L12 2.27585M12 2.27585L20.2758 10.5517M12 2.27585L12 22.2758"
        />
    </>,
    star: <>
        <path className='optional-fill f1 stroke s1 nss'
            d="M5.26 19.556C5.31012 19.01 5.43734 18.4751 5.53145 17.9357C5.68656 17.0454 5.86248 16.1587 6.00956 15.267C6.08239 14.8254 5.94051 14.4269 5.59765 14.1102C4.67595 13.2594 3.74763 12.4144 2.82215 11.5672C2.7148 11.469 2.60461 11.3739 2.49868 11.2749C2.03807 10.8439 1.87869 10.3366 2.09576 9.75238C2.31283 9.16817 2.77959 8.87629 3.41991 8.7901C4.79891 8.60484 6.17602 8.40892 7.55455 8.22144C8.11684 8.14503 8.50368 7.85848 8.75101 7.38534C9.37573 6.18938 9.99902 4.99253 10.6322 3.80057C11.0333 3.04532 11.9578 2.78587 12.7471 3.18882C13.0602 3.34875 13.255 3.60198 13.4078 3.89298C13.7946 4.63001 14.181 5.3666 14.5683 6.10319C14.7636 6.47504 14.9835 6.83712 15.1523 7.21874C15.4413 7.8727 15.9624 8.1708 16.6926 8.25743C18.0276 8.41603 19.3579 8.60662 20.6891 8.79232C21.2973 8.87718 21.712 9.20815 21.9088 9.75104C22.1069 10.297 21.9806 10.7964 21.546 11.2025C20.613 12.0741 19.6913 12.9591 18.719 13.7907C18.0815 14.3358 17.8933 14.9312 18.0673 15.7162C18.3322 16.9099 18.5213 18.1183 18.7412 19.3205C18.8462 19.8945 18.6377 20.3596 18.1501 20.7039C17.6677 21.0447 17.1338 21.0904 16.5895 20.8457C16.1776 20.6604 15.7784 20.4503 15.3736 20.2512C14.5082 19.8252 13.6404 19.404 12.7788 18.9713C12.2354 18.6985 11.718 18.7305 11.1827 19.0015C9.96923 19.6159 8.74912 20.2197 7.52476 20.815C6.59265 21.2686 5.53145 20.8288 5.29499 19.9087C5.26473 19.7914 5.26898 19.6737 5.26047 19.5551L5.26 19.556Z"
        />
    </>
};


/**
 * A collection of blob shape paths to be used in SVG.
 * @type {SVGPathArray}
 */
const blobIcons = [
    <path className='fill stroke s1 nss' d="M11.5153 2.74766L10.8198 2.71732C8.59146 2.62011 7.21063 3.00658 6.36332 3.79626C5.5176 4.58446 5.03942 5.92765 5.00001 8.1554L4.99999 8.15638C4.9621 10.1401 4.89731 12.168 4.47644 14.1968L11.5153 2.74766ZM11.5153 2.74766C13.3349 2.89124 15.0485 3.4222 16.8014 4.20852M11.5153 2.74766L16.8014 4.20852M16.8014 4.20852C18.9587 5.17846 19.9092 6.4441 20.166 7.84881C20.4335 9.3125 19.9818 11.0931 18.9535 13.1258C17.9879 15.0336 16.6622 16.7917 15.3125 18.5816L15.2772 18.6284C15.2772 18.6285 15.2772 18.6285 15.2772 18.6285C14.4909 19.6712 13.6435 20.417 12.6791 20.8495C11.7221 21.2787 10.595 21.4242 9.20208 21.1774L9.20206 21.1774C9.10319 21.1598 9.00598 21.1426 8.91039 21.1257C7.37806 20.8546 6.26291 20.6573 5.44071 20.4233C4.55894 20.1724 4.17967 19.9207 3.99219 19.6493C3.80578 19.3794 3.70359 18.9369 3.7893 18.0201C3.87423 17.1117 4.12364 15.8997 4.4764 14.1969L16.8014 4.20852Z"/>,
    <path className='fill stroke s1 nss' d="M8.38636 6.42598C10.341 4.70018 12.3758 3.51816 14.7175 3.56358V3.61302L15.4184 3.61466C17.7957 3.62021 19.4327 4.3646 20.3506 5.51688C21.265 6.66481 21.5839 8.36639 21.0111 10.5447L21.0107 10.5461C20.8588 11.1288 20.7319 11.7206 20.6237 12.3086C19.5274 18.1229 13.6258 21.6611 7.83374 20.0471C4.75471 19.1885 3.80566 16.7977 2.8606 13.8484L2.8604 13.8478C2.68747 13.3098 2.67232 12.8806 2.7401 12.5222C2.80843 12.1609 2.96921 11.8288 3.20876 11.4978C3.4521 11.1616 3.76545 10.8415 4.12753 10.5007C4.23598 10.3987 4.35196 10.292 4.4713 10.1822C4.73078 9.94353 5.00612 9.69026 5.25436 9.4382L5.25446 9.4381C6.28053 8.39585 7.3064 7.37759 8.38585 6.42643L8.38636 6.42598Z"/>,
    <path className='fill stroke s1 nss' d="M5.8492 15.8379L5.84919 15.8379C2.10887 13.6326 1.61432 8.05796 4.84033 5.04738C5.57894 4.35965 6.54582 4.29301 7.56813 4.57413L7.56846 4.57422C10.2948 5.32253 13.0534 5.36895 15.7191 5.31339C17.1142 5.28666 18.1365 5.47779 18.8475 5.95093C19.5224 6.40008 20.0331 7.18411 20.2258 8.63459C20.3284 9.41435 20.5417 10.1647 20.7568 10.8234C20.8587 11.1353 20.9543 11.4087 21.0414 11.658C21.1378 11.9337 21.2239 12.1799 21.2968 12.4164C21.3258 15.168 20.2772 17.251 18.732 18.4344C17.1753 19.6265 15.0296 19.9731 12.7357 19.0728C10.3587 18.1365 8.00881 17.1114 5.8492 15.8379Z"/>,
    <path className='fill stroke s1 nss' d="M20.273 5.34903L20.2731 5.34928C21.2415 7.87023 21.3172 10.2028 19.5469 11.9902L19.5467 11.9904C19.25 12.2902 18.9502 12.5896 18.6492 12.8903C16.566 14.9712 14.4253 17.1095 12.8721 19.8035L12.8711 19.8052C12.2484 20.8923 11.1883 21.5177 10.0922 21.2225L10.0915 21.2223C9.773 21.1369 9.46331 21.0613 9.16235 20.9878C8.33846 20.7867 7.5799 20.6015 6.88486 20.2746C6.0014 19.8591 5.30551 19.2432 4.94263 18.0897L4.94185 18.0873C4.7588 17.5128 4.63512 16.901 4.52962 16.2689L4.52916 16.2661C4.39969 15.5089 4.15035 14.7473 3.90473 14.031C3.87005 13.9298 3.83547 13.8297 3.80119 13.7304C3.58656 13.1086 3.38373 12.521 3.24028 11.9408C2.91325 10.618 2.94148 9.52463 3.82562 8.54733L3.82626 8.54661C6.86563 5.1777 11.0681 3.37548 15.2371 2.70574C16.572 2.783 17.634 2.94949 18.4596 3.33528C19.2625 3.7104 19.8735 4.30773 20.273 5.34903Z"/>,
    <path className='fill stroke s1 nss' d="M6.87379 20.3989L6.87364 20.3989C4.91058 19.7575 3.71273 18.664 3.20647 17.3871C2.70043 16.1109 2.8276 14.5059 3.81431 12.7217L3.81435 12.7216C5.40438 9.84546 7.00057 7.08162 9.32794 4.84969L9.32814 4.84949C10.9304 3.31173 12.5051 2.64962 13.9747 2.70592C15.4435 2.76218 16.9609 3.54183 18.4375 5.20853C20.1882 7.19025 20.9766 8.61121 21.0737 10.018C21.1711 11.4307 20.5836 12.9954 19.1306 15.2963L19.1303 15.2968C18.8123 15.8014 18.518 16.3232 18.2338 16.8271C18.176 16.9297 18.1186 17.0315 18.0615 17.1322C17.7191 17.7364 17.3827 18.3124 17.0051 18.8511C16.349 19.7853 15.6786 20.3772 14.849 20.7484C14.0167 21.1208 12.9644 21.2981 11.4947 21.2974C11.0919 21.2232 10.6644 21.1603 10.2207 21.095C9.15922 20.9387 8.00492 20.7688 6.87379 20.3989Z"/>,
    <path className='fill stroke s1 nss' d="M17.2692 20.8633L17.2702 20.8629C18.1624 20.5241 18.8773 20.1711 19.3415 19.5674C19.7756 19.003 20.0737 18.1024 19.8602 16.4838L19.8539 16.4578C19.2364 13.9021 19.1808 10.4769 19.1247 7.02442C19.1146 6.40518 19.1046 5.78505 19.0912 5.16891L19.0912 5.1677C19.058 3.49953 17.3758 2.32526 15.429 2.80947C13.9975 3.17003 12.594 3.54432 11.2281 4.02171L17.2692 20.8633ZM17.2692 20.8633C14.9075 21.7645 11.852 21.2078 9.21865 19.6877C6.58543 18.1678 4.56577 15.7948 4.14258 13.3077L4.14251 13.3073M17.2692 20.8633L4.14251 13.3073M4.14251 13.3073C3.85333 11.6134 4.43426 9.71255 5.7157 7.99931M4.14251 13.3073L5.7157 7.99931M5.7157 7.99931C6.99284 6.29181 8.92886 4.82617 11.228 4.02178L5.7157 7.99931Z"/>,
    <path className='fill stroke s1 nss' d="M11.4433 19.7083V19.7178C8.0311 19.4094 5.28154 18.1253 3.62871 14.9251C2.73183 13.1886 2.53603 11.6158 2.8293 10.135C3.12588 8.63739 3.93483 7.17393 5.14968 5.69365L5.15057 5.69256C5.65594 5.07426 6.16392 4.68856 6.70319 4.46698C7.24298 4.24519 7.86387 4.16739 8.62639 4.24143C12.9039 4.65681 16.428 6.89173 19.87 9.41989C20.9096 10.1852 21.2996 11.0234 21.2974 11.8752C21.295 12.7698 20.8597 13.8132 19.9654 14.9401C17.7504 17.7305 15.8234 20.0335 12.1979 19.7643L11.4433 19.7083Z"/>,
];

/**
 * Wraps a Path inside an SVG with an optional rotation.
 * @param {JSX.Element} icon - The SVG icon element to be wrapped.
 * @param {number} [rotation=0] - The rotation angle in degrees. Defaults to 0.
 * @returns {JSX.Element} The SVG icon wrapped with rotation if specified.
 */
const pathSVGWrapper = (className, icon, rotation = 0) => { 
    return <svg 
        className={`_icon24 ${className || ''}` }
        width="24px" 
        height="24px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" 
        fill="transparent" 
        stroke="transparent"
        strokeWidth="0"
    >
        <g className='pathContainer' transform={`rotate(${rotation} 12 12)`}>
            {icon}
        </g>
    </svg>
};

export const BlobIcon = ({index, className}) => {
    const wrappedIndex = index % blobIcons.length; // Modulo Wraps the index number so that it can't exceed the highest index in the array.
    return pathSVGWrapper(className, blobIcons[wrappedIndex]);
}

export const BookmarkIcon = ({className}) => {
    return pathSVGWrapper(className, iconPaths.bookmark);
};

export const SearchIcon = ({className}) => {
    return pathSVGWrapper(className, iconPaths.search);
};

export const StarIcon = ({className}) => {
    return pathSVGWrapper(className, iconPaths.star);
};

export const ArrowUp = ({className}) => pathSVGWrapper(className, iconPaths.arrow, 0);
export const ArrowDown = ({className}) => pathSVGWrapper(className, iconPaths.arrow, 180);
export const ArrowLeft = ({className}) => pathSVGWrapper(className, iconPaths.arrow, 270);
export const ArrowRight = ({className}) => pathSVGWrapper(className, iconPaths.arrow, 90);
export const ArrowTopLeft = ({className}) => pathSVGWrapper(className, iconPaths.arrow, 315);
export const ArrowTopRight = ({className}) => pathSVGWrapper(className, iconPaths.arrow, 45);
export const ArrowBottomLeft = ({className}) => pathSVGWrapper(className, iconPaths.arrow, 225);
export const ArrowBottomRight = ({className}) => pathSVGWrapper(className, iconPaths.arrow, 135);

const Iconset = {
    BookmarkIcon,
    SearchIcon,
    BlobIcon,
    StarIcon,
    Arrow: {
        Up: ArrowUp,
        Down: ArrowDown,
        Left: ArrowLeft,
        Right: ArrowRight,
        TopLeft: ArrowTopLeft,
        TopRight: ArrowTopRight,
        BottomLeft: ArrowBottomLeft,
        BottomRight: ArrowBottomRight
    }
}

export default Iconset;