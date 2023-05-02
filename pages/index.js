import BusinessTasks from "@/components/businessTasks";
import FeatureSection from "@/components/featureSection";
import HomePage from "@/components/homePage";

export default function Home() {
  return (
    <main className="my-10">
      <HomePage />
      <FeatureSection />
      <BusinessTasks />
    </main>
  );
}
