import { pb } from '@/lib/auth'
import { NextRequest, NextResponse } from 'next/server'

export async function POST (req: NextRequest, res: NextResponse) {
  const { email, password, userName } = await req.json()
  console.log(email, password, userName)
  console.log(typeof email, typeof password, typeof userName)
  if (!email || !password || !userName) {
    console.log('AAAAA')
    return NextResponse.error()
  }
  const data = {
    username: userName,
    email: email,
    emailVisibility: true,
    password: password,
    passwordConfirm: password,
    name: userName,
    follower: 0,
    following: 0,
    followers: [],
    followings: [],
    avatar: 'https://example.com'
  }

  try {
    await pb.collection('users').create(data)
    return NextResponse.json({ msg: 'User created succesfully' })
  } catch (e) {
    console.error(e.data)
    return NextResponse.error()
  }
}
