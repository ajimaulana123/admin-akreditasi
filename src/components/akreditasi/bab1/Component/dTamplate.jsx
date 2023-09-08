import {
  Box,
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
import { useGetData } from "../../../../hooks/apiMethod";
import { BsFiletypeDoc, BsFillFolderFill } from "react-icons/bs";

const DTamplate = ({ endpoint, title }) => {
  const { colorMode } = useColorMode();
  const apiUrl = `https://knowledgeable-painted-guarantee.glitch.me/${endpoint}`;
  const { datas, isLoading, refetchData } = useGetData(apiUrl);

  return (
    <>
      <Box
        className={`${
          colorMode === "dark" ? "bg-brandTabs-900" : "bg-white"
        } p-5 rounded-xl`}
      >
        <Flex className="items-center justify-between">
          <Text className="text-xl font-semibold">{title}</Text>
        </Flex>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th w={50}>NO</Th>
                  <Th>DESKRIPSI</Th>
                  <Th w={100} textAlign={"center"}>
                    DOKUMEN
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {datas.map((data, index) => (
                  <Tr key={index}>
                    <Td>{index + 1}</Td>
                    <Td>{data.deskripsi}</Td>
                    <Td>
                      <Link href={data.link} isExternal>
                        {data.tipe === "Folder" ? (
                          <BsFillFolderFill className="mx-auto hover:text-yellow-700 cursor-pointer" />
                        ) : (
                          <BsFiletypeDoc className="mx-auto hover:text-blue-500 cursor-pointer" />
                        )}
                      </Link>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </>
  );
};

export default DTamplate;
