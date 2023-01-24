import React from "react";
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from "cdbreact";
import "./cfooter.scss";
import { Link } from "react-router-dom";

const CFooter = () => {
  return (
    <>
      <CDBFooter className="shadow">
        <CDBBox
          display="flex"
          flex="column"
          className="mx-auto py-5"
          style={{ width: "80%" }}
        >
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>
              <Link to="/" className="cf-logo">
                <img
                  alt="logo"
                  src="https://i.ibb.co/svn1CNJ/soto.jpg"
                  className="cf-img"
                />
              </Link>
            </CDBBox>
            <CDBBox
              display="flex"
              style={{ width: "50%" }}
              justifyContent="between"
              className="tf-row"
            >
              <CDBBox>
                <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                  Contact Us
                </p>
                <CDBBox
                  flex="column"
                  display="flex"
                  style={{ cursor: "pointer", padding: "0" }}
                >
                  <p className="h6 ml-6 cl" style={{ fontWeight: "400" }}>
                    Leonard Wood Rd, Baguio City, Philippines, 2600
                  </p>
                  <p className="h6 ml-6 cl" style={{ fontWeight: "400" }}>
                    0916 311 9388
                  </p>
                  <p className="h6 ml-6 cl" style={{ fontWeight: "400" }}>
                    staluciamarketingph@gmail.com
                  </p>
                </CDBBox>
              </CDBBox>
            </CDBBox>
          </CDBBox>
          <CDBBox
            display="flex"
            className="mt-4 bf-row"
            justifyContent="between"
          >
            <small className="ml-2">
              &copy; Soto Grande Baguio, 2022. All rights reserved.
            </small>
            <CDBBox display="flex">
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3 p-2">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
        </CDBBox>
      </CDBFooter>
    </>
  );
};

export default CFooter;
