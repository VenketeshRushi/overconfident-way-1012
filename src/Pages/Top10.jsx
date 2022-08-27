import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import {
  AiOutlineHeart,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
function Top10() {
  return (
    <>
      <Container maxWidth="100%">
        <Box m={"auto"} width={"60%"}>
          <Heading>10 Cool & Clever Finds</Heading>
          <Text>
            Discover your next "a-ha" moment in our roundup of standout
            projects, from live crowdfunding & InDemand campaigns to innovative
            products shipping now.
          </Text>
          <Stack direction={"row"}>
            <button
              style={{
                fontSize: "16px",
                color: "white",
                padding: "10px 0px",
                borderRadius: "2px",
                border: "1px solid rgb(64,93,157)",
                fontWeight: "600",
                width: "50%",
                backgroundColor: "rgb(64,93,157)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon mr={3} as={AiOutlineFacebook} w={"25px"} h={"25px"} />
              Follow
            </button>
            <button
              style={{
                fontSize: "16px",
                color: "white",
                padding: "10px 0px",
                borderRadius: "2px",
                border: "1px solid rgb(44,153,215)",
                fontWeight: "600",
                width: "50%",
                backgroundColor: "rgb(44,153,215)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon mr={3} as={AiOutlineTwitter} w={"25px"} h={"25px"} />
              Follow
            </button>
            <button
              style={{
                fontSize: "16px",
                color: "#e51075",
                padding: "10px 0px",
                borderRadius: "2px",
                border: "1px solid #e51075",
                fontWeight: "600",
                width: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon mr={3} as={AiOutlineHeart} w={"25px"} h={"25px"} />
              Follow
            </button>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
export default Top10;
