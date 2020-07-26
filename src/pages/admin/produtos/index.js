import { useEffect, useState, Component } from "react";

import { MDBContainer } from "mdbreact";

import jwt from "jwt-decode";

import Layout from "~/components/layout";
import BaseTableHeader from "~/components/BaseTable/Header";
import BaseTableBody from "~/components/BaseTable/Body";

function pages() {
  const [infosUser, setInfosUser] = useState(null);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("auth-jwt");

    let decoded = jwt(token);
    console.log(decoded.data);
    setInfosUser(decoded.data);
    localStorage.setItem("infos-user", JSON.stringify(decoded.data));
  }, []);

  const handleUpdateTotalResults = (totalResults) => {
      if (totalResults === null) {
          setTotalResults(0);
      }

      setTotalResults(totalResults);
  };

  const columns = [
    {
      label: 'Nome',
      field: 'nome'
    },
    {
      label: 'Preço',
      field: 'valor'
    },
    {
      label: 'Status',
      field: 'status'
    },
    {
      label: 'Categoria',
      field: 'categoria',
      child: 'nome'
    },
    {
      label: 'Fornecedor',
      field: 'fornecedor',
      child: 'nome'
    }
  ];

  return (
    <>
      {infosUser && (
        <Layout user={infosUser.nome}>
          <MDBContainer fluid className="mt-5">
            <BaseTableHeader
              title="Produtos"
              actions={false}
              total={totalResults}
              newResource={{
                linkTo: "/novo-produto",
                label: "Novo Produto"
              }}
            />
          </MDBContainer>
          <BaseTableBody
            resourceEndpoint={"produtos"}
            columns={columns}
            handleUpdateTotalResults={handleUpdateTotalResults}
          />
        </Layout>
      )}
    </>
  );
}

export default pages;
