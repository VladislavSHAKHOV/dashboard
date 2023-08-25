import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  position: ${(props) => props.position || "static"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "stretch"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  gap: ${(props) => props.gap || "0"};
  background: ${(props) => props.background || "inherit"};
  border-radius: ${(props) => props.radius || "0"};
  cursor: ${(props) => props.cursor || "unset"};
  overflow: ${(props) => props.overflow || "unset"};
`;

function Flex(props) {
  return <StyledFlex {...props} />;
}

export default Flex;
