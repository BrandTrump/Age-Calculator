import { FormEvent, useState } from "react";
import {
  InputFields,
  StyledCard,
  StyledDate,
  StyledInput,
} from "./styles/CalculatorCard.styled";

function Calculator() {
  const [dayInput, setDayInput] = useState<number>(0);
  const [monthInput, setMonthInput] = useState<number>(0);
  const [yearInput, setYearInput] = useState<number>(0);
  const [day, setDay] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);

  const handleAgeCalculation = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentDate = new Date();
    let ageYears = currentDate.getFullYear() - yearInput;
    let ageMonths = currentDate.getMonth() - monthInput;
    let ageDays = currentDate.getDate() - dayInput;

    // Adjust the age if the current month is earlier than the birth month
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--;
      ageMonths += 12;
    }

    // Adjust the age if the current day is earlier than the birth day
    if (ageDays < 0) {
      const lastMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        0
      );
      ageDays += lastMonth.getDate();
      ageMonths--;
    }

    setDay(ageDays);
    setMonth(ageMonths);
    setYear(ageYears);
  };
  return (
    <StyledCard>
      <form onSubmit={handleAgeCalculation}>
        <InputFields>
          <StyledInput>
            <label>Day</label>
            <input
              type="number"
              onChange={(e) => setDayInput(parseInt(e.target.value))}
            />
          </StyledInput>
          <StyledInput>
            <label>Month</label>
            <input
              type="number"
              onChange={(e) => setMonthInput(parseInt(e.target.value))}
            />
          </StyledInput>
          <StyledInput>
            <label>Year</label>
            <input
              type="number"
              onChange={(e) => setYearInput(parseInt(e.target.value))}
            />
          </StyledInput>
        </InputFields>
        <button type="submit">Calculate</button>
      </form>

      <StyledDate>
        <h1>{!year ? <span>--</span> : <span>{year}</span>} years</h1>
        <h1>{!month ? <span>--</span> : <span>{month}</span>} months</h1>
        <h1>{!day ? <span>--</span> : <span>{day}</span>} days</h1>
      </StyledDate>
    </StyledCard>
  );
}

export default Calculator;
