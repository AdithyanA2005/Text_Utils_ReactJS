import React, { useState } from "react";
import styledComponents from "styled-components";
import AnalyticsBox from "./components/AnalyticsBox";
import Button from "./components/Button";
import NavBar from "./components/NavBar";

export default function App() {
  const [text, setText] = useState("");
  const handleChange = (event) => setText(event.target.value);
  const toClear = () => setText("");
  const toUpper = () => setText(text.toUpperCase());
  const toLower = () => setText(text.toLowerCase());
  const toStrip = () => setText(text.replace(/\s+/g, " ").trim());
  const toCapitalize = () => {
    setText(
      text
        .trim()
        .split(".")
        .map((sentance) =>
          sentance.length !== 0
            ? sentance[0].toUpperCase() + sentance.slice(1)
            : ""
        )
        .join(".")
    );
  };
  const toTitle = () => {
    setText(
      text
        .trim()
        .split(" ")
        .map((word) =>
          word.length !== 0
            ? word[0].toUpperCase() + word.slice(1).toLowerCase()
            : ""
        )
        .join(" ")
    );
  };

  return (
    <>
      <NavBar />
      <AppContainer>
        <Section>
          <AnalysisWrapper>
            <AnalyticsBox
              title="Words"
              data={
                text
                  .replace(/\s+/g, " ")
                  .trim()
                  .split(" ")
                  .filter((elem) => elem.length !== 0).length
              }
            />
            <AnalyticsBox title="Letters" data={text.length} />
          </AnalysisWrapper>
        </Section>

        <Section>
          <TextArea
            placeholder="Enter Text Here ..."
            onChange={handleChange}
            value={text}
          />
        </Section>

        <Section>
          <ButtonContainer>
            <Button func={toUpper} title="To Uppercase" />
            <Button func={toLower} title="To Lowercase" />
            <Button func={toTitle} title="To Titlecase" />
            <Button func={toStrip} title="Remove Extra Spaces" />
            <Button func={toCapitalize} title="Capitalize" />
            <Button func={toClear} title="Clear" />
          </ButtonContainer>
        </Section>
      </AppContainer>
    </>
  );
}

const AppContainer = styledComponents.main`
  max-width: 60%;
  margin: auto;

  @media screen and (max-width: 1200px) {
    max-width: 80%;
  }

  @media screen and (max-width: 850px) {
    max-width: 90%;
  }
`;
const TextArea = styledComponents.textarea`
  border-radius: 10px;
  border-color: #719ece;
  border-style: solid;
  border-width: 3px;
  font-size: 1.25rem;
  font-weight: 500;
  width: 100%;
  height: 15rem;
  padding: 1rem;
  color: #39719b;

  &:focus {
    outline: none !important;
    border-color: #719ece;
    box-shadow: 0 0 10px #719ece;
  }
`;
const ButtonContainer = styledComponents.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
const Section = styledComponents.section`
  margin-top: 1.4rem;
`;
const AnalysisWrapper = styledComponents.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.1rem;
`;
