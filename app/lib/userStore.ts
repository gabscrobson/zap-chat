'use client'

import { doc, DocumentData, getDoc } from 'firebase/firestore'
import { create } from 'zustand'
import { db } from './firebase'

type UserStore = {
  currentUser: DocumentData | null
  isLoading: boolean
  fetchUserInfo: (uid: string) => Promise<void>
}

export const useUserStore = create<UserStore>()((set) => ({
  currentUser: null,
  isLoading: true,
  fetchUserInfo: async (uid: string) => {
    if (!uid) return set({ currentUser: null, isLoading: false })

    try {
      const docRef = doc(db, 'users', uid)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        const data = docSnap.data()
        return set({ currentUser: data, isLoading: false })
      } else {
        return set({ currentUser: null, isLoading: false })
      }
    } catch (error) {
      console.log(error)
      return set({ currentUser: null, isLoading: false })
    }
  },
}))
