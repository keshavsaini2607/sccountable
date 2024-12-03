import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
   try {
    const {} = await req.json();
   } catch (error) {
      return NextResponse.json({
         success: false,
         error,
      });
   }
};
