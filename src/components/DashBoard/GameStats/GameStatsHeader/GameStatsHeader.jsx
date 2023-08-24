import Flex from "../../../Flex/Flex";
import { StyledText } from "../../../Header/Header";
import { StyledIcon } from "../../../SideBarIcon/SideBarIcon";
import arrowDownIcon from "../../../../assets/images/icon/arrow-down.svg";

function GameStatsHeader() {
  return (
    <Flex
      width={"100%"}
      justify={"space-between"}
      height={"max-content"}
      align={"center"}
    >
      <StyledText line={"24px"} size={"18px"} font={"Metropolis-M"}>
        Game Stats
      </StyledText>
      <Flex gap={"16px"} width={"135px"} align={"center"}>
        <StyledText
          color={"rgba(255, 255, 255, 0.6)"}
          line={"16px"}
          size={"12px"}
          font="Metropolis-R"
        >
          Data type
        </StyledText>
        <Flex gap={"2px"} width={"59px"} cursor={"pointer"} align={"center"}>
          <StyledText line={"20px"} size={"13px"}>
            Graph
          </StyledText>
          <StyledIcon width={"20px"} height={"20px"} src={arrowDownIcon} />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default GameStatsHeader;
