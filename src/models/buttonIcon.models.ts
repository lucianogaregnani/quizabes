export enum ButtonBgColors {
    Blue,
    White
}

export interface ButtonIconProps {
    icon: React.ReactNode,
    bgColor?: ButtonBgColors,
    to: string
}