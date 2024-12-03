import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

const prismaClient = new PrismaClient();

export const POST = async (req: NextRequest) => {
   try {
      const data = await req.json();
      const { email, password, ...otherData } = data;

      // Check if the user already exists
      const isUserExists = await prismaClient.user.findFirst({
         where: { email },
      });

      if (isUserExists) {
         return NextResponse.json({
            message:
               "User with this email already exists. Please try with a unique email.",
            status: 200,
         });
      }

      // Hash the password before saving it
      const saltRounds = 10; // Number of salt rounds, can be adjusted based on security needs
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Save the new user
      const newUser = await prismaClient.user.create({
         data: {
            ...otherData,
            email,
            password: hashedPassword, // Store the hashed password
         },
      });

      return NextResponse.json({
         message: "New user created successfully.",
         data: newUser,
         status: 201,
      });
   } catch (error) {
      console.error(error);
      return NextResponse.json({
         message: "Something went wrong. Please try again later.",
         status: 500,
         error: error.message,
      });
   }
};
