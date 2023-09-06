import React, { useState } from "react";
import Sidebar from "../../../layout/sidebar";
import { BsFillCalendarDateFill } from "react-icons/bs";
import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  useColorMode,
} from "@chakra-ui/react";

const dataImg = [
  { url: "https://www.mipolitamaak.my.id/assets/toilet-f7393ff3.jpeg" },
  { url: "https://www.mipolitamaak.my.id/assets/ruang-teori-1-bf54d824.jpeg" },
  { url: "https://www.mipolitamaak.my.id/assets/ruang-teori-2-0e8597ad.jpeg" },
  { url: "https://www.mipolitamaak.my.id/assets/perpustakaan-0199fdcb.jpeg" },
  {
    url: "https://www.mipolitamaak.my.id/assets/parkiran-tamu-1-dd267f52.jpeg",
  },
  {
    url: "https://www.mipolitamaak.my.id/assets/parkiran-tamu-2-45f36163.jpeg",
  },
  {
    url: "https://www.mipolitamaak.my.id/assets/parkiran-motor-dosen-91633a2c.jpeg",
  },
  {
    url: "https://www.mipolitamaak.my.id/assets/parkiran-mobil-dosen-34e98507.jpeg",
  },
  {
    url: "https://www.mipolitamaak.my.id/assets/parkiran-mahasiswa-4da4f51c.jpeg",
  },
  { url: "https://www.mipolitamaak.my.id/assets/lab-komp-1-6c8da47f.jpeg" },
  { url: "https://www.mipolitamaak.my.id/assets/lab-komp-2-bfcab0e8.jpeg" },
  { url: "https://www.mipolitamaak.my.id/assets/koperasi-bff2a966.jpeg" },
  { url: "https://www.mipolitamaak.my.id/assets/bem-22a3b22f.jpeg" },
  { url: "https://www.mipolitamaak.my.id/assets/blm-8dcc5977.jpeg" },
  { url: "https://www.mipolitamaak.my.id/assets/fkui-86d2a4b2.jpeg" },
  { url: "https://www.mipolitamaak.my.id/assets/kantin-a77930e9.jpeg" },
  { url: "https://www.mipolitamaak.my.id/assets/ksr-31e70391.jpeg" },
  { url: "https://www.mipolitamaak.my.id/assets/maliapala-2757708e.jpeg" },
  { url: "https://www.mipolitamaak.my.id/assets/masjid-fb53c603.jpeg" },
  { url: "https://www.mipolitamaak.my.id/assets/ordani-a5e44248.jpeg" },
  { url: "https://www.mipolitamaak.my.id/assets/pmk-96a19ee5.jpeg" },
  { url: "https://www.mipolitamaak.my.id/assets/radio-de00f986.jpeg" },
  { url: "https://www.mipolitamaak.my.id/assets/teater-72b137f0.jpeg" },
];

const SaranaPrasarana = () => {
  const [year, setYear] = useState(2022);
  const breadcrumbs = ["Data Table", "Sarana Prasarana"];
  const { colorMode } = useColorMode();

  return (
    <Sidebar breadcrumbs={breadcrumbs}>
      <Flex className="h-fit flex-col gap-3">
        <Box
          className={`${
            colorMode === "dark"
              ? "bg-secondaryGray-900"
              : "bg-secondaryGray-300"
          } rounded-xl`}
        >
          <Box className="p-10 grid xl:grid-cols-2 gap-2">
            {dataImg.map((img, index) => (
              <Image
                key={index}
                className="aspect-video w-full object-cover rounded-xl border border-brandTabs-300 shadow-md"
                src={img.url}
                alt="Dan Abramov"
              />
            ))}
          </Box>
        </Box>
      </Flex>
    </Sidebar>
  );
};

export default SaranaPrasarana;
