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

export { getPercent, getTotalPrice }
