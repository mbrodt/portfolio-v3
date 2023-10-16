import { type Metadata } from "next"
import Image from "next/image"

import { Card } from "@/components/Card"
import { SimpleLayout } from "@/components/SimpleLayout"
// import logoAnimaginary from "@/images/logos/animaginary.svg"
// import logoCosmos from "@/images/logos/cosmos.svg"
// import logoHelioStream from "@/images/logos/helio-stream.svg"
// import logoOpenShuttle from "@/images/logos/open-shuttle.svg"
// import logoPlanetaria from "@/images/logos/planetaria.svg"
import logoLf from "@/images/logos/lf_case_icon.svg"
import logoDhf from "@/images/logos/dhf_case_icon.svg"
import logoReflection from "@/images/logos/reflection_case_icon.svg"
import logoBonnier from "@/images/logos/bonnier_case_icon.svg"
import logoTv2 from "@/images/logos/tv2_case_icon.svg"

const projects = [
  {
    name: "Learning Through Play",
    description: `The Learning Through Play website was developed for The Lego
     Foundation with my colleagues at Dwarf. As The
     Lego Foundation operates globally, a key focus of the development
     was on performance and accessibility so people of varying internet
     connections and devices could still use the site effectively.`,
    link: {
      href: "https://learningthroughplay.com",
      label: "learningthroughplay.com",
    },
    logo: logoLf,
    bgColor: "#ffd933",
  },
  {
    name: "Dansk Håndbold",
    description:
      "Dansk Håndbold is another project I worked on at Dwarf. The website was created to highlight the work of the Danish Handball Association and help recruit more people into the sport. It also serves as a database for all the teams, players and matches in the country.",
    link: { href: "https://danskhaandbold.dk", label: "danskhaandbold.dk" },
    logo: logoDhf,
    bgColor: "#e61428",
  },
  {
    name: "Digital Reflection Tool",
    description:
      "A real-time, websocket-powered reflection tool for Lego Foundation facilitators to use in workshops. Another Dwarf project helping the Foundation spread their mission of making learning through play more effective for both children and adults",
    link: {
      href: "https://reflections.learningthroughplay.com",
      label: "reflections.learningthroughplay.com",
    },
    logo: logoReflection,
    bgColor: "#4d2f93",
  },
  {
    name: "Bonnier Publications",
    description:
      "Operating as a consultant, I helped Bonnier Publications architect and develop a new platform for their brand websites. The platform is a whitelabel solution used to power all of their digital magazines, including iFORM, Bo Bedre and Illustreret Videnskab among others",
    link: { href: "https://illvid.dk", label: "illvid.dk" },
    logo: logoBonnier,
    bgColor: "#000000",
  },
  {
    name: "TV2 Regions",
    description:
      "Another whitelabel solution used to power the 7 major regional TV stations' websites. The platform includes a custom CMS and front-end used by TV2 Kosmopol, TV2 Nord and TV2 Fyn among others.",
    link: { href: "https://tv2kosmopol.dk/", label: "tv2kosmopol.dk" },
    logo: logoTv2,
    bgColor: "#f4f4f4",
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: "Projects",
  description: "Stuff I've done trying to put my dent in the universe.",
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Stuff I've done trying to put my dent in the universe."
      intro="I've worked on tons of projects over the years, but these are the ones I'm most proud of. Many of them wouldn't be possible without my awesome colleagues and clients, so a huge shout-out to them for the great collaborations and for teaching me so much along the way."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div
              className="relative z-10 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-md shadow-zinc-800/5 "
              style={{
                backgroundColor: project.bgColor,
              }}
            >
              <Image
                src={project.logo}
                alt=""
                className="h-12 w-12 rounded-full"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-rose-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
