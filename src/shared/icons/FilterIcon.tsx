import Svg, { Path, SvgProps, Defs, Stop, LinearGradient } from "react-native-svg";

export const FilterIcon = (props: SvgProps) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
            <Path d="M13.2451 7.25342H18.8871" stroke="#1D1D1D" strokeWidth="1.5" strokeLinecap="square" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.26 7.19352C9.26 5.75152 8.083 4.58252 6.63 4.58252C5.178 4.58252 4 5.75152 4 7.19352C4 8.63552 5.178 9.80452 6.63 9.80452C8.083 9.80452 9.26 8.63552 9.26 7.19352Z"
                stroke="#1D1D1D"
                strokeWidth="1.5"
                strokeLinecap="square"
            />
            <Path d="M10.7553 16.8667H5.11328" stroke="#1D1D1D" strokeWidth="1.5" strokeLinecap="square" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.7402 16.8053C14.7402 15.3633 15.9172 14.1943 17.3702 14.1943C18.8222 14.1943 20.0002 15.3633 20.0002 16.8053C20.0002 18.2473 18.8222 19.4173 17.3702 19.4173C15.9172 19.4173 14.7402 18.2473 14.7402 16.8053Z"
                stroke="#1D1D1D"
                strokeWidth="1.5"
                strokeLinecap="square"
            />
        </Svg>
    );
};
