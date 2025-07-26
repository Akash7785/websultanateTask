import Banner from "./components/Banner";
import Card from "./components/Card";
import Chat from "./components/Chat";
import Dashboard from "./components/Dashboard";
import FeaturedBox from "./components/FeaturedBox";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-[#0E0E11] flex flex-col">
        <Navbar />

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[80px_1fr_320px]">
          <aside className="hidden lg:block">
            <Sidebar />
          </aside>

          <main className="overflow-y-auto">
            <Dashboard />
          </main>

          <aside className="hidden lg:block">
            <Chat />
          </aside>
        </div>
      </div>
      {/* <Banner />
      <FeaturedBox /> */}

      {/* <Card
        title="Crazy Designers"
        price={390}
        tags={["Streetwear", "Watches"]}
        image="/assets/crazy-box.png" // Replace with your actual path or import
        labels={["New", "Hot", "Popular"]}
      />

      <Card
        title="Sneaker Blast"
        price={120}
        tags={["Sneakers"]}
        image="/assets/sneaker-box.png"
        labels={["Hot"]}
      />

      <Card
        title="Minimal Pack"
        price={50}
        tags={["Accessories"]}
        image="/assets/minimal.png"
        labels={[]}
      /> */}
    </>
  );
};

export default App;
