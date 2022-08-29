import {
  Container,
  Heading,
  Text,
  Box,
  Button,
  SimpleGrid,
  Stack,
  Image,
  Wrap,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { IoIosHome } from "react-icons/io";
import { ImMobile2 } from "react-icons/im";
import { GiSchoolBag } from "react-icons/gi";
import { TbDeviceWatchStats2 } from "react-icons/tb";
import { BsFillSpeakerFill } from "react-icons/bs";

import { GiFilmProjector } from "react-icons/gi";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Navbar from "./Navbar";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import "./home.css";
import Footer from "./Footer";

function Home() {
  
  return (
    <>
      <Container
        display={"flex"}
        flexDirection="column"
        alignItems={"center"}
        justifyContent={"center"}
        maxW={"100%"}
      >
        <Navbar />
        <Slider1 />
        <Container maxW={"100%"} mt={4} mb={5}>
          <Heading size="lg" fontWeight={400}>
            Find it first on Indiegogo.
          </Heading>
          <Text>
            Indiegogo is where early adopters and innovation seekers find
            lively, imaginative tech before it hits the mainstream.
          </Text>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            width={["80%", "40%", "30%", "16.5%"]}
            margin={"auto"}
            mt={2}
          >
            <button className="primary1">SIGN UP NOW</button>
            <button className="secondary1">LEARN MORE</button>
          </Box>
        </Container>

        <Slider2 />

        <SimpleGrid
          margin={"auto"}
          width={["98%", "92%", "89%", "78%"]}
          spacing="40px"
          columns={[1, 1, 2, 2]}
          mb={12}
          mt={10}
        >
          <Box>
            <Box className="boxy">
              <Heading>10 Cool & Clever Finds</Heading>
            </Box>
            <Stack
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              mt={"-2"}
            >
              <Text
                fontSize={["9px", "10px", "10px", "14px"]}
                fontWeight={"bold"}
              >
                Our roundup of standout projects
              </Text>
              <Text
                fontSize={["9px", "10px", "10px", "14px"]}
                fontWeight={"bold"}
                _hover={{ color: "#e51075" }}
              >
                See the Collection
                <ChevronRightIcon mt={"-0.5"}></ChevronRightIcon>
              </Text>
            </Stack>
          </Box>
          <Box>
            <Box className="boxy1">
              <Heading>Team Favorites</Heading>
            </Box>
            <Stack
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              mt={"-2"}
            >
              <Text
                fontSize={["9px", "10px", "10px", "14px"]}
                fontWeight={"bold"}
              >
                Our roundup of standout projects
              </Text>
              <Text
                fontSize={["9px", "10px", "10px", "14px"]}
                fontWeight={"bold"}
                _hover={{ color: "#e51075" }}
              >
                See the Collection
                <ChevronRightIcon mt={"-0.5"}></ChevronRightIcon>
              </Text>
            </Stack>
          </Box>
          <Box>
            <Box className="boxy2">
              <Heading>Spend Under $100</Heading>
            </Box>
            <Stack
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              mt={"-2"}
            >
              <Text
                fontSize={["9px", "10px", "10px", "14px"]}
                fontWeight={"bold"}
              >
                Our roundup of standout projects
              </Text>
              <Text
                fontSize={["9px", "10px", "10px", "14px"]}
                fontWeight={"bold"}
                _hover={{ color: "#e51075" }}
              >
                See the Collection
                <ChevronRightIcon mt={"-0.5"}></ChevronRightIcon>
              </Text>
            </Stack>
          </Box>
          <Box>
            <Box className="boxy3">
              <Heading>Shipping Now</Heading>
            </Box>
            <Stack
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              mt={"-2"}
            >
              <Text
                fontSize={["9px", "10px", "10px", "14px"]}
                fontWeight={"bold"}
              >
                Our roundup of standout projects
              </Text>
              <Text
                fontSize={["9px", "10px", "10px", "14px"]}
                fontWeight={"bold"}
                _hover={{ color: "#e51075" }}
              >
                See the Collection
                <ChevronRightIcon mt={"-0.5"}></ChevronRightIcon>
              </Text>
            </Stack>
          </Box>
        </SimpleGrid>

        <Box width={"79%"} margin="auto">
          <Box className="backp">
            <Heading size={["md", "lg", "lg", "lg"]} fontWeight={0}>
              Back the project, take the ride
            </Heading>
            <Text
              fontWeight={0}
              fontSize={["14px", "15px", "17px", "17px"]}
              mt={3}
              mb={1.5}
              textAlign={"left"}
              width={"60%"}
            >
              Indiegogo is your destination for clever innovations in tech,
              design, and more, often with special perks and pricing for early
              adopters. Back a campaign, share your ideas and feedback with the
              project team - and join the risks and rewards of bringing new
              products to life.
            </Text>
            <Text
              fontSize={["14px", "15px", "17px", "17px"]}
              _hover={{ color: "#e51075" }}
            >
              Learn about crowdfunding{" "}
              <ChevronRightIcon mt={"-0.5"}></ChevronRightIcon>
            </Text>
          </Box>
        </Box>

        <Container mb={3} mt={10}>
          <Stack spacing="2">
            <Heading size={["md", "lg", "lg", "lg"]} fontWeight={0}>
              Which categories interest you?
            </Heading>
            <Text fontSize={["14px", "15px", "17px", "17px"]}>
              Discover projects just for you and get great recommendations when
              you select your interests.
            </Text>
            <button
              style={{
                border: "1px solid",
                width: "48%",
                display: "block",
                margin: "auto",
                marginTop: "10px",
              }}
            >
              <Text
                fontSize={["13px", "14px", "15px", "17px"]}
                fontWeight={"560"}
                padding="5.5px 3.5px"
              >
                SIGN UP AND SELECT INTEREST
              </Text>
            </button>
            <Text>Or explore our top categories</Text>
          </Stack>
        </Container>

        <Box
          width={"100%"}
          display={"flex"}
          alignItems="center"
          justifyContent={"space-between"}
          mt={7}
        >
          <SimpleGrid
            columns={[2, 3, 6, 6]}
            width={"60%"}
            margin={"auto"}
            direction={"row"}
            spacing="8"
          >
            <Box>
              <Icon
                as={IoIosHome}
                width={"70px"}
                height={"70px"}
                color="#e51075"
              />
              <Text fontSize="14px">HOME</Text>
            </Box>
            <Box>
              <Icon as={ImMobile2} w={"70px"} h={"70px"} color="#e51075" />
              <Text fontSize="14px">PHONES & ACCESSORIES</Text>
            </Box>
            <Box>
              <Icon as={GiSchoolBag} w={"70px"} h={"70px"} color="#e51075" />
              <Text fontSize="14px">TRAVEL & OUTDOORS</Text>
            </Box>
            <Box>
              <Icon
                as={TbDeviceWatchStats2}
                w={"70px"}
                h={"70px"}
                color="#e51075"
              />
              <Text fontSize="14px">HEALTH & FITNESS</Text>
            </Box>
            <Box>
              <Icon
                as={BsFillSpeakerFill}
                w={"70px"}
                h={"70px"}
                color="#e51075"
              />
              <Text fontSize="14px">AUDIO</Text>
            </Box>
            <Box>
              <Icon
                as={GiFilmProjector}
                w={"70px"}
                h={"70px"}
                color="#e51075"
              />
              <Text fontSize="14px">FILM</Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Box mt={10} mb={10}>
          <Heading mb={2} size={["md", "lg", "lg", "lg"]} fontWeight={400}>
            From the Indiegogo Review
          </Heading>
          <p>
            Your behind-the-scenes view of the people and stories behind
            Indiegogo projects
          </p>
        </Box>
        <Container
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          margin={"auto"}
          maxW={["95%", "95%", "100%", "85%"]}
        >
          <SimpleGrid
            w={["95%", "95%", "100%", "85%"]}
            direction={"row"}
            spacing={8}
            columns={[1, 1, 2, 3]}
          >
            <Box>
              <Image
                maxW="100%"
                src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1660231108/h3ayekkkolooq5k9ilvq.png"
              />
              <Text mt={2} fontSize={["17px", "18px", "19px", "19px"]}>
                Indiegogo and StartEngine Join Forces
              </Text>
              <Text color="#2a2a2a" fontSize={["15px", "16px", "17px", "17px"]}>
                How to raise more funds after your campaign
              </Text>
              <Text
                _hover={{ color: "#e51075" }}
                fontSize={["15px", "16px", "17px", "17px"]}
              >
                LEARN MORE<ChevronRightIcon mt={"-0.5"}></ChevronRightIcon>
              </Text>
            </Box>
            <Box>
              <Image
                maxW="100%"
                src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1660454271/xq8oqua1iie8y5abbxoi.png"
              />
              <Text mt={2} fontSize={["17px", "18px", "19px", "19px"]}>
                Indiegogo and StartEngine Join Forces
              </Text>
              <Text color="#2a2a2a" fontSize={["15px", "16px", "17px", "17px"]}>
                How to raise more funds after your campaign
              </Text>
              <Text
                _hover={{ color: "#e51075" }}
                fontSize={["15px", "16px", "17px", "17px"]}
              >
                LEARN MORE<ChevronRightIcon mt={"-0.5"}></ChevronRightIcon>
              </Text>
            </Box>
            <Box>
              <Image
                maxW="100%"
                src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1660288199/ak5wz5zhr0ghiwwravay.png"
              />
              <Text mt={2} fontSize={["17px", "18px", "19px", "19px"]}>
                Indiegogo and StartEngine Join Forces
              </Text>
              <Text color="#2a2a2a" fontSize={["15px", "16px", "17px", "17px"]}>
                How to raise more funds after your campaign
              </Text>
              <Text
                _hover={{ color: "#e51075" }}
                fontSize={["15px", "16px", "17px", "17px"]}
              >
                LEARN MORE<ChevronRightIcon mt={"-0.5"}></ChevronRightIcon>
              </Text>
            </Box>
          </SimpleGrid>
        </Container>

        <Stack
          direction={"row"}
          m={"auto"}
          w={["98%", "88%", "78%", "78%"]}
          mt={10}
          mb={10}
          spacing={"-7"}
        >
          <Box>
            <Image src="https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_275,g_center,q_auto:best,dpr_1.3,f_auto/homepage/crowdfunding-crowdsurfing_base.svg" />
          </Box>

          <Box maxW={["100%"]}>
            <Heading
              _hover={{ color: "#e51075" }}
              mb={5}
              size={["sm", "md", "lg", "lg"]}
              fontWeight={400}
            >
              Clever Things For Curious Humans™
            </Heading>
            <Text fontSize={["15px", "16px", "17px", "17px"]}>
              There's no better place to start the hunt for something new and
              special. Begin on Indiegogo to find clever and unconventional
              things that solve everyday problems large and small.
            </Text>

            <Box
              display={"flex"}
              justifyContent={"space-between"}
              width={260}
              margin={"auto"}
              mt={2}
            >
              <button className="primary1">SIGN UP NOW</button>
              <button className="secondary1">LEARN MORE</button>
            </Box>
          </Box>
        </Stack>

        <Footer />
      </Container>
    </>
  );
}
export default Home;
