import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const EditAddModal = ({
  title,
  isOpen,
  onClose,
  editingData,
  onSubmit,
  isSubmitting,
  initialValues,
  formControls,
  validationSchema,
}) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {editingData ? `Edit Data ${title}` : `Tambah Data ${title}`}
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
                {formControls?.map((control, index) => (
                  <FormControl
                    key={index}
                    mb={4}
                    isInvalid={
                      formik.errors[control.name] &&
                      formik.touched[control.name]
                    }
                  >
                    <label>{control.label}</label>
                    <Input
                      type="text"
                      readOnly={control.read ? true : false}
                      name={control.name}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values[control.name]}
                    />
                    <FormErrorMessage>
                      {formik.touched[control.name] &&
                        formik.errors[control.name]}
                    </FormErrorMessage>
                  </FormControl>
                ))}

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
  );
};

export default EditAddModal;
