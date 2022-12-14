import {
  Box,
  Checkbox,
  Container,
  Input,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Icon } from "@chakra-ui/react";
import { HiMailOpen } from "react-icons/hi";
import { CgFacebook } from "react-icons/cg";
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaSpotify,
} from "react-icons/fa";
import "./footer.css";
function Footer() {
  return (
    <>
      <div className="container1">
        <Stack textAlign={"left"} direction={"row"} spacing={"100px"}>
          <Box>
            <List>
              <Text>EXPLORE</Text>
              <ListItem fontSize="16px">What We Do</ListItem>
              <ListItem fontSize="16px">Funding</ListItem>
            </List>
          </Box>
          <Box>
            <List>
              <Text>ABOUT</Text>
              <ListItem fontSize="16px">About Us</ListItem>
              <ListItem fontSize="16px">Blog</ListItem>
              <ListItem fontSize="16px">Trust & Safety</ListItem>
              <ListItem fontSize="16px">Help & Support</ListItem>
              <ListItem fontSize="16px">Press</ListItem>
              <ListItem fontSize="16px">Contact</ListItem>
            </List>
          </Box>
          <Box>
            <List>
              <Text>ENTREPRENEURS</Text>
              <ListItem fontSize="16px">How It Works</ListItem>
              <ListItem fontSize="16px">Indiegogo vs.</ListItem>
              <ListItem fontSize="16px">Kickstarter</ListItem>
              <ListItem fontSize="16px">Education Center</ListItem>
              <ListItem fontSize="16px">Experts Directory</ListItem>
              <ListItem fontSize="16px">Fees</ListItem>
              <ListItem fontSize="16px">Enterprise</ListItem>
              <ListItem fontSize="16px">China</ListItem>
            </List>
          </Box>
        </Stack>
        <Stack>
          <Box mb={"-5"}>
            <Icon as={HiMailOpen} w={"70px"} h={"70px"} color="#e51075" />
          </Box>
          <Box>
            <Text fontWeight={"bold"} fontSize="18px">
              Find it first on Indiegogo
            </Text>
            <Text fontSize="16px">
              Discover new and clever products in the Indiegogo newsletter
            </Text>
          </Box>
          <Box>
            <Input
              mt={5}
              borderRadius={0}
              variant="filled"
              borderColor={"#2a2a2a"}
              placeholder="Your email address"
            />
          </Box>
          <Box>
            <Checkbox defaultChecked size="sm">
              <Text fontSize="16px">
                {" "}
                I agree to the Terms of Use and have read and understand the
                Privacy Policy
              </Text>
            </Checkbox>
          </Box>
          <Box>
            {" "}
            <button
              style={{
                backgroundColor: "#e51075",
                fontSize: "12px",
                color: "white",
                padding: "10px 10px",
                borderRadius: "2px",
                border: "1px solid #e51075",
                fontWeight: "bold",
                width: "100%",
              }}
            >
              SIGN UP NOW
            </button>
          </Box>
        </Stack>
      </div>

      <Container className="container2">
        <Stack className="footeritems1">
          <Box mb={5}>
            <List>
              <Text>EXPLORE</Text>
              <ListItem fontSize="16px">What We Do</ListItem>
              <ListItem fontSize="16px">Funding</ListItem>
            </List>
          </Box>
          <Box>
            <List>
              <Text>ABOUT</Text>
              <ListItem fontSize="16px">About Us</ListItem>
              <ListItem fontSize="16px">Blog</ListItem>
              <ListItem fontSize="16px">Trust & Safety</ListItem>
              <ListItem fontSize="16px">Help & Support</ListItem>
              <ListItem fontSize="16px">Press</ListItem>
              <ListItem fontSize="16px">Contact</ListItem>
            </List>
          </Box>
          <Box>
            <List mt={5}>
              <Text>ENTREPRENEURS</Text>
              <ListItem fontSize="16px">How It Works</ListItem>
              <ListItem fontSize="16px">Indiegogo vs.</ListItem>
              <ListItem fontSize="16px">Kickstarter</ListItem>
              <ListItem fontSize="16px">Education Center</ListItem>
              <ListItem fontSize="16px">Experts Directory</ListItem>
              <ListItem fontSize="16px">Fees</ListItem>
              <ListItem fontSize="16px">Enterprise</ListItem>
              <ListItem fontSize="16px">China</ListItem>
            </List>
          </Box>
        </Stack>
        <Stack className="footerlogo1">
          <Box mb={"-5"}>
            <Icon as={HiMailOpen} w={"70px"} h={"70px"} color="#e51075" />
          </Box>
          <Box>
            <Text fontWeight={"bold"} fontSize="18px">
              Find it first on Indiegogo
            </Text>
            <Text fontSize="16px">
              Discover new and clever products in the Indiegogo newsletter
            </Text>
          </Box>
          <Box>
            <Input
              mt={5}
              borderRadius={0}
              variant="filled"
              borderColor={"#2a2a2a"}
              placeholder="Your email address"
            />
          </Box>
          <Box>
            <Checkbox defaultChecked size="sm">
              <Text fontSize="16px">
                {" "}
                I agree to the Terms of Use and have read and understand the
                Privacy Policy
              </Text>
            </Checkbox>
          </Box>
          <Box>
            {" "}
            <button
              style={{
                backgroundColor: "#e51075",
                fontSize: "12px",
                color: "white",
                padding: "10px 10px",
                borderRadius: "2px",
                border: "1px solid #e51075",
                fontWeight: "bold",
                width: "100%",
              }}
            >
              SIGN UP NOW
            </button>
          </Box>
        </Stack>
      </Container>

      <Container
        display={"flex"}
        alignItems="center"
        justifyContent={"flex-start"}
        m={"auto"}
        w={["95%", "88%", "78%"]}
        mt={10}
      >
        <Box mr={7}>
          <button className="btnnn1">??? Indian Rupee (INR)</button>
        </Box>
        <Stack direction={"row"} spacing="20px">
          <Icon as={CgFacebook} w={"20px"} h={"20px"} />
          <Icon as={FaTwitter} w={"20px"} h={"20px"} />
          <Icon as={FaYoutube} w={"20px"} h={"20px"} />
          <Icon as={FaInstagram} w={"20px"} h={"20px"} />
          <Icon as={FaLinkedinIn} w={"20px"} h={"20px"} />
          <Icon as={FaSpotify} w={"20px"} h={"20px"} />
        </Stack>
      </Container>

      <Container maxW={"100%"} mt={5}>
        <hr style={{ border: "1px solid grey" }} />
      </Container>
      <Box maxw={"50%"} m={"auto"} mt={1} mb={5}>
        <Stack direction={"row"} spacing={["5px", "8", "10", "20px"]}>
          <Text fontSize={["6px", "8px", "10px", "12px"]}>Terms of Use</Text>
          <Text fontSize={["6px", "8px", "10px", "12px"]}>Privacy Policy</Text>
          <Text fontSize={["6px", "8px", "10px", "12px"]}>Cookie Policy</Text>
          <Text fontSize={["6px", "8px", "10px", "12px"]}>
            Do Not Sell My Personal Information
          </Text>
          <Text fontSize={["6px", "8px", "10px", "12px"]}>Accessibility</Text>
          <Text fontSize={["6px", "8px", "10px", "12px"]}>
            ?? 2022 Indiegogo, Inc. All Rights Reserved
          </Text>
        </Stack>
      </Box>
    </>
  );
}

export default Footer;
