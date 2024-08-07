import { ExperienceCard } from "@/components/experience-card";
import { ProjectCard3d } from "@/components/project-card-3d";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from 'framer-motion';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import experiences from "@/lib/experiences.json";
import me from "@/lib/img/me.png";
import projects from "@/lib/projects.json";
import { AtSign, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const name = [
        { text: "Vineet" },
        { text: "Jadhav" },
    ]

    return (
        <div className="flex flex-col overflow-x-hidden">
            {/* Hero */}
            <header className="flex flex-col sm:flex-row h-screen w-full justify-center items-center gap-4 mt-16">
                <div className="flex flex-col gap-2 w-full">
                    <TypewriterEffectSmooth words={name} />
                    <Reveal
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
                    >
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                            <span className="text-3xl font-bold text-yellow-500"> Full Stack </span> Web Developer
                        </h3>
                    </Reveal>

                    <Reveal
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.2 } }}
                    >
                        <p className="leading-7 text-md">
                            I plan, design, build, test and deploy software. With the help of coffee of course.
                        </p>
                    </Reveal>
                    <div className="flex gap-4">
                        <TooltipProvider>
                            <Reveal
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                            >
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link href="https://www.linkedin.com/in/vineet-op/" target="_blank">
                                            <Button variant="secondary" size="icon">
                                                <Linkedin />
                                            </Button>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>LinkedIn</p>
                                    </TooltipContent>
                                </Tooltip>
                            </Reveal>
                            <Reveal
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } }}
                            >
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link href="https://github.com/vineet-op" target="_blank">
                                            <Button variant="secondary" size="icon">
                                                <Github />
                                            </Button>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Github</p>
                                    </TooltipContent>
                                </Tooltip>
                            </Reveal>
                            <Reveal
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.4 } }}
                            >
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link href="mailto:vineet290403@gmail.com" target="_blank">
                                            <Button variant="secondary" size="icon">
                                                <AtSign />
                                            </Button>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Email</p>
                                    </TooltipContent>
                                </Tooltip>
                            </Reveal>
                        </TooltipProvider>
                        <a href="https://drive.google.com/file/d/1KZQO3V_7mZUU5Dvoipft6Knqo4rkhm1Q/view?usp=sharing">
                            <Button className="ml-10 cursor-pointer bg-yellow-500">Resume</Button>
                        </a>
                    </div>
                </div>
                <div className="flex relative w-full h-full rounded-xl ">
                    <Image
                        src={me}
                        alt="Me"
                        fill
                        style={{ objectFit: "contain" }}
                        className="rounded-xl object-cover"
                    />
                </div>
            </header>
            <Separator />
            {/* About */}
            <section className="flex flex-col items-start justify-start gap-4 sm:py-32 py-16">
                <h2 id="about" className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                    About Me
                </h2>
                <Reveal
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
                >
                    <p className="leading-7">
                        I build dynamic, user-centric web applications using modern technologies like React.Js, Next.js ,Node.js, and MongoDB. My expertise covers both front-end and back-end development, ensuring seamless integration and functionality. I deliver robust, scalable solutions tailored to each project's unique needs
                        <br />
                        <br />
                        Presently, my primary focus revolves around mastering the art of building high-quality and scalable software applications, continuously refining my skills in both frontend and backend development. As the saying goes, <em>"Once you go fullstack, you never go back"</em>.
                        <br />
                        <br />
                        When I'm not coding, I usually play games, play football or binge-watch Animes.
                    </p>
                </Reveal>
            </section>
            <Separator />
            {/* Experience */}
            <section id="experiences" className="flex flex-col items-start justify-start gap-4 sm:py-32 sm:mx-24 md:mx-32 lg:mx-64 xl:mx-96 py-16">
                <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-center w-full">
                    Where I've Worked
                </h2>
                <div className="flex flex-col gap-4 md:hidden">
                    {experiences.map((experience) => (
                        <ExperienceCard
                            key={experience.title}
                            title={experience.title}
                            company={experience.company}
                            date={experience.date}
                            description={experience.description}
                            skills={experience.skills}
                        />
                    ))}
                </div>
                <TracingBeam className="px-6 hidden md:flex md:flex-col">
                    <div className="flex flex-col gap-4">
                        {experiences.map((experience) => (
                            <ExperienceCard
                                key={experience.title}
                                title={experience.title}
                                company={experience.company}
                                date={experience.date}
                                description={experience.description}
                                skills={experience.skills}
                            />
                        ))}
                    </div>
                </TracingBeam>
            </section>
            <Separator />
            {/* Projects */}
            <section id="projects" className="flex flex-col items-center justify-center gap-4 sm:py-32 py-16">
                <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                    Projects Done
                </h2>
                <div className="flex flex-row flex-wrap gap-x-4 justify-evenly">
                    {projects.map((projects, index) => (
                        <Reveal
                            key={projects.title}
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: index / 30 } }}
                        >
                            <ProjectCard3d
                                title={projects.title}
                                type={projects.type}
                                description={projects.description}
                                imageUrl={projects.imageUrl}
                                githubUrl={projects.githubUrl}
                                demoUrl={projects.demoUrl}
                                skills={projects.skills}
                            />
                        </Reveal>
                    ))}
                </div>
            </section>
            <Separator />
            {/* Skills */}
            <section id="skills" className="flex flex-col items-center justify-center gap-4 sm:py-32 py-16">
                <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                    Skills & Tools
                </h2>
                <p className="leading-7 text-center">
                    My primary focus lies in frontend development and backend development. Full-stack is the way to go xD.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-start">
                    {/* Languages */}
                    <Reveal
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                    >
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                Languages
                            </h3>
                            <div className="flex flex-row flex-wrap justify-center gap-4">
                                {/* JavaScript */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="hover:animate-spin">
                                        <path fill="#f7df1e" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">JavaScript</p>
                                </div>
                                {/* TypeScript */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="hover:animate-spin">
                                        <rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect><polygon fill="#fff" points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"></polygon><path fill="#fff" d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">TypeScript</p>
                                </div>
                                {/* Java */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                                        <linearGradient id="kY2lFHytK6J7eR89ploKLa_2T6TKY6whzgV_gr1" x1="32.485" x2="32.485" y1="26.009" y2="39.6" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset=".695" stop-color="#c822ff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLa_2T6TKY6whzgV_gr1)" d="M26.07,35.31l6.17-3.6l6.66,3.92c-1.3,2.29-3.69,3.7-6.33,3.7 C29.73,39.33,27.26,37.69,26.07,35.31z"></path><linearGradient id="kY2lFHytK6J7eR89ploKLb_2T6TKY6whzgV_gr2" x1="32" x2="32" y1="27.121" y2="56.372" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset=".695" stop-color="#c822ff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLb_2T6TKY6whzgV_gr2)" d="M52.6,43.67v0.22L32,55.79l-20.6-11.9 l7.7-4.5c2.6,4.77,7.67,8.01,13.47,8.01c5.52,0,10.55-2.93,13.29-7.69L52.6,43.67z"></path><linearGradient id="kY2lFHytK6J7eR89ploKLc_2T6TKY6whzgV_gr3" x1="31.93" x2="31.93" y1="24.81" y2="35.29" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset=".699" stop-color="#e6abff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLc_2T6TKY6whzgV_gr3)" d="M38.55,27.97l-6.35,3.72h-0.01l-6.13,3.6 c-0.48-0.97-0.75-2.06-0.75-3.22c0-1.39,0.39-2.68,1.07-3.79c1.28-2.08,3.57-3.47,6.19-3.47C34.98,24.81,37.2,25.98,38.55,27.97z"></path><linearGradient id="kY2lFHytK6J7eR89ploKLd_2T6TKY6whzgV_gr4" x1="31.87" x2="31.87" y1="8.21" y2="43.89" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset=".699" stop-color="#e6abff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLd_2T6TKY6whzgV_gr4)" d="M45.12,24.1l0.39-0.24 c-2.83-4.45-7.67-7.12-12.94-7.12c-5.58,0-10.47,3-13.15,7.46c-1.38,2.31-2.18,4.99-2.18,7.87c0,2.65,0.67,5.13,1.85,7.3 l-7.69,4.52V20.11L32,8.21l20.34,11.75L45.12,24.1z"></path><linearGradient id="kY2lFHytK6J7eR89ploKLe_2T6TKY6whzgV_gr5" x1="15.25" x2="15.25" y1="32.704" y2="48.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset=".699" stop-color="#e6abff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLe_2T6TKY6whzgV_gr5)" d="M19.09,39.37c0,0.01,0.01,0.01,0.01,0.02 l-7.7,4.5L19.09,39.37z"></path><linearGradient id="kY2lFHytK6J7eR89ploKLf_2T6TKY6whzgV_gr6" x1="29.15" x2="29.15" y1="26.351" y2="39.094" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset=".699" stop-color="#e6abff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLf_2T6TKY6whzgV_gr6)" d="M32.24,31.71l-6.17,3.6 c0-0.01-0.01-0.01-0.01-0.02l6.13-3.6h0.01L32.24,31.71z"></path><linearGradient id="kY2lFHytK6J7eR89ploKLg_2T6TKY6whzgV_gr7" x1="15.25" x2="15.25" y1="30.671" y2="43.89" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset=".699" stop-color="#e6abff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLg_2T6TKY6whzgV_gr7)" d="M19.09,39.37c0,0.01,0.01,0.01,0.01,0.02 l-7.7,4.5L19.09,39.37z"></path><linearGradient id="kY2lFHytK6J7eR89ploKLh_2T6TKY6whzgV_gr8" x1="29.15" x2="29.15" y1="24.723" y2="35.31" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset=".699" stop-color="#e6abff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLh_2T6TKY6whzgV_gr8)" d="M32.24,31.71l-6.17,3.6 c0-0.01-0.01-0.01-0.01-0.02l6.13-3.6h0.01L32.24,31.71z"></path><linearGradient id="kY2lFHytK6J7eR89ploKLi_2T6TKY6whzgV_gr9" x1="42.27" x2="42.27" y1="13.698" y2="56.641" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset=".699" stop-color="#e6abff"></stop></linearGradient><polygon fill="url(#kY2lFHytK6J7eR89ploKLi_2T6TKY6whzgV_gr9)" points="52.34,19.96 32.24,31.71 32.2,31.69 38.55,27.97 45.12,24.1"></polygon><linearGradient id="kY2lFHytK6J7eR89ploKLj_2T6TKY6whzgV_gr10" x1="42.27" x2="42.27" y1="8.21" y2="43.887" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset=".699" stop-color="#e6abff"></stop></linearGradient><polygon fill="url(#kY2lFHytK6J7eR89ploKLj_2T6TKY6whzgV_gr10)" points="52.34,19.96 32.24,31.71 32.2,31.69 38.55,27.97 45.12,24.1"></polygon><linearGradient id="kY2lFHytK6J7eR89ploKLk_2T6TKY6whzgV_gr11" x1="32" x2="32" y1="1.255" y2="56.081" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLk_2T6TKY6whzgV_gr11)" d="M55.1,16.93L33.5,4.46 c-0.93-0.53-2.07-0.53-3,0L8.9,16.93c-0.92,0.54-1.5,1.53-1.5,2.6v24.94c0,1.07,0.58,2.06,1.5,2.6l21.6,12.47 c0.93,0.53,2.07,0.53,3,0l21.6-12.47c0.92-0.54,1.5-1.53,1.5-2.6V19.53C56.6,18.46,56.02,17.47,55.1,16.93z M54.6,44.47 c0,0.36-0.19,0.69-0.5,0.87L32.5,57.81c-0.31,0.17-0.69,0.17-1,0L9.9,45.34c-0.31-0.18-0.5-0.51-0.5-0.87V19.53 c0-0.36,0.19-0.69,0.5-0.87L31.5,6.19c0.31-0.17,0.69-0.17,1,0l21.6,12.47c0.31,0.18,0.5,0.51,0.5,0.87V44.47z"></path><polygon fill="#fff" points="45.86,39.7 45.86,39.71 38.9,35.63"></polygon><linearGradient id="kY2lFHytK6J7eR89ploKLl_2T6TKY6whzgV_gr12" x1="42.42" x2="42.42" y1="21" y2="48.745" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset=".699" stop-color="#e6abff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLl_2T6TKY6whzgV_gr12)" d="M52.34,19.96l-20.1,11.75l6.66,3.92 l6.96,4.08l6.74,3.96V20.11L52.34,19.96z M44,33h-2v2h-2v-2h-2v-2h2v-2h2v2h2V33z M51,33h-2v2h-2v-2h-2v-2h2v-2h2v2h2V33z"></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">C++</p>
                                </div>
                                {/* Python */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="hover:animate-spin">
                                        <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">Python</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Frontend */}
                    <Reveal
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 } }}
                    >
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                Frontend
                            </h3>
                            <div className="flex flex-row flex-wrap justify-center gap-4">
                                {/* CSS */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100" className="hover:animate-spin">
                                        <path d="M51.958,98c-0.58,0-1.16-0.078-1.724-0.232l-27.742-7.702c-2.593-0.72-4.495-3.004-4.735-5.685	l-6.179-69.304c-0.16-1.813,0.451-3.621,1.677-4.962C14.485,8.77,16.233,8,18.053,8h67.895c1.821,0,3.569,0.771,4.798,2.115	c1.225,1.339,1.837,3.147,1.677,4.959L86.236,84.37c-0.24,2.683-2.145,4.967-4.739,5.686l-27.803,7.709	C53.124,97.921,52.542,98,51.958,98z" opacity=".35"></path><path fill="#f2f2f2" d="M49.958,96c-0.58,0-1.16-0.078-1.724-0.232l-27.742-7.702c-2.593-0.72-4.495-3.004-4.735-5.685	L9.578,13.077c-0.16-1.813,0.451-3.621,1.677-4.962C12.485,6.77,14.233,6,16.053,6h67.895c1.821,0,3.569,0.771,4.798,2.115	c1.225,1.339,1.837,3.147,1.677,4.959L84.236,82.37c-0.24,2.683-2.145,4.967-4.739,5.686l-27.803,7.709	C51.124,95.921,50.542,96,49.958,96z"></path><polygon fill="#2b59a1" points="83.947,12.5 77.762,81.792 49.958,89.5 22.231,81.803 16.053,12.5"></polygon><path fill="#40396e" d="M49.958,91c-0.135,0-0.27-0.019-0.401-0.055L21.83,83.249c-0.602-0.167-1.037-0.689-1.093-1.312	l-6.179-69.303c-0.037-0.419,0.104-0.835,0.388-1.146C15.23,11.177,15.632,11,16.053,11h67.895c0.421,0,0.822,0.177,1.106,0.488	c0.284,0.311,0.425,0.726,0.388,1.146l-6.186,69.292c-0.056,0.622-0.491,1.145-1.094,1.312l-27.804,7.709	C50.228,90.982,50.093,91,49.958,91z M23.634,80.635l26.324,7.309l26.402-7.32L82.308,14H17.692L23.634,80.635z"></path><polygon fill="#2785bd" points="72.467,77.38 77.771,17.957 50,17.957 50,83.608"></polygon><polygon fill="#d9eeff" points="50,43.957 51,47.957 50,51.957 30.94,51.957 30.23,43.957"></polygon><polygon fill="#d9eeff" points="50,26.957 51,30.957 50,34.957 29.441,34.957 28.72,26.957"></polygon><polygon fill="#d9eeff" points="51,69.957 50,74.796 32.55,69.967 31.39,56.957 39.92,56.957 40.5,63.397 50,65.957"></polygon><path fill="#f2f2f2" d="M50,26.957v8h11.969l-0.807,9H50c-0.009-0.002-0.008,8-0.008,8h10.485l-1.027,11.44L50,65.957v8.84	l17.4-4.83l0.12-1.44l2-22.37l0.21-2.29l1.5-16.91H50z"></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">CSS</p>
                                </div>

                                {/* HTML */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="hover:animate-spin">
                                        <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">HTML</p>
                                </div>

                                {/* React */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="animate-spin hover:animate-none">
                                        <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">React</p>
                                </div>

                                {/* NextJS */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256" className="hover:animate-spin">
                                        <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(5.33333,5.33333)"><path d="M18.974,31.5c0,0.828 -0.671,1.5 -1.5,1.5c-0.829,0 -1.5,-0.672 -1.5,-1.5v-14c0,-0.653 0.423,-1.231 1.045,-1.43c0.625,-0.198 1.302,0.03 1.679,0.563l16.777,23.704c5.142,-3.628 8.525,-9.602 8.525,-16.337c0,-11 -9,-20 -20,-20c-11,0 -20,9 -20,20c0,11 9,20 20,20c3.192,0 6.206,-0.777 8.89,-2.122l-13.916,-19.662zM28.974,16.5c0,-0.828 0.671,-1.5 1.5,-1.5c0.829,0 1.5,0.672 1.5,1.5v13.84l-3,-4.227z"></path></g></g>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">NextJS</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Backend */}
                    <Reveal
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } }}
                    >
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                Backend
                            </h3>
                            <div className="flex flex-row flex-wrap justify-center gap-4">
                                {/* Express */}

                                <div className="flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                                        <linearGradient id="Ptgyoqd6DQJu9ZUJIh3sLa_2ZOaTclOqD4q_gr1" x1="30.982" x2="30.982" y1="21.203" y2="43.514" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#Ptgyoqd6DQJu9ZUJIh3sLa_2ZOaTclOqD4q_gr1)" d="M45.758,32.346L56.964,47h-0.85c-1.051,0-2.041-0.49-2.68-1.324L44.5,33.992l-8.935,11.684	C34.927,46.51,33.937,47,32.886,47h-0.85l11.206-14.654L32.271,18h0.85c1.051,0,2.041,0.49,2.68,1.324l8.7,11.377l8.7-11.377	C53.838,18.49,54.829,18,55.879,18h0.85L45.758,32.346z M28.527,40h0.638c0,0,0,0,0,0c-2.348,6.085-9.292,9.631-15.896,7.256	C8.215,45.437,5,40.444,5,35.073L5,29.5c0-7.29,6.273-13.143,13.705-12.443C25.182,17.667,30,23.361,30,29.866L30,34H19v0H7l0,1.109	c0,4.501,2.671,8.705,6.9,10.248c4.807,1.754,9.835-0.235,12.389-4.116C26.789,40.481,27.616,40,28.527,40z M7,32h21v-2.5	C28,23.71,23.29,19,17.5,19S7,23.71,7,29.5V32z"></path><linearGradient id="Ptgyoqd6DQJu9ZUJIh3sLb_2ZOaTclOqD4q_gr2" x1="44.5" x2="44.5" y1="16" y2="49" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#Ptgyoqd6DQJu9ZUJIh3sLb_2ZOaTclOqD4q_gr2)" d="M56.729,18L45.758,32.347L56.964,47h-0.85	c-1.051,0-2.041-0.49-2.68-1.324L44.5,33.992l-8.935,11.684C34.927,46.51,33.937,47,32.886,47h-0.85l11.206-14.653L32.271,18h0.85	c1.051,0,2.041,0.49,2.68,1.324l8.7,11.377l8.7-11.377C53.838,18.49,54.829,18,55.879,18H56.729 M60.776,16h-4.047h-0.85	c-1.663,0-3.258,0.788-4.268,2.109L44.5,27.408l-7.111-9.299C36.379,16.788,34.783,16,33.121,16h-0.85h-4.047l2.458,3.215	l10.042,13.132L30.447,45.785L27.989,49h4.047h0.85c1.663,0,3.258-0.789,4.268-2.109l7.346-9.606l7.346,9.606	C52.856,48.211,54.451,49,56.114,49h0.85h4.047l-2.458-3.215L48.276,32.346l10.042-13.132L60.776,16L60.776,16z"></path><linearGradient id="Ptgyoqd6DQJu9ZUJIh3sLc_2ZOaTclOqD4q_gr3" x1="17.54" x2="17.54" y1="15" y2="50" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#Ptgyoqd6DQJu9ZUJIh3sLc_2ZOaTclOqD4q_gr3)" d="M17.5,17c0.397,0,0.8,0.019,1.205,0.057	C25.182,17.667,30,23.361,30,29.866V34H19v0H7v1.109c0,4.501,2.671,8.705,6.9,10.248C15.1,45.796,16.314,46,17.5,46	c3.563,0,6.872-1.847,8.789-4.758C26.789,40.481,27.616,40,28.527,40h0.638c0,0,0,0,0,0c-1.847,4.785-6.535,8-11.665,8	c-1.394,0-2.82-0.237-4.231-0.745C8.215,45.437,5,40.444,5,35.073V29.5C5,22.607,10.607,17,17.5,17 M7,32h21v-2.5	C28,23.71,23.29,19,17.5,19S7,23.71,7,29.5V32 M17.5,15L17.5,15c-3.868,0-7.508,1.509-10.249,4.251C4.51,21.992,3,25.632,3,29.5	v5.573c0,6.348,3.855,12,9.592,14.065C14.184,49.71,15.835,50,17.5,50c5.951,0,11.389-3.729,13.531-9.28l1.05-2.72l-2.915,0	l-0.638,0c-1.565,0-3.026,0.801-3.91,2.142C23.052,42.522,20.324,44,17.5,44c-0.986,0-1.967-0.175-2.915-0.521	C11.509,42.356,9.362,39.416,9.042,36H19l11,0l2,0v-2v-4.134c0-7.607-5.758-14.109-13.108-14.8C18.43,15.022,17.962,15,17.5,15	L17.5,15z M9,30v-0.5c0-4.687,3.813-8.5,8.5-8.5s8.5,3.813,8.5,8.5V30H9L9,30z"></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">Express</p>
                                </div>

                                {/* Spring Boot */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                        <path fill="#4db6ac" d="M44.284,36.035L27.687,1.429c-0.855-1.783-3.337-1.93-4.397-0.26L4.886,30.177	c-0.397,0.625-0.385,1.426,0.029,2.04l9.271,13.738c0.575,0.852,1.634,1.237,2.623,0.953l25.942-7.458	C44.208,39.031,44.939,37.402,44.284,36.035z M40.618,37.279L18.8,43.388c-0.505,0.142-0.98-0.305-0.87-0.818l7.735-36.097	c0.139-0.65,1.023-0.755,1.311-0.157l14.265,29.621C41.489,36.481,41.194,37.118,40.618,37.279z"></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">Primsa</p>
                                </div>

                                {/* Node */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="hover:animate-spin">
                                        <path fill="#388e3c" d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013"></path><path fill="#37474f" d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z"></path><path fill="#2e7d32" d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"></path><path fill="#4caf50" d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"></path><path fill="#37474f" d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z"></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">Node</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                    {/* Database & Cloud */}
                    <Reveal
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.3 } }}
                    >
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                Database & Cloud
                            </h3>
                            <div className="flex flex-row flex-wrap justify-center gap-4">
                                {/* AWS */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256" className="hover:animate-spin">
                                        <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(5.33333,5.33333)"><path d="M13.527,21.529c0,0.597 0.064,1.08 0.176,1.435c0.128,0.355 0.287,0.742 0.511,1.161c0.08,0.129 0.112,0.258 0.112,0.371c0,0.161 -0.096,0.322 -0.303,0.484l-1.006,0.677c-0.144,0.097 -0.287,0.145 -0.415,0.145c-0.16,0 -0.319,-0.081 -0.479,-0.226c-0.224,-0.242 -0.415,-0.5 -0.575,-0.758c-0.16,-0.274 -0.319,-0.58 -0.495,-0.951c-1.245,1.483 -2.81,2.225 -4.694,2.225c-1.341,0 -2.411,-0.387 -3.193,-1.161c-0.782,-0.774 -1.181,-1.806 -1.181,-3.096c0,-1.37 0.479,-2.483 1.453,-3.321c0.974,-0.838 2.267,-1.258 3.911,-1.258c0.543,0 1.102,0.048 1.692,0.129c0.59,0.081 1.197,0.21 1.836,0.355v-1.177c0,-1.225 -0.255,-2.08 -0.75,-2.58c-0.511,-0.5 -1.373,-0.742 -2.602,-0.742c-0.559,0 -1.133,0.064 -1.724,0.21c-0.591,0.145 -1.165,0.322 -1.724,0.548c-0.255,0.113 -0.447,0.177 -0.559,0.21c-0.112,0.032 -0.192,0.048 -0.255,0.048c-0.224,0 -0.335,-0.161 -0.335,-0.5v-0.79c0,-0.258 0.032,-0.451 0.112,-0.564c0.08,-0.113 0.224,-0.226 0.447,-0.339c0.559,-0.29 1.229,-0.532 2.012,-0.726c0.782,-0.21 1.612,-0.306 2.49,-0.306c1.9,0 3.289,0.435 4.183,1.306c0.878,0.871 1.325,2.193 1.325,3.966v5.224h0.03zM7.045,23.979c0.527,0 1.07,-0.097 1.644,-0.29c0.575,-0.193 1.086,-0.548 1.517,-1.032c0.255,-0.306 0.447,-0.645 0.543,-1.032c0.096,-0.387 0.16,-0.855 0.16,-1.403v-0.677c-0.463,-0.113 -0.958,-0.21 -1.469,-0.274c-0.511,-0.064 -1.006,-0.097 -1.501,-0.097c-1.07,0 -1.852,0.21 -2.379,0.645c-0.527,0.435 -0.782,1.048 -0.782,1.854c0,0.758 0.192,1.322 0.591,1.709c0.383,0.404 0.942,0.597 1.676,0.597zM19.865,25.721c-0.287,0 -0.479,-0.048 -0.607,-0.161c-0.128,-0.097 -0.239,-0.322 -0.335,-0.629l-3.752,-12.463c-0.096,-0.322 -0.144,-0.532 -0.144,-0.645c0,-0.258 0.128,-0.403 0.383,-0.403h1.565c0.303,0 0.511,0.048 0.623,0.161c0.128,0.097 0.223,0.322 0.319,0.629l2.682,10.674l2.49,-10.674c0.08,-0.322 0.176,-0.532 0.303,-0.629c0.128,-0.097 0.351,-0.161 0.639,-0.161h1.277c0.303,0 0.511,0.048 0.639,0.161c0.128,0.097 0.239,0.322 0.303,0.629l2.522,10.803l2.762,-10.803c0.096,-0.322 0.208,-0.532 0.319,-0.629c0.128,-0.097 0.335,-0.161 0.623,-0.161h1.485c0.255,0 0.399,0.129 0.399,0.403c0,0.081 -0.016,0.161 -0.032,0.258c-0.016,0.097 -0.048,0.226 -0.112,0.403l-3.847,12.463c-0.096,0.322 -0.208,0.532 -0.335,0.629c-0.127,0.097 -0.335,0.161 -0.607,0.161h-1.373c-0.303,0 -0.511,-0.048 -0.639,-0.161c-0.128,-0.113 -0.239,-0.322 -0.303,-0.645l-2.474,-10.4l-2.458,10.384c-0.08,0.322 -0.176,0.532 -0.303,0.645c-0.128,0.113 -0.351,0.161 -0.639,0.161zM40.379,26.156c-0.83,0 -1.66,-0.097 -2.458,-0.29c-0.798,-0.193 -1.421,-0.403 -1.836,-0.645c-0.255,-0.145 -0.431,-0.306 -0.495,-0.451c-0.064,-0.145 -0.096,-0.306 -0.096,-0.451v-0.822c0,-0.339 0.128,-0.5 0.367,-0.5c0.096,0 0.192,0.016 0.287,0.048c0.096,0.032 0.239,0.097 0.399,0.161c0.543,0.242 1.133,0.435 1.756,0.564c0.639,0.129 1.261,0.193 1.9,0.193c1.006,0 1.788,-0.177 2.331,-0.532c0.543,-0.355 0.83,-0.871 0.83,-1.532c0,-0.451 -0.144,-0.822 -0.431,-1.129c-0.287,-0.306 -0.83,-0.58 -1.612,-0.838l-2.315,-0.726c-1.165,-0.371 -2.027,-0.919 -2.554,-1.645c-0.527,-0.709 -0.798,-1.499 -0.798,-2.338c0,-0.677 0.144,-1.274 0.431,-1.79c0.287,-0.516 0.671,-0.967 1.149,-1.322c0.479,-0.371 1.022,-0.645 1.66,-0.838c0.639,-0.192 1.309,-0.273 2.012,-0.273c0.351,0 0.718,0.016 1.07,0.064c0.367,0.048 0.702,0.113 1.038,0.177c0.319,0.081 0.623,0.161 0.91,0.258c0.287,0.097 0.511,0.193 0.671,0.29c0.224,0.129 0.383,0.258 0.479,0.403c0.096,0.129 0.144,0.306 0.144,0.532v0.758c0,0.339 -0.128,0.516 -0.367,0.516c-0.128,0 -0.335,-0.064 -0.607,-0.193c-0.91,-0.419 -1.932,-0.629 -3.065,-0.629c-0.91,0 -1.628,0.145 -2.123,0.451c-0.495,0.306 -0.75,0.774 -0.75,1.435c0,0.451 0.16,0.838 0.479,1.145c0.319,0.306 0.91,0.613 1.756,0.887l2.267,0.726c1.149,0.371 1.98,0.887 2.474,1.548c0.494,0.661 0.734,1.419 0.734,2.257c0,0.693 -0.144,1.322 -0.415,1.87c-0.287,0.548 -0.671,1.032 -1.165,1.419c-0.495,0.403 -1.086,0.693 -1.772,0.903c-0.721,0.226 -1.471,0.339 -2.285,0.339z" fill="#ffffff"></path><path d="M43.396,33.992c-5.252,3.918 -12.883,5.998 -19.445,5.998c-9.195,0 -17.481,-3.434 -23.739,-9.142c-0.495,-0.451 -0.048,-1.064 0.543,-0.709c6.769,3.966 15.118,6.369 23.755,6.369c5.827,0 12.229,-1.225 18.119,-3.741c0.879,-0.403 1.629,0.58 0.767,1.225zM45.583,31.477c-0.671,-0.871 -4.438,-0.419 -6.146,-0.21c-0.511,0.064 -0.591,-0.387 -0.128,-0.726c3.001,-2.128 7.934,-1.516 8.509,-0.806c0.575,0.726 -0.16,5.708 -2.969,8.094c-0.431,0.371 -0.846,0.177 -0.655,-0.306c0.639,-1.596 2.06,-5.192 1.389,-6.046z" fill="#ff9900"></path></g></g>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">AWS</p>
                                </div>

                                {/* PostgreSQL */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256" className="hover:animate-spin">
                                        <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(5.12,5.12)"><path d="M35.19922,2.10156c-1.5,0 -2.80078,0.29688 -4,0.59766c2.10156,0.89844 3.40234,2 4.10156,2.5c1.60156,1.39844 2.5,2.80078 4.10156,5.10156c0.29688,0.5 0.79688,1.19922 1.09766,2.29688c0.30078,1 0.30078,1.80078 0.30078,2.60156c0,1.10156 -0.10156,2 -0.20312,2.89844c-0.09766,0.70313 -0.09766,1.00391 -0.19531,1.20313c0,0.10156 0,0.19922 -0.10156,0.39844c0,0.5 0,0.70313 0.10156,1.10156c0,0.39844 0.09766,0.80078 0.09766,1.5c0.10156,1.30078 0.10156,2.19922 -0.09766,3.29688v0.40234c-0.20312,0.89844 -0.40234,1.80078 -0.90234,2.59766c0.10156,0.20313 0.19922,0.30078 0.30078,0.5c0.5,-0.69922 0.89844,-1.39844 1.29688,-2.19531c1.20313,-2.20312 1.90234,-4.10156 2.40234,-5.5c0.89844,-2.60156 1.39844,-4.50391 1.69922,-5.90234c0.69922,-3 0.80078,-4.39844 0.5,-6c0,-0.5 -0.19922,-1.40234 -0.69922,-2.30078c-1.10156,-2 -2.80078,-2.89844 -4,-3.5c-0.80078,-0.39844 -2.90234,-1.5 -5.80078,-1.59766zM13.53516,2.54297c-1.15234,-0.02344 -2.55859,0.10547 -4.13672,0.85547c-0.5,0.20313 -2,0.90234 -3.19922,2.5c-0.80078,1 -1.39844,2.5 -1.69922,4.19922c-0.30078,1.5 -0.40234,3.30469 0.19922,6.70313c0.39844,2.39844 0.80078,4 1.60156,7.29688c0.10156,0.40234 0.69922,2.20313 2,6.20313l0.09766,0.19922c0.20313,0.69922 0.80078,2.19922 2.10156,3.69922c0.89844,1 1.69922,1.60156 2.40234,1.60156h0.19531c1.30078,0 2.20313,-1 3,-1.80078c0,-0.10156 1.90234,-2.39844 2.60156,-3.19922c-0.10156,-0.10156 -0.29687,-0.10156 -0.39844,-0.20312c-1.19922,-0.69922 -2.10156,-1.79687 -2.80078,-3c-1.19922,-2.19922 -1.10156,-4.39844 -0.90234,-5.5l0.10156,-1.69531c-0.39844,-2.70312 -0.29687,-5.30078 0.20313,-7.90234c0.39844,-2.19922 0.89844,-4.39844 2.69531,-6.69922c0.60156,-0.80078 1.30078,-1.5 2,-2c-1.59766,-0.69922 -3.29687,-1.10156 -5,-1.19922c-0.32422,-0.02734 -0.67969,-0.05078 -1.0625,-0.05859zM26.09766,3.39844c-0.5,0 -1,0 -1.5,0.10156c-2,0.39844 -3.89844,1.5 -5.39844,3.39844c-1.5,1.90234 -1.89844,3.69922 -2.29687,5.80078c-0.20312,0.80078 -0.20312,1.5 -0.30469,2.30078c0.60156,-0.5 1.40234,-1.10156 2.60156,-1.40234c0.69922,-0.19922 2.5,-0.79687 4,0.10156c0.5,0.30078 1.19922,0.90234 1.89844,2.60156c1.5,4.19922 0.00391,8.5 -0.19531,8.89844c-0.10156,0.39844 -0.30078,0.69922 -0.40234,0.89844c-0.19922,0.5 -0.39844,0.90234 -0.59766,1.70313c-0.10156,0.69922 -0.20312,1.30078 -0.20312,2c0.30078,0 0.60156,0.09766 0.89844,0.29688c0.5,0.5 0.60156,1.20313 0.70313,1.5c0.19922,1.60156 0.19922,3.60156 0.19922,5.60156c0,1.60156 0,3.10156 0.09766,4.10156c0.20313,2.30078 0.90234,3.89844 1.90234,4.69922c0.69922,0.60156 1.59766,0.59766 2.09766,0.69922h0.20313c1.5,0 3.89844,-1 4.79688,-2.39844c0.5,-0.80078 0.70313,-1.5 0.90234,-2.5c0.10156,-0.60156 0.09766,-0.89844 0.19922,-1.5c0,-0.30078 0.10156,-0.80078 0.10156,-1.39844c0,-0.5 0.09766,-1.10156 0.19922,-1.80469c0.10156,-1.69922 0.39844,-3.69531 0.5,-4.79687c0.10156,-1.30078 0.69922,-2.40234 1.19922,-3.10156c-0.69922,-0.10156 -1.39844,-0.69922 -1.79687,-1.69922c-0.60156,-1.10156 -0.70312,-1.40234 -0.80469,-1.90234c-0.09766,-0.39844 -0.29687,-0.89844 -1,-2.39844c-1.5,-3.39844 -1.69531,-4.39844 -1.69531,-5.19922c-0.10156,-1.10156 -0.20312,-2.59766 1,-3.59766c1.79688,-1.60156 4.09766,-1.5 5.29688,-1.10156v-0.20312c-0.19922,-0.79687 -0.59766,-1.39844 -0.89844,-1.79687c-1.5,-2.30078 -2.30078,-3.5 -3.70312,-4.69922c-0.59766,-0.5 -2.09766,-1.70312 -4.29687,-2.5c-1,-0.30078 -2.20312,-0.70312 -3.70312,-0.70312zM37.15234,15.125c-0.72656,-0.05078 -1.65234,0.07422 -2.45312,0.77734c-0.39844,0.39844 -0.39844,1.19922 -0.29687,1.89844c0,0.5 0.09766,1.19922 1.59766,4.60156c0.69922,1.59766 0.89844,2.09766 1,2.5c0.10156,0.39844 0.19922,0.59766 0.80078,1.69531c0.10156,0.20313 0.19922,0.40234 0.39844,0.60156c0.19922,-0.30078 0.30078,-0.80078 0.39844,-1.60156l0.10156,-0.29687c0.19922,-0.89844 0.10156,-1.60156 0.10156,-2.80078c0,-0.60156 -0.10156,-1 -0.10156,-1.30078c-0.10156,-0.5 -0.10156,-0.89844 -0.10156,-1.5c-0.19922,-0.30078 -0.19922,-0.39844 -0.09766,-0.60156c0,-0.19922 0.09766,-0.49609 0.19922,-1.09766c0.10156,-0.80078 0.20313,-1.5 0.20313,-2.30078c-0.20312,-0.10156 -0.30078,-0.19922 -0.5,-0.29687c0,0 -0.52734,-0.22656 -1.25,-0.27734zM21.51563,15.51953c-0.63672,-0.07422 -1.36719,0.13281 -1.81641,0.28125c-1.10156,0.30078 -1.79687,1 -2.29687,1.39844c-0.30078,0.30078 -0.60156,0.60156 -0.90234,1c0,0.69922 0.09766,1.40234 0.19922,2.10156v0.10156l-0.19922,2c-0.19922,0.89844 -0.30078,2.59766 0.69922,4.29688c0.5,1 1.20313,1.80078 2.10156,2.30078c0.60156,0.39844 1.39844,0.69922 2.29688,0.90234c0,-0.70312 0.10156,-1.50391 0.20313,-2.20312c0.19922,-1 0.39844,-1.5 0.69922,-2.10156c0.10156,-0.29687 0.19922,-0.49609 0.40234,-0.79687c0.09766,-0.30078 1.49609,-4.10156 0.19531,-7.60156c-0.29687,-0.80078 -0.59766,-1.30078 -1,-1.5c-0.17187,-0.10156 -0.375,-0.15625 -0.58203,-0.17969zM36.1875,16.08984c0.26172,-0.01562 0.51172,0.00781 0.61328,0.10938c0.30078,0.19922 -0.10156,0.69922 -0.20312,0.80078c-0.09766,0.10156 -0.29687,0.30078 -0.59766,0.40234c-0.39844,0.09766 -0.69922,-0.20312 -0.80078,-0.20312c-0.10156,-0.10156 -0.39844,-0.39844 -0.29687,-0.69922c0.09766,-0.19922 0.19922,-0.19922 0.59766,-0.30078c0.14844,-0.05078 0.42578,-0.09766 0.6875,-0.10937zM21.15625,16.91797c0.33594,-0.02344 0.61719,0.10547 0.84375,0.17969c0.30078,0.10156 0.59766,0.20313 0.59766,0.40234c0.10156,0.30078 -0.19531,0.5 -0.29687,0.59766c-0.30078,0.30078 -0.80078,0.30469 -0.80078,0.30469c-0.5,0 -0.80078,-0.30078 -1,-0.60156c-0.10156,-0.10156 -0.19922,-0.30078 -0.09766,-0.5c0.09766,-0.19922 0.29688,-0.30078 0.39844,-0.30078c0.125,-0.05078 0.24219,-0.07422 0.35547,-0.08203zM39.5,30c-0.5,0.69922 -1.19922,1.60156 -1.30078,2.80078c0,0.19922 0,0.30078 -0.10156,0.5c0.80078,0.19922 1.50391,0.19922 2.20313,0.10156c1.60156,-0.20312 2.69922,-1.00391 2.89844,-1.20312c0.69922,-0.5 1.60156,-1.5 1.39844,-1.89844c-0.09766,-0.19922 -0.39844,-0.10156 -2,0c-0.39844,0 -1.59766,0.30078 -2.39844,0.10156h-0.19922c-0.19922,-0.10156 -0.39844,-0.20312 -0.5,-0.40234zM22.09766,32c-0.19922,0.30078 -0.49609,0.5 -0.69531,0.69922c-0.80078,0.5 -1.80469,0.90234 -2.80469,1.10156c-0.89844,0.30078 -1.39844,0.30078 -1.39844,0.60156c-0.10156,0.39844 0.89844,0.89844 1.39844,1.09766c1.70313,0.69922 3.40234,0.30078 3.70313,0.19922c0.19922,-0.10156 0.69922,-0.30078 1.19922,-0.60156c0,-1.09766 -0.09766,-2.09766 -0.19922,-2.89844v-0.10156h-0.10156c-0.30078,0 -0.69922,0.00391 -1.10156,-0.09766z"></path></g></g>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">PostgreSQL</p>
                                </div>

                                {/* MySQL */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                        <path fill="#5d4037" d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"></path><path fill="#4caf50" d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"></path><path fill="#dcedc8" d="M23 28H25V36H23z"></path><path fill="#4caf50" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"></path><path fill="#81c784" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">MongoDB</p>
                                </div>

                                {/* CloudFalre*/}
                                <div className="flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                        <path fill="#FDD835" d="M41.008 26.487L40.4 24.249 44.096 23.56 40.427 22.733 43.88 21.24 40.119 21.25 43.151 19.028 39.488 19.875 41.948 17.033 38.564 18.675 40.331 15.355 37.398 17.709 38.383 14.079 36.049 17.028 36.197 13.27 34.579 16.663 33.89 12.966 33.064 16.636 31.57 13.184 31.58 16.944 29.969 17.372 27.362 15.115 29.005 18.498 25.686 16.732 28.039 19.662 24.409 18.68 27.356 21.015 23.601 20.864 26.993 22.484 23.296 23.173 26.966 23.999 24.941 24.875 17.125 24.875 17.125 29.5 34.461 29.5 39 30 38.827 29.5 39 29.5 39 28.56 39.515 28.834 40.771 28.834 39.354 27.07 42.984 28.053z"></path><path fill="#F57C00" d="M38.265,23.789c-0.884,0-1.708,0.218-2.454,0.573l2.564,4.763l-4-3.875l-15,4.375l13.75-5.25L25.5,21.5l9.041,2.083l0.262,0.053c0.008,0.028,0.035-0.366,0.035-0.769c0-5.25-4.267-9.505-9.533-9.505c-4.374,0-8.057,2.938-9.178,6.946c-0.746-0.701-1.748-1.134-2.85-1.134c-2.303,0-4.166,1.861-4.166,4.154c0,0.46,0.077,0.906,0.216,1.318c-0.192-0.016-0.389-0.028-0.586-0.028C5.57,24.619,3,27.18,3,30.34c0,0.577,0.089,1.136,0.249,1.66h40.173C43.789,31.247,44,30.403,44,29.513C44,26.348,41.432,23.789,38.265,23.789z"></path><path fill="#FFB74D" d="M25.5 19c2.851 0 5.453 1.043 7.463 2.761C32.591 17.967 29.391 15 25.5 15s-7.091 2.967-7.463 6.761C20.047 20.043 22.649 19 25.5 19zM14.737 22.026C14.395 21.417 13.749 21 13 21c-1.104 0-2 .896-2 2 0 .465.165.888.432 1.228C12.049 22.987 13.282 22.123 14.737 22.026zM7.05 32c.251-2.734 2.482-4.895 5.259-4.99C11.537 26.388 10.568 26 9.5 26 7.015 26 5 28.015 5 30.5c0 .529.102 1.031.271 1.5H7.05z"></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">CloudFlare</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                    {/* Tools */}
                    <Reveal
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.4 } }}
                    >
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                Tools
                            </h3>
                            <div className="flex flex-row flex-wrap justify-center gap-4">
                                {/* Git */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="hover:animate-spin">
                                        <path fill="#F4511E" d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">Git</p>
                                </div>

                                {/* Figma */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="hover:animate-spin">
                                        <path fill="#e64a19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"></path><path fill="#7c4dff" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"></path><path fill="#66bb6a" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"></path><path fill="#ff7043" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"></path><circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">Figma</p>
                                </div>

                                {/* {Github} */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                                        <path fill="#8b8e98" d="M31 3A28 28 0 1 0 31 59A28 28 0 1 0 31 3Z"></path><path fill="#7e8189" d="M31,54A23,23,0,1,1,54,31,23,23,0,0,1,31,54Z"></path><path fill="#faefde" d="M36.08,43.35A11,11,0,0,1,39,50v5.25c0,.55.23,2.13.9,2.31L31,59.18l-9-1.61c.72-.16,1-1.77,1-2.32s0-.91,0-3.25c-7.79,1.69-9.4-4.3-9.4-4.3-1.28-3.23-3.11-4.1-3.11-4.1-2.54-1.73.19-1.7.19-1.7A5.89,5.89,0,0,1,15,44.79c2.5,4.27,6.44,3.92,8,3.21.26-1.81,2.1-3.93,2.9-4.63-6.22-.71-12.76-3.11-12.76-13.84A10.83,10.83,0,0,1,16,22a10.09,10.09,0,0,1,.28-7.41s2.35-.75,7.7,2.87a26.61,26.61,0,0,1,14,0c5.34-3.62,7.69-2.87,7.69-2.87A10.09,10.09,0,0,1,46,22a10.83,10.83,0,0,1,2.87,7.51C48.86,40.29,42.32,42.66,36.08,43.35Z"></path><path fill="#8d6c9f" d="M31,2a29,29,0,0,0-9.54,56.38,1,1,0,0,0,.55.19A29,29,0,1,0,31,2ZM23.7,57a6.22,6.22,0,0,0,.3-1.74v-.54c0-.45,0-1.06,0-2.72a1,1,0,0,0-1.21-1c-6.72,1.46-8.17-3.38-8.23-3.58l0-.11a9.44,9.44,0,0,0-3-4.24,5.37,5.37,0,0,1,2.56,2.2c2.64,4.53,7,4.65,9.3,3.62a1,1,0,0,0,.58-.77,8.62,8.62,0,0,1,2.56-4A1,1,0,0,0,26,42.38c-5.87-.67-11.87-2.72-11.87-12.84a9.82,9.82,0,0,1,2.62-6.84A1,1,0,0,0,17,21.64,8.84,8.84,0,0,1,17,15.55c.85,0,2.92.39,6.42,2.76a1,1,0,0,0,.83.14,25.56,25.56,0,0,1,13.48,0,1,1,0,0,0,.83-.14c3.51-2.38,5.59-2.74,6.41-2.77a8.87,8.87,0,0,1,.07,6.1,1,1,0,0,0,.19,1.05,9.82,9.82,0,0,1,2.61,6.84c0,10.13-6,12.17-11.89,12.82a1,1,0,0,0-.54,1.75A10.2,10.2,0,0,1,38,50v5.25A6.28,6.28,0,0,0,38.29,57,26.86,26.86,0,0,1,23.7,57Zm16.5-.6a4.13,4.13,0,0,1-.2-1.13V50a11.66,11.66,0,0,0-2-5.91c5.55-.94,11.89-3.82,11.89-14.56a11.76,11.76,0,0,0-2.74-7.73,11.44,11.44,0,0,0-.48-7.56,1,1,0,0,0-.62-.58c-.28-.09-2.85-.76-8.18,2.74a27.61,27.61,0,0,0-13.66,0c-5.33-3.5-7.9-2.83-8.18-2.74a1,1,0,0,0-.62.58,11.42,11.42,0,0,0-.48,7.56,11.75,11.75,0,0,0-2.74,7.73c0,10.65,6.23,13.58,11.73,14.56a9.51,9.51,0,0,0-1.74,3.16c-1.42.4-4.34.41-6.29-2.94a6.9,6.9,0,0,0-5.15-3.4c-.54,0-1.9.09-2.22,1.13s.91,2,1.46,2.4l.13.07c.06,0,1.52.8,2.6,3.53.23.71,2.22,6.1,9.35,5.15,0,.79,0,1.19,0,1.5v.56a4,4,0,0,1-.21,1.13,27,27,0,1,1,18.41,0Z"></path><path fill="#8d6c9f" d="M31 37a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V38A1 1 0 0 0 31 37zM35.6 39.53A1 1 0 0 0 37.53 39L37 37.08a1 1 0 0 0-1.93.52zM21.75 34.52a1 1 0 0 0-1.37.37l-1 1.73a1 1 0 0 0 1.73 1l1-1.73A1 1 0 0 0 21.75 34.52zM40.88 37.62a1 1 0 1 0 1.73-1l-1-1.73a1 1 0 0 0-1.73 1zM26.21 36.37a1 1 0 0 0-1.22.71L24.47 39a1 1 0 1 0 1.93.52l.52-1.93A1 1 0 0 0 26.21 36.37zM41.35 9.46a22.71 22.71 0 0 0-2.3-1 1 1 0 0 0-.7 1.87 21.1 21.1 0 0 1 2.1.92 1 1 0 0 0 .45.11 1 1 0 0 0 .45-1.89zM34.65 7.29a23.08 23.08 0 0 0-15 2.72 1 1 0 0 0 .5 1.87 1 1 0 0 0 .49-.13A21.1 21.1 0 0 1 34.34 9.27a1 1 0 1 0 .32-2z"></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">Github</p>
                                </div>

                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
            <Separator />
            {/* Contact */}
            <section id="contact" className="flex flex-col items-center justify-center gap-8 sm:py-48 py-24">
                <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                    Get In Touch
                </h2>
                <Reveal
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                >
                    <p className="leading-7">
                        If you'd like to get in touch with me, feel free to reach out on LinkedIn or my email and I'll get back to you whenever I can.
                    </p>
                </Reveal>
                <div className="flex">
                    <Reveal
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 } }}
                    >
                        <Link href="mailto:vineet290403@gmail.com" target="_blank">
                            <button className="inline-flex m-5 hover:bg-red h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                Say Hi!
                            </button>
                        </Link>

                        <Link href="https://linkedin.com/in/vineet-op" target="_blank">
                            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                LinkedIn
                            </button>
                        </Link>
                    </Reveal>
                </div>
            </section>
        </div>
    )
}
