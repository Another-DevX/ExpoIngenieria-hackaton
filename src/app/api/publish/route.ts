import { pb } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { title, description, image } = await req.json();
  const data = {
    title: title,
    description: description,
    image: image,
    date: "2022-01-01 10:00:00.123Z",
    field: "",
    likes: 0,
    comments: 0,
    type_publish: "normal",
  };

  try {
    const publishData = await pb.collection("publish").create(data);
    return NextResponse.json({ msg: "success" });
  } catch (error) {
    return NextResponse.json({ msg: error });
  }
}

export async function GET(res: NextResponse) {
  try {
    const resultList = await pb.collection("publish").getList(1, 10, {});
    console.log(resultList.items);
    return new Response(JSON.stringify(resultList.items));
  } catch (error) {
    return NextResponse.json({ msg: error });
  }
}
