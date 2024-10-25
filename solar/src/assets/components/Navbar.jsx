import { Box, Button, Flex, List, Text, UnorderedList } from "@chakra-ui/react";
import logo from './../images/logo.png'
import { BsFillLightningChargeFill } from "react-icons/bs";

const Navbar = () => {
    return ( 
        <Flex  
        justifyContent={"space-between"}
        top={2}
        // position={"sticky"}
         zIndex={2}
        alignItems={"center"}
        px={10}
        py={3}
        className="Slant"
        >
            <Flex gap={5}
            alignItems={"center"}
            transform={"skewx(30deg)"}

            >
                <img src={logo} alt=""  width={50}/>
                <Text color={"white"} fontSize={23}>SunBnk</Text>
            </Flex>
            <Flex 
            color={"white"}
            gap={77}
            transform={"skewx(30deg)"}

            >
                <Text>About</Text>
                <Text>Solar</Text>
                <Text>Efficency</Text>
                <Text>Reviews</Text>

            </Flex>

             <Flex 
             background={"white"}
             color={"black"}
             px={4}
             py={2}
             gap={10}
             borderRadius={"10px 5px 10px 10px"}
             transform={"skewx(30deg)"}
             className="slantbtn"
             alignItems={"center"}
             
             >
                <Text 
                fontSize={13}
                fontWeight={600}
                >GET STARTED</Text>
                <BsFillLightningChargeFill/>
             </Flex>
             
        </Flex>
     );
}
 
export default Navbar;