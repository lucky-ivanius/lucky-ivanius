"use client";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";

import SendAGift from "../message/components/send-a-gift";

import { Rakkas } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { MessageData, getMessages } from "./actions/get-messages";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitMessage } from "./actions/submit-message";
import { toast } from "sonner";

import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const rakkas = Rakkas({
  subsets: ["latin"],
  weight: "400",
});

const formSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(2, "Name must contain at least 2 characters")
    .max(50, "Name must contain at most 50 characters"),
  message: z
    .string()
    .max(1000, "Greetings and prayers must contain at most 1000 characters")
    .optional(),
});

export default function Message() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const formWrapperRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const orTextRef = useRef<HTMLParagraphElement>(null);
  const sendAGiftRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<MessageData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function getMessagesData() {
    const messageData = await getMessages();
    setMessages(messageData);
  }

  useEffect(() => {
    getMessagesData();
  }, []);

  const searchParams = useSearchParams();

  const guestName = searchParams.get("to");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: guestName ?? "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);

      const newMessage = await submitMessage(values);

      setMessages((prevMessages) => [newMessage, ...prevMessages]);

      gsap.to("#messages-scroll-area", {
        scrollTo: { y: 0, autoKill: false },
      });

      form.reset();
    } catch (error) {
      toast("Error submitting greetings and prayers");
    } finally {
      setLoading(false);
    }
  }

  useGSAP(
    () => {
      const wrapper = wrapperRef.current!;
      const formWrapper = formWrapperRef.current!;
      const message = messageRef.current!;
      const orText = orTextRef.current!;
      const sendAGift = sendAGiftRef.current!;

      const wrapperTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top center",
        },
      });

      wrapperTimeline
        .from(formWrapper, {
          opacity: 0,
          scale: 0,
          rotateY: -90,
          ease: "expo.inOut",
        })
        .from(orText, {
          scale: 0,
          yPercent: -50,
          ease: "expo.inOut",
          delay: 0.2,
        })
        .from(sendAGift, {
          opacity: 0,
          scale: 0,
          ease: "expo.inOut",
        })
        .fromTo(
          "#send-a-gift",
          {
            background:
              "linear-gradient(-60deg, #7e22ce 0%, #db2777 0%, #7e22ce 100%)",
          },
          {
            background:
              "linear-gradient(-60deg, #7e22ce 0%, #db2777 100%, #7e22ce 100%)",
            duration: 1.5,
            yoyo: true,
            yoyoEase: "none",
            repeat: -1,
            repeatDelay: 1.5,
            ease: "none",
          }
        )
        .fromTo(
          message,
          {
            opacity: 0,
          },
          { opacity: 1 },
          "<"
        )
        .from(message, { rotateX: 90 }, "<");
    },
    { scope: wrapperRef }
  );

  return (
    <section
      ref={wrapperRef}
      id="message"
      className="flex flex-col items-center justify-start w-full h-screen p-4 gap-2 bg-gradient-to-b from-sky-50 to-orange-100"
    >
      <div
        ref={formWrapperRef}
        className="flex flex-col items-center justify-start w-full md:w-1/3 md:h-auto h-full gap-2 bg-gradient-to-b from-lime-50 to-sky-100 border-2 border-sky-200 rounded p-4"
      >
        <h3
          className={`${rakkas.className} text-2xl md:text-4xl bg-gradient-to-r from-purple-900 via-pink-500 to-fuchsia-600 bg-clip-text text-transparent mb-2`}
        >
          Greetings & Prayers
        </h3>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-start gap-2 w-full"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      minLength={2}
                      maxLength={50}
                      placeholder="Your name"
                      className="border border-sky-300 focus-visible:ring-ring focus-visible:ring-indigo-700"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Textarea
                      rows={4}
                      maxLength={1000}
                      placeholder="Share your heartfelt wishes, blessings, or prayers for the newlyweds 💕"
                      className="max-h-48 border border-sky-300 focus-visible:ring-ring focus-visible:ring-indigo-700"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={loading}
              type="submit"
              className="w-full md:w-1/3 bg-blue-600 text-white disabled:bg-blue-800 hover:bg-blue-700 mt-2"
              variant="secondary"
            >
              {loading ? "Submitting ..." : "Submit"}
            </Button>
          </form>
        </Form>
        <p ref={orTextRef}>or</p>
        <div ref={sendAGiftRef} className="w-full md:w-1/3">
          <SendAGift />
        </div>
      </div>
      <ScrollArea
        ref={messageRef}
        data-lenis-prevent={!!messages}
        className="w-full md:w-1/3 h-full border rounded-md border-yellow-600 p-4"
        id="messages-scroll-area"
      >
        {!messages.length ? (
          <p className="font-medium text-sm text-gray-600 text-center">
            Your messages will go here
          </p>
        ) : null}
        {messages.map((message, index) => (
          <div
            key={index}
            className="message flex flex-col items-start justify-start w-full gap-1 mb-3 transition-opacity "
          >
            <strong className="text-sm">{message.name}</strong>
            <p className="text-sm">&ldquo;{message.message}&rdquo;</p>
            <p className="text-xs text-gray-800">
              {message.createdAt.toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: false,
              })}
            </p>
          </div>
        ))}
      </ScrollArea>
    </section>
  );
}
