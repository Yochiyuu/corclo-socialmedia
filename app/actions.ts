"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { writeFile } from "fs/promises"; // Wajib ada untuk upload file
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import path from "path"; // Wajib ada untuk path file

// --- REGISTER & AUTO LOGIN ---
export async function registerUser(formData: FormData) {
  const name = formData.get("name") as string;
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!name || !username || !email || !password) {
    return;
  }

  // 1. Cek user lama
  const existingUser = await prisma.user.findFirst({
    where: { OR: [{ username }, { email }] },
  });

  if (existingUser) {
    console.error("Username atau Email sudah terdaftar");
    return;
  }

  // 2. Encrypt Password
  const hashedPassword = await bcrypt.hash(password, 10);

  // 3. Buat User Baru
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

  // 4. AUTO LOGIN
  (await cookies()).set("userId", newUser.id.toString(), { httpOnly: true });

  // 5. Redirect ke Profile sendiri setelah daftar
  redirect(`/profile/${newUser.username}`);
}

// --- LOGIN ---
export async function loginUser(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    console.error("Email atau password salah");
    return;
  }

  // Set Cookie
  (await cookies()).set("userId", user.id.toString(), { httpOnly: true });

  // Redirect ke Profile sendiri setelah login
  redirect(`/profile/${user.username}`);
}

// --- LOGOUT ---
export async function logout() {
  (await cookies()).delete("userId");
  redirect("/login");
}

// --- CREATE POST (LENGKAP) ---
export async function createPost(formData: FormData) {
  const content = formData.get("content") as string;
  const file = formData.get("media") as File | null;
  const userIdCookie = (await cookies()).get("userId")?.value;

  if (!userIdCookie) return;

  let mediaUrl = null;
  let mediaType = null;

  // LOGIKA UPLOAD FILE
  if (file && file.size > 0) {
    if (file.type.startsWith("image/")) {
      mediaType = "IMAGE";
    } else if (file.type.startsWith("video/")) {
      mediaType = "VIDEO";
    } else {
      return; // Skip jika format salah
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = Date.now() + "_" + file.name.replaceAll(" ", "_");

    // Pastikan folder public/uploads sudah dibuat manual
    await writeFile(
      path.join(process.cwd(), "public/uploads/" + filename),
      buffer
    );

    mediaUrl = "/uploads/" + filename;
  }

  // Simpan ke Database
  await prisma.post.create({
    data: {
      content: content,
      authorId: parseInt(userIdCookie),
      mediaUrl: mediaUrl,
      // @ts-ignore
      mediaType: mediaType,
    },
  });

  // Redirect ke Home Feed sesuai keinginanmu
  redirect("/home");
}
