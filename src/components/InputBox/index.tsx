
import { ReactNode } from "react";
import { SmallError, ThemeInput, ThemeLabel } from "../../style/typography";
import { ThemeInputBox } from "./styles";

interface InputBoxProps {
    errors: string;
    border: string;
    register: string;
    name: string;
    labelName: string;
    rest: ReactNode;
    
}

const InputBox = ({errors, border, register, name, labelName, ...rest}: InputBoxProps) => {
    return (
        <ThemeInputBox>
            <ThemeLabel htmlFor={name}>{labelName}</ThemeLabel>
            <ThemeInput {...rest} border={errors ? '1px solid var(--Red-4)' : 'none'} {...register(name)}/>
            <SmallError>{errors}</SmallError>
        </ThemeInputBox>
    )
};
export default InputBox;