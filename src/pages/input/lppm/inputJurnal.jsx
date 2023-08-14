import React, { useState, useEffect } from "react";
import Sidebar from "../../../layout/sidebar";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  IconButton,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import {
  useGetData,
  usePostData,
  usePutData,
  useDeleteData,
} from "../../../hooks/apiMethod";
import useToastMessages from "../../../hooks/useToastMessage";

const InputJurnal = () => {
  const apiUrl =
    "https://knowledgeable-painted-guarantee.glitch.me/jurnal_lppm";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deletingItemId, setDeletingItemId] = useState(null);
  const [editingData, setEditingData] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { showSuccessToast, showErrorToast } = useToastMessages();
  const breadcrumbs = ["Data Table", "Download", "Input Jurnal"];
  const initialValues = {
    deskripsi: "",
    link: "",
  };

  const validationSchema = Yup.object({
    deskripsi: Yup.string().required("Deskripsi Harus Diisi"),
    link: Yup.string().required("Link Tidak Boleh Kosong"),
  });

  const { data: fetchedData, isLoading, refetchData } = useGetData(apiUrl);
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
        <Box className="bg-secondaryGray-300 rounded-xl py-5 px-10 flex items-center justify-between">
          <h2 className="flex items-center gap-2 font-semibold text-xl">
            Input Jurnal
          </h2>
          <Button onClick={onOpen} colorScheme="green">
            TAMBAH
          </Button>
        </Box>
        <Box className="bg-secondaryGray-300 rounded-xl">
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
                  fetchedData?.map((data, index) => (
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
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setEditingData(null);
          onClose();
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {editingData ? "Edit Data BPK" : "Tambah Data BPK"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={editingData || initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form>
                  <FormControl
                    mb={4}
                    isInvalid={
                      formik.errors.deskripsi && formik.touched.deskripsi
                    }
                  >
                    <label>Deskripsi</label>
                    <Input
                      type="text"
                      name="deskripsi"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={
                        formik.values.deskripsi ||
                        (editingData && editingData.deskripsi) ||
                        ""
                      }
                    />
                    <FormErrorMessage>
                      {formik.touched.deskripsi && formik.errors.deskripsi}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl
                    mb={4}
                    isInvalid={formik.errors.link && formik.touched.link}
                  >
                    <label>Link Download</label>
                    <Input
                      type="text"
                      name="link"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={
                        formik.values.link ||
                        (editingData && editingData.link) ||
                        ""
                      }
                    />
                    <FormErrorMessage>
                      {formik.touched.link && formik.errors.link}
                    </FormErrorMessage>
                  </FormControl>

                  <ModalFooter>
                    <Button
                      type="submit"
                      colorScheme="green"
                      mr={3}
                      isLoading={isSubmitting}
                    >
                      {editingData ? "PERBARUI" : "TAMBAH"}
                    </Button>
                  </ModalFooter>
                </Form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Sidebar>
  );
};

export default InputJurnal;
