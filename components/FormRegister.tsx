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
import { useRouter } from 'next/navigation'
import { formSchemaRegister } from '@/lib/validation'
import { register } from '@/lib/action/register'
import { omit } from 'lodash';
import { useToast } from "@/components/ui/use-toast"


const FormRegister = () => {
    const { toast } = useToast()
    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedDate = event.target.value;
        if (selectedDate) {
            const dateParts = selectedDate.split('-');
            const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
            form.setValue('birthdate', formattedDate, { shouldValidate: true });
        } else {
            form.setValue('birthdate', '', { shouldValidate: true });
        }
    };
    const router = useRouter()
    const [error, setError] = useState("")
    const form = useForm<z.infer<typeof formSchemaRegister>>({
        resolver: zodResolver(formSchemaRegister),
        defaultValues: {
            fullname: "",
            username: "",
            password: "",
            confirmPassword: "",
            email: "",
            birthdate: ""
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchemaRegister>) => {

        const dataToSend = omit(values, 'confirmPassword');
        try {
            const response = await register(dataToSend)
            toast({
                title: response.data.status,
                description: response.data.message,
            })
            setTimeout(() => {
                router.push('/')
            }, 5000)
        } catch (error: any) {
            toast({
                title: error.response.data.status,
                description: error.response.data.message,
            })
            setError(error.response.data.message)
        }

        // console.log(response.data.message);

    }
    return (
        <main>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="fullname"
                        render={({ field }) => (
                            <FormItem onClick={() => setError('')}>
                                <FormLabel>Họ và tên</FormLabel>
                                <FormControl>
                                    <Input  {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem onClick={() => setError('')}>
                                <FormLabel>Tên đăng nhập</FormLabel>
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
                                <FormLabel>Mật khẩu</FormLabel>
                                <FormControl>
                                    <Input  {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem onClick={() => setError('')}>
                                <FormLabel>Xác nhận mật khẩu</FormLabel>
                                <FormControl>
                                    <Input  {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem onClick={() => setError('')}>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input  {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="birthdate"
                        render={({ field }) => (
                            <FormItem onClick={() => setError('')}>
                                <FormLabel>Ngày sinh (mm/dd/yyyy)</FormLabel>
                                <FormControl>
                                    <Input type='date' onChange={handleDateChange} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <h2 className='text-red-700'>{error}</h2>
                    <Button type="submit">Đăng ký</Button>
                    <h2 className='flex text-black-500' >Bạn đã có tài khoản?<p className='text-sky-500 underline cursor-pointer' onClick={() => { router.push('/') }}>Đăng nhập</p></h2>
                </form>
            </Form>
        </main>
    )
}

export default FormRegister