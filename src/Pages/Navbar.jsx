import { Link } from "react-router-dom";
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
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import {
  Search2Icon,
  CloseIcon,
  HamburgerIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import "./Navbar.css";
import { useRef, useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";

function Navbar() {
  const [ok, setok] = useState(true);
  const handlesearch = () => {
    setok(!ok);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <Box className="mobilenav">
        <Stack display={"flex"} alignItems="center" justifyContent="center" flexDirection="row">
          <Box >
            <svg width="230px" height="50px">
              <Link to="/">
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
              </Link>
            </svg>
          </Box>
          <Button
            background={"transparent"}
            color="black"
            ref={btnRef}
            colorScheme="teal"
            onClick={onOpen}
            width="max-content"
            height="max-content"
          >
            <HamburgerIcon />
          </Button>
        </Stack>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent
            color="#2a2a2a"
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
            textAlign="center"
          >
            <DrawerCloseButton />
            <DrawerHeader>MENU</DrawerHeader>

            <DrawerBody>
              <Text>Home</Text>
              <hr style={{ marginBottom: "10px" }} />
              <Text>Explore</Text>
              <hr style={{ marginBottom: "10px" }} />
              <Text>What We Do</Text>
              <hr style={{ marginBottom: "10px" }} />
              <Text>For Entrepreneurs</Text>
              <hr style={{ marginBottom: "10px" }} />
              <Text>Start a Campaign</Text>
              <hr style={{ marginBottom: "10px" }} />
              <Login />
              <hr style={{ marginBottom: "10px" }} />
              <SignUp />
              <hr style={{ marginBottom: "10px" }} />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>

      <div className="desnav">
        {ok ? (
          <Box className="containernav">
            <Container className="maincontainer">
              <Box className="logo">
                <svg width="230px" height="50px">
                  <Link to="/">
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
                  </Link>
                </svg>
              </Box>
              <Box>
                <Stack spacing="24px" width={600} direction={"row"}>
                  <p>Explore</p>
                  <Link to="/top-10">
                    <p>Our Top 10 Finds</p>
                  </Link>
                  <Link to="/favorite">
                    <p>Team Favorite</p>
                  </Link>
                  <button onClick={handlesearch}>
                    <Search2Icon mb="1"></Search2Icon>
                  </button>
                </Stack>
              </Box>
            </Container>
            <Container className="maincontainer1">
              <Box>
                <Stack spacing={"24px"} direction={"row"}>
                  <Link to="/campaign">
                    <p>Start a Campaign</p>
                  </Link>
                  <Link to="/whatwedo">
                    <p>What We Do</p>
                  </Link>
                  <p style={{ color: "#ddd" }}>|</p>
                  <Login />
                  <SignUp />
                </Stack>
              </Box>
            </Container>
          </Box>
        ) : (
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
      </div>
    </>
  );
}
export default Navbar;
