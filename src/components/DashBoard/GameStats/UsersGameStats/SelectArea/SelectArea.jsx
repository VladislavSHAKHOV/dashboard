import { StyledIcon } from "../../../../SideBarIcon/SideBarIcon";
import Flex from "../../../../Flex/Flex";
import blueIcon from "../../../../../assets/images/Select.svg";
import pinkIcon from "../../../../../assets/images/Select-pink.svg";
import greenIcon from "../../../../../assets/images/Select-green.svg";
import yellowIcon from "../../../../../assets/images/Select-yellow.svg";
import violetIcon from "../../../../../assets/images/Select-violet.svg";


function SelectArea() {
  return (
    <Flex direction={"column"} gap={"24px"} width={"24px"}>
      <StyledIcon src={blueIcon} />
      <StyledIcon src={pinkIcon} />
      <StyledIcon src={greenIcon} />
      <StyledIcon src={yellowIcon} />
      <StyledIcon src={violetIcon} />
    </Flex>
  );
}

export default SelectArea;
