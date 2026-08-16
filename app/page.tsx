import OpenSection from "@/components/wedding/OpenSection";
import StorySection from "@/components/wedding/StorySection";
import TwoOfUsSection from "@/components/wedding/TwoOfUsSection";
import MomentsSection from "@/components/wedding/MomentsSection";
import PhotoStorySection from "@/components/wedding/PhotoStorySection";
import MovingMemoriesSection from "@/components/wedding/MovingMemoriesSection";
import MessagesSection from "@/components/wedding/MessagesSection";
import WordsToRememberSection from "@/components/wedding/WordsToRememberSection";
import ForeverSection from "@/components/wedding/ForeverSection";
import EndingSection from "@/components/wedding/EndingSection";
import FloatingControls from "@/components/wedding/FloatingControls";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <FloatingControls />

      {/* 01 - MỞ CÂU CHUYỆN */}
      <OpenSection />

      {/* 02 - OUR STORY */}
      <StorySection />

      {/* 03 - HAI CHÚNG TA */}
      <TwoOfUsSection />

      {/* 04 - NHỮNG KHOẢNH KHẮC */}
      <MomentsSection />

      {/* 05 - PHOTO STORY */}
      <PhotoStorySection />

      {/* 06 - VIDEO CỦA CÔ DÂU CHÚ RỂ */}
      <MovingMemoriesSection />

      {/* 07 - VIDEO LỜI CHÚC */}
      <MessagesSection />

      {/* 08 - NHỮNG LỜI MUỐN GIỮ LẠI */}
      <WordsToRememberSection />

      {/* 09 - FOREVER */}
      <ForeverSection />

      {/* 10 - ENDING */}
      <EndingSection />
    </main>
  );
}