import { PageSlide } from "@/components/PageSlide";
import { Signature } from "@/components/Signature";
import { projects } from "@/data/projects";
import { recordings } from "@/data/recordings";
import { BasicLayout } from "@/layouts/BasicLayout";
import { Carousel } from "@/components/Carousel";
import { useCallback } from "react";

import "./index.scss";
import { Menu } from "@/components/Menu";
import { HomePageSlideAnchor } from "@/constants";

export const Home = () => {
  const handleNavigate = useCallback((anchor: HomePageSlideAnchor) => {
    switch (anchor) {
    case HomePageSlideAnchor.HOME:
      window.scrollTo({
        top: 0, behavior: "smooth"
      });
      break;
    case HomePageSlideAnchor.PROGRAMMING:
      window.scrollTo({
        top: window.innerHeight * 1, behavior: "smooth"
      });
      break;
    case HomePageSlideAnchor.MUSIC:
      window.scrollTo({
        top: window.innerHeight * 2, behavior: "smooth"
      });
      break;
    case HomePageSlideAnchor.ABOUT:
      window.scrollTo({
        top: window.innerHeight * 3, behavior: "smooth"
      });
      break;
    };
  }, []);

  const navigteToProgramming = useCallback(() => handleNavigate(HomePageSlideAnchor.PROGRAMMING), []);
  const navigteToMusic = useCallback(() => handleNavigate(HomePageSlideAnchor.MUSIC), []);
  const navigteToAbout = useCallback(() => handleNavigate(HomePageSlideAnchor.ABOUT), []);

  return (
    <BasicLayout>
      <Menu handleNavigate={handleNavigate}/>
      <div className="content">
        <PageSlide style={{ backgroundColor: "transparent" }} handleNavigate={navigteToProgramming}>
          <Signature />
        </PageSlide>

        <PageSlide style={{ backgroundColor: "#646da3" }} handleNavigate={navigteToMusic}>
          <h1>A little bit about my programming talent</h1>
          <Carousel cards={projects}/>
        </PageSlide>

        <PageSlide style={{ backgroundColor: "#653630" }} handleNavigate={navigteToAbout}>
          <h1>A little bit about my music talent</h1>
          <Carousel cards={recordings}/>
        </PageSlide>

        <PageSlide style={{ backgroundColor: "#488ab8" }}>
          <h1>A little bit about myself</h1>
        </PageSlide>
      </div>
    </BasicLayout>
  );
};
