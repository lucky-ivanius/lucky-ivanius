import { Button } from "@/components/ui/button";
import { weddingData } from "@/data/wedding";
import { CopyIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";
import Image from "next/image";

export default function Accounts() {
  const copyToClipboard = (accNumber: string) => {
    navigator.clipboard.writeText(accNumber);
    toast("Copied to clipboard");
  };

  return (
    <>
      {weddingData.giftAccounts.map((data, index) => (
        <div
          key={index}
          className="flex flex-row items-center justify-start w-full h-full gap-4 py-4"
        >
          <Image
            src={data.image}
            alt={`img-${data.name.toLowerCase()}`}
            className="object-contain object-center w-1/2"
          />
          <div className="flex flex-col items-start justify-start gap-2 w-1/2">
            <p className="text-black text-xl font-bold">{data.holder}</p>
            <p className="">{data.accNumber}</p>
            <Button
              variant="outline"
              onClick={() => copyToClipboard(data.accNumber)}
            >
              Copy
              <CopyIcon className="ml-2" />
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}
