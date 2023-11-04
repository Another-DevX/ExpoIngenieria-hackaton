import { pb } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { description, user, publish } = await req.json();
  const data = {
    description: description,
    user: user,
    publish: publish,

  };

  try {
    const commentData = await pb.collection("comment").create(data);
    return NextResponse.json({ msg: "success" });
  } catch (error) { 
    return NextResponse.json({ msg: error });
  }
}

export async function GET(res: NextResponse) {
  try {
    const resultList = await pb.collection("comment").getList(1, 10, {});
    console.log(resultList.items);
    return new Response(JSON.stringify(resultList.items));
  } catch (error) {
    return NextResponse.json({ msg: error });
  }
}
