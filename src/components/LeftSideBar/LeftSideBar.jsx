import styled from "styled-components";
import Flex from "../Flex/Flex";
import logo from "../../assets/images/Logo.png";
import Icon from "../SideBarIcon/SideBarIcon";
import DashBoardIcon from "../../assets/images/icons/dashboard.svg";
import CardsIcon from "../../assets/images/icons/cards.svg";
import ProductIcon from "../../assets/images/icons/product.svg";
import WearTearIcon from "../../assets/images/icons/wear-tear.svg";
import GamesIcon from "../../assets/images/icons/games.svg";
import SettingsIcon from "../../assets/images/icons/settings.svg";
import Logo from "../Logo/Logo";

const StyledSideBar = styled.div`
  width: 84px;
  background: #242731;
  min-height: 100vh;
`;

function LeftSideBar() {
  return (
    <StyledSideBar>
      <Flex
        padding={"14px 18px 0px 18px"}
        direction={"column"}
        gap={"46px"}
        align={"center"}
      >
        <Logo src={logo} width={"40px"} height={"40px"} alt={"logo"} />
        <Flex direction={"column"} gap={"20px"}>
          <Icon
            src={DashBoardIcon}
            width={"24px"}
            height={"24px"}
            alt={"logo"}
          />
          <Icon src={CardsIcon} width={"24px"} height={"24px"} alt={"logo"} />
          <Icon src={ProductIcon} width={"24px"} height={"24px"} alt={"logo"} />
          <Icon
            src={WearTearIcon}
            width={"24px"}
            height={"24px"}
            alt={"logo"}
          />
          <Icon src={GamesIcon} width={"24px"} height={"24px"} alt={"logo"} />
          <Icon
            src={SettingsIcon}
            width={"24px"}
            height={"24px"}
            alt={"logo"}
          />
        </Flex>
      </Flex>
    </StyledSideBar>
  );
}

export default LeftSideBar;
