import Svg, { Path, SvgProps } from "react-native-svg";

export const ABIcon = (props: SvgProps) => {
    return (
        <Svg width="10" height="10" viewBox="0 0 10 10" fill="none" {...props}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.38651 4.44478H9.99967V2.41237L6.55462 0H5.38651V4.44478ZM4.61316 10H0V2.41265L3.44508 0.000278033H4.61316V10ZM9.99962 9.99991H5.38651V5.21805H9.99962V9.99991Z"
                fill="#1D1D1D"
            />
        </Svg>
    );
};
