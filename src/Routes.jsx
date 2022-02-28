import Home from "./Pages/Home";
import Faq from "./Pages/Faq";
import Download from "./Pages/Download";
import Documentation from "./Pages/Documentation";
import ContentDocument from "./Components/ContentDocument"
import Document from './Pages/Document'
import About from './Pages/About'
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
    path: "/download",
    element: <Download />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/documentation",
    element: <Document />,
    children: [
      {
        path: ":id",
        element: <ContentDocument />,
      }
    ]
  }
];

export default routes