import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Campaign() {
  return (
    <>
      <Navbar />
      <Container
        maxWidth={["95%","85%","70%","55%"]}
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        mb={10}
      >
        <Stack>
          <Box m={"auto"} maxWidth={"90%"}>
            <Image
              m={"auto"}
              height={"220px"}
              width={["95%","75%","60%","45%"]}
              src="https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_275,g_center,q_auto:best,dpr_1.3,f_auto/homepage/crowdfunding-crowdsurfing_base.svg"
            />
            <Heading pb={"10px"} fontSize="35px" fontWeight="500">
              Let’s get ready to start your campaign!
            </Heading>
            <Text>
              We want to create the best onboarding for you – please fill out
              the information below.
              <span style={{ fontWeight: "650" }}>
                Your answers will be locked for this campaign and can’t be
                changed later.
              </span>
            </Text>
          </Box>
          <Box textAlign={"left"}>
            <Text fontSize="19px" fontWeight={"550"}>
              Who are you raising money for?
            </Text>
            <Text fontSize="17px" fontWeight={"500"} color={"#6a6a6a"}>
              Please choose the type of account that will be receiving your
              funds.
            </Text>
            <Stack mt={2} mb={6} spacing={5} direction="row">
              <Checkbox>Individual</Checkbox>
              <Checkbox>Business or Nonprofit</Checkbox>
            </Stack>
          </Box>
          <Box textAlign={"left"}>
            <Text fontSize="19px" fontWeight={"550"}>
              Where are you located?
            </Text>
            <Text fontSize="17px" fontWeight={"500"} color={"#6a6a6a"}>
              If you are raising funds as an individual, what is your country of
              legal residence? If you are raising funds for a business, where is
              the business headquartered? Learn more about country limitations.
            </Text>
            <Accordion mb={6} defaultIndex={[1]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton border={"1px"}>
                    <Box flex="1" textAlign="left">
                      Select Country
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  mt={2}
                  height={"max-content"}
                  border={"1px"}
                  textAlign={"left"}
                >
                  <Text pb={3}>India</Text>
                  <Text pb={3}>United States</Text>
                  <Text pb={3}>Australia</Text>
                  <Text pb={3}>Austria</Text>
                  <Text pb={3}>Belgium</Text>
                  <Text pb={3}>Canada</Text>
                  <Text pb={3}>Cyprus</Text>
                  <Text pb={3}>Denmark</Text>
                  <Text pb={3}>Estonia</Text>
                  <Text>Finland</Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box textAlign={"left"}>
            <Text fontSize="19px" fontWeight={"550"}>
              Where is your bank?
            </Text>
            <Text fontSize="17px" fontWeight={"500"} color={"#6a6a6a"}>
              Your bank account location determines the currency in which you
              can raise funds.
            </Text>
            <Accordion mb={10} defaultIndex={[1]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton border={"1px"}>
                    <Box flex="1" textAlign="left">
                      Select Your Bank
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  mt={2}
                  height={"max-content"}
                  border={"1px"}
                  textAlign={"left"}
                >
                  <Text pb={3}>India</Text>
                  <Text pb={3}>United States</Text>
                  <Text>Other Countries</Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box >
            <button
              style={{
                backgroundColor: "#e51075",
                fontSize: "16px",
                color: "white",
                padding: "10px 10px",
                borderRadius: "2px",
                border: "1px solid #e51075",
                fontWeight: "600",
              }}
            >
              START MY CAMPAINGN
            </button>
          </Box>
        </Stack>
      </Container>
      <Footer/>
    </>
  );
}
export default Campaign;
