import apiService from '@/utils/api-client'

export default {
  // eslint-disable-next-line no-unused-vars
  getUsersList({ commit }, { count = 10, skip = 0 }) {
    return apiService.get('admin/users-list', { params: { count, skip } })
  },
}
