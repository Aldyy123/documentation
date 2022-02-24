import Home from "./Pages/Home";
import Faq from "./Pages/Faq";
import Contact from "./Pages/Contact";
import Documentation from "./Pages/Documentation";
import ContentDocument from "./Components/ContentDocument"
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
    path: "/documentation",
    element: <Documentation />,
    children: [
      {
        path: ":id",
        element: <ContentDocument />,
      }
    ]
  }
];

export default routes