import Svg, { Path, SvgProps, Defs, Stop, LinearGradient } from "react-native-svg";

export const HomeIcon = (props: SvgProps) => {
    return (
        <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
            <Path
                opacity="0.5"
                d="M13.6061 22H11.3939C7.94737 22 6.22409 22 5.04903 20.9882C3.87396 19.9764 3.63025 18.2827 3.14284 14.8952L2.86407 12.9579C2.48463 10.3208 2.29491 9.00229 2.83537 7.87495C3.37583 6.7476 4.52619 6.06234 6.82691 4.69181L8.21175 3.86687C10.301 2.62229 11.3457 2 12.5 2C13.6543 2 14.699 2.62229 16.7882 3.86687L18.1731 4.69181C20.4738 6.06234 21.6242 6.7476 22.1646 7.87495C22.7051 9.00229 22.5154 10.3208 22.1359 12.9579L21.8572 14.8952C21.3697 18.2827 21.126 19.9764 19.951 20.9882C18.7759 22 17.0526 22 13.6061 22Z"
                fill="url(#paint0_linear_2389_19829)"
            />
            <Path
                d="M8.75 18C8.75 17.5858 9.08579 17.25 9.5 17.25H15.5C15.9142 17.25 16.25 17.5858 16.25 18C16.25 18.4142 15.9142 18.75 15.5 18.75H9.5C9.08579 18.75 8.75 18.4142 8.75 18Z"
                fill="#D6ED17"
            />
            <Defs>
                <LinearGradient id="paint0_linear_2389_19829" x1="7.5" y1="6.5" x2="24" y2="27" gradientUnits="userSpaceOnUse">
                    <Stop stopColor="#D6ED17" />
                    <Stop offset="1" stopColor="#D6ED17" stopOpacity="0.1" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
};
