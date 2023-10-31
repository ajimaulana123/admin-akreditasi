import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import LkpsTamplate from "./lkpsTamplate";

const DataC = [
  {
    title: "Visi, Misi, Tujuan, dan Strategi",
    endpoint: "visi-misi-lkps"
  },
  {
    title: "Tata Pamong, Tata Kelola, dan Kerjasama",
    endpoint: "tata-pamong-lkps"
  },
  {
    title: "Mahasiswa",
    subPath: [
      {
        subTitle: "3.1 Jumlah Calon Mahasiswa Baru",
        subEndpoint: "jumlah-calon-mahasiswa-baru"
      }
    ]
  },
  {
    title: "Sumber Daya Manusia",
    subPath: [
      {
        subTitle: "4.1 Rata Rata Beban DTPR Per Semester, Pada TS",
        subEndpoint: "rata-rata-dtpr-lkps"
      },
      {
        subTitle: "4.2 Kualifikasi Tenaga Pendidikan",
        subEndpoint: "kualifikasi-tenaga-pendidikan-lkps"
      }
    ]
  },
  {
    title: "Keuangan, Sarana, dan Prasarana",
    subPath: [
      {
        subTitle: "5.1 Sumber Pendanaan Program Studi Pada TS",
        subEndpoint: "sumber-pendanaan-program-studi-lkps"
      },
      {
        subTitle: "5.2 Aksesbilitas Data Dalam Sistem Informasi",
        subEndpoint: "aksesbilitas-data-lkps"
      },
      {
        subTitle: "5.3 Pendayagunaan Sarana Dan Prasarana Utama",
        subEndpoint: "pendayagunaan-lkps"
      }
    ]
  },
  {
    title: "Luaran Dan Capaian Tridarma",
    subPath: [
      {
        subTitle: "9.1 IPK Lulusan",
        subEndpoint: "ipk-lulusan-lkps"
      },
      {
        subTitle: "9.2 Kelulusan Tepat Waktu",
        subEndpoint: "kelulusan-tepat-waktu-lkps"
      },
      {
        subTitle: "9.3 Kepuasan Pengguna Lulusan",
        subEndpoint: "kepuasan-pengguna-lulusan-lkps"
      },
    {
        subTitle: "9.4 Rata-rata Masa Tunggu Lulusan Untuk Bekerja Pertama Kali",
        subEndpoint: "rata-rata-masa-tunggu-lulusan-lkps"
      },
    {
        subTitle: "9.5 Kesesuaian Bidang Kerja Lulusan",
        subEndpoint: "kesesuaian-bidang-kerja-lulusan-lkps"
      },
    {
        subTitle: "9.6 Penelitian dan Kegiatan Pengabdian Kepada Masyarakat dari DTPR",
        subEndpoint: "penelitian-dan-kegiatan-pengabdian-lkps"
      }
    ]
  },
];


const PointLkps = () => {
  const { colorMode } = useColorMode();
  return (
    <Accordion allowMultiple defaultIndex={[0]}>
      <AccordionItem
        className={`${
          colorMode === "dark" ? "bg-brandTabs-900" : "bg-white"
        } border-none rounded-xl p-3 shadow`}
      >
        <Text>
          <AccordionButton className="text-2xl font-semibold py-3">
            <Text className="text-xl font-semibold" flex="1" textAlign="left">
              Poin LKPS
            </Text>
            <AccordionIcon />
          </AccordionButton>
        </Text>
        <AccordionPanel pb={3}>
          <Accordion>
            {DataC.map((data, index) => (
              <AccordionItem
                key={index}
                className={`${
                  colorMode === "dark"
                    ? "bg-secondaryGray-900"
                    : "bg-secondaryGray-300"
                } border-none rounded-xl mb-3 shadow`}
              >
                <AccordionButton>
                  <Text className="flex-1 text-start py-2 text-xl">
                    {data.title}
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Accordion >
                    {data.subPath ? (
                      <Stack spacing={3}>
                        {data.subPath.map((path, index) => (
                        <LkpsTamplate key={index} endpoint={path.subEndpoint} title={path.subTitle} />
                      ))}
                      </Stack>
                    ) : (
                      <LkpsTamplate endpoint={data.endpoint} />
                    )}
                  </Accordion>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default PointLkps