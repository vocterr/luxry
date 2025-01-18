import dynamic from "next/dynamic";
import { HeroHomePage } from "@/components/Home/Hero/HeroHomePage";
import { MissionHomePage } from "@/components/Home/Mission/MissionHomePage";
import { ShopDownHomePage } from "@/components/Home/ShopDown/ShopDownHomePage";
import { WhoAreWeHomePage } from "@/components/Home/WhoAreWe/WhoAreWeHomePage";
import { CollectionSkeleton } from "@/components/Home/Collection/CollectionSkeleton";
import { FooterHomePage } from "@/components/Home/Footer/FooterHomePage";

const CollectionHomePage = dynamic(() => import("@/components/Home/Collection/CollectionHomePage"), {
  loading: () => <CollectionSkeleton />
})

export default async function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroHomePage />
      <WhoAreWeHomePage />
      <hr className="border-gray-500 w-[90%] self-center mt-16" />
      <MissionHomePage />
      <hr className="border-gray-500 w-[90%] self-center mt-16" />
      <CollectionHomePage />
      <ShopDownHomePage />
      <FooterHomePage />

    </div>
  );
}


