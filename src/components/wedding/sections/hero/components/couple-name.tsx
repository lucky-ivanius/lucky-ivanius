import { Beau_Rivage, Bodoni_Moda } from "next/font/google";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: "400",
});
const beauRivage = Beau_Rivage({
  subsets: ["latin"],
  weight: "400",
});

export interface CoupleNameProps {
  id: string;
  firstName: string;
  lastName: string;
}

export default function CoupleName(props: CoupleNameProps) {
  return (
    <div id={props.id} className="w-full">
      <h3 className={`${bodoni.className} text-7xl text-center uppercase`}>
        {props.firstName}
      </h3>
      <h3 className={`${beauRivage.className} text-center text-4xl leading-8`}>
        {props.lastName}
      </h3>
    </div>
  );
}
