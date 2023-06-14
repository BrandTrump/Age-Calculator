"use client";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/components/styles/Global.styled";
import Calculator from "@/components/Calculator";

export default function Home() {
  const theme = {
    colors: {
      body: "rgb(240 240 240)",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <main>
        <GlobalStyles />
        <div>
          <Calculator />
        </div>
      </main>
    </ThemeProvider>
  );
}
