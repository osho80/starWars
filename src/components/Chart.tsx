import React from "react";
import styled from "styled-components";
import Column from "./Column";
const Chart = ({ data }: any) => {
  console.log("My chart data: ", data);
  const ChartContainer = styled.div`
    background-color: lightgrey;
    display: flex;
    justify-content: space-around;
    width: 80vw;
    margin: 0 auto;
  `;

  return (
    <div>
      <h2>I am a chart</h2>
      <ChartContainer>
        {data.map((planet: any) => {
          return <Column data={planet} />;
        })}
      </ChartContainer>
    </div>
  );
};

export default Chart;
