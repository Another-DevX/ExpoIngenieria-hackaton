import { pb } from '@/lib/auth'
import { NextRequest, NextResponse } from 'next/server'

export async function POST (req: NextRequest, res: NextResponse) {
  const { email, password } = await req.json()
  try {
    await pb.collection('users').authWithPassword(email, password)

    // console.log(pb.authStore.isValid)
    // console.log(pb.authStore.token)
    console.log(pb.authStore.model?.id);
    return NextResponse.json({ msg: 'success' })
  } catch (e) {
    return NextResponse.json({ error: e })
  }
}
