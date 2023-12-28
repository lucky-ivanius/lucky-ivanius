"use server";
import prisma from "@/data/db";

export interface MessageData {
  id: string;
  name: string;
  message?: string;
  createdAt: Date;
}

export async function getMessages(): Promise<MessageData[]> {
  const message = await prisma.weddingMessage.findMany({
    orderBy: { createdAt: "desc" },
  });

  return message;
}
