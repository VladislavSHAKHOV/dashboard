import Flex from "../Flex/Flex";
import Header from "../Header/Header";
import GameStats from "./GameStats/GameStats";
import GeneralSales from "./GeneralSales/GeneralSales";
import Statistic from "./Statistic/Statistic";

function DashBoard() {
  return (
    <Flex width={"100%"} direction={"column"} padding={"16px 48px 28px 32px"}>
      <Header />
      <Statistic />
      <GameStats />
      <GeneralSales />
    </Flex>
  );
}

export default DashBoard;
