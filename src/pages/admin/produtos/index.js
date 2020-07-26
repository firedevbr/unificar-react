import { useEffect, useState, Component } from "react";

import { MDBContainer } from "mdbreact";

import Layout from "~/components/layout";
import BaseTableHeader from "~/components/BaseTable/Header";
import BaseTableBody from "~/components/BaseTable/Body";
import useAuth from "../../../context/auth";
import Router from 'next/router';

export default function pages() {
  const { isAdmin } = useAuth();

  useEffect(() => {
    if (!isAdmin) {
      Router.push('/');
    }
  }, [isAdmin]);

  const [totalResults, setTotalResults] = useState(0);

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
    {isAdmin && (
      <Layout>
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
