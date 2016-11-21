export default class CategoriesActions {
  getCategories (categories) {
    return { type: 'GET_CATEGORIES', payload: categories }
  }

  selectCategory (category) {
    return { type: 'GET_CURRENT_CATEGORY', payload: category }
  }
}
