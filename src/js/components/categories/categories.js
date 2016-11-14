import angular from 'angular'
import template from './categories.html'

class CategoriesController {
  constructor () {
    'ngInject'

    this.categories = [
      {'id': 0, 'name': 'Development!'},
      {'id': 1, 'name': 'Design'},
      {'id': 2, 'name': 'Exercise'},
      {'id': 3, 'name': 'Humor'}
    ]
  }

  // $onInit() {
  //   this.CategoriesModel.getCategories()
  //     .then(result => this.categories = result);
  // }

  // onCategorySelected(category) {
  //   this.CategoriesModel.setCurrentCategory(category);
  // }

  // isCurrentCategory(category) {
  //   return this.CategoriesModel.getCurrentCategory() &&
  //     this.CategoriesModel.getCurrentCategory().id === category.id;
  // }
}

const CategoriesComponent = {
  template,
  controller: CategoriesController,
  controllerAs: 'categoriesListCtrl'
}

const CategoriesModule = angular.module('categories', [])
    .component('categories', CategoriesComponent)

export { CategoriesModule, CategoriesComponent, CategoriesController }
