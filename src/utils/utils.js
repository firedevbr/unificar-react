const getProgressPercent = (atual, total) => {
  return Math.floor((atual / total) * 100)
}

export { getProgressPercent }
