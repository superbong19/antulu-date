"use client"
import React, { useState } from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'
import { login } from '@/lib/action/login'
import { formSchemaLogin } from '@/lib/validation'


const FormLogin = () => {
    const router = useRouter()
    const [error, setError] = useState("")
    const form = useForm<z.infer<typeof formSchemaLogin>>({
        resolver: zodResolver(formSchemaLogin),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchemaLogin>) => {
        try {
            const token = await login(values)
            Cookies.set('token', token, { expires: 7 }); // Token sẽ hết hạn sau 7 ngày
            router.push(`/home`)
        } catch (error: any) {
            setError(error.response.data.message);

        }
    }
    return (
        <main>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem onClick={() => setError('')}>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input  {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem onClick={() => setError('')}>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input  {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <h2 className='text-red-700'>{error}</h2>
                    <Button type="submit">Submit</Button>
                    <h2 className='flex text-black-500' >Bạn chưa có tài khoản?<p className='text-sky-500 underline cursor-pointer' onClick={() => { router.push('/register') }}>Đăng ký</p></h2>
                </form>
            </Form>
        </main>
    )
}

export default FormLogin