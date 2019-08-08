import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions
})

// The pattern to add or update states is:
// Generally speaking, you will call an action that calls a mutation which update a state
// The actions that you call will be where you are also making API calls because they are asynchronous
// Mutations are there to update states for you.
