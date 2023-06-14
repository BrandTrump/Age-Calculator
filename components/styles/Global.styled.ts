import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.colors.body};
        display: grid;
        place-content: center;
        min-height: 100vh;
        margin: 0;
        padding: 0;
    }
`;
