import { pb } from '@/lib/auth'
import { NextRequest, NextResponse } from 'next/server'

export async function POST (req: NextRequest, res: NextResponse) {
  const { userId, follow, currentFollower } = await req.json()

  if (!userId || typeof follow === 'undefined')
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  const record = await pb.collection('users').getOne(userId)
  if (follow) {
    const newData = {
      ...record,
      followers: [...record.followers, currentFollower],
      follower: record.follower + 1
    }
    await pb.collection('users').update(userId, newData)
    return NextResponse.json({ message: 'Followed' }, { status: 200 })
  } else {
    const newData = {
      ...record,
      followers: record.followers.filter(
        (item: any) => item !== currentFollower
      ),
      follower: record.follower - 1
    }
    await pb.collection('users').update(userId, newData)
    return NextResponse.json({ message: 'Unfollowed' }, { status: 200 })
  }
}
