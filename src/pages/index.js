import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { Separator } from '@/components/ui/Separator'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Laravel</title>
            </Head>
            <nav className="fixed flex justify-between py-6 w-full lg:px-48 md:px-12 px-4 content-center bg-secondary z-10">
                <div className="flex items-center">
                    <img
                        src="dist/assets/Logo_black.svg"
                        alt="Logo"
                        className="h-4"
                    />
                </div>
                <ul className="font-montserrat items-center hidden md:flex">
                    <li className="mx-3 ">
                        <a className="growing-underline" href="howitworks">
                            How it works
                        </a>
                    </li>
                    <li className="growing-underline mx-3">
                        <a href="features">Features</a>
                    </li>
                    <li className="growing-underline mx-3">
                        <a href="pricing">Pricing</a>
                    </li>
                </ul>
                <div className="font-montserrat hidden md:block">
                {user ? (
                        <Link
                            href="/dashboard">
                            <button className="py-2 px-4 text-white bg-black rounded-3xl">
                                Dashboard
                            </button>
                        </Link>
                    ) : (
                        <>
                            <Link
                                href="/login">
                                <button className="mr-6">Login</button>
                            </Link>

                            <Link
                                href="/register">
                                <button className="py-2 px-4 text-white bg-black rounded-3xl">
                                    Signup
                                </button>
                            </Link>
                        </>
                    )}
                </div>
                <div id="showMenu" className="md:hidden">
                    <img src="dist/assets/logos/Menu.svg" alt="Menu icon" />
                </div>
            </nav>
            <div
                id="mobileNav"
                className="hidden px-4 py-6 fixed top-0 left-0 h-full w-full bg-secondary z-20 animate-fade-in-down">
                <div id="hideMenu" className="flex justify-end">
                    <img
                        src="dist/assets/logos/Cross.svg"
                        alt=""
                        className="h-16 w-16"
                    />
                </div>
                <ul className="font-montserrat flex flex-col mx-8 my-24 items-center text-3xl">
                    <li className="my-6">
                        <a href="howitworks">How it works</a>
                    </li>
                    <li className="my-6">
                        <a href="features">Features</a>
                    </li>
                    <li className="my-6">
                        <a href="pricing">Pricing</a>
                    </li>
                </ul>
            </div>

            <section className="pt-24 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
                <div className="md:flex-1 md:mr-10">
                    <h1 className="font-pt-serif text-5xl font-bold mb-7">
                        Remix-Tool
                        <span className="bg-underline1 bg-left-bottom bg-no-repeat pb-2 pl-2 bg-100%">
                        🪄
                        </span>
                    </h1>
                    <p className="font-pt-serif font-normal mb-7">
                        Transfom &amp; remix your music with ease. Split your audio into multiple tracks, isolate vocals, analyze Key/BPM, and more.
                    </p>
                    <div className="font-montserrat">
                        <button className="bg-black px-6 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2">
                            Call to action
                        </button>
                        <button className="px-6 py-4 border-2 border-black border-solid rounded-lg">
                            Secondary action
                        </button>
                    </div>
                </div>
                <div className="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
                    <div className="relative">
                        <img
                            src="dist/assets/Highlight1.svg"
                            alt=""
                            className="absolute -top-16 -left-10"
                        />
                    </div>
                    <img src="dist/assets/MacBook Pro.png" alt="Macbook" />
                    <div className="relative">
                        <img
                            src="dist/assets/Highlight2.svg"
                            alt=""
                            className="absolute -bottom-10 -right-6"
                        />
                    </div>
                </div>
            </section>

            {/* <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                    {user ? (
                        <Link
                            href="/dashboard"
                            className="ml-4 text-sm text-gray-700 underline">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="text-sm text-gray-700 underline">
                                Login
                            </Link>

                            <Link
                                href="/register"
                                className="ml-4 text-sm text-gray-700 underline">
                                Register
                            </Link>
                        </>
                    )}
                </div>
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        Remix-Tool 🪄
                    </h1>
                    <Separator className="my-4"/>
                    <p className="text-xl text-slate-700 dark:text-slate-400">
                        Transfom &amp; remix your music with ease.
                    </p>
                </div>

            </div> */}
        </>
    )
}
