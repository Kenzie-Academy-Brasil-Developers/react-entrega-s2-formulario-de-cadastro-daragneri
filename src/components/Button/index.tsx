import { Buttons } from "./styles";
interface IProps {
    text: string;
    bcColor: string;
    bcHover: any;
    rest: string;
}

const Button = ({text, bcColor, bcHover, ...rest}: IProps) => {
    return (
        <Buttons bcColor={bcColor} bcHover={bcHover} {...rest}>{text}</Buttons>
    )
}
export default Button;