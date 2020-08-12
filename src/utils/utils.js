const getPercent = (atual, total) => {
  return Math.floor((atual / total) * 100)
}

const getTotalPrice = (produtos) => {
  let total = 0
  if (Array.isArray(produtos)) {
    produtos.forEach(produto => total += produto.valor)
  }

  return total
}

export { getPercent, getTotalPrice }
