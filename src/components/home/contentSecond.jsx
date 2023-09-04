import React from "react";
import InteractionState from "../../components/home/interactionState";
import {
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
import { useGetData } from "../../hooks/apiMethod";

const ContentSecond = () => {
  const apiUrl =
    "https://knowledgeable-painted-guarantee.glitch.me/dataAkreditasi";
  const { colorMode } = useColorMode();
  const { datas, isLoading, refetchData } = useGetData(apiUrl);

  const combinedDataBody = datas?.reduce((combined, current) => {
    return combined.concat(current.dataBody);
  }, []);

  const switchTheme = (a, b) => {
    if (colorMode === "dark") {
      return a;
    } else {
      return b;
    }
  };
  return (
    <div className="grid grid-cols-2 gap-2 h-[300px] mt-3">
      <div
        className={`${switchTheme(
          "bg-secondaryGray-900",
          "bg-secondaryGray-300"
        )} p-1 rounded-md`}
      >
        <InteractionState />
      </div>
      <div
        className={`${switchTheme(
          "bg-secondaryGray-900 scrollbar-thumb-gray-700 scrollbar-track-gray-500",
          "bg-secondaryGray-300 scrollbar-thumb-gray-400 scrollbar-track-gray-300"
        )} p-2 rounded-md overflow-y-auto scrollbar-thin `}
      >
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <TableContainer>
            <Table variant="simple">
              <TableCaption>Status Akreditasi</TableCaption>
              <Thead>
                <Tr>
                  <Th>Data Akreditasi</Th>
                  <Th textAlign="center">Status</Th>
                </Tr>
              </Thead>
              {combinedDataBody?.map((data, index) => {
                return (
                  <Tbody key={index}>
                    <Tr>
                      <Td>{data.deskripsi}</Td>
                      <Td textAlign="center" px={0}>
                        Belum Terakreditasi{" "}
                      </Td>
                    </Tr>
                  </Tbody>
                );
              })}
            </Table>
          </TableContainer>
        )}
      </div>
    </div>
  );
};

export default ContentSecond;
