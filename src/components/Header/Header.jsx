import styled from "styled-components";
import Flex from "../Flex/Flex";
import { StyledIcon } from "../SideBarIcon/SideBarIcon";
import userIcon from "../../assets/images/icon/user_light.svg";

export const StyledText = styled.span`
  @font-face {
    font-family: "Metropolis-M";
    src: url("/fonts/Metropolis-Medium.otf");
  }
  @font-face {
    font-family: "Metropolis-R";
    src: url("/fonts/Metropolis-Regular.otf");
  }

  color: ${(props) => props.color || "white"};
  font-size: ${(props) => props.size || "16px"};
  font-style: normal;
  font-weight: 500;
  line-height: ${(props) => props.line || "28px"};
  font-family: ${(props) => props.font || "Metropolis-R"};
  width: ${(props) => props.width || "unset"};
  text-align: ${(props) => props.textalign || "unset"};
`;

function Header() {
  return (
    <Flex
      width={"100%"}
      justify={"space-between"}
      padding={"0px 0px 16px 0px"}
      align={"center"}
    >
      <StyledText size={"20px"} font={"Metropolis-M"}>
        DASHBOARD
      </StyledText>
      <Flex justify={"flex-end"} gap={"12px"} align={"center"}>
        <Flex justify={"center"} align={"center"} background={"rgba(36, 39, 49, 1)"} radius={"40px"} width={"36px"} height={"36px"} >
          <StyledIcon src={userIcon} alt={"userIcon"} />
        </Flex>
        <StyledText size={"14px"}>Username</StyledText>
      </Flex>
    </Flex>
  );
}

export default Header;
