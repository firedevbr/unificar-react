import { Component } from 'react'
import Router from 'next/router'
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBSelect,
  MDBInput,
  toast,
  MDBSwitch,
  MDBIcon
} from 'mdbreact'
import Layout from '~/components/layout'

import Title from '~/components/Title'
import Button from '~/components/Form/ButtonNext'
import API from '../../services/api'

export default class Produto extends Component {
  state = {
    formMode: 'add',
    step: 1,
    opcoesSelect: {
      fetched: false,
      fornecedor: this.props.fornecedorOptions || [],
      categoria: this.props.categoriaOptions || []
    },
    nome: {
      value: this.props.nome,
      valid: true,
      errorMessages: []
    },
    valor: {
      value: this.props.valor,
      valid: true,
      errorMessages: []
    },
    categoria: {
      value: this.props.categoria,
      valid: true,
      errorMessages: []
    },
    fornecedor: {
      value: this.props.fornecedor,
      valid: true,
      errorMessages: []
    },
    status: {
      value: 'inativo',
      valid: true,
      errorMessages: []
    }
  }

  componentDidMount() {
    if (!this.state.opcoesSelect.fetched) {
      try {
        const token = localStorage.getItem('auth-jwt')
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        }

        API.get('/fornecedores', config).then((response) => {
          const fornecedorOptions = response.data.results.map((fornecedor) => {
            return {
              checked: false,
              text: fornecedor.nome,
              value: `${fornecedor.id}`
            }
          })

          const { opcoesSelect } = this.state
          opcoesSelect.fornecedor = fornecedorOptions

          this.setState({ opcoesSelect })
        })

        API.get('/produto_categorias', config).then((response) => {
          const categoriaOptions = response.data.results.map((categoria) => {
            return {
              checked: false,
              text: categoria.nome,
              value: `${categoria.id}`
            }
          })

          const { opcoesSelect } = this.state
          opcoesSelect.categoria = categoriaOptions

          this.setState({ opcoesSelect })
        })
      } catch (err) {
        console.log(err)
      }
    }
  }

  handleChange = (e) => {
    const inputId = e.target.name
    const { value } = e.target

    const input = this.state[inputId]
    input.value = value
    this.setState({ [inputId]: input })
  }

  toggleStatus = () => {
    const { status } = this.state
    status.value = status.value === 'ativo' ? 'inativo' : 'ativo'
    this.setState({ status })
  }

  setSelectGetValueHandler = (fieldName, isMulti = false, isObject = false) => {
    return (value) => {
      const input = this.state[fieldName]
      input.value = isMulti ? value : value[0]
      if (isObject) {
        input.value = {
          id: value[0]
        }
      }
      this.setState({ [fieldName]: input })
    }
  }

  nextStep = () => {
    const step = this.state.step + 1
    this.setState(step)
  }

  backStep = () => {
    const step = this.state.step + 1
    this.setState(step)
  }

  fillErrorsInForm = (err) => {
    const fieldErrors = err.response.data.errors
    const inputsWithError = Object.keys(fieldErrors).reverse()

    inputsWithError.forEach((inputId) => {
      const input = this.state[inputId]
      if (input === undefined) {
        return
      }
      input.valid = false
      input.errorMessages = []

      const errorMessagesKeys = Object.keys(fieldErrors[inputId])
      errorMessagesKeys.forEach((key) => {
        const errorMessage = fieldErrors[inputId][key]
        input.errorMessages.push(errorMessage)
      })

      this.setState({ [inputId]: input })
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const { opcoesSelect, ...infoObject } = this.state

    Object.entries(infoObject).forEach(([key, value]) => {
      console.log(key)
      if (typeof infoObject[key].onFormSubmitHandler === 'function') {
        infoObject[key] = infoObject[key].onFormSubmitHandler(
          value.value.toString()
        )
        return
      }

      if (value.value === '') {
        value.value = null
      }

      infoObject[key] = value.value
    })

    try {
      let formMode = ''
      let resourceId = ''

      if (this.state.formMode === 'add') {
        formMode = 'post'
      } else if (this.state.formMode === 'edit') {
        formMode = 'put'
        resourceId = `/${this.props.resourceId}`
      } else {
        throw 'submit não permitido neste modo!!'
      }

      const token = localStorage.getItem('auth-jwt')
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      }

      const resultado = await API[formMode](
        `/produtos${resourceId}`,
        infoObject,
        config
      )
      toast.success(
        () => (
          <>
            <MDBIcon icon="check" className="d-inline-inline mx-2" />
            Produto {this.state.formMode === 'add'
              ? 'inserido'
              : 'atualizado'}{' '}
            com sucesso
          </>
        ),
        {
          closeButton: true
        }
      )

      setTimeout(() => {
        Router.push('/produtos')
      }, 2000)
    } catch (err) {
      if (err.response.status === 400) {
        this.fillErrorsInForm(err)
      }
    }
  }

  render() {
    return (
      <Layout>
        <MDBContainer>
          <Title className="my-5 text-center">Novo Produto</Title>

          <div className="mt-5">
            <form onSubmit={this.handleSubmit}>
              <MDBRow>
                <MDBCol size="12" md="4">
                  <MDBInput
                    required
                    name="nome"
                    id="nome"
                    className={
                      !this.state.nome.valid && 'form-control is-invalid'
                    }
                    value={this.state.nome.value}
                    onChange={this.handleChange}
                    label="Nome"
                    group
                    type="text"
                  />
                </MDBCol>
                <MDBCol size="12" md="4">
                  <MDBInput
                    required
                    name="valor"
                    id="valor"
                    className={
                      !this.state.valor.valid && 'form-control is-invalid'
                    }
                    value={this.state.valor.value}
                    onChange={this.handleChange}
                    label="Valor"
                    type="text"
                    group
                  />
                </MDBCol>
                <MDBCol size="12" md="4">
                  <MDBSelect
                    search
                    getValue={this.setSelectGetValueHandler(
                      'categoria',
                      false,
                      true
                    )}
                    required
                    color="primary"
                    className={
                      !this.state.categoria.valid
                        ? 'form-control is-invalid'
                        : `${this.state.formMode}` === 'view'
                        ? 'disabled'
                        : ''
                    }
                    options={this.state.opcoesSelect.categoria}
                    selected="Categoria"
                    label="Categoria"
                  />
                  <div className="invalid-feedback">
                    {!this.state.categoria.valid &&
                      this.state.categoria.errorMessages.map(
                        (errorMessage, index) => (
                          <li key={index}>{errorMessage}</li>
                        )
                      )}
                  </div>
                </MDBCol>
                <MDBCol size="12" md="4">
                  <MDBSelect
                    search
                    getValue={this.setSelectGetValueHandler(
                      'fornecedor',
                      false,
                      true
                    )}
                    required
                    color="primary"
                    className={
                      !this.state.fornecedor.valid
                        ? 'form-control is-invalid'
                        : `${this.state.formMode}` === 'view'
                        ? 'disabled'
                        : ''
                    }
                    options={this.state.opcoesSelect.fornecedor}
                    selected="Fornecedor"
                    label="Fornecedor"
                  />
                  <div className="invalid-feedback">
                    {!this.state.fornecedor.valid &&
                      this.state.fornecedor.errorMessages.map(
                        (errorMessage, index) => (
                          <li key={index}>{errorMessage}</li>
                        )
                      )}
                  </div>
                </MDBCol>
                <MDBCol className="text-center" md="3" sm="12">
                  <MDBSwitch
                    checked={this.state.status.value === 'ativo'}
                    onChange={this.toggleStatus}
                    labelLeft="Inativo"
                    labelRight="Ativo"
                  />
                </MDBCol>
                <MDBCol size="12" className="mt-5 d-flex justify-content-end">
                  <Button name="Criar" className="bg-on" type="submit" />
                </MDBCol>
              </MDBRow>
            </form>
          </div>
        </MDBContainer>
      </Layout>
    )
  }
}
