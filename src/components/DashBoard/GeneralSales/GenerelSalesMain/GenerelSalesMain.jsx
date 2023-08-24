import Flex from "../../../Flex/Flex";
import cardIcon from '../../../../assets/images/card-icon.png'
import actionIcon from '../../../../assets/images/icons/action-menu.svg'
import { StyledIcon } from "../../../SideBarIcon/SideBarIcon";
import { StyledText } from "../../../Header/Header";

function GenerelSalesMain({name, cardName, cardNumber, type, limited, operations, date, rating, status, price}) {
    let formattedDate = "";
    
    if (date) {
        const dateParts = date.split("-"); 
        if (dateParts.length === 3) {
            const day = parseInt(dateParts[0]);
            const month = parseInt(dateParts[1]) - 1; 
            const year = parseInt(dateParts[2]);
            
            const parsedDate = new Date(year, month, day);
            if (!isNaN(parsedDate.getTime())) {
                const monthNames = [
                    "January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ];
                const monthName = monthNames[parsedDate.getMonth()];
                formattedDate = `${monthName} ${parsedDate.getDate()}, ${parsedDate.getFullYear()}`;
            }
        }
    }
        
    return (
        <Flex padding={"16px 0px"} gap={`${(60 / 1692) * 100}%`}>
            <Flex width={"13.0023641%"} gap={"16px"}>
                <StyledIcon src={cardIcon} width={"28px"} height={"40px"}/>
                <StyledText size={"13px"} line={"20px"} width={"6,6784869976%"}>{name}</StyledText>
            </Flex>
            <Flex width={"13.0023641%"}  direction={"column"} gap={"4px"}>
            <StyledText size={"13px"} line={"20px"} width={"9,4562647754%"}>{cardName}</StyledText>
            <StyledText size={"11px"} color={"rgba(255, 255, 255, 0.60)"} line={"12px"}>card {cardNumber}</StyledText>
            </Flex>
            <Flex align="center" height={"auto"} width={"4.72813239%"} >
            <StyledText size={"13px"} line={"20px"} width={"9,4562647754%"}>{type}</StyledText>
            </Flex>
            <Flex justify={"center"} align="center" height={"auto"} width={"4.72813239%"} >
            <StyledText size={"13px"} line={"20px"}>{limited}</StyledText>
            </Flex>
            <Flex justify={"center"} align="center" height={"auto"} width={"4.72813239%"} >
            <StyledText size={"13px"} line={"20px"}>{operations}</StyledText>
            </Flex>
            <Flex align="center" height={"auto"} width={"9.45626478%"} >
            <StyledText size={"13px"} line={"20px"}>{formattedDate}</StyledText>
            </Flex>
            <Flex align="center" height={"auto"} width={"4.72813239%"} >
            <StyledText size={"13px"} line={"20px"}>{rating}%</StyledText>
            </Flex>
            <Flex align="center" height={"auto"} width={"4.72813239%"} >
            <StyledText size={"13px"} line={"20px"}>{status}</StyledText>
            </Flex>
            <Flex align="center" height={"auto"} width={"4.72813239%"} >
            <StyledText size={"13px"} line={"20px"}>{price}</StyledText>
            </Flex>
            <Flex justify={"center"} align="center" height={"auto"} width={"4.25531915%"} >
            <StyledIcon cursor={"pointer"} src={actionIcon}/>
            </Flex>
        </Flex>
    )
}

export default GenerelSalesMain;