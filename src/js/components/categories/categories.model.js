class CategoriesModel {
  constructor ($rootScope) {
    'ngInject'
    this.$rootScope = $rootScope
    this.currentCategory = null
    this.categories = [
      {"id": 0, "name": "Development"},
      {"id": 1, "name": "Design"},
      {"id": 2, "name": "Exercise"},
      {"id": 3, "name": "Humor"}
    ]
  }

  getCategories () {
    return this.categories
  }

  setCurrentCategory (category) {
    this.currentCategory = category
    this.$rootScope.$broadcasr('onCurrentCategoryUpdated')
  }

  getCurrentCategory () {
    return this.currentCategory
  }
}

export default CategoriesModel
