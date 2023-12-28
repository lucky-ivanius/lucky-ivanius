"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Yellowtail, Playfair_Display, Rakkas } from "next/font/google";
import { HeartFilledIcon } from "@radix-ui/react-icons";
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

import SendAGift from "./components/send-a-gift";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { submitMessage } from "./actions/submit-greetings";
import { MessageData, getMessages } from "./actions/get-messages";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const yellowtail = Yellowtail({ subsets: ["latin"], weight: "400" });
const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
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

export default function ThankYou() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const formWrapperRef = useRef<HTMLDivElement>(null);
  const thankYouWrapperRef = useRef<HTMLDivElement>(null);

  const keepScrollingTextRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<MessageData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useGSAP(
    () => {
      const wrapper = wrapperRef.current!;
      const videoWrapper = videoWrapperRef.current!;
      const formWrapper = formWrapperRef.current!;
      const thankYouWrapper = thankYouWrapperRef.current!;

      const keepScrollingText = keepScrollingTextRef.current!;

      gsap.context(() => {
        const wrapperTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: wrapper,
            start: "top 10%",
            end: "center center",
          },
        });

        wrapperTimeline
          .fromTo(
            videoWrapper,
            {
              opacity: 0,
            },
            {
              opacity: 1,
            }
          )
          .from(thankYouWrapper, { yPercent: 100, ease: "sine.inOut" }, "<")
          .from(formWrapper, {
            rotateX: "-90deg",
            opacity: 0,
            ease: "power2.inOut",
          });

        gsap.to(keepScrollingText, {
          yPercent: 40,
          repeat: -1,
          yoyo: true,
          yoyoEase: "back.out(1.7)",
          duration: 1,
        });

        const disappearTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: wrapper,
            start: "top 20%",
          },
        });

        disappearTimeline.to(keepScrollingText, {
          opacity: 0,
        });
      });
    },
    { scope: wrapperRef }
  );

  async function getMessagesData() {
    const messageData = await getMessages();
    setMessages(messageData);
  }

  useEffect(() => {
    getMessagesData();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
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

  return (
    <section
      ref={wrapperRef}
      id="gift"
      className="h-screen w-full bg-black text-white py-8 px-4 overflow-hidden"
    >
      <div className="h-full w-full relative overflow-hidden">
        <div
          ref={videoWrapperRef}
          className="absolute w-full bottom-32 md:bottom-20 md:h-full md:w-2/3 translate-x-12 md:translate-x-32"
        >
          <video
            src="https://cgpa4czjw7bucnio.public.blob.vercel-storage.com/bg.mp4"
            muted
            autoPlay
            loop
            className="h-full w-full scale-[260%] md:scale-100"
          />
        </div>
        <div className="relative flex flex-col-reverse md:flex-row items-center justify-center h-full w-full">
          <div
            ref={thankYouWrapperRef}
            className="w-full md:w-2/3 h-1/5 md:h-full flex flex-col items-center justify-end gap-2 pb-2 md:pb-24"
          >
            <h3
              className={`${yellowtail.className} text-center text-xl md:text-5xl`}
            >
              Thank you
            </h3>
            <HeartFilledIcon className="w-6 h-6" />
            <p
              className={`${playfair_display.className} text-center text-3xl md:text-8xl`}
            >
              Lucky & Jessica
            </p>
          </div>
          <div
            ref={formWrapperRef}
            className="w-full md:w-1/3 h-4/5 md:h-2/3 flex flex-col items-center justify-start rounded-md border border-gray-200 md:border-0 px-4"
          >
            <div className="flex flex-col w-full items-center justify-start py-4 gap-2">
              <h3 className={`${rakkas.className} text-2xl md:text-4xl`}>
                Greetings & Prayers
              </h3>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-2 w-full"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            minLength={2}
                            maxLength={50}
                            placeholder="Name"
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
                      <FormItem>
                        <FormControl>
                          <Textarea
                            rows={4}
                            maxLength={1000}
                            placeholder="Share your heartfelt wishes, blessings, or prayers for the newlyweds"
                            className="max-h-48"
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
                    className="w-full"
                    variant="secondary"
                  >
                    Submit
                  </Button>
                </form>
              </Form>
              <p className="w-full text-center">or</p>
              <SendAGift />
            </div>
            <ScrollArea
              data-lenis-prevent
              className="w-full"
              id="messages-scroll-area"
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start justify-start w-full gap-1 mb-3 transition-opacity "
                >
                  <strong className="text-sm">{message.name}</strong>
                  <p className="text-sm">&ldquo;{message.message}&rdquo;</p>
                  <p className="text-xs text-gray-400">
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
          </div>
        </div>
      </div>
    </section>
  );
}
