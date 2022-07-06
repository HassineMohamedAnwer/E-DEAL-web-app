import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import ElectronicsScreen from "./screens/ElectronicsScreen";
import ClothesScreen from "./screens/ClothesScreen";
import AppartmentsScreen from "./screens/AppartmentsScreen";
import SignupScreen from "./screens/signupscreen";
import Panier from "./screens/panier";
import AddProduct from "./components/addproduct";

const App = () => {
  let component;
  switch (window.location.pathname) {
    case "/AboutUsScreen":
      component = <AboutUsScreen />;
      break;
    case "/ContactScreen":
  component = <ContactScreen />;
  break;
    case "/ElectronicsScreen":
      component = <ElectronicsScreen />;
      break;
    case "/ClothesScreen":
      component = <ClothesScreen />;
      break;
    case "/AppartmentsScreen":
      component = <AppartmentsScreen />;
      break;
    case "/Signupscreen":
      component = <SignupScreen />;
      break;
      case "/Panier":
      component = <Panier />;
      break;
    default:
      component = <HomeScreen />;
      break;
  }
  return (
    <>
      <Header></Header>
      <main className="py-3">
        <Container>
          {component}
        </Container>
      </main>

      <Footer></Footer>
    </>
  );
};

export default App;
