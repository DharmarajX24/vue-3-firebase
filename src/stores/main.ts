import { ref } from 'vue'
import { defineStore } from 'pinia'
import { auth } from '@/plugins/firebase'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import type { User } from 'firebase/auth'

export const useStore = defineStore('main', () => {
  const user = ref<User | null>(null)

  onAuthStateChanged(auth, (u) => {
    user.value = u
  })

  async function login(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password)
  }

  async function logout() {
    await signOut(auth)
  }

  return {
    user,
    login,
    logout,
  }
})
