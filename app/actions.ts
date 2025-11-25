"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type ActionState = {
  message: string;
  success: boolean;
} | null;

export async function registerUser(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const name = formData.get("name") as string;
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!name || !username || !email || !password) {
    return { success: false, message: "Semua kolom wajib diisi!" };
  }

  try {
    const existingUser = await prisma.user.findFirst({
      where: { OR: [{ username }, { email }] },
    });

    if (existingUser) {
      return {
        success: false,
        message: "Username atau Email sudah terdaftar!",
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        username,
        email,
        password: hashedPassword,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
          name
        )}&background=random`,
      },
    });

    (await cookies()).set("userId", newUser.id.toString(), { httpOnly: true });
  } catch (error) {
    console.error("Register Error:", error);
    return {
      success: false,
      message: "Terjadi kesalahan server. Coba lagi nanti.",
    };
  }

  redirect(`/profile/${username}`);
}

export async function loginUser(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { success: false, message: "Email dan Password wajib diisi!" };
  }

  let user;
  try {
    user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return { success: false, message: "Email atau password salah!" };
    }

    (await cookies()).set("userId", user.id.toString(), { httpOnly: true });
  } catch (error) {
    console.error("Login Error:", error);
    return {
      success: false,
      message: "Gagal login. Cek koneksi atau coba lagi.",
    };
  }

  redirect(`/profile/${user.username}`);
}

export async function logout() {
  (await cookies()).delete("userId");
  redirect("/login");
}

export async function createPost(formData: FormData) {
  const content = formData.get("content") as string;

  redirect("/home");
}
