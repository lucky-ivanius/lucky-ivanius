import bca from "@/assets/wedding/images/bca.png";
import binancePay from "@/assets/wedding/images/binance-qr.png";

export const weddingData = {
  couple: {
    groom: {
      firstName: "Lucky",
      lastName: "Ivanius",
      socials: {
        instagram: "luckzivanius",
      },
    },
    bride: {
      firstName: "Jessica",
      lastName: "Tionado",
      socials: {
        instagram: "jessicationado",
      },
    },
  },
  targetDate: new Date(1705251600000),
  event: {
    name: "Reception",
    schedule: {
      date: {
        text: "Monday, 15th January 2024",
        day: 15,
        month: 1,
        year: 2024,
      },
      startTime: "18:00",
    },
    venue: {
      name: "Grand Ocean Cemara Asri",
      address:
        "Jl. Cemara Boulevard Utara No.12, Medan Estate, Kec. Percut Sei Tuan, Kabupaten Deli Serdang, Sumatera Utara 20221",
      url: "https://maps.app.goo.gl/wtWxvbT4VjRLrQPy8",
    },
  },
  urls: {
    calendar:
      "https://cgpa4czjw7bucnio.public.blob.vercel-storage.com/lucky_jessica_wedding_reception.ics",
  },
  giftAccounts: [
    {
      name: "BCA",
      image: bca,
      holder: "Jessica Tionado",
      accNumber: "8005081684",
    },
    {
      name: "BCA",
      image: bca,
      holder: "Lucky Ivanius",
      accNumber: "2421179800",
    },
  ],
};
