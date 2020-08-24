const getPercent = (atual, total) => {
  return Math.floor((atual / total) * 100)
}

const getTotalPrice = (produtos) => {
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

export { getPercent, getTotalPrice, currencyFormat }
