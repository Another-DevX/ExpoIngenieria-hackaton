import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { pb } from './pocketbase'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Rise',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jonh doe' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials, req) {
        console.log(credentials?.username)
        await pb.collection('users').authWithPassword(credentials?.username as string, credentials?.password as string)
        if(pb.authStore.isValid) {
          const userData = await pb.collection('users').getOne(pb.authStore.model?.id)
          const user = { id: pb.authStore.model?.id, name: userData.name, email: userData.email }
          return user
        } else {
          return null
        }
      }
    })
  ]
}

export default NextAuth(authOptions)
