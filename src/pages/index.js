import { Key, Mic, Send, Settings, Trash } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SynthWave() {
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (e) => {
    if (e.target.value.length > 0) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  };
  return (
    <main>
      <div className="drawer drawer-mobile">
        <input id="sidebar" type="checkbox" className="drawer-toggle" />
        <div
          className="drawer-content "
          style={{
            scrollBehavior: "smooth",
            scrollPaddingTop: "5rem",
          }}
        >
          <div
            className="  top-0  flex h-20 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 
  bg-base-100 text-base-content"
          >
            <nav className="navbar w-full ">
              <div className="flex  flex-1 md-gap-1 lg:gap-2">
                <span
                  className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
                  data-tip="Menu"
                >
                  <label
                    htmlFor="sidebar"
                    className="btn btn-square btn-ghost drawer-button lg:hidden"
                  >
                    <svg
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </span>
              </div>
            </nav>
          </div>
          <div className="flex flex-col polka  items-center justify-around px-6 py-3 pb-16 xl:pr-2 bg-base-200   min-h-screen">
            <div className="w-full space-y-2 shadow-md">
              <div className="w-full bg-base-100 px-3 py-3">
                <p className="leading-6 p-2">
                  To add an icon inside the input element, you can use the
                  InputGroup component from the Tailwind CSS framework. You'll
                  need to import the necessary icons from a library like
                  Heroicons. First, install heroicons (if you haven't already)
                  by running:
                </p>
                <pre>
                  <div className="bg-black rounded-md mb-4">
                    <div className="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md">
                      <span>bash</span>
                      <button className="flex ml-auto gap-2">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                          <rect
                            x="8"
                            y="2"
                            width="8"
                            height="4"
                            rx="1"
                            ry="1"
                          ></rect>
                        </svg>
                        Copy code
                      </button>
                    </div>
                    <div className="p-4 overflow-y-auto">
                      <code className="!whitespace-pre hljs language-bash">
                        npm install @heroicons/react
                      </code>
                    </div>
                  </div>
                </pre>
              </div>{" "}
            </div>

            <div className=" w-1/2 z-30 fixed bottom-0 p-5">
              <div className="input-group">
                <input
                  type="text"
                  className="input input-primary w-full"
                  placeholder="Type your message..."
                  onChange={handleInputChange}
                />
                {isTyping ? (
                  <button className="btn btn-square">
                    <Send className="w-5 h-5 text-base-500" />
                  </button>
                ) : (
                  <button className="btn btn-square">
                    <Mic className="w-5 h-5 text-base-500" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className="drawer-side"
          style={{ scrollBehavior: "smooth", scrollPaddingTop: "5rem" }}
        >
          <label htmlFor="sidebar" className="drawer-overlay  "></label>
          <aside className="p-3 w-72 bg-base-100  text-base-content">
            <div className="z-20  bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 px-4 py-2 hidden lg:flex ">
              <Link
                href="/"
                aria-current="page"
                aria-label="Homepage"
                className="flex-0 btn btn-ghost px-2"
              >
                synthwave
              </Link>
            </div>
            <div className="h-4"></div>
            <div className="flex flex-col space-y-2">
              <button className="btn btn-primary w-full">New Chat</button>
              <input
                placeholder="Search ..."
                className="input w-full input-bordered"
              />
            </div>
            <div className="h-4"></div>
            <div className="px-1 py-1 overflow-y-auto h-80 bg-base-200 ">
              <ul className="p-2 space-y-2">
                <li>
                  <button className="btn btn-outline">
                    How to make a div center ...
                  </button>
                </li>
                <li>
                  <button className="btn btn-outline">
                    How to make a component in React ...
                  </button>
                </li>
              </ul>
            </div>
            <div className="divider"></div>
            <ul className="menu text-sm  w-56 p-2 rounded-box">
              <li>
                <a>
                  <Trash className="h-5 w-5" />
                  Clear Conversations
                </a>
              </li>
              <li>
                <a>
                  <Key className="h-5 w-5" />
                  OpenAI API KEY
                </a>
              </li>
              <li>
                <a>
                  <Settings className="h-5 w-5" />
                  Settings
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </main>
  );
}
