import React, { useEffect, useState } from "react";
import axios from "axios";
import DoctorList from "../components/DoctorList";
import Layout from "./../components/Layout";
import { Row } from "antd";

const HomePage = () => {
  const [doctors, setDoctors] = useState([]);
  //Login User Data
  const getUserData = async () => {
    try {
      // eslint-disable-next-line
      const res = await axios.get(
        "/api/v1/user/getAllDoctors",

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Layout>
      <h1 className="text-center">Home Page</h1>
      <Row>
        {doctors && doctors.map((doctor) => <DoctorList doctor={doctor} />)}
      </Row>
    </Layout>
  );
};

export default HomePage;
