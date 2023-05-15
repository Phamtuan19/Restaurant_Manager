function SvgMenu(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
            <g fill="none" stroke="#303C42" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
                <path d="M19 23.5H5A1.5 1.5 0 0 1 3.5 22V2A1.5 1.5 0 0 1 5 .5h14A1.5 1.5 0 0 1 20.5 2v20a1.5 1.5 0 0 1-1.5 1.5z" />
                <path d="M14.5.5v6l2-1 2 1v-6M6.5 5.5h5M7.5 10.5h9M7.5 14.5h9M7.5 18.5h9" />
            </g>
        </svg>
    );
}

export default SvgMenu;
