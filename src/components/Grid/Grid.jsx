import styled from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns || "0"};
  grid-template-rows: ${(props) => props.rows || "0"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  align-items: ${(props) => props.align || "stretch"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  gap: ${(props) => props.gap || "0"};
  cursor: ${(props) => props.cursor || "unset"};
`;

function Grid(props) {
  return <StyledGrid {...props} />;
}

export default Grid;
