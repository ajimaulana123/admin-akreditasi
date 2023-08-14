import { useToast } from "@chakra-ui/react";

const useToastMessages = () => {
  const toast = useToast();

  const showToast = (title, description, status, duration = 5000) => {
    toast({
      title,
      description,
      status,
      duration,
      isClosable: true,
    });
  };

  const showSuccessToast = (description, title = "Success") => {
    showToast(title, description, "success");
  };

  const showErrorToast = (description, title = "Error") => {
    showToast(title, description, "error");
  };

  const showWarningToast = (description, title = "Warning") => {
    showToast(title, description, "warning");
  };

  return {
    showToast,
    showSuccessToast,
    showErrorToast,
    showWarningToast,
  };
};

export default useToastMessages;
