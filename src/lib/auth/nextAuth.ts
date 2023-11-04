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
        await pb
          .collection('users')
          .authWithPassword(
            credentials?.username as string,
            credentials?.password as string
          )
        if (pb.authStore.isValid) {
          const userData = await pb
            .collection('users')
            .getOne(pb.authStore.model?.id)
          const user = {
            id: pb.authStore.model?.id,
            name: userData.username,
            email: userData.email,
            currentID: userData.id
          }
          return user
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    async session ({ session }: any) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = pb.authStore.model?.id
      return session
    }
  }
}

export default NextAuth(authOptions)
