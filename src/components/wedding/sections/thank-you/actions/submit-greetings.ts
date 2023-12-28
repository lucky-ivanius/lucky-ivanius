"use server";
import prisma from "@/data/db";

export interface MessageData {
  name: string;
  message?: string;
}

export async function submitMessage(data: MessageData) {
  const { name, message } = data;

  return prisma.weddingMessage.create({
    data: {
      name,
      message: message || "💕",
    },
  });
}
