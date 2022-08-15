import { Buttons } from "./styles";

const Button = ({text, bcColor, bcHover, ...rest}) => {
    return (
        <Buttons bcColor={bcColor} bcHover={bcHover} {...rest}>{text}</Buttons>
    )
}
export default Button;