export const AddNewIcon = ({ width = '1.6rem', height = '1.6rem', className, style }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect className="circle-1" width="24" height="24" rx="12" fill="#ea6a12"></rect>
            <rect className="circle-2" x="11.168" y="7" width="1.66667" height="10" rx="0.833333" fill="#fff"></rect>
            <rect
                className="circle-3"
                x="7"
                y="12.834"
                width="1.66666"
                height="10"
                rx="0.833332"
                transform="rotate(-90 7 12.834)"
                fill="#fff"
            ></rect>
        </svg>
    );
};
