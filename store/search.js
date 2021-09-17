export const state = () => ({
  popularCategories: [],
  history: [],
  morphSearchResults: [],
  searchResultsEquipments: [],
  searchResultsPressCenters: [],
  searchResultsServices: []
})

export const mutations = {
  setSearchResultEquipments (state, array) {
    state.searchResultsEquipments = array
  },
  setPopularCategories (state, array) {
    state.popularCategories = array
  },
  setHistory (state, array) {
    state.history = array
  },
  setMorphSearchResults (state, array) {
    state.morphSearchResults = array
  }
}

export const actions = {
  getSearchResultEquipments (ctx, data) {
    return new Promise(resolve => {
      setTimeout(() => {
        let res = require('~/DATABASE/searchResultsEquipments.js').default
        ctx.commit('setSearchResultEquipments', res)
        resolve()
      }, 1000)
    })
  },
  getPopularCategories (ctx) {
    let res = require('~/DATABASE/searchPopularCategories.js').default
    ctx.commit('setPopularCategories', res)
  },
  getHistory (ctx) {
    let res = require('~/DATABASE/searchHistory.js').default
    ctx.commit('setHistory', res)
  },
  getMorphSearchResults (ctx) {
    return new Promise(resolve => {
      setTimeout(() => {
        let res = require('~/DATABASE/morphSearchResults.js').default
        ctx.commit('setMorphSearchResults', res)
        resolve()
      }, 500)
    })
  }
}
