import {
  HomeAwards,
  HomeBanner,
  HomeClients,
  HomeNews,
  HomeOpenSourceproject,
  HomeProjects,
  HomeTeamMembers,
  HomeWhatWeDo,
} from "@/components/home";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <HomeWhatWeDo />
      <HomeProjects />
      <HomeTeamMembers />
      <HomeAwards />
      <HomeOpenSourceproject />
      <HomeClients />
      <HomeNews />
    </div>
  );
}
