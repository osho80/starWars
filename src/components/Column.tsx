import React from "react";
import styled from "styled-components";

const Column = ({ data }: any) => {
  console.log("My chart data: ", data);
  const ChartColumn = styled.div`
    background-color: blue;
  `;

  const Oshri = styled.div``;

  const Population = styled.p``;
  const ColumnFill = styled.div`
    height: 200px;
    background-color: ${(props) => props.color};
  `;
  const Name = styled.p``;

  return (
    <ChartColumn>
      <Population>{data.population}</Population>
      {/* <ColumnFill population={parseInt(data.population, 10)} /> */}
      <ColumnFill
        color={parseInt(data.population, 10) > 300000 ? "blue" : "red"}
      />
      <Name>{data.name}</Name>
    </ChartColumn>
  );
};

export default Column;
