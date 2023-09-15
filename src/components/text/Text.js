import { StyledText } from "./Text.styled";

function Text({ children, type = "default", underline, strong, italic }) {
    return (
        <StyledText
            type={type}
            underline={underline}
            strong={strong}
            italic={italic}
        >
            {children}
        </StyledText>
    );
}

export default Text;
