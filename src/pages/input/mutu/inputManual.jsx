import React, { useState } from "react";
import Sidebar from "../../../layout/sidebar";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Link,
  Spinner,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";
import * as Yup from "yup";
import {
  useGetData,
  usePostData,
  usePutData,
  useDeleteData,
} from "../../../hooks/apiMethod";
import useToastMessages from "../../../hooks/useToastMessage";
import EditAddModal from "../../../components/modal";

const InputManual = () => {
  const apiUrl = "https://energetic-pear-petticoat.cyclic.app/manual";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deletingItemId, setDeletingItemId] = useState(null);
  const [editingData, setEditingData] = useState(null);
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { showSuccessToast, showErrorToast } = useToastMessages();
  const breadcrumbs = ["Edit Data", "Penjaminan Mutu", "Input Manual"];

  const initialValues = {
    deskripsi: "",
    link: "",
  };

  const formControls = [
    { name: "deskripsi", label: "Deskripsi" },
    { name: "link", label: "Link Download" },
  ];

  const validationSchema = Yup.object({
    deskripsi: Yup.string().required("Deskripsi Harus Diisi"),
    link: Yup.string().required("Link Tidak Boleh Kosong"),
  });

  const { datas, isLoading, refetchData } = useGetData(apiUrl);
  const { postData } = usePostData();
  const { putData } = usePutData();
  const { deleteData } = useDeleteData();

  const onSubmit = async (values, actions) => {
    setIsSubmitting(true);
    try {
      if (editingData) {
        await putData(apiUrl, editingData.id, values);
        setEditingData(null);
      } else {
        await postData(apiUrl, values);
      }

      refetchData();
      setIsSubmitting(false);
      actions.resetForm();

      showSuccessToast(
        editingData ? "Data Telah Diperbarui" : "Data Telah Ditambahkan"
      );
    } catch (error) {
      console.error("Error:", error);
      setIsSubmitting(false);
      showErrorToast("Terjadi kesalahan", "Error");
    }
  };

  const handleEdit = (data) => {
    setEditingData(data);
    onOpen();
  };

  const handleDelete = async (id) => {
    setDeletingItemId(id);

    try {
      await deleteData(apiUrl, id);

      refetchData();
      setDeletingItemId(null);

      showSuccessToast("Data Telah Dihapus");
    } catch (error) {
      setDeletingItemId(null);
      console.error("Error:", error);
      showErrorToast("Terjadi kesalahan saat menghapus data", "Error");
    }
  };

  return (
    <Sidebar breadcrumbs={breadcrumbs}>
      <Flex className="h-fit flex-col gap-3">
        <Box
          className={`${
            colorMode === "dark"
              ? "bg-secondaryGray-900"
              : "bg-secondaryGray-300"
          } rounded-xl py-5 px-10 flex items-center justify-between`}
        >
          <h2 className="flex items-center gap-2 font-semibold text-xl">
            Input Manual
          </h2>
          <Button onClick={onOpen} colorScheme="green">
            TAMBAH
          </Button>
        </Box>
        <Box
          className={`${
            colorMode === "dark"
              ? "bg-secondaryGray-900"
              : "bg-secondaryGray-300"
          } rounded-xl`}
        >
          <TableContainer>
            <Table variant="simple">
              <TableCaption>Copyright Manajemen Informatika</TableCaption>
              <Thead>
                <Tr>
                  <Th textAlign="center" className="w-[50px]">
                    No
                  </Th>
                  <Th textAlign="start">Deskripsi</Th>
                  <Th textAlign="center" className="w-[100px]">
                    Link Download
                  </Th>
                  <Th textAlign="center" className="w-[100px]">
                    Actions
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {isLoading ? (
                  <Tr>
                    <Td>
                      <p className="px-10">Loading Data...</p>
                    </Td>
                  </Tr>
                ) : (
                  datas?.map((data, index) => (
                    <Tr key={index}>
                      <Td textAlign="center">{index + 1}</Td>
                      <Td>{data.deskripsi}</Td>
                      <Td textAlign="center">
                        <Link href={data.link} className="text-blue-500">
                          Download
                        </Link>
                      </Td>
                      <Td className="flex justify-center items-center gap-2">
                        <IconButton
                          colorScheme="yellow"
                          icon={<FaEdit />}
                          onClick={() => handleEdit(data)}
                        />
                        <IconButton
                          colorScheme="red"
                          icon={
                            deletingItemId === data.id ? (
                              <Spinner size="sm" />
                            ) : (
                              <FaTrash />
                            )
                          }
                          onClick={() => handleDelete(data.id)}
                          isDisabled={deletingItemId === data.id}
                        />
                      </Td>
                    </Tr>
                  ))
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
      {/* Modal ADD Data Dan Edit Data */}
      <EditAddModal
        title={"Manual"}
        isOpen={isOpen}
        onClose={() => {
          setEditingData(null);
          onClose();
        }}
        editingData={editingData}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
        initialValues={initialValues}
        validationSchema={validationSchema}
        formControls={formControls}
      />
    </Sidebar>
  );
};

export default InputManual;
