import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-config";
import dbConnect from "@/lib/mongodb";
import Page from "@/models/Page";

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    
    const searchParams = request.nextUrl.searchParams;
    const slug = searchParams.get("slug");
    
    if (slug) {
      const page = await Page.findOne({ slug, isPublished: true });
      return NextResponse.json(page);
    }
    
    const pages = await Page.find().sort({ order: 1, createdAt: -1 });
    return NextResponse.json(pages);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
    
    await dbConnect();
    
    const data = await request.json();
    const page = await Page.create(data);
    
    return NextResponse.json(page, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
