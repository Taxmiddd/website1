import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import dbConnect from "@/lib/mongodb";
import Navigation from "@/models/Navigation";

export async function GET() {
  try {
    await dbConnect();
    
    let navigation = await Navigation.findOne();
    
    if (!navigation) {
      navigation = await Navigation.create({
        items: [],
        settings: {
          sticky: true,
          showLogo: true,
          backgroundColor: "#0f1b14",
          textColor: "#dcf2e4",
        },
      });
    }
    
    return NextResponse.json(navigation);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
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
    
    let navigation = await Navigation.findOne();
    
    if (!navigation) {
      navigation = await Navigation.create(data);
    } else {
      navigation = await Navigation.findOneAndUpdate(
        {},
        data,
        { new: true, runValidators: true }
      );
    }
    
    return NextResponse.json(navigation);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
