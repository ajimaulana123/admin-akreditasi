import React, { useState } from "react";
import Sidebar from "../../../layout/sidebar";
import { BsFillCalendarDateFill } from "react-icons/bs";
import {
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  Image,
  Text,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";
import {
  useDeleteData,
  useGetData,
  usePostData,
} from "../../../hooks/apiMethod";
import useToastMessage from "../../../hooks/useToastMessage";

const InputSosialisasi = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2021;

  const yearsArray = Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => startYear + index
  );

  const [year, setYear] = useState(2021);
  const apiUrl = `https://akreditasi-mi-api.vercel.app/api/makrab/${year}`;
  const breadcrumbs = ["Input Data", "Doc Mahasiswa", "Input Sosialisasi"];
  const { colorMode } = useColorMode();
  const { datas, isLoading, refetchData } = useGetData(apiUrl);
  const { postData } = usePostData();
  const { deleteData, isDeleting } = useDeleteData();
  const { showSuccessToast, showErrorToast } = useToastMessage();
  const [preUpload, setPreUpload] = useState(null);
  const [isSubbmiting, setIsSubbmiting] = useState(null);
  const [image, setImaage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setImaage(file);
      setPreUpload(true);
    }
  };

  const handlePostImage = async () => {
    setIsSubbmiting(true);
    try {
      await postData(apiUrl, {
        image,
      });
      refetchData();
      showSuccessToast("Gambar berhasil diunggah");
    } catch (error) {
      console.log(error);
      showErrorToast("Ada keanomalian");
    } finally {
      setImaage(null);
      setIsSubbmiting(null);
      setPreUpload(false);
      setSelectedImage(null);
    }
  };

  const handleDelteImage = async (id) => {
    try {
      await deleteData(apiUrl, id);
      refetchData();
      showSuccessToast("Gambar berhasil dihapus");
    } catch (error) {
      console.log(error);
      showErrorToast("Ada keanomalian");
    }
  };

  return (
    <Sidebar breadcrumbs={breadcrumbs}>
      <Flex className="h-fit flex-col gap-3">
        <Flex
          className={`${
            colorMode === "dark"
              ? "bg-secondaryGray-900"
              : "bg-secondaryGray-300"
          } rounded-xl py-5 px-10 justify-between items-center`}
        >
          <Box>
            <Text className="flex items-center gap-2 font-semibold text-xl">
              <BsFillCalendarDateFill className="text-brandTabs-300" /> Tahun :{" "}
            </Text>
            <Box className="mt-2 flex gap-3">
              {yearsArray.map((year, index) => (
                <Button
                  key={index}
                  onClick={() => setYear(year)}
                  size="sm"
                  colorScheme="blue"
                >
                  {year}
                </Button>
              ))}
            </Box>
          </Box>
        </Flex>
        <Flex
          className={`${
            colorMode === "dark"
              ? "bg-secondaryGray-900"
              : "bg-secondaryGray-300"
          } rounded-xl p-5 flex-col justify-center items-center`}
        >
          <input
            type="file"
            id="upload-image"
            onChange={handleImageChange}
            className="hidden"
          />
          {preUpload ? (
            <Button
              isLoading={isSubbmiting}
              loadingText="Mengunggah"
              colorScheme="green"
              onClick={handlePostImage}
            >
              Upload
            </Button>
          ) : (
            <label htmlFor="upload-image">
              <Button as={"span"} colorScheme="green">
                Pilih Image
              </Button>
            </label>
          )}
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Pratinjau Gambar"
              className="mt-4 max-w-full max-h-[300px] rounded-xl shadow"
            />
          )}
        </Flex>
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
                  className="relative overflow-hidden group rounded-xl"
                >
                  <Image
                    className="aspect-video w-full object-cover rounded-xl border border-brandTabs-300 shadow-md"
                    src={image.url}
                    alt={image.filename}
                  />
                  <Flex className="absolute top-0 -right-20 group-hover:right-0 duration-300 w-[100px] h-full justify-end p-3 bg-gradient-to-l from-gray-700 via-transparent to-transparent rounded-r-xl">
                    <IconButton
                      isLoading={isDeleting}
                      onClick={() => handleDelteImage(image.id)}
                      icon={<FaTrash />}
                      colorScheme="red"
                    />
                  </Flex>
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

export default InputSosialisasi;
