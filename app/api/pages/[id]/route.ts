import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-config";
import dbConnect from "@/lib/mongodb";
import Page from "@/models/Page";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const page = await Page.findById(params.id);
    
    if (!page) {
      return NextResponse.json({ error: "Page not found" }, { status: 404 });
    }
    
    return NextResponse.json(page);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    await dbConnect();
    const data = await request.json();
    const page = await Page.findByIdAndUpdate(params.id, data, { new: true });
    
    if (!page) {
      return NextResponse.json({ error: "Page not found" }, { status: 404 });
    }
    
    return NextResponse.json(page);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    await dbConnect();
    const page = await Page.findByIdAndDelete(params.id);
    
    if (!page) {
      return NextResponse.json({ error: "Page not found" }, { status: 404 });
    }
    
    return NextResponse.json({ message: "Page deleted" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
