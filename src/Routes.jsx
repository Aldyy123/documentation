import Home from "./Pages/Home";
import Faq from "./Pages/Faq";
import Contact from "./Pages/Contact";
import Installation from "./Pages/Docs/Installation";
import Configuration from "./Components/Docs/Installation/Configuration"

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/faq',
    element: <Faq />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/installation",
    element: <Installation />,
    children: [
      {
        path: "configuration",
        element: <Configuration />,
      }
    ]
  }
];

export default routes