import { redirect } from "next/navigation";

const url = `${process.env.HOST_API_URL}/login`
console.log('login url',url)
export default function LoginPage() {

    const login = async (formData) => {
        'use server'
        const userName = formData.get('username')
        const password = formData.get('password')
        console.log("username", userName)
        console.log("password", password)
        const res = await fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: userName,
                password : password
            })
        })
        console.log('log response')
        const result = await res.json();
        console.log(result)
        if (result.message != "Ok") {
            // Here you can throw your error type as you wish
            throw new Error("Login Failed");
         }
         else{
        redirect("/dashboard")
         }

    }

    return <div>
        <h1 className="font-bold text-2xl py-3">Login</h1>
        <form action={login} className="flex flex-col gap-3">
            <input type="text" name="username" placeholder="Enter User Name" required className="border border-slate-500 px-8 py-2"/>
            <input type="password" name="password" placeholder="Enter Password" required className="border border-slate-500 px-8 py-2"/>
            <input type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit"/>
        </form>
    </div>
}