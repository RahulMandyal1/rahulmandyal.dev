"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import { cn } from "../libs/utils";
import { ThemeToggle } from "./ThemeToggle";

const navItems = {
  "/": {
    name: "home",
  },
  "/posts": {
    name: "posts",
  },
};

export function Header() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/posts/")) {
    pathname = "/posts";
  }

  return (
    <header className="my-10 tracking-tight ">
      <div className=" lg:sticky lg:top-20">
        <LayoutGroup>
          <nav
            className="fade relative scroll-pr-6  px-0 pb-0 md:relative md:overflow-auto"
            id="nav"
          >
            <div className="flex w-full flex-row justify-between items-center">
              <div className="flex flex-row justify-between">
                {Object.entries(navItems).map(([path, { name }]) => {
                  const isActive = path === pathname;
                  return (
                    <Link
                      key={path}
                      href={path}
                      className={cn(
                        "flex align-middle transition-all hover:text-neutral-200",
                        !isActive && "text-neutral-500"
                      )}
                    >
                      <span className="relative px-2 py-1">
                        {name}
                        {path === pathname ? (
                          <motion.div
                            className="absolute inset-0 top-7 z-[-1] mx-2 h-[1px] bg-white bg-gradient-to-r"
                            layoutId="sidebar"
                            transition={{
                              type: "spring",
                              stiffness: 350,
                              damping: 30,
                            }}
                          />
                        ) : null}
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://drive.google.com/file/d/1IdWE7zYkyCawQmUsVg7M2i37bYmICZDn/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b"
                >
                  Resume
                </a>
                <ThemeToggle />
              </div>
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </header>
  );
}
