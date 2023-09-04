import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

const CardDosen = ({data}) => {
  const {colorMode} = useColorMode()
  const switchTheme = (a, b) => {
    if (colorMode === "dark") {
      return a;
    } else {
      return b;
    }
  };

  return (
    <Card
      rounded={"xl"}
      width={"fit-content"}
      height={"fit-content"}
      className={`${switchTheme("bg-brandTabs-900", "bg-white")}`}
    >
      <CardBody padding={3}>
        <Image
          src={data.imageProfile}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          width={300}
          height={350}
          objectFit={"cover"}
        />
        <Stack mt="6" spacing="3" width={300}>
          <Heading size="md" textAlign={"center"}>
            {data.name}
          </Heading>
          <Text textAlign={"center"}>
            {data.position}
          </Text>
        </Stack>
        <Divider mt={5} />
        <Accordion allowMultiple width={300} mt={2}>
          <AccordionItem border={"none"}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Lihat Detail
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              display={"flex"}
              flexDirection={"column"}
              gap={5}
            >
              <Box>
                <Text fontWeight={"bold"}>Pendidikan : </Text>
                <Box display={"flex"}>
                  <Text width={50}>S1 : </Text>
                  <Text>Teknik Elektri, Universitas Gadjah Mada (UGM)</Text>
                </Box>
                <Box display={"flex"}>
                  <Text width={50}>S2 : </Text>
                  <Text>Teknik Elektri, Universitas Gadjah Mada (UGM)</Text>
                </Box>
              </Box>
              <Box>
                <Text fontWeight={"bold"}>Mata kuliah yang diampu : </Text>
                <UnorderedList ml={10}>
                  <ListItem>Praktik Pemrograman Terstruktur 2</ListItem>
                  <ListItem>Game Technology</ListItem>
                  <ListItem>Pemrogaman Database 2</ListItem>
                  <ListItem>Komunikasi Data & Jaringan Komputer</ListItem>
                  <ListItem>Pemrograman Berorientasi Objek</ListItem>
                  <ListItem>DLL</ListItem>
                </UnorderedList>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </CardBody>
    </Card>
  );
};

export default CardDosen;
