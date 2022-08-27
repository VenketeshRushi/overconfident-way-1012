import {
  Box,
  Container,
  Image,
  Stack,
  p,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Search2Icon, CloseIcon } from "@chakra-ui/icons";
import "./Navbar.css";
import { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";

function Navbar() {
  const [ok, setok] = useState(true);
  const handlesearch = () => {
    setok(!ok);
  };
  return (
    <>
      {ok ? (
        <div className="containernav">
          <Container className="maincontainer">
            <Box className="logo">
              <svg width="230px" height="50px">
                <text
                  fontSize="30"
                  fontWeight={900}
                  fontFamily="benton-sans,Helvetica,Sans-serif"
                  x="0"
                  y="35"
                  fill="#e51075"
                >
                  INDIEGOGO
                </text>
              </svg>
            </Box>
            <Box>
              <Stack spacing="24px" width={600} direction={"row"}>
                <p>Explore</p>
                <p>Our Top 10 Finds</p>
                <p>Team Favorite</p>
                <button onClick={handlesearch}>
                  <Search2Icon mb="1"></Search2Icon>
                </button>
              </Stack>
            </Box>
          </Container>
          <Container className="maincontainer1">
            <Box>
              <Stack spacing={"24px"} direction={"row"}>
                <p>Start a Campaign</p>
                <p>What We Do</p>
                <p style={{ color: "#ddd" }}>|</p>
                <Login />
                <SignUp />
              </Stack>
            </Box>
          </Container>
        </div>
      ) : (
        // <Box
        //   display={"flex"}
        //   alignItems={"center"}
        //   pb={1}
        //   pt={1}
        //   margin="auto"
        //   width={"96%"}
        // >
        //   <Search2Icon mb={0.5}></Search2Icon>
        //   <Stack width={"100%"} pl={3} pr={3} direction={"row"} spacing="1">
        //     <Input border={"none"} borderColor={"transparent"} _focus={{borderColor: "transparent"}} size="sm" placeholder="Search"/>
        //     <Button
        //       size="sm"
        //       bg='#e51075'
        //       onClick={() => setok(!ok)}
        //       _hover={{border:"2px solid twitter"}}
        //     >
        //       <CloseIcon></CloseIcon>
        //     </Button>
        //   </Stack>
        // </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          pb={1}
          pt={1}
          margin="auto"
          width={"96%"}
        >
          <InputGroup size="md">
            <Search2Icon mt={2} mr={2}></Search2Icon>
            <Input pr="-20px" type="text" size="sm" placeholder="Search" />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                bg="transparent"
                size="sm"
                onClick={() => setok(!ok)}
                mt={"-2"}
                ml={"8"}
              >
                <CloseIcon></CloseIcon>
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      )}
    </>
  );
}
export default Navbar;
