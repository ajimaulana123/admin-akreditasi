import React, { useState } from "react";
import Sidebar from "../../../layout/sidebar";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Link,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { BiSolidFileDoc } from "react-icons/bi";
import {
  useDeleteData,
  useGetData,
  usePostData,
  usePutData,
} from "../../../hooks/apiMethod";
import { FaEdit, FaTrash } from "react-icons/fa";
import EditAddModal from "../../../components/modal";
import * as Yup from "yup";
import useToastMessages from "../../../hooks/useToastMessage";

const InputAkreditasi = () => {
  const apiUrl =
    "https://knowledgeable-painted-guarantee.glitch.me/dataAkreditasi";
  const [editingId, setEditingId] = useState(null);
  const [editingJudul, setEditingJudul] = useState(null);
  const [editingData, setEditingData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [indexBody, setIndexBody] = useState(null);
  const [indexItemDeleting, setIndexItemDeleting] = useState(null);
  const [isDeletByJudul, setIsDeleteByJudul] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { showSuccessToast, showErrorToast } = useToastMessages();
  const { data: fetchDatas, isLoading, refetchData } = useGetData(apiUrl);
  const { postData } = usePostData();
  const { putData } = usePutData();
  const { deleteData } = useDeleteData();
  const breadcrumbs = ["Input Data", "Akreditasi"];

  const formControls = [
    { name: "judul", label: "Judul" },
    { name: "deskripsi", label: "Deskripsi" },
    { name: "link", label: "Link Download" },
  ];

  const initialValues = {
    judul: editingData?.judul || "",
    deskripsi: editingData?.deskripsi || "",
    link: editingData?.link || "",
  };

  const validationSchema = Yup.object({
    judul: Yup.string().required("Judul Harus Diisi"),
    deskripsi: Yup.string().required("Deskripsi Harus Diisi"),
    link: Yup.string().required("Link Tidak Boleh Kosong"),
  });

  const onSubmit = async (values, actions) => {
    setIsSubmitting(true);
    try {
      if (editingData) {
        const existingData = fetchDatas.find(
          (data) => values.judul === values.judul
        );

        if(existingData) {
          const newData = {
            ...existingData,
            dataBody: existingData.dataBody?.map(item => {
              if(item.deskripsi === editingData.deskripsi && item.link === editingData.link) {
                return {
                  ...item,
                  deskripsi: values.deskripsi,
                  link: values.link
                }
              }
              return item
            })
          }
          await putData(apiUrl, editingId, newData)
        }
      } else {
        const existingData = fetchDatas.find(
          (data) => data.judul === values.judul
        );

        if (existingData) {
          existingData.dataBody.push({
            deskripsi: values.deskripsi,
            link: values.link,
          });

          await putData(apiUrl, existingData.id, existingData);
        } else {
          await postData(apiUrl, {
            judul: values.judul,
            dataBody: [{ deskripsi: values.deskripsi, link: values.link }],
          });
        }
      }

      setIsSubmitting(false);
      refetchData();
      actions.resetForm();

      // Show success message
      showSuccessToast("Data Telah Ditambahkan");
    } catch (error) {
      console.error("Error:", error);
      setIsSubmitting(false);
      showErrorToast("Terjadi kesalahan", "Error");
    }
  };

  const handleDeleteItem = async (dataId, body, rowIndex) => {
    setIndexBody(body.deskripsi);
    setIndexItemDeleting(rowIndex);
    try {
      const existingData = await fetchDatas.find((da) => da.id === dataId);

      if (existingData) {
        const newDataBody = existingData.dataBody.filter(
          (data, index) => index !== rowIndex
        );
        await putData(apiUrl, dataId, {
          judul: existingData.judul,
          dataBody: newDataBody,
          id: existingData.id,
        });
      }

      setIndexItemDeleting(null);
      setIndexBody(null);
      refetchData();
      showSuccessToast("Data Berhasil Dihapus");
    } catch (error) {
      setIndexBody(null);
      setIndexItemDeleting(null);
      console.error("Error:", error);
      showErrorToast("Terjadi kesalahan", "Error");
    }
  };

  const handleDeleteByJudul = async (data) => {
    setIsDeleteByJudul(data.judul);
    try {
      await deleteData(apiUrl, data.id);
      setIsDeleteByJudul(null);
      refetchData();
      showSuccessToast("Data Berhasil Dihapus");
    } catch (error) {
      console.error("Error:", error);
      setIsDeleteByJudul(null);
      showErrorToast("Terjadi kesalahan", "Error");
    }
  };

  const hanfleEdit = (id, judul, data) => {
    setEditingId(id);
    setEditingJudul(judul);
    setEditingData(data);
    onOpen();
  };

  return (
    <>
      <Sidebar breadcrumbs={breadcrumbs}>
        <Box className="w-full h-fit bg-secondaryGray-300 rounded-xl p-10">
          {isLoading ? (
            <p>Loading Data....</p>
          ) : (
            <Box className="flex flex-col gap-3">
              <Button onClick={onOpen} colorScheme="green" className="w-fit">
                TAMBAH
              </Button>
              {fetchDatas?.map((data, index) => {
                return (
                  <Card className="h-fit" key={index}>
                    <CardHeader className="flex items-center justify-between">
                      <h1 className="text-2xl font-bold">{data.judul}</h1>
                      <IconButton
                        colorScheme="red"
                        icon={
                          isDeletByJudul === data.judul ? (
                            <Spinner size="sm" />
                          ) : (
                            <FaTrash />
                          )
                        }
                        onClick={() => handleDeleteByJudul(data)}
                        isDisabled={isDeletByJudul === data.judul}
                      />
                    </CardHeader>
                    <CardBody className="py-0">
                      <TableContainer>
                        <Table variant={"simple"}>
                          <Thead>
                            <Tr>
                              <Th textAlign="center" className="w-[50px]">
                                NO
                              </Th>
                              <Th>DESKRIPSI</Th>
                              <Th textAlign="center" className="w-[100px]">
                                DOCUMEN
                              </Th>
                              <Th textAlign="center" className="w-[100px]">
                                ACTIONS
                              </Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            {data.dataBody?.map((body, index) => {
                              return (
                                <Tr key={index}>
                                  <Td textAlign="center">{index + 1}</Td>
                                  <Td>{body.deskripsi}</Td>
                                  <Td textAlign="center">
                                    <Link
                                      href={body.link}
                                      className="flex justify-center"
                                    >
                                      <BiSolidFileDoc className="text-2xl hover:text-blue-500" />
                                    </Link>
                                  </Td>
                                  <Td className="flex justify-center items-center gap-2">
                                    <IconButton
                                      colorScheme="yellow"
                                      icon={<FaEdit />}
                                      onClick={() =>
                                        hanfleEdit(data.id, data.judul, body)
                                      }
                                    />
                                    <IconButton
                                      colorScheme="red"
                                      icon={
                                        indexBody === body.deskripsi ? (
                                          <Spinner size="sm" />
                                        ) : (
                                          <FaTrash />
                                        )
                                      }
                                      onClick={() =>
                                        handleDeleteItem(data.id, body, index)
                                      }
                                      isDisabled={indexItemDeleting === index}
                                    />
                                  </Td>
                                </Tr>
                              );
                            })}
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </CardBody>
                  </Card>
                );
              })}
            </Box>
          )}
        </Box>
      </Sidebar>
      <EditAddModal
        title={"Akreditasi"}
        isOpen={isOpen}
        onClose={() => {
          setEditingData(null);
          setEditingId(null);
          setEditingJudul(null);
          onClose();
        }}
        editingData={
          editingData && {
            judul: editingJudul && editingJudul,
            deskripsi: editingData && editingData.deskripsi,
            link: editingData && editingData.link,
          }
        }
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
        initialValues={initialValues}
        validationSchema={validationSchema}
        formControls={formControls}
      />
    </>
  );
};

export default InputAkreditasi;
