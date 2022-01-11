import Layout from "../../Layout";
import Bestseller from "./Bestseller";
import Service from "./Service";
import Shopnow from "./Shopnow";
import Slogan from "./Slogan";
const Home = () => {
  return (
    <Layout>
      <Shopnow />
      <Service />
      <Bestseller />
      <Slogan />
    </Layout>
  );
};

export default Home;
