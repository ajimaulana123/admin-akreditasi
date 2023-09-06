import React, { useEffect, useState } from "react";
import Sidebar from "../../../layout/sidebar";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
} from "@chakra-ui/react";
import axios from "axios";
import { BiSolidFileDoc } from "react-icons/bi";
import { useGetData } from "../../../hooks/apiMethod";

const Akreditasi = () => {
  const apiUrl =
    "https://knowledgeable-painted-guarantee.glitch.me/dataAkreditasi";
  const { datas, isLoading, refetchData } = useGetData(apiUrl);
  const { colorMode } = useColorMode();
  const breadcrumbs = ["Data Table", "Akreditasi"];

  const switchTheme = (a, b) => {
    if (colorMode === "dark") {
      return a;
    } else {
      return b;
    }
  };

  return (
    <Sidebar breadcrumbs={breadcrumbs}>
      <Box
        className={`${
          colorMode === "dark" ? "bg-secondaryGray-900" : "bg-secondaryGray-300"
        } rounded-xl p-5 w-full h-fit`}
      >
        {isLoading ? (
          <p>Loading Data....</p>
        ) : (
          datas.map((dataParent, index) =>
            dataParent.dataBab ? (
              <Box
                key={index}
                className={`${switchTheme(
                  "bg-secondaryGray-900",
                  "bg-secondaryGray-300"
                )} rounded-xl p-5 flex flex-col gap-3`}
              >
                <Flex className=" justify-between items-center">
                  <Text className="text-3xl font-semibold">
                    {dataParent?.titleBab}
                  </Text>
                </Flex>
                {dataParent.dataBab?.map((data, index) => {
                  return (
                    <Card
                      className={`${switchTheme(
                        "bg-brandTabs-900",
                        "bg-white"
                      )}`}
                      key={index}
                    >
                      <CardHeader className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold">{data.title}</h1>
                      </CardHeader>
                      <CardBody className="py-0">
                        <TableContainer>
                          <Table variant={"simple"}>
                            <Thead>
                              <Tr>
                                <Th textAlign="center" className="w-[50px]">
                                  NO
                                </Th>
                                <Th>DESKRIPSI</Th>
                                <Th textAlign="center" className="w-[100px]">
                                  DOCUMEN
                                </Th>
                                <Th textAlign="center" className="w-[100px]">
                                  STATUS
                                </Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                              {data.dataBody?.map((body, index) => {
                                return (
                                  <Tr key={index}>
                                    <Td textAlign="center">{index + 1}</Td>
                                    <Td>{body.deskripsi}</Td>
                                    <Td textAlign="center">
                                      <Link
                                        href={body.link}
                                        className="flex justify-center"
                                      >
                                        <BiSolidFileDoc className="text-2xl hover:text-blue-500" />
                                      </Link>
                                    </Td>
                                    <Td>Belum Terakreditasi</Td>
                                  </Tr>
                                );
                              })}
                            </Tbody>
                          </Table>
                        </TableContainer>
                      </CardBody>
                    </Card>
                  );
                })}
              </Box>
            ) : (
              <Box
                key={index}
                className={`${switchTheme(
                  "bg-secondaryGray-900",
                  "bg-secondaryGray-300"
                )} rounded-xl p-5 flex flex-col gap-3`}
              >
                <Flex className=" justify-between items-center">
                  <Text className="text-3xl font-semibold">
                    {dataParent?.titleBab}
                  </Text>
                </Flex>
                <Card
                  className={`${switchTheme("bg-brandTabs-900", "bg-white")}`}
                >
                  <CardBody className="py-4">
                    <TableContainer>
                      <Table variant={"simple"}>
                        <Thead>
                          <Tr>
                            <Th textAlign="center" className="w-[50px]">
                              NO
                            </Th>
                            <Th>DESKRIPSI</Th>
                            <Th textAlign="center" className="w-[100px]">
                              DOCUMEN
                            </Th>
                            <Th textAlign="center" className="w-[100px]">
                              STATUS
                            </Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {dataParent.dataBody?.map((body, index) => {
                            return (
                              <Tr key={index}>
                                <Td textAlign="center">{index + 1}</Td>
                                <Td>{body.deskripsi}</Td>
                                <Td textAlign="center">
                                  <Link
                                    href={body.link}
                                    className="flex justify-center"
                                  >
                                    <BiSolidFileDoc className="text-2xl hover:text-blue-500" />
                                  </Link>
                                </Td>
                                <Td>Belum Terakreditasi</Td>
                              </Tr>
                            );
                          })}
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </CardBody>
                </Card>
              </Box>
            )
          )
        )}
      </Box>
    </Sidebar>
  );
};

export default Akreditasi;
