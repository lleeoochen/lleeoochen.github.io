import { TopMenuHeader } from "@/common/components/TopMenuHeader";
import { BasicLayout } from "@/common/components/BasicLayout";
import { RouteDefinitions } from "@/main";

export const Home = () => {
  return (
    <BasicLayout
      topMenuHeader={
        <TopMenuHeader
          title="WEI TUNG CHEN"
          subtitle="The ultimate multi-tasking wizard who's as skilled with code as he is with a cello."
          leftRoute={RouteDefinitions.HOBBIES}
          rightRoute={RouteDefinitions.RESUME}
        />
      }
    >
      <div className="flex flex-1 flex-col-reverse items-center mx-0 gap-[5vw] sm:flex-row">
        <div className="biography">
          <div className="font-bold text-3xl text-center mb-10 sm:text-left">
            Welcome to my website!
          </div>
          <p>
            {
              "The ultimate multi-tasking wizard who's as skilled with code as he is with a cello! Originally from Taiwan, Wei's journey is like a funky mixtape of music and tech. Back in the day, he was all about those cello jams, grooving to the rhythms and soaking in the soulful melodies like nobody's business."
            }
          </p>
          <p>
            {
              "But then Wei caught the coding bug and decided to dive deep into the digital world. Armed with a computer science degree, he became a coding ninja, slinging lines of code like a boss and cracking tech puzzles left and right. Even though he's busy coding up a storm, Wei still finds time to keep the music alive, jamming out on his cello whenever he can or joining impromptu jam sessions with friends. Nowadays, you'll find Wei rocking it as a software engineer, bringing his unique blend of musical flair and tech savvy to everything he does."
            }
          </p>
          <p>
            {
              "Hi everyone, my name is Mr. Wei aka Sophie’s bobo. In my free time, I like being a good bobo and helping Sophie with laundry. Sophie does not like folding laundry so I help her with that and she will cook for me instead. But sometimes Sophie will be lazy and cook no good food so we eat out.... Our life is vely lazy too because Sophie likes to sleep and take nap all day long haiya. Another thing that has been happening in my life is that Sophie has been asking me from $10 to $20 to $21, which make me really speechless. I know I am rich but she should not scam me like that smh. Anyway, I love Sophie so much <3"
            }
          </p>
        </div>
        <img
          className="w-[50vw] sm:w-[20vw]"
          src="/assets/images/welcome_profile_picture.png"
        />
      </div>
    </BasicLayout>
  );
};
