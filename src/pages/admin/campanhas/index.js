import React, { useEffect, useState } from 'react'

import { MDBContainer } from 'mdbreact'

import Router from 'next/router'
import Layout from '~/components/layout'
import BaseTableHeader from '~/components/BaseTable/Header'
import BaseTableBody from '~/components/BaseTable/Body'
import useAuth from '../../../context/auth'

export default function pages() {
  const { isAdmin } = useAuth()

  useEffect(() => {
    if (!isAdmin) {
      Router.push('/')
    }
  }, [isAdmin])

  const [totalResults, setTotalResults] = useState(0)

  const handleUpdateTotalResults = (totalResults) => {
    if (totalResults === null) {
      setTotalResults(0)
    }

    setTotalResults(totalResults)
  }

  const columns = [
    {
      label: 'Campanha',
      field: 'nome'
    },
    {
      label: 'Valor',
      field: 'valor'
    },
    {
      label: 'Data Início',
      field: 'data_inicio'
    },
    {
      label: 'Data Limite',
      field: 'data_fim'
    },
    {
      label: 'Status',
      field: 'status'
    }
  ]

  return (
    <>
      {isAdmin && (
        <Layout>
          <MDBContainer fluid className="mt-5">
            <BaseTableHeader
              title="Campanhas"
              actions={false}
              total={totalResults}
              newResource={{
                linkTo: '/admin/nova-campanha',
                label: 'Nova Campanha'
              }}
            />
          </MDBContainer>
          <BaseTableBody
            resourceEndpoint="campanhas"
            columns={columns}
            handleUpdateTotalResults={handleUpdateTotalResults}
          />
        </Layout>
      )}
    </>
  )
}
