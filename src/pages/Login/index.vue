<template>
  <q-page class="row justify-center items-center">
    <div class="column">
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form
              ref="loginForm"
              class="q-gutter-md"
            >
              <q-input square filled clearable lazy-rules
                       :rules="[ val => val && val.length > 0 || 'Please type something']" v-model="email" type="email" label="email" />
              <q-input square filled clearable v-model="password" type="password" label="password" />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn @click="onSubmit" unelevated color="primary" size="lg" class="full-width" label="Login" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <router-link to="/register">
              <p class="text-grey-6">Not reigistered? Created an Account</p>
            </router-link>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
//Vuex
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions({
      login: 'user/login',
    }),
    onSubmit() {
      this.$refs.loginForm.validate().then((success) => {
        if (success) {
          this.login({ email: this.email, password: this.password }).then(() => {
            this.$router.push('/')
          })
        }
        else {
          console.log('errrrr')
        }
      })
    },
  },
}
</script>

<style>
.q-card {
  width: 360px;
}
</style>