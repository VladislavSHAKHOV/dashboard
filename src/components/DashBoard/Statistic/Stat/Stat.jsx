import Flex from "../../../Flex/Flex";
import { StyledText } from "../../../Header/Header";
import { StyledIcon } from "../../../SideBarIcon/SideBarIcon";

function Stat({ background, url, alt, data, name }) {
  return (
    <Flex padding={"20px"} background={"#242731"} radius={"8px"} gap={"22px"}>
      <Flex
        padding={"12px"}
        radius={"8px"}
        width={"48px"}
        height={"48px"}
        background={background}
      >
        <StyledIcon src={url} alt={alt} />
      </Flex>
      <Flex direction={"column"}>
        <StyledText line={"unset"} size={"44px"}>{data}</StyledText>
        <StyledText font={"Metropolis-M"} line={"16px"} color={"#A2A4A8"} size={"13px"}>{name}</StyledText>
      </Flex>
    </Flex>
  );
}

export default Stat;
