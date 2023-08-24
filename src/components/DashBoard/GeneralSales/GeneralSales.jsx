import { useSelector } from "react-redux";
import Flex from "../../Flex/Flex";
import { StyledText } from "../../Header/Header";
import GeneralHeader from "./GeneralHeader/GeneralHeader";
import GenerelSalesMain from "./GenerelSalesMain/GenerelSalesMain";
import { v4 as uuidv4 } from "uuid";

function GeneralSales() {
  const sales = useSelector((state) => state.salesList.salesList);

  const renderedSales = sales.map((sale) => {
    return (
      <GenerelSalesMain
        key={uuidv4()}
        name={sale.model.name}
        cardName={sale.card_name}
        cardNumber={sale.card_number}
        type={sale.type}
        limited={sale.limited}
        operations={sale.operations}
        date={sale.date}
        rating={sale.rating}
        status={sale.status}
        price={sale.price}
      />
    );
  });

  return (
    <Flex
      direction={"column"}
      radius={"4px"}
      margin={"16px 0px 0px 0px"}
      padding={"24px 32px 20px 32px"}
      width={"100%"}
      background={"#242731"}
    >
      <GeneralHeader />
      <Flex width={"100%"} gap={"60px"} margin={"32px 0px 0px 0px"}>
        <StyledText
          width={"13.0023641%"}
          font={"Metropolis-M"}
          size={"11px"}
          line={"12px"}
          color={"rgba(255, 255, 255, 0.60)"}
        >
          Card model
        </StyledText>
        <StyledText
          width={"13.0023641%"}
          font={"Metropolis-M"}
          size={"11px"}
          line={"12px"}
          color={"rgba(255, 255, 255, 0.60)"}
        >
          Card name
        </StyledText>
        <StyledText
          width={"4.72813239%"}
          font={"Metropolis-M"}
          size={"11px"}
          line={"12px"}
          color={"rgba(255, 255, 255, 0.60)"}
        >
          Type
        </StyledText>
        <StyledText
          textalign={"center"}
          width={"4.72813239%"}
          font={"Metropolis-M"}
          size={"11px"}
          line={"12px"}
          color={"rgba(255, 255, 255, 0.60)"}
        >
          Limited
        </StyledText>
        <StyledText
          width={"4.72813239%"}
          font={"Metropolis-M"}
          size={"11px"}
          line={"12px"}
          color={"rgba(255, 255, 255, 0.60)"}
        >
          № Operations
        </StyledText>
        <StyledText
          width={"9.45626478%"}
          font={"Metropolis-M"}
          size={"11px"}
          line={"12px"}
          color={"rgba(255, 255, 255, 0.60)"}
        >
          Date of lost operations
        </StyledText>
        <StyledText
          width={"4.72813239%"}
          font={"Metropolis-M"}
          size={"11px"}
          line={"12px"}
          color={"rgba(255, 255, 255, 0.60)"}
        >
          Rating
        </StyledText>
        <StyledText
          width={"4.72813239%"}
          font={"Metropolis-M"}
          size={"11px"}
          line={"12px"}
          color={"rgba(255, 255, 255, 0.60)"}
        >
          Status
        </StyledText>
        <StyledText
          width={"4.72813239%"}
          font={"Metropolis-M"}
          size={"11px"}
          line={"12px"}
          color={"rgba(255, 255, 255, 0.60)"}
        >
          Price
        </StyledText>
        <StyledText
          textalign={"center"}
          width={"4.25531915%"}
          font={"Metropolis-M"}
          size={"11px"}
          line={"12px"}
          color={"rgba(255, 255, 255, 0.60)"}
        >
          Options
        </StyledText>
      </Flex>
      <Flex direction={"column"} margin={"8px 0px 0px 0px"}>
        {renderedSales}
        {renderedSales}
        {renderedSales}
        {renderedSales}
        {renderedSales}
      </Flex>
    </Flex>
  );
}

export default GeneralSales;
