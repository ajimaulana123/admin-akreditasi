import React, { useEffect, useState } from "react";
import Sidebar from "../../../layout/sidebar";
import {
  Box,
  Flex,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorMode,
} from "@chakra-ui/react";
import { FaBookOpen } from "react-icons/fa";
import axios from "axios";
import { useGetData } from "../../../hooks/apiMethod";

const Kurikulums = () => {
  const apiUrl = "https://knowledgeable-painted-guarantee.glitch.me/kurikulums";
  const breadcrumbs = ["Data Table", "Doc Jurusan", "Kurikulum"];
  const { datas, isLoading } = useGetData(apiUrl);
  const { colorMode } = useColorMode();

  return (
    <Sidebar breadcrumbs={breadcrumbs}>
      <Flex className="h-fit flex-col gap-3">
        <Box
          className={`${
            colorMode === "dark"
              ? "bg-secondaryGray-900"
              : "bg-secondaryGray-300"
          } rounded-xl py-5 px-10`}
        >
          <h2 className="flex items-center gap-2 font-semibold text-xl">
            <FaBookOpen className="text-brandTabs-300" /> Kurikulums
          </h2>
        </Box>
        <Box className="bg-secondaryGray-300 rounded-xl">
          <TableContainer className="rounded-md">
            <Table variant="simple">
              <TableCaption
                className={`${
                  colorMode === "dark"
                    ? "bg-secondaryGray-900"
                    : "bg-secondaryGray-300"
                } m-0 py-5`}
              >
                Copyright Manajemen Informatika
              </TableCaption>
              <Thead
                className={`${
                  colorMode === "dark"
                    ? "bg-secondaryGray-900"
                    : "bg-secondaryGray-300"
                } `}
              >
                <Tr>
                  <Th textAlign="center">No</Th>
                  <Th textAlign="center">ID</Th>
                  <Th textAlign="center">Mata Kuliah</Th>
                  <Th textAlign="center">SKS</Th>
                  <Th textAlign="center">T/P</Th>
                  <Th textAlign="center">Semester</Th>
                </Tr>
              </Thead>
              <Tbody
                className={`${
                  colorMode === "dark"
                    ? "bg-secondaryGray-900"
                    : "bg-secondaryGray-300"
                }`}
              >
                {isLoading ? (
                  <Tr>
                    <Td>
                      <p className="px-10">Loading Data...</p>
                    </Td>
                  </Tr>
                ) : (
                  datas.map((data, index) => {
                    return (
                      <Tr key={index}>
                        <Td textAlign="center">{index + 1}</Td>
                        <Td textAlign="center">{data.id}</Td>
                        <Td>{data.matkul}</Td>
                        <Td textAlign="center">{data.sks}</Td>
                        <Td textAlign="center">{data.tp ? "T" : "P"}</Td>
                        <Td textAlign="center">{data.semester}</Td>
                      </Tr>
                    );
                  })
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </Sidebar>
  );
};

export default Kurikulums;
