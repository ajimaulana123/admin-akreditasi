import React, { useEffect, useState } from "react";
import Sidebar from "../../../layout/sidebar";
import {
  Box,
  Flex,
  IconButton,
  Image,
  Spinner,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
} from "@chakra-ui/react";
import { FaBookOpen, FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import axios from "axios";
import { useGetData } from "../../../hooks/apiMethod";

const InputKurikulums = () => {
  const apiUrl = "https://knowledgeable-painted-guarantee.glitch.me/kurikulums";
  const breadcrumbs = [ "Input Data", "Doc Jurusan", "Kurikulum"];
  const { datas, isLoading } = useGetData(apiUrl);
  const { colorMode } = useColorMode();

  return (
    <Sidebar breadcrumbs={breadcrumbs}>
      <Flex className="h-fit flex-col gap-3">
        <Flex
          className={`${
            colorMode === "dark"
              ? "bg-secondaryGray-900"
              : "bg-secondaryGray-300"
          } rounded-xl py-5 px-10 justify-between`}
        >
          <Text className="flex items-center gap-2 font-semibold text-xl">
            <FaBookOpen className="text-brandTabs-300" /> Input Kurikulums
          </Text>
          <IconButton colorScheme="green" icon={<FaPlus />} />
        </Flex>
        <Box
          className={`${
            colorMode === "dark"
              ? "bg-secondaryGray-900"
              : "bg-secondaryGray-300"
          } rounded-xl`}
        >
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
              <Thead>
                <Tr>
                  <Th textAlign="center">No</Th>
                  <Th textAlign="center">ID</Th>
                  <Th textAlign="center">Mata Kuliah</Th>
                  <Th textAlign="center">SKS</Th>
                  <Th textAlign="center">T/P</Th>
                  <Th textAlign="center">Semester</Th>
                  <Th textAlign="center">Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {isLoading ? (
                  <Tr>
                    <Td className="">
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
                        <Td className="flex justify-center items-center gap-2">
                          <IconButton
                            colorScheme="yellow"
                            icon={<FaEdit />}
                            // onClick={() => handleEdit(data)}
                          />
                          <IconButton
                            colorScheme="red"
                            icon={<FaTrash />}
                            // icon={
                            //   deletingItemId === data.id ? (
                            //     <Spinner size="sm" />
                            //   ) : (
                            //     <FaTrash />
                            //   )
                            // }
                            // onClick={() => handleDelete(data.id)}
                            // isDisabled={deletingItemId === data.id}
                          />
                        </Td>
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

export default InputKurikulums;
