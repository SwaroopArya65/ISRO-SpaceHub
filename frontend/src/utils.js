import { Bolt } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { BellDot } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { Users } from "lucide-react";
import { Lock } from "lucide-react";
import { Dessert } from "lucide-react";
import { ShieldPlus } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Images } from "lucide-react";
import { Figma } from "lucide-react";
import { Play } from "lucide-react";
import { MapPin } from "lucide-react";
import { Database } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { PanelTop } from "lucide-react";

export const Menus = [
  {
    name: "Home",
    subMenuHeading: ["Design", "Scale"],
    subMenu: [
      {
        name: "Why SpaceHub",
        desc: "What Provide",
        icon: PanelsTopLeft,
      },
      // {
      //   name: "Upadate & Announcements",
      //   desc: "Quick Information",
      //   icon: Bolt,
      // },
      // {
      //   name: "Navigation",
      //   desc: "Link pages",
      //   icon: PanelTop,
      // },
      {
        name: "Quick News",
        desc: "Event & Programs",
        icon: Database,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Resources",
    subMenuHeading: ["Get started", "Programs", "Recent"],
    subMenu: [
      {
        name: "Beginner's Guides",
        desc: "Materials on SST",
        icon: ShoppingBag,
      },
      {
        name: "Educational Courses",
        desc: "Learning Path",
        icon: MapPin,
      },
      {
        name: "Latest Articles",
        desc: "Recent Articles",
        icon: BellDot,
      },
      {
        name: "Clavis of Terms",
        desc: "Definitions of terms",
        icon: Play,
      },
      {
        name: "Workshops & Seminars",
        desc: "upcoming & past events",
        icon: BookOpenText,
      },
      {
        name: "Recent Discoveries",
        desc: "Space Discoveries",
        icon: Figma,
      },
      {
        name: "Foundational Articles",
        desc: "Core Texts",
        icon: BriefcaseBusiness,
      },
      {
        name: "Research Initiatives",
        desc: "Research Portfolio",
        icon: Images,
      },
      {
        name: "Newsletters",
        desc: "Events & Advancements",
        icon: Images,
      },
    ],
    gridCols: 3,
  },
  {
    name: "Courses",
    subMenu: [
      {
        name: "Beginner Courses",
        desc: "Center",
        icon: CircleHelp,
      },
      {
        name: "Intermediate Courses",
        desc: "Project help",
        icon: MessageCircle,
      },
      {
        name: "Advanced",
        desc: "Urgent issues Courses",
        icon: TriangleAlert,
      },
      {
        name: "Certifications",
        desc: "Urgent issues",
        icon: TriangleAlert,
      },
    ],
    gridCols: 1,
  },
  {
    name: "Support",
    subMenu: [
      {
        name: "Contact Us",
        desc: "Center",
        icon: CircleHelp,
      },
      {
        name: "Partnerships",
        desc: "Project help",
        icon: MessageCircle,
      },
      {
        name: "Feedback",
        desc: "Urgent issues Courses",
        icon: TriangleAlert,
      },
    ],
    gridCols: 1,
  },
  {
    name: "About Us",
    subMenuHeading: ["Overview", "For Developers"],
    subMenu: [
      {
        name: "Mission and Vision",
        desc: "About Comapny",
        icon: ShieldPlus,
      },
      {
        name: "Teams",
        desc: "Work Cultures",
        icon: Users,
      },
      {
        name: "Partners & Collaborators",
        desc: "Persion with Us",
        icon: Dessert,
      },
      // {
      //   name: "Security",
      //   desc: "Your site secured",
      //   icon: Lock,
      // },
    ],
    gridCols: 2,
  },
];
