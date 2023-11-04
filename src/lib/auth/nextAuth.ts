import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import {pb} from './pocketbase'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Rise',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jonh doe' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials, req) {

        const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' }

        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ]
}

export default NextAuth(authOptions)
