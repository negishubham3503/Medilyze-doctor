import React, { useEffect, useMemo, useState } from 'react';
import './tabComponents.css';
import LogoImg from '../../../../images/logo.png';
import Rx from '../../../../images/rx.png';
import { Typography } from "@material-ui/core";
const Prescription = (props) => {
    const [prescriptionData, setPrescriptionData] = useState();

    useMemo(() => {
        setPrescriptionData(props);
    }, []);


    try {
        return (
            <div id="prescription" style={{ width: "50rem", height: "25rem" }}>
                <div style={{ padding: "2%", width: "120", marginBottom: "3%", backgroundColor: "#4dabf6", color: "white" }}>
                    <div style={{ display: "inline-block" }}>
                        <div style={{ width: "70%", paddingTop: "2%", float: "left" }}>
                            <Typography variant="h3">{prescriptionData?.data?.hospital}</Typography>
                        </div>
                        <div style={{ width: "20%", float: "right", paddingRight: "5%" }}>
                            <img src={LogoImg} style={{ width: "70%" }} />
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ backgroundColor: "", float: "left", width: "50%" }}>
                            <h4>Doctor: {prescriptionData?.data?.doctor}</h4>
                        </div>
                        <div style={{ backgroundColor: "", float: "right", width: "50%" }}>
                            <h4>Prescription ID: {prescriptionData?.data?.prescription_id}</h4>
                        </div>

                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", paddingLeft: "5%" }}>
                    <div style={{ backgroundColor: "", float: "left", width: "100%" }}>
                        <p><b>Patient Information</b></p>
                    </div>
                    <div style={{ backgroundColor: "", float: "right", width: "30%" }}>
                        <p>Date: {prescriptionData?.date}</p>
                    </div>
                </div>
                <hr style={{ width: "90%", height: "2px", color: "gray", backgroundColor: "gray" }} />
                <div style={{ display: "flex", justifyContent: "space-between", paddingLeft: "5%" }}>
                    <div style={{ backgroundColor: "", float: "left", width: "50%" }}>
                        <p>Name: {prescriptionData?.patientData?.firstName + " " + prescriptionData?.patientData?.middleName + " " + prescriptionData?.patientData?.lastName}</p>
                    </div>
                    <div style={{ backgroundColor: "", float: "right", width: "50%" }}>
                        <p>Date of Birth: {prescriptionData?.dob}</p>
                        <p>Blood Group: {prescriptionData?.patientData?.blood_group}</p>
                    </div>
                </div>
                <hr style={{ width: "90%", height: "2px", color: "gray", backgroundColor: "gray" }} />
                <div style={{ paddingLeft: "5%" }}>
                    <p><b>Complaints:</b> {prescriptionData?.data?.complaints}</p>
                </div>
                <div style={{ paddingLeft: "5%" }}>
                    <p><b>Diagnosis:</b> {prescriptionData?.data?.diagnosis}</p>
                </div>
                <div style={{ paddingLeft: "5%", marginTop: "10%" }}>
                    <img src={Rx} style={{ width: "5%" }} />
                </div>
                <div style={{ width: "100%", paddingLeft: "5%" }}>
                    <table style={{ width: "100%" }}>
                        <tr>
                            <th style={{ textAlign: "left" }}>Medicine</th>
                            <th style={{ textAlign: "left" }}>Dosage</th>
                            <th style={{ textAlign: "left" }}>Timing-Duration</th>
                        </tr>
                        {prescriptionData?.data.Medicines.map((medicine) => (
                            <tr>
                                <td>{medicine.split(" ").slice(0, [medicine.split(" ").length - 2]).join(" ")}</td>
                                <td>{medicine.split(" ")[medicine.split(" ").length - 2]}</td>
                                <td>{medicine.split(" ")[medicine.split(" ").length - 1]}</td>
                            </tr>
                        ))}
                    </table>
                </div>
                <div style={{ paddingLeft: "5%", marginTop: "5%" }}>
                    <h3>Tests</h3>
                </div>
                <div style={{ paddingLeft: "5%" }}>
                    <ol>
                        {prescriptionData?.data.Tests.map((test, index) => (
                            <li><a style={{ color: "black" }} target="_blank" href="">{test}</a></li>
                        ))}
                    </ol>
                </div>
                <div style={{ paddingLeft: "5%", marginTop: "5%" }}>
                    <p><b>Next Visit: </b>{prescriptionData?.data.next_visit}</p>
                </div>
                <div style={{ marginTop: "5%", padding: "0.5%", width: "150", marginBottom: "3%", backgroundColor: "#4dabf6", color: "white" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ paddingLeft: "2%", backgroundColor: "", float: "left", width: "120%" }}>
                            <h4>7007059528</h4>
                        </div>
                        <div style={{ backgroundColor: "", float: "right", width: "50%" }}>
                            <h4>medilyze.sup@gmail.com</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    } catch (e) {
        return (
            <div className="center">
                <p>No Prescription Exists</p>
            </div>
        )
    }
}

export default Prescription;