"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
   
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import { registerVoter } from "@/lib/api/register"
import { LoaderCircle } from 'lucide-react';
import toast from "react-hot-toast"

const formSchema = z.object({
    first_name: z.string().min(2, {
        message: "Firstname must be at least 2 characters.",
      }),
    last_name: z.string().min(2, {
        message: "Lastname must be at least 2 characters.",
      }),
    matricnum: z.string().min(2, {
        message: "Matnumber must be at least 2 characters.",
      }),
    phone: z.string().min(2, {
        message: "Phone number is not valid",
      }),
    gender: z.string().min(2, {
        message: "Select gender",
      }),
    email: z.string().email(),
    department: z.string().min(2, {
        message: "Select department",
      }),
  })

export function RegisterForm({ onSuccess }: { onSuccess: ( success: boolean, name: string ) => void }) {
    const [btn, setBtn] = useState({ loading: false, message: "Register"})

    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        first_name: "",
        last_name: "",
        matricnum: "",
        phone: "",
        gender: "",
        email: "",
        department: ""
    }
  })
 
  // 2. Define a submit handler.
  async function onSubmit (values: z.infer<typeof formSchema>) {
    setBtn({ loading: true, message: "Loading"})

    registerVoter(values).then((r) => {
        if(r.success) {
            toast.success("Submitted")
            setBtn({ loading: false, message: "Redirecting..."})
            onSuccess(true, values.first_name)
        } else {
            console.log(r)
            if('error' in r) {
                let err = String(r.error.email)
                setBtn({ loading: false, message: "Register"})
                toast.error(err.replaceAll('_', ''))
            } 
                
        }
    })
  }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mx-5">
        <Card className="mx-auto max-w-3xl w-full">
            <CardHeader>
                <CardTitle className="text-xl">Register</CardTitle>
                <CardDescription>
                Enter your information to register
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-5 md:gap-20">
                        <FormField control={form.control} name="first_name"
                            render={({ field }) => (
                                <FormItem className="space-y-1 text-sm">
                                    <FormLabel className="text-sm">First name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Max" {...field} className="text-sm" />
                                    </FormControl>
                                    <FormMessage className="!text-[10px]" />
                                </FormItem>
                            )}
                        />
                        <FormField control={form.control} name="last_name"
                            render={({ field }) => (
                                <FormItem className="space-y-1">
                                    <FormLabel className="text-sm">Last name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Robinson" {...field} className="text-sm" />
                                    </FormControl>
                                    <FormMessage className="!text-[10px]" />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-5 md:gap-20">
                        <FormField control={form.control} name="matricnum"
                            render={({ field }) => (
                                <FormItem className="space-y-1">
                                    <FormLabel className="text-sm">Matric Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="M.24/ND/PEG/12345" {...field} className="text-sm" />
                                    </FormControl>
                                    <FormMessage className="!text-[10px]" />
                                </FormItem>
                            )}
                        />
                        <FormField control={form.control} name="phone"
                            render={({ field }) => (
                                <FormItem className="space-y-1">
                                    <FormLabel className="text-sm">Phone Number</FormLabel>
                                    <FormControl>
                                        <Input type="tel" placeholder="(080) 0000 0000" {...field} className="text-sm" />
                                    </FormControl>
                                    <FormMessage className="!text-[10px]" />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-5 md:gap-20">
                        <FormField control={form.control} name="gender"
                            render={({ field }) => (
                                <FormItem className="space-y-1">
                                <FormLabel className="text-sm">Gender</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select gender" className="!text-sm" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="text-sm">
                                        <SelectGroup>
                                            <SelectLabel className="text-sm">gender</SelectLabel>
                                            <SelectItem value="male" className="text-sm">Male</SelectItem>
                                            <SelectItem value="female" className="text-sm">Female</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <FormMessage className="!text-[10px]" />
                                </FormItem>
                            )}
                        />
                        <FormField control={form.control} name="email"
                            render={({ field }) => (
                                <FormItem className="space-y-1">
                                    <FormLabel className="text-sm">Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="m@example.com" {...field} className="text-sm" />
                                    </FormControl>
                                    <FormMessage className="!text-[10px]" />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-5 md:gap-20 items-end">
                        <FormField control={form.control} name="department"
                                render={({ field }) => (
                                    <FormItem className="space-y-1">
                                    <FormLabel className="text-sm">Department</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select department" className="!text-sm" />
                                        </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="text-sm">
                                            <SelectGroup className="text-sm">
                                                <SelectLabel className="text-sm">departement</SelectLabel>
                                                <SelectItem value="EEED" className="text-sm">Electrical & Electronic Engineering Technology</SelectItem>
                                                <SelectItem value="PET" className="text-sm">Petroleum Engineering Technology</SelectItem>
                                                <SelectItem value="PNGPD" className="text-sm">Petroleum and Natural Gas Processing Technology</SelectItem>
                                                <SelectItem value="MED" className="text-sm">Mechanical Engineering Technology</SelectItem>
                                                <SelectItem value="WEOD" className="text-sm">Welding Engineering & Offshore Technology</SelectItem>
                                                <SelectItem value="CSIT" className="text-sm">Computer Science & Information Technology</SelectItem>
                                                <SelectItem value="PMBS" className="text-sm">Petroleum Marketing & Business Studies</SelectItem>
                                                <SelectItem value="ISET" className="text-sm">Industrial Safety & Environmental Technology</SelectItem>
                                                <SelectItem value="SLT" className="text-sm">Science Laboratory Technology</SelectItem>
                                                <SelectItem value="CET" className="text-sm">Computer Engineering Technology</SelectItem>
                                                <SelectItem value="MET" className="text-sm">Mechatronics Engineering Technology</SelectItem>
                                                <SelectItem value="ESMT" className="text-sm">Environmental Science & Management Technology</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage className="!text-[10px]" />
                                    </FormItem>
                                )}
                            />
                        <div className="grid gap-2">
                            <Button type="submit" className="w-full flex gap-2 text-sm" disabled={btn.loading}>
                                { btn.loading ? <LoaderCircle className="animate-spin" /> : "" } {" "}
                                {btn.message}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="mt-4 text-center text-sm">
                    Already registered?{" "}
                    <Link href="/vote" className="underline">
                        Vote
                    </Link>
                </div>
            </CardContent>
        </Card>
        </form>
    </Form>
  )
}