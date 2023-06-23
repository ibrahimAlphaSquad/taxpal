import BusinessTasks from "@/components/businessTasks";
import FeatureSection from "@/components/featureSection";
import HomePage from "@/components/homePage";
import Pricing from "@/components/pricing";
import StartToday from "@/components/startToday";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="my-10">
      <HomePage />
      <FeatureSection />
      <BusinessTasks />
      <StartToday />
      <Testimonials />
      <Pricing />
    </main>
  );
}
