import apiService from '@/utils/api-client'

export default {
  // eslint-disable-next-line no-unused-vars
  login({ commit }, { email, password }) {
    try {
      return apiService.post('users/login', { email, password })
    } catch (error) {
      console.error(error)
    }
  },
  logout({ commit }) {
    commit('REMOVE_USER_TOKEN')
    commit('REMOVE_USER_ID')
  },
  register({ commit }, { email, password }) {
    return apiService.post('users/register', { email, password })
      .then(({ data }) => {
        commit('SET_USER_TOKEN', data)
        commit('SET_USER_ID', data) })
  },
}
