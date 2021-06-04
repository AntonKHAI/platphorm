<template>
  <div>{{users}}</div>
</template>

<script>
// Vuex
import { mapActions } from 'vuex'
export default {
  name: 'Main',
  data() {
    return {
      users: [],
    }
  },
  mounted() {
    this.users = this.getUsers();
  },
  methods: {
    ...mapActions({
      getUsers: 'users/getUsersList',
    }),
  },
}
</script>