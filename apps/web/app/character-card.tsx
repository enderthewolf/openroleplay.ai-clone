import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/src/components";
import { AspectRatio } from "@repo/ui/src/components/aspect-ratio";
import Image from "next/image";
import Link from "next/link";

const CharacterCard = (props: {
  id: string;
  name: any;
  cardImageUrl?: string;
  description: any;
}) => {
  console.log("props::", props);
  return (
    <AspectRatio
      ratio={1 / 1.75}
      className="group w-full h-full hover:-translate-y-1 duration-200 shadow hover:shadow-lg place-content-center rounded-lg"
    >
      <Link href={`/character/${props?.id}`}>
        <Card className="rounded-lg p-2 w-full h-full flex items-end">
          <CardHeader className="relative w-full p-4">
            <div className="bg-gradient-to-b from-transparent to-black/75 absolute -left-2 -bottom-2 w-[calc(100%+16px)] h-[calc(100%+2rem)] rounded-b-lg" />
            <CardTitle className="text-white text-xl select-none line-clamp-1 z-[1] group-hover:opacity-80 duration-200">
              {props.name}
            </CardTitle>
            <CardDescription className="text-white select-none line-clamp-3 z-[1] group-hover:opacity-80 duration-200">
              {props.description}
            </CardDescription>
          </CardHeader>
          {props.cardImageUrl && (
            <Image
              src={props.cardImageUrl}
              alt={""}
              width={300}
              height={525}
              quality={75}
              className="object-cover absolute w-full h-full rounded-lg left-0 top-0 pointer-events-none"
            />
          )}
        </Card>
      </Link>
    </AspectRatio>
  );
};

export default CharacterCard;
