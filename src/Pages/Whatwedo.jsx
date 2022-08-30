import {
  Box,
  Checkbox,
  Container,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AspectRatio } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { RiMotorbikeFill } from "react-icons/ri";
import { GiInspiration } from "react-icons/gi";
import "./whatwedo.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
function Whatwedo() {
  return (
    <div className="main">
      <Navbar />
      <Box className="containerbox">
        <Box mr={"20%"} w={"60%"}>
          <Heading fontSize={["sm", "md", "xl", "3xl"]} mb={2}>
            Get the tech that gets people talking
          </Heading>
          <Text fontSize={["10px", "12px", "14px", "16px"]}>
            With both live crowdfunding campaigns and innovative products
            shipping now, there’s no better place to start the hunt for cool and
            clever innovations that surprise and delight. Indiegogo is where new
            launches.
          </Text>
        </Box>
      </Box>
      <Box width={["95%", "80%", "65%", "50%"]} margin={"auto"}>
        <AspectRatio maxW="780px" maxH={"450px"} ratio={1}>
          <iframe
            title="indiegogo"
            src="https://www.youtube.com/embed/2Tz_C14M6z0"
            allowFullScreen
          />
        </AspectRatio>
        <Box mt={5}>
          <Heading
            mb={4}
            fontSize={["lg", "xl", "2xl", "3xl"]}
            fontWeight={"500"}
          >
            Fund the next big thing
          </Heading>
          <Text fontSize={["11px", "13px", "15px", "17px"]}>
            Indiegogo's crowdfunding campaigns are where new and groundbreaking
            products take flight, sometimes long before they hit mainstream
            availability. With thousands of campaigns launching every week,
            there's great tech, design, and much more around every corner —
            often with limited-time perks and pricing for the earliest backers.
            Before it's everywhere, it's on Indiegogo.
          </Text>
        </Box>
      </Box>
      <Container maxW={["95%", "80%", "70%", "56%"]} mb={"60px"} mt={"90px"}>
        <Stack
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          spacing={5}
        >
          <Heading
            fontSize={["lg", "xl", "2xl", "3xl"]}
            w={"89%"}
            mb={4}
            fontWeight={"500"}
          >
            Join the journey from idea to market
          </Heading>
          <Box
            width={"100%"}
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
            margin="auto"
          >
            <Image
              w={["98%", "88%", "78%", "68%"]}
              src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/v1/what_we_do/timeline_desktop_2x.png"
            />
          </Box>
          <Text fontSize={["11px", "13px", "15px", "17px"]}>
            With Indiegogo, you have the opportunity to support entrepreneurs
            and new technology from the earliest stages of development. Be sure
            to evaluate every campaign closely and contribute at a level you can
            afford in the event that the team is unable to complete the project
            as planned.
          </Text>
          <Text fontSize={["11px", "13px", "15px", "17px"]}>
            Browse campaigns, read the stories from the entrepreneurs
            themselves, evaluate the stage of development and any potential
            production risks — and then fund the projects that you want to help
            succeed.
          </Text>
        </Stack>
        <button className="explorebutton">EXPLORE PRODUCTS</button>
        <h5 className="learnmore">
          Or <span style={{ color: "#e51075" }}>learn more</span> about
          crowdfunding and your role as a backer.
        </h5>
      </Container>
      <Box
        margin="auto"
        mt={"80px"}
        mb={"100px"}
        maxW={["95%", "80%", "65%", "53%"]}
      >
        <Stack display="flex" alignItems={"center"} justifyContent={"center"}>
          <Heading fontSize={"3xl"} fontWeight="600">
            Great finds, delivered daily
          </Heading>
          <Text fontSize="17px">
            We surface the best and brightest of Indiegogo in our newsletter.
            Sign up to find out about great technology, design, film, and much
            more — all before it hits the mainstream.
          </Text>
          <Stack w={"60%"} direction={"row"}>
            <Input
              borderRadius={0}
              variant="filled"
              borderColor={"#ddd"}
              placeholder="Your Email Address"
              type={"email"}
              size="md"
              _focus={{ borderColor: "#2a2a2a" }}
            />
            <button
              style={{
                backgroundColor: "#e51075",
                fontSize: "16px",
                color: "white",
                padding: "10px 35px",
                borderRadius: "2px",
                fontWeight: "500",
              }}
            >
              SUBSCRIBE
            </button>
          </Stack>
          <Checkbox mt={2} colorScheme="blackAlpha">
            <Text fontSize="14px">
              {" "}
              I agree to the Terms of Use and have read and understand the
              Privacy Policy
            </Text>
          </Checkbox>
        </Stack>
      </Box>
      <Container maxW={["100%", "80%", "78%"]}>
        <Box display={"flex"} alignItems="center" justifyContent={"center"}>
          <Box w={["0%", "0%", "85%"]}>
            <Image src="https://g2.iggcdn.com/assets/site/what_we_do/perk_illustration-ce8d9a9254775fc64731193189a22299d2db1e7ce8c4d82952ffe23adcdec1a8.png" />
          </Box>
          <Box textAlign={"left"} w={["100%", "95%", "85%"]}>
            <Stack>
              <Heading>What is a perk?</Heading>
              <Text fontSize={"17px"}>
                Many campaigns offer perks to say thanks to backers, in exchange
                for different contribution amounts. Perks can be objects,
                acknowledgement, a thank you, services, events or anything that
                does not violate our Terms of Use.
              </Text>
              <Text fontSize={"17px"}>
                Perks are listed on the right side of the Campaign page, under
                the "Back It" button. If you do not see any perks listed, the
                campaign owner may have decided not to offer any perks.
              </Text>
              <Text pt={2} fontWeight={"bold"}>
                Helpful links
              </Text>
              <Text
                _hover={{ textDecoration: "underline" }}
                color={"#e51075"}
                fontSize={"17px"}
              >
                When will i recive my perk?
              </Text>
              <Text
                _hover={{ textDecoration: "underline" }}
                color={"#e51075"}
                fontSize={"17px"}
              >
                Does Indiegogo Guarantee perks?
              </Text>
              <Text
                _hover={{ textDecoration: "underline" }}
                color={"#e51075"}
                fontSize={"17px"}
              >
                Guaranteed Delivery Perk Policy
              </Text>
              <Text
                _hover={{ textDecoration: "underline" }}
                color={"#e51075"}
                fontSize={"17px"}
              >
                The Trust-Proven Program
              </Text>
            </Stack>
          </Box>
        </Box>
      </Container>
      <Container margin="auto" mt={10} maxW={"85%"}>
        <Stack
          display={"flex"}
          justifyContent="space-between"
          direction={"row"}
        >
          <SimpleGrid
            rowGap={20}
            width={["95%", "80%", "60%"]}
            columns={[1, 1, 2]}
            spacing="30px"
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                mb={5}
                src="https://indiegogo-media-prod-cld-res.cloudinary.com/image/upload/c_scale,h_135/what_we_do/misfit.png"
              />
              <Text fontWeight={"bold"}>Misfit Shine</Text>
              <Text>7,957 Backers</Text>
              <Text fontSize="15px">
                With super-smart fitness technology squeezed into a sleek,
                take-it-anywhere design, the Misfit Shine was a huge hit. Today
                it’s available in stores everywhere, but Indiegogo backers were
                in on the action first.
              </Text>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                mb={5}
                src="https://indiegogo-media-prod-cld-res.cloudinary.com/image/upload/c_scale,h_135/what_we_do/bluesmart.png"
              />
              <Text fontWeight={"bold"}>Bluesmart</Text>
              <Text>10,984 Backers</Text>
              <Text fontSize="15px">
                This smash-hit campaign almost singlehandedly invented the smart
                suitcase as the must-have travel accessory that it is today.
                With innovative features like location tracking and a built-in
                scale, Bluesmart went big on Indiegogo before landing in stores
                around the world.
              </Text>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                mb={5}
                src="https://indiegogo-media-prod-cld-res.cloudinary.com/image/upload/c_scale,h_135/what_we_do/evapolar.png"
              />
              <Text fontWeight={"bold"}>Evapolar</Text>
              <Text>6,616 Backers</Text>
              <Text fontSize="15px">
                With super-smart fitness technology squeezed into a sleek,
                take-it-anywhere design, the Misfit Shine was a huge hit. Today
                it’s available in stores everywhere, but Indiegogo backers were
                in on the action first.
              </Text>
            </Box>{" "}
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                mb={5}
                src="https://indiegogo-media-prod-cld-res.cloudinary.com/image/upload/c_scale,h_135/what_we_do/super_troopers.png"
              />
              <Text fontWeight={"bold"}>Super Troopers 2</Text>
              <Text>54,531 Backers</Text>
              <Text fontSize="15px">
                With its truly gigantic backer community, Super Troopers 2
                became one of the most iconic Indiegogo film projects. The team
                behind the project offered backers everything from movie tickets
                to an actual police car from the film!
              </Text>
            </Box>
          </SimpleGrid>
          <Box
            position={"relative"}
            bg="rgb(214,244,234)"
            width={["0%", "0%", "0%", "32%"]}
          >
            <Image
              position={"absolute"}
              left="39px"
              bottom="21px"
              boxSize="440px"
              objectFit="cover"
              transform="rotate(60deg)"
              src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_scale,h_740/v1/what_we_do/funding_hero_desktop_foreground.png"
            />
          </Box>
        </Stack>
      </Container>
      <Box
        width={["95%", "78%", "60%"]}
        margin="auto"
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        mt={"80px"}
        mb={"80px"}
      >
        <Stack
          display="flex"
          alignItems={"center"}
          justifyContent="center"
          mr={5}
          spacing="5"
        >
          <Icon
            as={RiMotorbikeFill}
            w={["30px", "50px", "70px"]}
            h={["30px", "50px", "70px"]}
            color="#e51075"
          />
          <Heading fontSize={["md", "xl", "2xl", "3xl"]}>
            Ready? Explore
          </Heading>
          <button
            style={{
              fontSize: "16px",
              color: "#e51075",
              padding: "10px 10px",
              borderRadius: "2px",
              border: "1px solid #e51075",
              fontWeight: "600",
              width: "80%",
            }}
          >
            <Text fontSize={["11px", "13px", "15px", "17px"]}>
              DISCOVER PROJECTS
            </Text>
          </button>
        </Stack>
        <Stack
          display="flex"
          alignItems={"center"}
          justifyContent="center"
          ml={5}
          spacing={"5"}
        >
          <Icon
            as={GiInspiration}
            w={["35px", "50px", "70px"]}
            h={["35px", "50px", "70px"]}
            color="#e51075"
          />
          <Heading fontSize={["md", "xl", "2xl", "3xl"]}>
            Feeling Inspired?
          </Heading>
          <button
            style={{
              fontSize: "16px",
              color: "#e51075",
              padding: "10px 10px",
              borderRadius: "2px",
              border: "1px solid #e51075",
              fontWeight: "600",
              width: "80%",
            }}
          >
            <Text fontSize={["8px", "10px", "12px", "14px"]}>
              BECOME AN ENTREPRENEUR
            </Text>
          </button>
        </Stack>
      </Box>
      <Footer />
    </div>
  );
}
export default Whatwedo;
