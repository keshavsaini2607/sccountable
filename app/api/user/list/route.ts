import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
   try {
      const users = await prisma.user.findMany();

      return NextResponse.json({
         message: "User list fetched successfully",
         data: users,
      });
   } catch (error) {
      return NextResponse.json(
         {
            message: "Error fetching user list",
            error: error,
         },
         { status: 500 }
      );
   }
};
