import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Box,
  Image,
  Input,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
function SignUp() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <p style={{cursor: "pointer"}} onClick={onOpen}>Sign Up</p>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent padding={"0px 25px"} width={450} borderRadius={"0"}>
          <ModalHeader>
            <Heading fontSize={"3xl"} textAlign={"center"}>
              Welcome!
            </Heading>
            <Text textAlign={"center"} fontSize={"16px"} color={"#6a6a6a"}>
              Sign up to join Indiegogo.
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody width={"auto"} height={150}>
            <Stack>
              <Box>
                <Text>First Name</Text>
                <Input
                  borderRadius={0}
                  variant="filled"
                  borderColor={"#ddd"}
                  placeholder="Your First Name"
                  size="md"
                  _focus={{ borderColor: "#2a2a2a" }}
                />
              </Box>
              <Box>
                <Text>Last Name</Text>
                <Input
                  borderRadius={0}
                  variant="filled"
                  borderColor={"#ddd"}
                  size="md"
                  placeholder="Last Name"
                  _focus={{ borderColor: "#2a2a2a" }}
                />
              </Box>
              <Box>
                <Text>Email</Text>
                <Input
                  borderRadius={0}
                  variant="filled"
                  borderColor={"#ddd"}
                  placeholder="Email"
                  type={"email"}
                  size="md"
                  _focus={{ borderColor: "#2a2a2a" }}
                />
              </Box>
              <Box>
                <Text>Password</Text>
                <Input
                  borderRadius={0}
                  variant="filled"
                  borderColor={"#ddd"}
                  placeholder="Password"
                  size="md"
                  type={"password"}
                  _focus={{ borderColor: "#2a2a2a" }}
                />
              </Box>
            </Stack>
            <Stack mt={5} spacing={5}>
              <Checkbox colorScheme="pink" defaultChecked>
                <Text fontSize="16px">
                  {" "}
                  Sign me up for the Indiegogo newsletter
                </Text>
              </Checkbox>
              <Checkbox colorScheme="pink" defaultChecked>
                <Text fontSize="16px">
                  {" "}
                  I agree to the Terms of Use and have read and understand the
                  Privacy Policy
                </Text>
              </Checkbox>
            </Stack>
            <Stack>
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
                  marginTop: "15px",
                }}
              >
                CREATE ACCOUNT
              </button>
              <Text textAlign={"center"}>OR</Text>
              <button
                style={{
                  backgroundColor: "rgb(64,92,157)",
                  fontSize: "12px",
                  color: "white",
                  padding: "10px 10px",
                  borderRadius: "2px",
                  fontWeight: "bold",
                  width: "100%",
                  marginBottom: "10px",
                }}
              >
                CONTINUE WITH FACEBOOK
              </button>
            </Stack>
            <Stack
              mt={"50px"}
              align={"center"}
              justify={"center"}
              direction={"row"}
            >
              <Text fontSize="16px" textAlign={"center"}>
                Already Have Account?
              </Text>
              <Text
                fontSize="14px"
                fontWeight={"bold"}
                textAlign={"center"}
                textDecoration={"underline"}
              >
                Log In
              </Text>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default SignUp;
