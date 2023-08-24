import { useSelector } from "react-redux";
import Grid from "../../Grid/Grid";
import Stat from "./Stat/Stat";
import iconUser from '../../../assets/images/icon/user.svg'
import iconSettings from '../../../assets/images/icon/setting.svg'
import iconKeyhole from '../../../assets/images/icon/keyhole.svg'
import iconShare from '../../../assets/images/icon/infografic/share.svg'
import iconGames from '../../../assets/images/icons/games.svg'

function Statistic() {
  const statisticList = useSelector(
    (state) => state.statisticList.statisticList
  );
  const userStat = statisticList.iam_users
  const rolesStat = statisticList.iam_roles
  const policiesStat = statisticList.iam_policies
  const gamesStat = statisticList.games
  const resourcesStat = statisticList.compute_resources

  return (
    <Grid
      columns={"repeat(5, 1fr)"}
      rows={"repeat(1, 104px)"}
      gap={"20px"}
      margin={"24px 0px 0px 0px"}
    >
      <Stat url={iconUser} background={"rgba(66, 204, 88, 0.15)"} name={"IAM Users"} data={userStat}/>
      <Stat url={iconSettings} background={"rgba(73, 152, 238, 0.15)"} name={"IAM Roles"} data={rolesStat}/>
      <Stat url={iconShare} background={"rgba(244, 167, 50, 0.15)"} name={"IAM Policies"} data={policiesStat}/>
      <Stat url={iconKeyhole} background={"rgba(242, 93, 93, 0.15)"} name={"Compute Resources"} data={gamesStat}/>
      <Stat url={iconGames} background={"rgba(155, 83, 248, 0.15)"} name={"Games"} data={resourcesStat}/>
     
    </Grid>
  );
}

export default Statistic;
