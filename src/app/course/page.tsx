import avatarImage from "@/images/avatar.png"
import { Metadata } from "next"
import Image from "next/image"
import CountdownBar from "./CountdownBar"

export const metadata: Metadata = {
  title: "Kickstart your Front-End career",
  description:
    "Learn what it takes to work as a professional front-end developer, what necessary skills are expected, and how to land a front-end job.",
  openGraph: {
    images: ["/course-seo.png"],
  },
}

export default function Course() {
  return (
    <>
      <CountdownBar />

      <div className="relative isolate overflow-hidden bg-white">
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <Image
              src={avatarImage}
              alt=""
              sizes="2.25rem"
              className="h-14 w-14 rounded-full object-cover"
              priority
            />
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <span className="rounded-full bg-rose-600/10 px-3 py-1 font-semibold leading-6 text-rose-600 ring-1 ring-inset ring-rose-600/10">
                Video course launching March 25, 2025
              </span>
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Landing a front-end job is hard.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The expectations for juniors are through the roof, and the job
              market is especially tough right now. In this self-paced video
              course I'll use my experience working as a Lead Front-End Engineer
              in charge of hiring, to teach you what it takes to work as a
              professional front-end developer. I'll walk you through how to
              build the necessary skills, what to expect when working as a
              front-end dev, and how to land a great front-end job - even if you
              don't have any prior experience.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="https://buy.stripe.com/14k7t2fE8br8guY4gh"
                className="rounded-md bg-rose-600 px-5 py-3.5 text-lg font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
              >
                Pre-order now for $69{" "}
                <span className="text-lg text-white/50	 line-through">
                  ($119)
                </span>
              </a>
            </div>
            <ul className="mt-10 space-y-2">
              <li className="flex items-start text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mr-2 h-6 w-6 flex-shrink-0 text-rose-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Based on real-world experience from the industry
              </li>
              <li className="flex items-start text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mr-2 h-6 w-6 flex-shrink-0 text-rose-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Aimed at beginners and devs with 1-3 years of experience
              </li>{" "}
              <li className="flex items-start text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mr-2 h-6 w-6 flex-shrink-0 text-rose-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Learn how to go from 0 to landing and thriving in a front-end
                role
              </li>
            </ul>
            <div className="text prose mt-10 leading-8 text-gray-600">
              <p> This course is for you if you're either:</p>
              <ol className="[&>li]:my-1">
                <li>
                  Just getting started with front-end and find it fascinating,
                  but aren't sure how to move to the next level
                </li>
                <li>
                  Have done some technical courses, maybe gone to school or a
                  bootcamp, but haven't managed to land that first job yet
                </li>
                <li>
                  Might already have a job but are still within the first few
                  years of their career and look for guidance and what to
                  improve on from here
                </li>
              </ol>
              And if you decide it wasn't the right fit for you (either now or
              when the course is launched), you'll get a full refund - no
              questions asked.
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  alt="App screenshot"
                  src="/course-presale.png"
                  width={2432}
                  height={1442}
                  className="w-[76rem] rounded-md object-cover shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
