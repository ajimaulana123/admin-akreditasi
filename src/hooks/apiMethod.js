import { useState, useEffect } from "react";
import axios from "axios";

export const useGetData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, refetchData: fetchData };
};

export const usePostData = () => {
  const postData = async (url, values) => {
    try {
      const response = await axios.post(url, values);
      return response.data;
    } catch (error) {
      console.error("Error posting data:", error);
      throw error;
    }
  };

  return { postData };
};

export const usePutData = () => {
  const putData = async (url, id, values) => {
    try {
      const response = await axios.put(`${url}/${id}`, values);
      return response.data;
    } catch (error) {
      console.error("Error updating data:", error);
      throw error;
    }
  };

  return { putData };
};

export const useDeleteData = () => {
  const deleteData = async (url, id) => {
    try {
      const response = await axios.delete(`${url}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting data:", error);
      throw error;
    }
  };

  return { deleteData };
};
