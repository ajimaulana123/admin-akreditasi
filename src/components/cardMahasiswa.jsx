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
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

const CardMahasiswa = ({ data }) => {
  const { colorMode } = useColorMode();
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
          borderRadius="lg"
          width={400}
          height={350}
          objectFit={"cover"}
        />
        <Stack mt="6" spacing="3" width={400}>
          <Heading size="md" textAlign={"center"}>
            {data.name}
          </Heading>
          <Text textAlign={"center"}>{data.nim}</Text>
        </Stack>
        <Divider mt={5} />
        <Accordion allowMultiple width={400} mt={2}>
          <AccordionItem border={"none"}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Lihat Detail
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Table>
                <Thead>
                  <Tr>
                    <Th padding={0} border={"none"} width={"40%"}></Th>
                    <Th padding={0} border={"none"}></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td
                      border={"none"}
                      padding={0}
                      display={"flex"}
                      justifyContent={"space-between"}
                    >
                      <Text>Nama</Text>
                      <Text>:</Text>
                    </Td>
                    <Td border={"none"} padding={0}>
                      <Text ml={2}>{data.name}</Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      border={"none"}
                      padding={0}
                      display={"flex"}
                      justifyContent={"space-between"}
                    >
                      <Text>Rumah</Text>
                      <Text>:</Text>
                    </Td>
                    <Td border={"none"} padding={0}>
                      <Text ml={2}>{data.address}</Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      border={"none"}
                      padding={0}
                      display={"flex"}
                      justifyContent={"space-between"}
                    >
                      <Text>Tempat/tgl Lahir</Text>
                      <Text>:</Text>
                    </Td>
                    <Td border={"none"} padding={0}>
                      <Text ml={2}>
                        {data.born_place} {data.born_date}
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      border={"none"}
                      padding={0}
                      display={"flex"}
                      justifyContent={"space-between"}
                    >
                      <Text>Nama orang tua</Text>
                      <Text>:</Text>
                    </Td>
                    <Td border={"none"} padding={0}>
                      <Text ml={2}>{data.parentName}</Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      border={"none"}
                      padding={0}
                      display={"flex"}
                      justifyContent={"space-between"}
                    >
                      <Text>Telepon</Text>
                      <Text>:</Text>
                    </Td>
                    <Td border={"none"} padding={0}>
                      <Text ml={2}>{data.phoneNumber}</Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      border={"none"}
                      padding={0}
                      display={"flex"}
                      justifyContent={"space-between"}
                    >
                      <Text>Judul TA</Text>
                      <Text>:</Text>
                    </Td>
                    <Td border={"none"} padding={0}>
                      <Text ml={2}>{data.titleOfThesis}</Text>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </CardBody>
    </Card>
  );
};

export default CardMahasiswa;
