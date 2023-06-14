import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: white;
  padding: 2em;
  border-radius: 1.5em;
  border-bottom-right-radius: 7em;

  form {
    display: flex;
    gap: 1em;
    margin-bottom: 2em;
  }
`;

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;

  label {
    text-transform: uppercase;
    font-size: 0.8em;
  }

  input {
    max-width: 4em;
    padding: 0.5em;
    border-radius: 0.3em;
    border-width: 0.1em;
    border-color: lightgray;
  }
`;

export const StyledDate = styled.div`
  h1 {
    margin: 0;
    padding: 0;

    span {
      color: rgb(134 76 255);
    }
  }
`;
