import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prismaClient = new PrismaClient();

export const GET = async (
   req: NextRequest,
   { params: { userId } }: { params: { userId: string } }
) => {
   try {
      if (!userId) {
         return NextResponse.json(
            {
               message: "User ID not provided in the URL",
            },
            { status: 400 }
         );
      }

      console.log({ userId });
      const response = await prismaClient.user.findFirst({
         where: {
            id: userId,
         },
      });

      delete response?.password;

      if (response) {
         return NextResponse.json({
            message: "User data fetched",
            data: response,
         });
      }

      return NextResponse.json(
         {
            message: "User not found",
         },
         { status: 404 }
      );
   } catch (error) {
      console.log("Error fetching user profile:", error);
      return NextResponse.json(
         {
            message: "Unable to fetch profile",
            error: error.message,
         },
         { status: 500 }
      );
   }
};
