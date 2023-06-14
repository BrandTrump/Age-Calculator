import {
  StyledCard,
  StyledDate,
  StyledInput,
} from "./styles/CalculatorCard.styled";

function Calculator() {
  return (
    <StyledCard>
      <form>
        <StyledInput>
          <label>Day</label>
          <input type="number" />
        </StyledInput>
        <StyledInput>
          <label>Month</label>
          <input type="number" />
        </StyledInput>
        <StyledInput>
          <label>Year</label>
          <input type="number" />
        </StyledInput>
        <button type="submit">Calculate</button>
      </form>

      <StyledDate>
        <h1>
          <span>--</span> years
        </h1>
        <h1>
          <span>--</span> months
        </h1>
        <h1>
          <span>--</span> days
        </h1>
      </StyledDate>
    </StyledCard>
  );
}

export default Calculator;
