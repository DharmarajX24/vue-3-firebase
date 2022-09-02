<script setup lang="ts">
import { useStore } from '@/stores/main'
import { watch } from 'vue'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

watch(
  () => store.user,
  (user) => {
    if (!user) {
      router.push('/login')
    }
  },
  { immediate: true }
)
</script>

<template>
  <div>
    <h2>Home</h2>
    <p>Welcome {{ store.user?.email }}</p>
    <button class="form-button" @click="store.logout">Logout</button>
  </div>
</template>
