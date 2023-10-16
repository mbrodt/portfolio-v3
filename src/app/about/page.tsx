import { type Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"

import { Container } from "@/components/Container"
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/SocialIcons"
import portraitImage from "@/images/portrait.jpg"

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-rose-500 dark:text-zinc-200 dark:hover:text-rose-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-rose-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: "About",
  description:
    "I'm Mads Brodt. Senior front-end developer from Copenhagen, Denmark",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Making the web a better place - one line of JavaScript at a time
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I'm Mads, a senior front-end developer from Copenhagen, Denmark.
              I've been programming for quite a few years now, but I honestly
              didn't love it at first. During my studies at the IT University of
              Copenhagen I got introduced to lots of different coding topics,
              but it never really clicked for me.
            </p>
            <p>
              It wasn't until the end of 2017 when I decided to google "how to
              make a website" that coding really started to make sense. I began
              with the classic HTML and CSS, building small (and ugly) websites
              for myself, and since then I've been working hard to level up my
              front-end skills to where I am today - even though I still have
              plenty of stuff to learn.
            </p>
            <p>
              In the last few years I've been diving deep into the modern
              JavaScript world: exploring the latest frameworks, libraries and
              tools, and learning how to build fast, accessible and scalable web
              applications. For now my go-to stack is React and NextJS, but I'm
              always keeping an eye on the ecosystem for what comes next. I've
              also really been enjoying the creative side of front-end, using
              libraries like Framer Motion and gsap to build beautiful and
              interactive user interfaces.
            </p>
            <p>
              Besides my work as a front-end dev, I also like creating content
              online. I think it's important to give back to the community, so
              for the last few years I've been sharing my experiences and
              learnings on LinkedIn, Twitter and in my newsletter. My content is
              mostly focused on front-end (obviously), but I also enjoy sharing
              coding career advice, how to level up your soft skills and
              generally how to approach a career in tech and land the right
              jobs.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://mads.fyi/li"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="https://github.com/mbrodt"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>

            <SocialLink
              href="https://mads.fyi/twitter"
              icon={TwitterIcon}
              className="mt-4"
            >
              Follow on Twitter
            </SocialLink>
            <SocialLink
              href="mailto:me@madsbrodt.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              me@madsbrodt.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
