import Vue from 'vue'
import Vuex from 'vuex'
import FEMAAlertData from '../FEMAalertdata.js'
import mockData from "../insurancecustomerdata.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    FEMA: FEMAAlertData,
    mockData: mockData,
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    assetsByType(state) {
      let sortedObj = state.mockData.customer.policies[0].assets.reduce((acc, item) => {
        if (acc.hasOwnProperty(item.assetType)) {
          acc[item.assetType].push(item)
        } else {
          acc[item.assetType] = [item]
        }
        return acc
      }, {})

      return sortedObj
    }
  }
})
