import React, { useState } from "react";
import Sidebar from "../../../layout/sidebar";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { Box, Button, Divider, Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import { useGetData } from "../../../hooks/apiMethod";

const imageYearData = {
  2022: [
    {
      src: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Gambar 1 - Tahun 2022",
    },
    {
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Gambar 2 - Tahun 2022",
    },
  ],
  2021: [
    {
      src: "https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Gambar 1 - Tahun 2021",
    },
    {
      src: "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Gambar 2 - Tahun 2021",
    },
  ],
};

const Makrab = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2021;

  const yearsArray = Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => startYear + index
  );

  const [year, setYear] = useState(2021);
  const apiUrl = `https://akreditasi-mi-api.vercel.app/api/makrab/${year}`;
  const breadcrumbs = ["Data Table", "Doc Mahasiswa", "Makrab"];
  const {datas, isLoading} = useGetData(apiUrl)
  const {colorMode} = useColorMode()

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
            <BsFillCalendarDateFill className="text-brandTabs-300" /> Tahun :{" "}
          </h2>
          <Box className="mt-2 flex gap-3">
            {yearsArray.map((year, index) => (
              <Button
                key={index}
                colorScheme="blue"
                onClick={() => setYear(year)}
                size="sm"
              >
                {year}
              </Button>
            ))}
          </Box>
        </Box>
        <Box
          className={`${
            colorMode === "dark"
              ? "bg-secondaryGray-900"
              : "bg-secondaryGray-300"
          } rounded-xl`}
        >
          <Box className="px-10 py-3">
            <h1 className="text-xl font-semibold">Recap {year}</h1>
          </Box>
          <Divider />
          <Box className="px-10 py-5 grid xl:grid-cols-2 gap-2">
            {isLoading ? (
              <Text>Loading...</Text>
            ) : datas?.dataLength > 0 ? (
              datas.data.map((image, index) => (
                <Box
                  key={index}
                  className="overflow-hidden group rounded-xl"
                >
                  <Image
                    className="aspect-video w-full object-cover rounded-xl border border-brandTabs-300 shadow-md"
                    src={image.url}
                    alt={image.filename}
                  />
                </Box>
              ))
            ) : (
              <Text>Belum Ada Data</Text>
            )}
          </Box>
        </Box>
      </Flex>
    </Sidebar>
  );
};

export default Makrab;
