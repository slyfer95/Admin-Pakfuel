import { useEffect, useState } from "react";
import useApi from "./useApi";
import adminApis from "../api/admin";

const usePumpsList = () => {
  const [pumps, setPumps] = useState([]);
  const getPumpsListApi = useApi(adminApis.getPumpList);

  const [noPumps, setNoPumps] = useState("");
  const [noEmployees, setNoEmployees] = useState("");
  const getDashboardStatsApi = useApi(adminApis.getDashboardStats);

  const [user, setUser] = useState("");
  const getProfileApi = useApi(adminApis.getProfile);

  const getProfile = async () => {
    await getProfileApi.request();
  };

  const getStats = async () => {
    await getDashboardStatsApi.request();
  };

  const getPumpList = async () => {
    setPumps(null);
    await getPumpsListApi.request();
  };

  useEffect(() => {
    if (getDashboardStatsApi.error) {
      console.error(
        "Failed to fetch dashboard stats",
        getDashboardStatsApi.responseProblem
      );
      console.error(getDashboardStatsApi.error);
      return;
    }
    if (getDashboardStatsApi.data) {
      setNoPumps(getDashboardStatsApi.data.totalPumps);

      setNoEmployees(getDashboardStatsApi.data.totalEmployees);
    }
  }, [getDashboardStatsApi.error, getDashboardStatsApi.data]);

  useEffect(() => {
    if (getPumpsListApi.error) {
      console.log("Error Called");
      console.log(
        `${getPumpsListApi.responseProblem} ${getPumpsListApi.errorStatus}`,
        `${getPumpsListApi.error}`
      );
      return;
    }
    if (getPumpsListApi.data) {
      setPumps(getPumpsListApi.data.pumps);
      return;
    }
  }, [getPumpsListApi.error, getPumpsListApi.data]);

  useEffect(() => {
    if (getProfileApi.error) {
      console.error("Failed to get profile", getProfileApi.error);
      setUser(null);
    }
    if (getProfileApi.data) {
      setUser(null);
      setUser(getProfileApi.data.admin);
    }
  }, [getProfileApi.error, getProfileApi.data]);

  const refreshPumpList = async () => {
    await getPumpList();
  };

  const refreshStats = async () => {
    await getStats();
  };

  const refreshProfile = async () => {
    await getProfile();
  };

  return {
    loading: getPumpsListApi.loading,
    error: getPumpsListApi.error,
    isError: getPumpsListApi.isError,
    errorStatus: getPumpsListApi.errorStatus,
    errorProblem: getPumpsListApi.responseProblem,
    pumps,
    noPumps,
    noEmployees,
    user,
    getProfile,
    getStats,
    refreshStats,
    getPumpList,
    refreshPumpList,
  };
};

export default usePumpsList;
