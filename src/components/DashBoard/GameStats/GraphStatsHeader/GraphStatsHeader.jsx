import Flex from "../../../Flex/Flex";
import { StyledText } from "../../../Header/Header";
import { ReactComponent as ArrowDownIcon } from "../../../../assets/images/icon/arrow-down.svg";
import { useState } from "react";
import { StyledIcon } from "../../../SideBarIcon/SideBarIcon";
import checkIcon from '../../../../assets/images/Drop-down/tabler_check.svg'

function GraphStatsHeader() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleClick = () => {
    setIsMenuActive((prev) => !prev);
  };

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };

  return (
    <Flex
      width={"100%"}
      justify={"space-between"}
      height={"max-content"}
      align={"center"}
      position={"relative"}
    >
      <StyledText line={"24px"} size={"18px"} font={"Metropolis-M"}>
        Game Stats
      </StyledText>
      <Flex gap={"16px"} width={"151px"} align={"center"}>
        <StyledText
          color={"rgba(255, 255, 255, 0.6)"}
          line={"16px"}
          size={"12px"}
          font="Metropolis-R"
        >
          Location
        </StyledText>
        <Flex
          onClick={handleClick}
          gap={"2px"}
          width={"83px"}
          cursor={"pointer"}
          align={"center"}
        >
          <StyledText
            color={isMenuActive ? "#81C2FF" : "white"}
            line={"20px"}
            size={"13px"}
          >
            Naperville
          </StyledText>

          <ArrowDownIcon
            style={{
              stroke: isMenuActive ? "#81C2FF" : "white",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transform: isMenuActive ? "rotate(180deg)" : "none",
              transition: ".3s ease-in-out",
            }}
          />
        </Flex>
      </Flex>
      {isMenuActive && (
        <Flex style={{
          top: "24px",
          left: "127px",
          boxShadow: "0px 8px 48px 0px rgba(0, 0, 0, 0.60), 0px 2px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 12px 0px rgba(0, 0, 0, 0.40)",
        }} height={"auto"} width={"237px"} padding={"8px 8px 8px 8px"} direction="column" position={"absolute"}>
          <MenuItem
            text="Charlottetown"
            selected={selectedMenuItem === 1}
            onClick={() => handleMenuItemClick(1)}
          />
          <MenuItem
            text="Halifax"
            selected={selectedMenuItem === 2}
            onClick={() => handleMenuItemClick(2)}
          />
          <MenuItem
            text="Naperville"
            selected={selectedMenuItem === 3}
            onClick={() => handleMenuItemClick(3)}
          />
          <MenuItem
            text="Vernon"
            selected={selectedMenuItem === 4}
            onClick={() => handleMenuItemClick(4)}
          />
          <MenuItem
            text="Montreal"
            selected={selectedMenuItem === 5}
            onClick={() => handleMenuItemClick(5)}
          />
        </Flex>
      )}
    </Flex>
  );
}

function MenuItem({ text, selected, onClick }) {
  return (
    <Flex height={"auto"}
      onClick={onClick}
      background={selected ? "#31343D" : "inherit"}
      radius={"4px"}
      justify={"space-between"}
      align={"center"}
      style={{
        cursor: "pointer",
        padding: "12px 16px",
      }}
    >
      <StyledText size={"13px"} color={selected ? "white" : "#A2A4A8"}>{text}</StyledText>
      {selected && <StyledIcon width={"20px"} height={"20px"} src={checkIcon} />}
    </Flex>
  );
}

export default GraphStatsHeader;
