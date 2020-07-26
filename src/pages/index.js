import { useEffect, useState } from "react";

import { MDBContainer } from "mdbreact";

import jwt from "jwt-decode";

import Layout from "~/components/layout";
import HeaderCampaign from "~/components/HeaderCampaign";
import TableCampaign from "~/components/TableCampaign";

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
      {infosUser && (
        <Layout user={infosUser.nome}>
          <MDBContainer fluid className="mt-5">
            <HeaderCampaign title="Todas as campanhas" actions={true} search={true} />
          </MDBContainer>
          <TableCampaign />
        </Layout>
      )}
    </>
  );
}

export default pages;
