import { pb } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { title, description, image, place } = await req.json();
  const data = {
    title: title,
    description: description,
    image: image,
    place: place
  };

  try {
    const eventData = await pb.collection("events").create(data);
    return NextResponse.json({ msg: "success" });
  } catch (error) {
    return NextResponse.json({ msg: error });
  }
}

export async function GET(res: NextResponse) {
  try {
    const resultList = await pb.collection("events").getList(1, 10, {});
    console.log(resultList.items);
    return new Response(JSON.stringify(resultList.items));
  } catch (error) {
    return NextResponse.json({ msg: error });
  }
}
