import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import home from './../images/home.png'
import logo from './../images/logo.png'
import opi from './../images/OIP.jpeg'
import { BsStar, BsSun } from "react-icons/bs";
import { FaAngleLeft, FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import {TiWeatherPartlySunny} from "react-icons/ti";
import cart from './../images/cart.gif'
import video from "./../images/video.mp4"
import { motion, useScroll } from "framer-motion"
const  Home = () => {
    
        const { scrollYProgress } = useScroll();
    return ( 
        <Box width={"100%"}
        
        background={"#0F214Aff"}
       
        >
            <motion.div style={{scaleX: scrollYProgress}} className="progress-bar"/>
            
            <Flex width={"100%"}
            justifyContent={"center"}
            // position={"sticky"}
            top={0}
            >
         <Navbar/>
         </Flex>   
    <Box width={"100%"} height={"85vh"}>
        <Flex width={"100%"} justifyContent={"center"} my={0} fontSize={120} color={"white"} gap={10} alignItems={"center"} zIndex={1}  className="header" fontFamily={"Protest Guerrilla, sans-serif"}>
            <Text fontFamily={"Protest Guerrilla, sans-serif"} >Solar</Text>
            <Img  width={90} height={90} src={logo}/>
            <Text fontFamily={"Protest Guerrilla, sans-serif"}  >Power</Text>

        </Flex>
       <Flex
       justifyContent={"space-between"}
       px={20}
       alignItems={"center"}
       width={"100%"}
        
       >
<Flex width={300} background={"transparent"}
px={10}
 borderTop={"1px solid white"}
  
 borderLeft={"1px solid white"}
 borderRadius={"8px 0px 0 0"}
 color={"white"}
gap={10}
py={10}
paddingBottom={0}
className="Text1"
>
    <Flex>
    <Text color={"yellow"} width={20}>NX-465</Text>
    
    </Flex>
    <Box >
        <Text fontSize={15} width={190}>Discover models with new roof options</Text>
        <Box
        background={"transparent"}
        borderBottom={"1px solid white"}
        borderRadius={0}
        color={"white"}
        fontSize={15}
        marginTop={10}
      
        className="btn"
        >TAKE ORDER</Box>
    </Box>
</Flex>

<Img
position={"absolute"}
width={600}
left={400}
bottom={-39}
className="main"
src={home} />
 
<Text 
width={"180px"}
color={"white"}
className="Text2"

>Have electricity ready for emergencies with<BsSun color="yellow"/><span color="yellow">sun</span></Text> 
       </Flex>
      
    </Box>
    <Flex width={"100%"}
       px={10}
       background={"inherit"}
       gap={2}
       position={"absolute"}
       bottom={-260}
    
       >
        <Flex className="div1"
        flexDirection={"column"}
        gap={5}
        > 
            <Text fontSize={30} color={"white"}>Explore Reviews</Text> <br />
      <Flex color={"yellow"} fontSize={25}  >
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStarHalfAlt />
      </Flex>
      <Flex gap={2} color={"white"} alignItems={"center"}>4.8<BsStar/> <br /></Flex>
      <Flex alignItems={"center"} borderBottom={"1px solid yellow"} color={"white"} className="see"><Text className="tx">See now</Text><FaAngleLeft className="icon" /></Flex> 
            </Flex>
        <Box className="div2"  borderRadius={"10px 10px 0 0"}
        background={"white"}
       height={200}
        
        >
            <Text textAlign={"center"} fontSize={25}>Solar Edge <br /> Battery</Text>
             <video src={video} width={"200%"} autoPlay loop muted height={300}></video>
             <Box background={" rgba(255, 255, 0, 0.514)"} color={"white"} className="cartbtn"><Img src={cart} width={50} className="cartimg"/><Text className="carttxt">Buy now </Text></Box>
             </Box>
        
        <Box className="div3"  color={"white"} fontSize={30}>
            <Box position={"absolute"}
            zIndex={2}
            background={"#000000ce"}
            width={"459px"}
            height={"300px"}
            py={10}
            paddingLeft={20}
 
            >
            <TiWeatherPartlySunny color="gray" fontSize={70} />
            
             Weather <br /> resistant <br /><Box color={"gray"} fontSize={20}>IPX8</Box></Box>
             </Box>
    </Flex>
        </Box>
     );
}

export default Home;