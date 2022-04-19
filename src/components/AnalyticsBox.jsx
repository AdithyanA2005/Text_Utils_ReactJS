import React from "react";
import styledComponents from "styled-components";

export default function AnalyticsBox({ title, data }) {
  return (
    <>
      <AnalyticsWrapper>
        <AnalyticsTitle>{title}</AnalyticsTitle>
        <Analytics>{data}</Analytics>
      </AnalyticsWrapper>
    </>
  );
}

const AnalyticsWrapper = styledComponents.div`
  background: #39719b;
  box-shadow: 0 0 10px #39719b;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  height: 10rem;
  flex-grow: 1;
  padding: 1rem;  
`;
const AnalyticsTitle = styledComponents.h2`
  color: white;
  font-size: 1.75rem;
  text-align: center;
`;
const Analytics = styledComponents.h2`
  color: white;
  display: grid;
  flex-grow: 1;
  font-size: 3.5rem;
  place-items: center;
`;
