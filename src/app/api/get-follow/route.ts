import { pb } from '@/lib/auth'
import { headers } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET (req: NextRequest, res: NextResponse) {
  try {
    const headersList = headers()
    const userId = headersList.get('userId')
    const currentUserId = headersList.get('currentUserId')
    console.log(currentUserId, userId)
    const record = await pb.collection('users').getOne(currentUserId as string, { requestKey: "follow" })
    const followers = record.followers
    console.log(followers)
    followers.filter((item: any) => item === userId)
    console.log(followers,record , userId, currentUserId)
    if (followers.length > 0) {
      return NextResponse.json({ isFollowing: true })
    } else {
      return NextResponse.json({ isFollowing: false })
    }
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 })
  }
}
