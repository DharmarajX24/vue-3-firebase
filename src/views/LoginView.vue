<script setup lang="ts">
import { reactive, watch } from 'vue'
import { useStore } from '@/stores/main'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const user = reactive({
  email: '',
  password: '',
})

watch(
  () => store.user,
  (user) => {
    if (user) {
      router.push('/home')
    }
  }
)

const login = async () => {
  if (user.email && user.password) {
    await store.login(user.email, user.password)
  }
}
</script>

<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">E-Mail</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="user.email"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="user.password"
        />
      </div>
      <button type="submit" class="form-button">Login</button>
    </form>
  </div>
</template>
