import React from "react";
import "./header.css";
import { Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Center} from "@chakra-ui/react";

export const Header = () => {
  return (
    <Container>
      <Box position="absolute" boxSize="100%">
        <Image
          src="https://blog.biciclaje.es/wp-content/uploads/2017/02/bicicleta-atardecer-enamorate-de-tu-bici.jpg"
          alt="img1"
          w="95%"
          h="40vh"
          m="40px"
          objectFit="cover"
        ></Image>
      </Box>
      <Box position="relative" m="auto">
        <Center h="260px" w="200vh">
          <Text color="white" fontSize="30px" mt="220px">
            DOMINA EL TERRENO
          </Text>
        </Center>
        <Center mb="50px" gap="15px">
          <Button
            color="white"
            colorScheme="gray"
            variant="outline"
            bg="transparent"
            border="1px solid #fff"
            ml="50%"
          >
            VER DETALLES
          </Button>
          <Button
            color="white"
            colorScheme="gray"
            variant="outline"
            bg="transparent"
            border="1px solid #fff"
          >
            VER VIDEO
          </Button>
        </Center>
      </Box>
      {/*NUEVA CAJA*/}

      <Box mt="150px" position="relative" flexDirection="column">
        <Image
          src="https://blog.biciclaje.es/wp-content/uploads/2017/02/bicicleta-atardecer-enamorate-de-tu-bici.jpg"
          alt="img2"
          w="35%"
          h="40vh"
          ml="40px"
          objectFit="cover"
        ></Image>
        <Box position="absolute" bottom="80px" ml="60px">
          <Center
            mb="50px"
            gap="15px"
            display="flex"
            flexDirection="column"
            ml="100px"
          >
            <Text color="white" fontSize="20px">
              DOMINA EL TERRENO
            </Text>
            <Button
              color="white"
              w="100%"
              colorScheme="gray"
              variant="outline"
              bg="transparent"
              border="1px solid #fff"
            >
              VER DETALLES
            </Button>
            <Button
              color="white"
              w="100%"
              colorScheme="gray"
              variant="outline"
              bg="transparent"
              border="1px solid #fff"
            >
              VER VIDEO
            </Button>
          </Center>
        </Box>
      </Box>
    </Container>
  );
};
export default Header;
