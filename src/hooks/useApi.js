import { useState } from "react";

const useApi = (apiFunc) => {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [errorStatus, setErrorStatus] = useState(null);
  const [responseProblem, setResponseProblem] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setData(null);
    setIsError(false);
    setError(null);

    setLoading(true);
    try {
      const response = await apiFunc(...args);

      if (!response.ok) {
        setIsError(true);
        setErrorStatus(response.status);
        setResponseProblem(response.problem);
        setError(response.data.error);
        setData(null);

        console.log("error:", error, isError, responseProblem, errorStatus);
        return;
      }

      setIsError(false);
      setError(null);
      setData(response.data);
    } catch (error) {
      // Handle network errors or exceptions here
      setIsError(true);
      setErrorStatus(500);
      setResponseProblem("Network error");
      setError(error.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setData(null);
    setIsError(false);
    setError(null);
    setErrorStatus(null);
    setResponseProblem(null);
    setLoading(false);
  };

  return {
    isError,
    data,
    error,
    errorStatus,
    responseProblem,
    loading,
    request,
    reset,
  };
};

export default useApi;
