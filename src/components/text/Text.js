import { StyledText } from "./Text.styled";

function Text({ children, type = "default", underline, strong, italic, size }) {
    return (
        <StyledText
            type={type}
            underline={underline}
            strong={strong}
            italic={italic}
            size={size}
        >
            {children}
        </StyledText>
    );
}

export default Text;
