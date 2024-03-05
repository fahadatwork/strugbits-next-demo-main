'use server'

import { PrismaClient } from "@prisma/client";

export default async function Signup(formData) {
  const prisma = new PrismaClient();

  let data = {};

  if (formData.get("password") !== formData.get("password2")) {
    console.log("passwords do not match!!");
  } else
    data = {
      name: formData.get("fullname"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

  const user = await prisma.user.create({
    data: data,
  });

  console.log(user);
}
