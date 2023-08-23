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
} from "@chakra-ui/react";
import React from "react";

const CardDosen = () => {
  return (
    <Card rounded={"xl"} width={"fit-content"} height={"fit-content"}>
      <CardBody padding={3}>
        <Image
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          width={300}
          height={350}
          objectFit={"cover"}
        />
        <Stack mt="6" spacing="3" width={300}>
          <Heading size="md" textAlign={"center"}>
            Bapak Harjono
          </Heading>
          <Text textAlign={"center"}>
            Ketua Program Studi Manajemen Informatika
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
