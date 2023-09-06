import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  IconButton,
  Link,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { BiSolidFileDoc } from "react-icons/bi";
import {
  useDeleteData,
  useGetData,
  usePostData,
  usePutData,
} from "../../hooks/apiMethod";
import { FaEdit, FaTrash } from "react-icons/fa";
import EditAddModal from "../../components/modal";
import * as Yup from "yup";
import useToastMessages from "../../hooks/useToastMessage";

const AkreditasiBab1 = () => {
  const apiUrl =
    "https://knowledgeable-painted-guarantee.glitch.me/dataAkreditasi";
  const [editingId, setEditingId] = useState(null);
  const [editingIdNoSub, setEditingIdNoSub] = useState(null);
  const [editingJudul, setEditingJudul] = useState(null);
  const [editingData, setEditingData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [indexBody, setIndexBody] = useState(null);
  const [indexItemDeleting, setIndexItemDeleting] = useState(null);
  const [isDeletByJudul, setIsDeleteByJudul] = useState(null);
  const [bab, setBab] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { showSuccessToast, showErrorToast } = useToastMessages();
  const { datas, isLoading, refetchData } = useGetData(apiUrl);
  const { postData } = usePostData();
  const { putData } = usePutData();
  const { deleteData } = useDeleteData();
  const { colorMode } = useColorMode();

  const formControls =
    isLoading === false && bab === datas[0]?.titleBab
      ? [
          isLoading === false &&
            bab === datas[0]?.titleBab && {
              name: "bab",
              label: "Bab",
              read: true,
            },
          { name: "judul", label: "Judul" },
          { name: "deskripsi", label: "Deskripsi" },
          { name: "link", label: "Link Download" },
        ]
      : [
          {
            name: "bab",
            label: "Bab",
            read: true,
          },
          { name: "deskripsi", label: "Deskripsi" },
          { name: "link", label: "Link Download" },
        ];

  const initialValues =
    isLoading === false && bab === datas[0]?.titleBab
      ? {
          bab: bab,
          judul: editingData?.judul || "",
          deskripsi: editingData?.deskripsi || "",
          link: editingData?.link || "",
        }
      : {
          bab: bab,
          deskripsi: editingData?.deskripsi || "",
          link: editingData?.link || "",
        };

  const validationSchema =
    isLoading === false && bab === datas[0]?.titleBab
      ? Yup.object({
          bab: Yup.string().required("Judul Harus Diisi"),
          judul: Yup.string().required("Judul Harus Diisi"),
          deskripsi: Yup.string().required("Deskripsi Harus Diisi"),
          link: Yup.string().required("Link Tidak Boleh Kosong"),
        })
      : Yup.object({
          bab: Yup.string().required("Judul Harus Diisi"),
          deskripsi: Yup.string().required("Deskripsi Harus Diisi"),
          link: Yup.string().required("Link Tidak Boleh Kosong"),
        });

  const onSubmit = async (values, actions) => {
    setIsSubmitting(true);
    try {
      if (editingData) {
        const [existingData] = datas.filter(
          (item) => item.titleBab === values.bab
        );
        const [findData] =
          bab === datas[0]?.titleBab
            ? existingData.dataBab.filter((item) => item.title === values.judul)
            : existingData.dataBody.filter(
                (item) => item.id === editingIdNoSub
              );

        if (bab === datas[0]?.titleBab) {
          const newData = {
            ...existingData,
            dataBab: existingData.dataBab.map((bab) => {
              if (bab === findData) {
                return {
                  id: findData.id,
                  title: findData.title,
                  dataBody: bab.dataBody.map((body) => {
                    if (body.id === editingId) {
                      return {
                        ...body,
                        deskripsi: values.deskripsi,
                        link: values.link.startsWith("https://")
                          ? values.link
                          : `https://${values.link}`,
                      };
                    } else {
                      return body;
                    }
                  }),
                };
              } else {
                return bab;
              }
            }),
          };
          await putData(apiUrl, existingData.id, newData);
        } else {
          const newData = {
            ...existingData,
            dataBody: existingData.dataBody.map((body) => {
              if (body.id === editingIdNoSub) {
                return {
                  ...body,
                  deskripsi: values.deskripsi,
                  link: values.link.startsWith("https://")
                    ? values.link
                    : `https://${values.link}`,
                };
              } else {
                return body;
              }
            }),
          };
          await putData(apiUrl, existingData.id, newData);
        }
      } else {
        const existingData = datas.filter(
          (item) => item.titleBab === values.bab
        );

        const findKey =
          existingData[0].dataBab &&
          existingData[0].dataBab.filter((item) => item.title === values.judul);

        if (existingData[0].dataBab) {
          if (findKey[0]) {
            const newData = {
              ...existingData[0],
              dataBab: existingData[0].dataBab?.map((bab) => {
                if (bab.title === values.judul) {
                  return {
                    ...bab,
                    dataBody: [
                      ...bab.dataBody,
                      {
                        id: Math.floor(Math.random() * (9999 + 999 + 1)) + 1,
                        deskripsi: values.deskripsi,
                        link: values.link.startsWith("https://")
                          ? values.link
                          : `https://${values.link}`,
                        status: "Belum Terakreditasi",
                      },
                    ],
                  };
                } else {
                  return bab;
                }
              }),
            };
            await putData(apiUrl, existingData[0].id, newData);
          } else {
            const newData = {
              title: values.judul,
              dataBody: [
                {
                  id: Math.floor(Math.random() * (9999 + 999 + 1)) + 1,
                  deskripsi: values.deskripsi,
                  link: values.link.startsWith("https://")
                    ? values.link
                    : `https://${values.link}`,
                  status: "Belum Terakreditasi",
                },
              ],
            };

            existingData[0].dataBab?.push(newData);
            await putData(apiUrl, existingData[0].id, existingData[0]);
          }
        } else {
          console.log(existingData);
          const newData = {
            id: Math.floor(Math.random() * (9999 + 999 + 1)) + 1,
            deskripsi: values.deskripsi,
            link: values.link.startsWith("https://")
              ? values.link
              : `https://${values.link}`,
            status: "Belum Terakreditasi",
          };

          existingData[0].dataBody?.push(newData);
          await putData(apiUrl, existingData[0].id, existingData[0]);
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

  const handleDeleteItem = async (bab, parentId, dataId, body, rowIndex, titleBody) => {
    setIndexBody(body.deskripsi);
    setBab(bab)
    setIndexItemDeleting(rowIndex);
    try {
      const [existingData] = await datas.filter((item) => item.id === parentId);
      console.log({bab, parentId, dataId, body, rowIndex, titleBody});
      console.log(existingData);

      const [findDataDeleteParent] =
        bab === datas[0]?.titleBab
          ? existingData.dataBab.filter((item) => item.title === titleBody)
          : existingData.dataBody.filter((item) => item.id === body.id);

      if (bab === datas[0]?.titleBab) {
        console.log(true);
        if (findDataDeleteParent) {
          const newDataBody = findDataDeleteParent.dataBody.filter(
            body => body.id !== dataId
          );

          const newData = {
            ...existingData,
            dataBab: existingData.dataBab.map(dataBab => {
              if(dataBab.title === titleBody) {
                return {
                  ...dataBab,
                  dataBody: newDataBody
                }
              } else {
                return dataBab
              }
            })
          };
          await putData(apiUrl, existingData.id, newData);
        }
      } else {
        if (findDataDeleteParent) {
          const newDataBoddy = existingData.dataBody.filter(
            (bodyPrev) => bodyPrev.id !== body.id
          );
          const newData = {
            ...existingData,
            dataBody: newDataBoddy,
          };
          await putData(apiUrl, existingData.id, newData);
        }
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

  const handleDeleteByJudul = async (data, parentId, rowIndex) => {
    setIsDeleteByJudul(data.judul);
    try {
      const [existingData] = await datas.filter((item) => item.id === parentId);
      const newDataAfterDelete = existingData.dataBab.filter(
        (_, index) => index !== rowIndex
      );
      const newData = {
        ...existingData,
        dataBab: newDataAfterDelete,
      };

      await putData(apiUrl, existingData.id, newData);
      setIsDeleteByJudul(null);
      refetchData();
      showSuccessToast("Data Berhasil Dihapus");
    } catch (error) {
      console.error("Error:", error);
      setIsDeleteByJudul(null);
      showErrorToast("Terjadi kesalahan", "Error");
    }
  };

  const handleEdit = (id, bab, judul, data) => {
    setBab(bab);
    setEditingId(id);
    setEditingJudul(judul);
    setEditingData(data);
    onOpen();
  };

  const handleEditSecond = (id, idSecond, bab, judul, data) => {
    console.log(idSecond);
    setBab(bab);
    setEditingId(id);
    setEditingIdNoSub(idSecond);
    setEditingJudul(judul);
    setEditingData(data);
    onOpen();
  };

  const switchTheme = (a, b) => {
    if (colorMode === "dark") {
      return a;
    } else {
      return b;
    }
  };

  return (
    <>
      <Flex className="py-10 flex-col gap-5">
        {isLoading ? (
          <p>Loading Data....</p>
        ) : (
          datas.map((dataParent, index) =>
            dataParent.dataBab ? (
              <Box
                key={index}
                className={`${switchTheme(
                  "bg-secondaryGray-900",
                  "bg-secondaryGray-300"
                )} rounded-xl p-10 flex flex-col gap-3`}
              >
                <Flex className=" justify-between items-center">
                  <Text className="text-3xl font-semibold">
                    {dataParent.titleBab}
                  </Text>
                  <Button
                    onClick={() => {
                      setBab(dataParent.titleBab);
                      onOpen();
                    }}
                    colorScheme="green"
                    className="w-fit"
                  >
                    TAMBAH
                  </Button>
                </Flex>
                {dataParent.dataBab?.map((data, index) => {
                  return (
                    <Card
                      className={`${switchTheme(
                        "bg-brandTabs-900",
                        "bg-white"
                      )}`}
                      key={index}
                    >
                      <CardHeader className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold">{data?.title}</h1>
                        <IconButton
                          colorScheme="red"
                          icon={
                            isDeletByJudul === data.judul ? (
                              <Spinner size="sm" />
                            ) : (
                              <FaTrash />
                            )
                          }
                          onClick={() =>
                            handleDeleteByJudul(data, dataParent.id, index)
                          }
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
                                  STATUS
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
                                    <Td>Belum Terakreditasi</Td>
                                    <Td className="flex justify-center items-center gap-2">
                                      <IconButton
                                        colorScheme="yellow"
                                        icon={<FaEdit />}
                                        onClick={() =>
                                          handleEdit(
                                            body.id,
                                            dataParent.titleBab,
                                            data.title,
                                            body
                                          )
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
                                          handleDeleteItem(
                                            dataParent.titleBab,
                                            dataParent.id,
                                            body.id,
                                            body,
                                            index,
                                            data.title
                                          )
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
            ) : (
              <Box
                key={index}
                className={`${switchTheme(
                  "bg-secondaryGray-900",
                  "bg-secondaryGray-300"
                )} rounded-xl p-10 flex flex-col gap-3`}
              >
                <Flex className=" justify-between items-center">
                  <Text className="text-3xl font-semibold">
                    {dataParent.titleBab}
                  </Text>
                  <Button
                    onClick={() => {
                      setBab(dataParent.titleBab);
                      onOpen();
                    }}
                    colorScheme="green"
                    className="w-fit"
                  >
                    TAMBAH
                  </Button>
                </Flex>
                <Card
                  className={`${switchTheme("bg-brandTabs-900", "bg-white")}`}
                >
                  <CardBody className="py-4">
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
                              STATUS
                            </Th>
                            <Th textAlign="center" className="w-[100px]">
                              ACTIONS
                            </Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {dataParent.dataBody?.map((body, index) => {
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
                                <Td>Belum Terakreditasi</Td>
                                <Td className="flex justify-center items-center gap-2">
                                  <IconButton
                                    colorScheme="yellow"
                                    icon={<FaEdit />}
                                    onClick={() =>
                                      handleEditSecond(
                                        dataParent.id,
                                        body.id,
                                        dataParent.titleBab,
                                        dataParent.titleBab,
                                        body
                                      )
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
                                      handleDeleteItem(
                                        dataParent.titleBab,
                                        dataParent.id,
                                        body.id,
                                        body,
                                        index
                                      )
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
              </Box>
            )
          )
        )}
      </Flex>
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
            bab: bab,
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

export default AkreditasiBab1;
