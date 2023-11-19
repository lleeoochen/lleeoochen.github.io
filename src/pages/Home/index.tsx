import { PageSlide } from "@/components/PageSlide";
import { Signature } from "@/components/Signature";
import { projects } from "@/data/projects";
import { recordings } from "@/data/recordings";
import { BasicLayout } from "@/layouts/BasicLayout";
import { Carousel } from "@/components/Carousel";
import {
  useCallback, useRef, lazy
} from "react";

import "./index.scss";
import { Menu } from "@/components/Menu";
import { HomePageSlideAnchor } from "@/constants";
import { workExperiences } from "@/data/workExperiences";

const Card = lazy(() => import("@/components/Card"));
const WorkCard = lazy(() => import("@/components/WorkCard"));

export const Home = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const homeSlideRef = useRef<HTMLDivElement>(null);
  const programmingSlideRef = useRef<HTMLDivElement>(null);
  const musicSlideRef = useRef<HTMLDivElement>(null);
  const aboutSlideRef = useRef<HTMLDivElement>(null);

  const handleNavigate = useCallback((anchor: HomePageSlideAnchor) => {
    if (!contentRef.current) {
      return;
    }

    switch (anchor) {
    case HomePageSlideAnchor.HOME:
      homeSlideRef.current?.scrollIntoView({ behavior: "smooth" });
      break;
    case HomePageSlideAnchor.PROGRAMMING:
      programmingSlideRef.current?.scrollIntoView({ behavior: "smooth" });
      break;
    case HomePageSlideAnchor.MUSIC:
      musicSlideRef.current?.scrollIntoView({ behavior: "smooth" });
      break;
    case HomePageSlideAnchor.ABOUT:
      aboutSlideRef.current?.scrollIntoView({ behavior: "smooth" });
      break;
    };
  }, []);

  const navigteToProgramming = useCallback(() => handleNavigate(HomePageSlideAnchor.PROGRAMMING), []);
  const navigteToMusic = useCallback(() => handleNavigate(HomePageSlideAnchor.MUSIC), []);
  const navigteToAbout = useCallback(() => handleNavigate(HomePageSlideAnchor.ABOUT), []);

  return (
    <BasicLayout>
      <Menu handleNavigate={handleNavigate}/>
      <div ref={contentRef} className="content">
        <PageSlide ref={homeSlideRef} style={{ backgroundColor: "transparent" }} handleNavigate={navigteToProgramming}>
          <Signature />
        </PageSlide>

        <PageSlide ref={programmingSlideRef} style={{ backgroundColor: "#646da3" }} handleNavigate={navigteToMusic}>
          <h1>Show me your programming passion...</h1>
          <Carousel dataList={projects}>
            {data => <Card {...data}/>}
          </Carousel>
        </PageSlide>

        <PageSlide ref={musicSlideRef} style={{ backgroundColor: "#653630" }} handleNavigate={navigteToAbout}>
          <h1>Do you possess any special talents...</h1>
          <Carousel dataList={recordings}>
            {data => <Card {...data}/>}
          </Carousel>
        </PageSlide>

        <PageSlide ref={aboutSlideRef} style={{ backgroundColor: "#488ab8" }}>
          <h1>So, tell me a little bit about yourself...</h1>
          <Carousel dataList={workExperiences}>
            {data => <WorkCard {...data}/>}
          </Carousel>
        </PageSlide>
      </div>
    </BasicLayout>
  );
};
