import { NextRequest, NextResponse } from 'next/server'
import { pb } from '@/lib/auth'
import { headers } from 'next/headers'

export async function GET (req: NextRequest, res: NextResponse) {
  const headersList = headers()
  const userId = headersList.get('userId')
  const user = await pb.collection('users').getOne(userId as string)
  return NextResponse.json({ ...user })
}
