import Flex from "../../../Flex/Flex";
import diagram from "../../../../assets/images/diagram.svg";
import { StyledIcon } from "../../../SideBarIcon/SideBarIcon";
import { StyledText } from "../../../Header/Header";
import elipseBlue from "../../../../assets/images/Ellipse-blue.svg";
import elipsePink from "../../../../assets/images/Ellipse-pink.svg";
import elipseGreen from "../../../../assets/images/Ellipse-green.svg";

function StatsDiagram() {
  return (
    <Flex margin={"32px 0px 0px 0px"}>
      <Flex width={"0,6373626374%"}>
        <StyledIcon width={"100%"} height={"max-content"} src={diagram} />
      </Flex>
      <Flex
        margin={"12px 0px 0px 38px"}
        gap={"16px"}
        height={"max-content"}
        direction={"column"}
        width={"67px"}
      >
        <Flex gap={"16px"}>
          <StyledIcon src={elipseBlue} width={"8px"} height={"8px"} />
          <StyledText size={"12px"} line={"16px"} color={"#9F9F9F"}>
            Roles
          </StyledText>
        </Flex>
        <Flex gap={"16px"}>
          <StyledIcon src={elipsePink} width={"8px"} height={"8px"} />
          <StyledText size={"12px"} line={"16px"} color={"#9F9F9F"}>
            Users
          </StyledText>
        </Flex>
        <Flex gap={"16px"}>
          <StyledIcon src={elipseGreen} width={"8px"} height={"8px"} />
          <StyledText size={"12px"} line={"16px"} color={"#9F9F9F"}>
            Policies
          </StyledText>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default StatsDiagram;
