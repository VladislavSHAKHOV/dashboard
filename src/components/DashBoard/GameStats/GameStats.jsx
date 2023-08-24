import Flex from "../../Flex/Flex";
import Grid from "../../Grid/Grid";
import GameStatsHeader from "./GameStatsHeader/GameStatsHeader";
import Graph from "./Graph/Graph";
import GraphStatsHeader from "./GraphStatsHeader/GraphStatsHeader";
import StatsDiagram from "./StatsDiagram/StatsDiagram";
import UsersGameStats from "./UsersGameStats/UsersGameStats";

function GameStats() {
  return (
    <Grid
      columns={"3.06543fr 1fr"}
      rows={"repeat(1, 344px)"}
      gap={"16px"}
      margin={"16px 0px 0px 0px"}
    >
      <Flex
        direction={"column"}
        padding={"24px 32px 32px 32px"}
        background={"#242731"}
        radius={"4px"}
      >
        <GameStatsHeader />
        <Flex margin={"16px 0px 0px 0px"} overflow={"hidden"} gap={"21px"}>
          <Graph />
          <UsersGameStats />
        </Flex>
      </Flex>
      <Flex
        direction={"column"}
        padding={"24px 32px 32px 32px"}
        background={"#242731"}
        radius={"4px"}
      >
        <GraphStatsHeader />
        <StatsDiagram />
      </Flex>
    </Grid>
  );
}

export default GameStats;
