import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Flex from "../../../Flex/Flex";
import { StyledText } from "../../../Header/Header";
import SelectArea from "./SelectArea/SelectArea";

function UsersGameStats() {
  const users = useSelector((state) => state.usersList.usersList);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (users) {
      setIsLoading(false);
    }
  }, [users]);

  return (
    <Flex gap={"16px"} height={"max-content"} width={"27,64423%"}>
      <SelectArea />
      <Flex direction={"column"} width={"96px"} gap={"16px"}>
        <Flex height={"unset"} direction={"column"}>
          <StyledText size={"13px"} line={"20px"}>
            Rating 94%
          </StyledText>
          <StyledText size={"11px"} line={"12px"} color={"#FFFFFF99"}>
            116 sales
          </StyledText>
        </Flex>
        <Flex height={"unset"} direction={"column"}>
          <StyledText size={"13px"} line={"20px"}>
            Rating 94%
          </StyledText>
          <StyledText size={"11px"} line={"12px"} color={"#FFFFFF99"}>
            116 sales
          </StyledText>
        </Flex>
        <Flex height={"unset"} direction={"column"}>
          <StyledText size={"13px"} line={"20px"}>
            Rating 94%
          </StyledText>
          <StyledText size={"11px"} line={"12px"} color={"#FFFFFF99"}>
            116 sales
          </StyledText>
        </Flex>
        <Flex height={"unset"} direction={"column"}>
          <StyledText size={"13px"} line={"20px"}>
            Rating 94%
          </StyledText>
          <StyledText size={"11px"} line={"12px"} color={"#FFFFFF99"}>
            116 sales
          </StyledText>
        </Flex>
        <Flex height={"unset"} direction={"column"}>
          <StyledText size={"13px"} line={"20px"}>
            Rating 94%
          </StyledText>
          <StyledText size={"11px"} line={"12px"} color={"#FFFFFF99"}>
            116 sales
          </StyledText>
        </Flex>
      </Flex>
      <Flex
        width={"96px"}
        margin={"0px 0px 0px 8px"}
        gap={"16px"}
        direction={"column"}
      >
        {isLoading ? (
          <p>Loading...</p>
        ) : Array.isArray(users) ? (
          users.map((user) => (
            <Flex key={uuidv4()} height={"unset"} direction={"column"}>
              <StyledText size={"13px"} line={"20px"}>
                {user.name}
              </StyledText>
              <StyledText size={"11px"} line={"12px"} color={"#FFFFFF99"}>
                {user.date}
              </StyledText>
            </Flex>
          ))
        ) : (
          <StyledText size={"14px"}>Loading...</StyledText>
        )}
      </Flex>
    </Flex>
  );
}

export default UsersGameStats;
