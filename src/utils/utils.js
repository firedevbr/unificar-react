import { differenceInDays, parseISO } from 'date-fns'

const getPercent = (atual, total) => {
  const percent = Math.floor((atual / total) * 100)
  return percent <= 100 ? percent : 100
}

const getOriginalPrice = (produtos) => {
  let total = 0
  if (Array.isArray(produtos)) {
    for (let i = 0; i < produtos.length; i++) {
      total += produtos[i].valor
    }
  }

  return total
}

const currencyFormat = (valor) =>
  valor
    ? valor.toLocaleString('pt-br', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    : ''

const remainingDays = (dataFim) => {
  return differenceInDays(parseISO(dataFim), new Date())
}

const getDiscountPercent = (valor, produtos) => {
  return 100 - getPercent(valor, getOriginalPrice(produtos))
}

export {
  getPercent,
  getOriginalPrice,
  currencyFormat,
  remainingDays,
  getDiscountPercent
}
