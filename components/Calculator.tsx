import { ChangeEvent, FormEvent, useState } from "react";
import {
  InputFields,
  StyledCard,
  StyledDate,
  StyledInput,
} from "./styles/CalculatorCard.styled";

function Calculator() {
  const [inputs, setInputs] = useState({
    day: 0,
    month: 0,
    year: 0,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, field: any) => {
    setInputs((prevState) => ({
      ...prevState,
      [field]: parseInt(e.target.value),
    }));
  };

  const [day, setDay] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);

  const handleAgeCalculation = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { day, month, year } = inputs;

    const currentDate = new Date();
    let ageYears = currentDate.getFullYear() - year;
    let ageMonths = currentDate.getMonth() - month;
    let ageDays = currentDate.getDate() - day;

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
              placeholder="DD"
              onChange={(e) => handleInputChange(e, "day")}
            />
          </StyledInput>
          <StyledInput>
            <label>Month</label>
            <input
              type="number"
              placeholder="MM"
              onChange={(e) => handleInputChange(e, "month")}
            />
          </StyledInput>
          <StyledInput>
            <label>Year</label>
            <input
              type="number"
              placeholder="YYYY"
              onChange={(e) => handleInputChange(e, "year")}
            />
          </StyledInput>
        </InputFields>
        <button disabled={!inputs ? true : false} type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
          >
            <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </button>
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
