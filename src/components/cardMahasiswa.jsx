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
} from "@chakra-ui/react";
import React from "react";

const CardMahasiswa = () => {
  return (
    <Card rounded={"xl"} width={"fit-content"} height={"fit-content"}>
      <CardBody padding={3}>
        <Image
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          width={400}
          height={350}
          objectFit={"cover"}
        />
        <Stack mt="6" spacing="3" width={400}>
          <Heading size="md" textAlign={"center"}>
            Jovan Panji Pratama
          </Heading>
          <Text textAlign={"center"}>22141002</Text>
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
                      <Text ml={2}>Jovan Panji Pratama</Text>
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
                      <Text ml={2}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sequi quaerat vitae perspiciatis obcaecati! Eveniet et
                        veniam molestias minima quis ipsum quos dolores labore
                        aspernatur culpa? Maxime sapiente explicabo odit
                        laborum.
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
                      <Text>DLL</Text>
                      <Text>:</Text>
                    </Td>
                    <Td border={"none"} padding={0}>
                      <Text ml={2}>DLL</Text>
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
