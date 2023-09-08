import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
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
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import {
  useDeleteData,
  useGetData,
  usePostData,
  usePutData,
} from "../../../../hooks/apiMethod";
import { BsFiletypeDoc, BsFillFolderFill } from "react-icons/bs";
import { Field, Form, Formik, useFormik } from "formik";
import useToastMessages from "../../../../hooks/useToastMessage";
import * as Yup from "yup";

const CTamplate = ({endpoint, title}) => {
  const { colorMode } = useColorMode();
  const apiUrl = `https://knowledgeable-painted-guarantee.glitch.me/${endpoint}`;
  const { showSuccessToast, showErrorToast } = useToastMessages();
  const [isSubmitting, setIsSubmitting] = useState(null);
  const [isDeleting, setIsDeleting] = useState(null);
  const [isEditing, setIsEditing] = useState(null);
  const [idEditValue, setIdEditValue] = useState(null);

  const { datas, isLoading, refetchData } = useGetData(apiUrl);
  const { postData } = usePostData();
  const { deleteData } = useDeleteData();
  const { putData } = usePutData();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlePostData = async (values, actions) => {
    values.link = values.link.startsWith("https://")
      ? values.link
      : `https://${values.link}`;
    setIsSubmitting(true);
    try {
      await postData(apiUrl, values);
      showSuccessToast("Data Telah Ditambahkan");
    } catch (error) {
      console.log("Error :", error);
      showErrorToast("Terjadi kesalahan", "Error");
    } finally {
      setIsSubmitting(null);
      actions.resetForm();
      refetchData();
    }
  };

  const handleDelete = async (id) => {
    setIsDeleting(true);
    try {
      await deleteData(apiUrl, id);
      showSuccessToast("Data Telah Dihapus");
    } catch (error) {
      console.log("Error :", error);
      showErrorToast("Terjadi kesalahan", "Error");
    } finally {
      refetchData();
      setIsDeleting(null);
    }
  };

  const handleEdit = async (values, id, actions) => {
    values.link = values.link.startsWith("https://")
      ? values.link
      : `https://${values.link}`;
    setIsSubmitting(true);
    try {
      await putData(apiUrl, id, values);
      showSuccessToast("Data Telah Diperbarui");
    } catch (error) {
      console.log("Error :", error);
      showErrorToast("Terjadi kesalahan", "Error");
    } finally {
      setIsSubmitting(null);
      actions.resetForm();
      refetchData();
    }
  };

  const validationSchema = Yup.object({
    deskripsi: Yup.string().required("Deskripsi is required"),
    link: Yup.string().required("Link is required"),
    status: Yup.string().required("Status is required"),
    tipe: Yup.string().required("Type is required"),
  });

  const formik = useFormik({
    initialValues: {
      deskripsi: "",
      link: "",
      status: "",
      tipe: "",
    },
    validationSchema,
    onSubmit: async (values, actions) => {
      if (isEditing) {
        handleEdit(values, idEditValue, actions);
      } else {
        actions.resetForm();
        handlePostData(values, actions);
      }
    },
  });

  return (
    <>
      <Box
        className={`${
          colorMode === "dark" ? "bg-brandTabs-900" : "bg-white"
        } p-5 rounded-xl`}
      >
        <Flex className="items-center justify-between">
          <Text className="text-xl font-semibold">{title}</Text>
          <IconButton onClick={onOpen} colorScheme="green" icon={<FaPlus />} />
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
                  <Th w={100} textAlign={"center"}>
                    STATUS
                  </Th>
                  <Th w={100} textAlign={"center"}>
                    ACTION
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
                    <Td>{data.status}</Td>
                    <Td>
                      <Flex className="gap-2">
                        <IconButton
                          onClick={() => {
                            setIsEditing(true);
                            setIdEditValue(data.id);
                            onOpen();
                            formik.initialValues.deskripsi = data.deskripsi;
                            formik.initialValues.link = data.link;
                            formik.initialValues.status = data.status;
                            formik.initialValues.tipe = data.tipe;
                          }}
                          colorScheme="yellow"
                          icon={<FaEdit />}
                        />
                        <IconButton
                          onClick={() => handleDelete(data.id)}
                          isLoading={isDeleting}
                          colorScheme="red"
                          icon={<FaTrash />}
                        />
                      </Flex>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </Box>
      {/* modal tambah data */}
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsEditing && setIsEditing(null);
          formik.initialValues.deskripsi = "";
          formik.initialValues.link = "";
          formik.initialValues.status = "";
          formik.initialValues.tipe = "";
          onClose();
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {isEditing ? "Perbarui Data" : "Tambah Data"}
          </ModalHeader>
          <ModalCloseButton />
          <Formik
            initialValues={formik.initialValues}
            validationSchema={formik.validationSchema}
            onSubmit={formik.handleSubmit}
          >
            <Form>
              <ModalBody>
                <VStack spacing={4} align={"flex-start"}>
                  {/* Deskripsi */}
                  <FormControl
                    isInvalid={
                      formik.touched.deskripsi && formik.errors.deskripsi
                    }
                  >
                    <FormLabel>Deskripsi</FormLabel>
                    <Input
                      type="text"
                      name="deskripsi"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.deskripsi}
                    />
                    {formik.touched.deskripsi && formik.errors.deskripsi && (
                      <FormErrorMessage>
                        {formik.errors.deskripsi}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  {/* link */}
                  <FormControl
                    isInvalid={formik.touched.link && formik.errors.link}
                  >
                    <FormLabel>Link</FormLabel>
                    <Input
                      type="text"
                      name="link"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.link}
                    />
                    {formik.touched.link && formik.errors.link && (
                      <FormErrorMessage>{formik.errors.link}</FormErrorMessage>
                    )}
                  </FormControl>
                  {/* Status */}
                  <FormControl
                    isInvalid={formik.touched.status && formik.errors.status}
                  >
                    <FormLabel>Status</FormLabel>
                    <Field
                      as={Select}
                      name="status"
                      {...formik.getFieldProps("status")}
                    >
                      <option value="">Pilih Status</option>
                      <option value="Terakreditasi">Terakreditasi</option>
                      <option value="Belum Terakreditasi">
                        Belum Terakreditasi
                      </option>
                    </Field>
                    <FormErrorMessage>
                      {formik.touched.status && formik.errors.status}
                    </FormErrorMessage>
                  </FormControl>
                  {/* Tipe */}
                  <FormControl
                    isInvalid={formik.touched.tipe && formik.errors.tipe}
                  >
                    <FormLabel>Tipe</FormLabel>
                    <Field
                      as={Select}
                      name="status"
                      {...formik.getFieldProps("tipe")}
                    >
                      <option value="">Pilih Tipe</option>
                      <option value="Folder">Folder</option>
                      <option value="File">File</option>
                    </Field>
                    <FormErrorMessage>
                      {formik.touched.tipe && formik.errors.tipe}
                    </FormErrorMessage>
                  </FormControl>
                </VStack>
              </ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="green"
                  type="submit"
                  isLoading={isSubmitting}
                >
                  {isEditing ? "Perbarui" : "Tambah"}
                </Button>
              </ModalFooter>
            </Form>
          </Formik>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CTamplate;
