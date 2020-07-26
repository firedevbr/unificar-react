import { useEffect, useState, Component } from "react";

import { MDBContainer } from "mdbreact";

import jwt from "jwt-decode";


import Layout from "~/components/layout";
import HeaderCampaign from "~/components/HeaderCampaign";
import UserInfos from "~/components/UserInfos";

function pages() {
  const [infosUser, setInfosUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("auth-jwt");

    var decoded = jwt(token);
    console.log(decoded.data);
    setInfosUser(decoded.data);
    localStorage.setItem("infos-user", JSON.stringify(decoded.data));
  }, []);

  return (
    <>
      <Layout>
        <MDBContainer fluid className="mt-5">
        <HeaderCampaign title="Minha conta" actions={false} />
        <UserInfos infos={infosUser} />
        </MDBContainer>
      </Layout>
      )
    </>
  );
}

export default pages;
