import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    Image,
    Box,
    Input,
    InputLeftElement,
    InputGroup,
    Heading,
  } from "@chakra-ui/react";
  
  export default function Signup() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Button
          backgroundColor="#331e6d25"
          border="1px"
          borderColor="gray.500"
          onClick={onOpen}
        >
          Sign Up
        </Button>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          h="80vh"
          style={{
            background: "linear-gradient(#ffffff 80%, transparent)",
            backdropFilter: "blur(5px)",
          }}
        >
          <ModalHeader
            textAlign={"center"}
            backgroundColor="#ecc145"
            borderTopRadius={"6"}
          >
            Sign Up
          </ModalHeader>
          <ModalBody>
            <Box pt="6">
              <InputGroup size='lg'>
                <InputLeftElement
                  pointerEvents="none"
                  children={<i className="fas fa-signature"></i>}
                />
                <Input type={"text"} placeholder="Name"/>
              </InputGroup>
            </Box>
            <Box pt="3">
              <InputGroup size='lg'>
                <InputLeftElement
                  pointerEvents="none"
                  children={<i className="fas fa-at"></i>}
                />
                <Input type={"email"} placeholder="E-mail ID" />
              </InputGroup>
            </Box>
            <Box pt="3">
              <InputGroup size='lg'>
                <InputLeftElement
                  pointerEvents="none"
                  children={<i className="fas fa-key"></i>}
                />
                <Input type={"password"} placeholder="Password" />
              </InputGroup>
            </Box>
            <Box pt="3">
              <InputGroup>
                <Button type="submit" bg='#ecc145' w={"100%"}>Signup</Button>
              </InputGroup>
            </Box>
            <Box pt="8" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
              <hr width="40%"/>
              <Heading as={"h5"} size="sm" mx="2">OR</Heading>
              <hr width="40%"/>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Image
              src="/images/login_signup/login.png"
              style={{
                position: "absolute",
                bottom: "0",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
      </>
    );
  }
  