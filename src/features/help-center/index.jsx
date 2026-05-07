import HelpByCategory from "./components/HelpByCategory";
import HelpCenterHero from "./components/HelpCenterHero";
import HelpQuickAssistance from "./components/HelpQuickAssistance";

const HelpCenterHome = async ({ categories }) => {
  return (
    <>
      <HelpCenterHero />
      <HelpByCategory categories={categories} />
      <HelpQuickAssistance />
    </>
  );
};

export default HelpCenterHome;
