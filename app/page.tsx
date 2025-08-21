import { Globe } from "@/components/magicui/globe";
import { ConfettiFireworks } from "./ConfettiFireworks";
import { Button } from "@/components/ui/button";
import { CoolMode } from "@/components/magicui/cool-mode";
import { Highlighter } from "@/components/magicui/highlighter";
import { VideoText } from "@/components/magicui/video-text";
import { AuroraText } from "@/components/magicui/aurora-text";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/magicui/scroll-based-velocity";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
        Bem vindos <AuroraText>Alunos</AuroraText>
      </h1>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <ScrollVelocityContainer className="text-4xl md:text-7xl md:leading-[5rem] font-bold tracking-[-0.02em]">
          <ScrollVelocityRow baseVelocity={20} direction={1}>
            Docker
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={20} direction={-1}>
            Compose
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
      <p>
        Docker
        {" "}<Highlighter action="underline" color="#FF9800">
          Image
        </Highlighter>{" "}
        Docker
        <Highlighter action="highlight" color="#87CEFA">
          Container
        </Highlighter>{" "}
      </p>
      <ConfettiFireworks />
      <div className="relative justify-center">
        <CoolMode>
          <Button>Aqui Ainda Pior</Button>
        </CoolMode>
      </div>
      <div className="relative h-[300px] w-full overflow-hidden">
        <VideoText src="https://cdn.magicui.design/ocean-small.webm">
          Docker
        </VideoText>

        <Globe />

      </div>
    </div>
  );
}
