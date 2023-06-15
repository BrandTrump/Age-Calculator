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
      padding: 1.4em 0;
      color: white;
      cursor: pointer;
      border-radius: 50%;
      font-weight: bold;
      width: 5em;

      &:hover {
        background-color: rgb(89 41 171);
      }

      svg {
        fill: white;
        font-size: 1.8em;
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
    padding: 0.8em;
    border-radius: 0.3em;
    border: 0.1em solid lightgray;
    font-weight: 800;
  }

  input[type="number"] {
    /* Remove default arrows */
    -moz-appearance: textfield; /* Firefox */
    appearance: textfield; /* Other modern browsers */
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    /* Remove default arrows in WebKit browsers */
    -webkit-appearance: none;
    margin: 0; /* Optional */
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
