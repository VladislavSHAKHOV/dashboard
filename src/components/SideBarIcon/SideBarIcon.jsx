import styled from "styled-components";
import Flex from "../Flex/Flex";

export const StyledIcon = styled.img`
  width: ${(props) => props.width || "24px"};
  height: ${(props) => props.height || "24px"};
  margin: ${(props) => props.margin || "0"};
  /* fill: ${(props) => props.fillColor || "black"};
  stroke: ${(props) => props.strokeColor || "none"}; */
  cursor: ${(props) => props.cursor || "default"};
`;

function SideBarIcon({ src, alt, width, height, margin }) {
  return (
    <Flex
      background={"rgba(25, 28, 35, 1)"}
      align={"center"}
      justify={"center"}
      radius={"50%"}
      padding={"12px"}
      cursor={"pointer"}
      height={"48px"}
    >
      <StyledIcon
        cursor={"pointer"}
        src={src}
        alt={alt}
        width={width}
        height={height}
        margin={margin}
      />
    </Flex>
  );
}

export default SideBarIcon;
