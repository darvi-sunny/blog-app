'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function GeneralNavbar() {
    const currentPage = usePathname()
    return !currentPage?.includes('/dashboard') ? (
        <>
            <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
                <Link className="text-white font-bold" href={"/"}>
                    My Blogs
                </Link>
                <Link className="bg-white p-2" href={"/login"}>
                    Login
                </Link>
            </nav>
        </>

    ) : (
        <>
            <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
                <Link className="text-white font-bold" href={"/"}>
                    My Blogs
                </Link>
                <Link className="bg-white p-2" href={"/dashboard/blogs/create"}>
                    Create Blogs
                </Link>
                <Link className="bg-white p-2" href={"/dashboard"}>
                    Dashboard
                </Link>
            </nav>
        </>
    )
}