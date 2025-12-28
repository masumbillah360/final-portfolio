'use client';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import Titlebar from '@/components/title-bar';

import { skillsData, skillsImage } from '@/constants';
import sectionBackground from '@/public/section.svg';

function Skills() {
    return (
        <div className="relative my-10 md:my-14 lg:my-20">
            <Titlebar title="Skills" />
            <div className="my-10">
                <Image
                    src={sectionBackground}
                    alt="Section Image"
                    className="absolute top-0 -z-10 w-full"
                />
                <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-linear-to-r to-[#0a0d37]">
                    <div className="flex flex-row">
                        <div className="h-px w-full bg-linear-to-r from-transparent via-pink-500 to-violet-600"></div>
                        <div className="h-px w-full bg-linear-to-r from-violet-600 to-transparent"></div>
                    </div>
                    <div className="px-4 lg:px-8 py-5">
                        <div className="flex flex-row space-x-2">
                            <div className="h-3 w-3 rounded-full bg-red-400"></div>
                            <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                            <div className="h-3 w-3 rounded-full bg-green-200"></div>
                        </div>
                    </div>
                    <div className="overflow-hidden border-t-2 border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
                        <code className="font-mono text-xs md:text-sm lg:text-lg">
                            <div className="blink">
                                <span className="mr-2 text-pink-500">
                                    const
                                </span>
                                <span className="mr-2 text-white tracking-widest">
                                    skills
                                </span>
                                <span className="mr-2 text-pink-500">=</span>
                                <span className="text-gray-400">{'{'}</span>
                            </div>
                            <div className="ml-4 lg:ml-8 mr-2">
                                <span className="text-slate-400">
                                    &#47;&#47; Framework & Library
                                </span>
                            </div>
                            <div className="ml-4 lg:ml-8 mr-2 mb-1">
                                <span className=" text-white underline underline-offset-4">
                                    framework_and_library
                                </span>{' '}
                                <span className="text-white">:</span>{' '}
                                <span className="text-gray-400">{`['`}</span>
                                <span className="text-amber-300">HTML</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">CSS</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">
                                    Bootstrap
                                </span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Tailwind</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">JavaScript</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">TypeScript</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">React</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">NextJS</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">React Native</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Expo Go</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Shadcn UI</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Redux</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Express</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Hono</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Prisma</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Zustand</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">React Query</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">SWR</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">
                                    Drizzle ORM
                                </span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Oauth</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Turso</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">MongoDB</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">SQLite</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">mySQL</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">
                                    PostgreSQL
                                </span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">REST API</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">GraphQL</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">tRPC</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Redis</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Firebase</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Supabase</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">NestJS</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">
                                    Web Socket
                                </span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Kafka</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Swagger</span>
                                <span className="text-gray-400">{"'],"}</span>
                            </div>
                            <div className="ml-4 lg:ml-8 mr-2">
                                <span className="text-slate-400">
                                    &#47;&#47; Tools & Productivity
                                </span>
                            </div>
                            <div className="ml-4 lg:ml-8 mr-2 mb-1">
                                <span className=" text-white underline underline-offset-4 tracking-widest">
                                    tools
                                </span>{' '}
                                <span className="text-white">:</span>{' '}
                                <span className="text-gray-400">{`['`}</span>
                                <span className="text-amber-300">Jest</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">VS Code</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Android Studio</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">AWS</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Cloudflare</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Vercel</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Digital Ocean</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Postman</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Github</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Gitlab</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Figma</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Notion</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Jira</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">ClickUP</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-gray-400">{"'],"}</span>
                            </div>
                            <div className="ml-4 lg:ml-8 mr-2">
                                <span className="text-slate-400">
                                    &#47;&#47; Others Skills
                                </span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white tracking-wider">
                                    hardWorker:
                                </span>
                                <span className="text-orange-400">true</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white tracking-wider">
                                    quickLearner:
                                </span>
                                <span className="text-orange-400">true</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white tracking-wider">
                                    problemSolver:
                                </span>
                                <span className="text-orange-400">true</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div className="mt-1">
                                <span className="ml-4 lg:ml-8 mr-2 text-green-400 tracking-wider">
                                    hireable:
                                </span>
                                <span className="text-orange-400">
                                    function
                                </span>
                                <span className="text-gray-400">{'() {'}</span>
                            </div>
                            <div>
                                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">
                                    return
                                </span>
                                <span className="text-gray-400">{`(`}</span>
                            </div>
                            <div>
                                <span className="ml-12 lg:ml-24 text-cyan-400">
                                    this.
                                </span>
                                <span className="mr-2 text-white">
                                    hardWorker
                                </span>
                                <span className="text-amber-300">
                                    &amp;&amp;
                                </span>
                            </div>
                            <div>
                                <span className="ml-12 lg:ml-24 text-cyan-400">
                                    this.
                                </span>
                                <span className="mr-2 text-white">
                                    problemSolver
                                </span>
                                <span className="text-amber-300">
                                    &amp;&amp;
                                </span>
                            </div>
                            <div>
                                <span className="ml-12 lg:ml-24 text-cyan-400">
                                    this.
                                </span>
                                <span className="mr-2 text-white">
                                    skills.length
                                </span>
                                <span className="mr-2 text-amber-300">
                                    &gt;=
                                </span>
                                <span className="text-orange-400">5</span>
                            </div>
                            <div>
                                <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
                            </div>
                            <div>
                                <span className="text-gray-400">{`};`}</span>
                            </div>
                        </code>
                    </div>
                </div>
            </div>
            <div className="w-full my-12">
                <Marquee
                    gradient={false}
                    speed={100}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="left">
                    {skillsData.map((skill, i) => (
                        <div
                            className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                            key={'skill' + i}>
                            <div className="h-full w-full rounded-lg border border-primary bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                                <div className="flex -translate-y-px justify-center">
                                    <div className="w-3/4">
                                        <div className="h-0.5 w-full bg-linear-to-r from-transparent via-white to-transparent" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-3 p-6">
                                    <div className="h-8 sm:h-10">
                                        <Image
                                            src={skillsImage(skill)?.src}
                                            alt={skill}
                                            width={40}
                                            height={40}
                                            className="h-full w-auto rounded-lg"
                                        />
                                    </div>
                                    <p className="text-white text-sm sm:text-lg">
                                        {skill}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
}

export default Skills;
