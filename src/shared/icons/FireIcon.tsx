import Svg, { Path, SvgProps } from "react-native-svg";

export const FireIcon = (props: SvgProps) => {
    return (
        <Svg width="12" height="12" viewBox="0 0 12 12" fill="none" {...props}>
            <Path
                d="M6.41619 10.9011C7.97916 10.5879 10 9.46351 10 6.55608C10 3.91029 8.06334 2.14845 6.67076 1.33891C6.36176 1.15928 6 1.39552 6 1.75295V2.66719C6 3.38812 5.69689 4.70404 4.85466 5.25139C4.42466 5.53084 3.96026 5.11258 3.908 4.60243L3.86509 4.18351C3.8152 3.6965 3.31921 3.40087 2.92998 3.69779C2.23073 4.23121 1.5 5.16529 1.5 6.55608C1.5 10.1116 4.14444 11.0005 5.46667 11.0005C5.54357 11.0005 5.62439 10.9982 5.70853 10.9934C5.05566 10.9376 4 10.5325 4 9.2226C4 8.19794 4.74754 7.50473 5.31551 7.16778C5.46827 7.07716 5.64706 7.19483 5.64706 7.37244V7.66705C5.64706 7.89251 5.73425 8.24493 5.94182 8.48618C6.17669 8.75918 6.52146 8.47321 6.54926 8.11415C6.55803 8.00087 6.67194 7.92869 6.77004 7.98602C7.09069 8.17342 7.5 8.57376 7.5 9.2226C7.5 10.2466 6.93551 10.7176 6.41619 10.9011Z"
                fill="white"
            />
        </Svg>
    );
};
