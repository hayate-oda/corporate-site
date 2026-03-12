import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Philosophy from "./pages/Philosophy";
import Services from "./pages/Services";
import ZeroToOne from "./pages/services/ZeroToOne";
import FractionalCOO from "./pages/services/FractionalCOO";
import GlobalExpansion from "./pages/services/GlobalExpansion";
import About from "./pages/Company";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SpecifiedCommercialTransaction from "./pages/SpecifiedCommercialTransaction";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "philosophy", Component: Philosophy },
      { path: "services", Component: Services },
      { path: "services/zero-to-one", Component: ZeroToOne },
      { path: "services/fractional-coo", Component: FractionalCOO },
      { path: "services/global-expansion", Component: GlobalExpansion },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "specified-commercial-transaction", Component: SpecifiedCommercialTransaction },
      { path: "*", Component: NotFound },
    ],
  },
]);