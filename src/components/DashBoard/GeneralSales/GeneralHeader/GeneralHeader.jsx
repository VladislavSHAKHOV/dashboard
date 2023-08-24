import Flex from "../../../Flex/Flex";
import { StyledText } from "../../../Header/Header";
import { StyledIcon } from "../../../SideBarIcon/SideBarIcon";
import iconSettings from "../../../../assets/images/icon/settings.svg";
import arrowDownIcon from "../../../../assets/images/icon/arrow-down.svg";
import infoIcon from "../../../../assets/images/icon/info.svg";

function GeneralHeader() {
  return (
    <Flex
      width={"100%"}
      justify={"space-between"}
      height={"max-content"}
      align={"center"}
    >
      <Flex
        width={"215px"}
        justify={"space-between"}
        gap={"12px"}
        align={"center"}
      >
        <StyledText line={"24px"} size={"18px"} font={"Metropolis-M"}>
          General Sales / Time
        </StyledText>
        <StyledIcon src={infoIcon} />
      </Flex>
      <Flex gap={"8px"} width={"148px"} align={"center"}>
        <StyledIcon src={iconSettings} />
        <Flex gap={"8px"} width={"116px"} cursor={"pointer"} align={"center"}>
          <StyledText line={"20px"} size={"13px"}>
            Table settings
          </StyledText>
          <StyledIcon width={"20px"} height={"20px"} src={arrowDownIcon} />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default GeneralHeader;
