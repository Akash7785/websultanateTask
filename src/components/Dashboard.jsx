import LiveDrop from "./LiveDrop";
import FeaturedBox from "./FeaturedBox";
import Banner from "./Banner";
import Battle from "./Battle";
import Deliveries from "./Deliveries";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <div className="flex bg-[#0E0E11] min-h-screen text-white">
      <main className="flex-1 px-4 py-4 space-y-4 overflow-hidden">
        <LiveDrop />
        <Banner />
        <FeaturedBox />
        <Battle />
        <Deliveries />
        <Footer />
      </main>
    </div>
  );
};

export default Dashboard;
