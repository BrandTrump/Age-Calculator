import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: white;
  padding: 3em 4em;
  border-radius: 1.5em;
  border-bottom-right-radius: 7em;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    margin-bottom: 2em;

    button {
      background-color: rgb(134 76 255);
      border: none;
      padding: 1em 0;
      color: white;
      cursor: pointer;
      border-radius: 50%;
      font-weight: bold;
      width: 4em;

      &:hover {
        background-color: rgb(89 41 171);
      }

      svg {
        fill: white;
        font-size: 1.5em;
      }
    }
  }
`;

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  label {
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight: 600;
    color: rgb(130 130 130);
  }

  input {
    max-width: 4em;
    padding: 0.5em;
    border-radius: 0.3em;
    border-width: 0.05em;
    border-color: rgb(130 130 130);
  }
`;

export const StyledDate = styled.div`
  h1 {
    margin: 0;
    padding: 0;
    font-style: italic;
    font-weight: 900;
    font-size: 2.8em;

    span {
      color: rgb(134 76 255);
    }
  }
`;

export const InputFields = styled.div`
  display: flex;
  gap: 1em;
`;
