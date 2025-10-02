import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-config";
import dbConnect from "@/lib/mongodb";
import Analytics from "@/models/Analytics";

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    await dbConnect();
    
    const searchParams = request.nextUrl.searchParams;
    const days = parseInt(searchParams.get("days") || "30");
    
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    
    const analytics = await Analytics.find({
      date: { $gte: startDate }
    }).sort({ date: -1 });
    
    return NextResponse.json(analytics);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    
    const data = await request.json();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let analytics = await Analytics.findOne({ date: today });
    
    if (!analytics) {
      analytics = await Analytics.create({
        date: today,
        pageViews: 1,
        uniqueVisitors: 1,
        ...data
      });
    } else {
      analytics.pageViews += 1;
      await analytics.save();
    }
    
    return NextResponse.json(analytics);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
