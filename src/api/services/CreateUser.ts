import { PrismaClient, User } from "@prisma/client";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

const db = new PrismaClient();

interface Request {
  name: string;
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

export class CreateUser {
  static async execute(data: Request): Promise<Response> {
    // Checks if email is being used
    const verifyEmail = await db.user.findFirst({
      where: { email: data.email },
    });
    if (verifyEmail) {
      throw new Error("This email is being used");
    }

    // Encrypt password
    data.password = await bcrypt.hash(data.password, 10);

    // Create user on Database
    const newUser = await db.user.create({ data: data });

    // Creating JWT
    const payload = {
      id: newUser.id,
    };
    const token = sign(payload, process.env.SERVER_PASSWORD, {
      expiresIn: "30d",
    });

    // Deleting users pass for security prevention
    delete newUser.password;

    return { user: newUser, token };
  }
}
