const saveShopList = (list) => {
  localStorage.setItem('products', JSON.stringify(list))
}

const loadShopList = () => {
  const jsonList = localStorage.getItem('products')

  return JSON.parse(jsonList) || []
}

const addToShopList = (product) => {
  const shopList = loadShopList()
  shopList.push(product)
  saveShopList(shopList)
}

const removeById = (id) => {
  const shopList = loadShopList()
  const updatedList = shopList.filter((shopItem) => shopItem.id !== id)
  saveShopList(updatedList)
}

const findById = (id) => {
  const list = loadShopList()
  const item = list.find((product) => product.id === id)
  return item
}

export { loadShopList, addToShopList, removeById, findById }
