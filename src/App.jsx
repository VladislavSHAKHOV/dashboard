import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import DashBoard from "./components/DashBoard/DashBoard";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";
import { getChartData } from "./store/Slices/chartDataSlice";
import { getSales } from "./store/Slices/GenegalSalesSlice";
import { getStatistic } from "./store/Slices/statisticSlice";
import { getUsers } from "./store/Slices/usersSlice";

const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  background: #111216;
  color: white;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatistic());
    dispatch(getChartData());
    dispatch(getUsers())
    dispatch(getSales())
  }, [dispatch]);

  return (
    <AppWrapper>
      <LeftSideBar />
      <DashBoard />
    </AppWrapper>
  );
}

export default App;
