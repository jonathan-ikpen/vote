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

const formSchema = z.object({
    fname: z.string(),
    lname: z.string(),
    matno: z.string(),
    phone: z.string(),
    gender: z.string(),
    email: z.string().email(),
    department: z.string(),
  })

export function RegisterForm() {

    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fname: "",
      lname: "",
      matno: "",
      phone: "",
      gender: "",
      email: "",
      department: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="mx-auto max-w-3xl w-full">
            <CardHeader>
                <CardTitle className="text-xl">Register</CardTitle>
                <CardDescription>
                Enter your information to register
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-20">
                        <FormField control={form.control} name="fname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>First name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Max" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField control={form.control} name="lname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Last name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Robinson" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-20">
                        <FormField control={form.control} name="matno"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Matric Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="M.24/ND/PEG/12345" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField control={form.control} name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input type="tel" placeholder="(080) 0000 0000" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-20">
                        <FormField control={form.control} name="gender"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Gender</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select gender" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>gender</SelectLabel>
                                            <SelectItem value="male">Male</SelectItem>
                                            <SelectItem value="female">Female</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField control={form.control} name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="m@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-20 items-end">
                        <FormField control={form.control} name="department"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Department</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select department" />
                                        </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>departement</SelectLabel>
                                                <SelectItem value="EEED">Electrical & Electronic Engineering Technology</SelectItem>
                                                <SelectItem value="PET">Petroleum Engineering Technology</SelectItem>
                                                <SelectItem value="PNGPD">Petroleum and Natural Gas Processing Technology</SelectItem>
                                                <SelectItem value="MED">Mechanical Engineering Technology</SelectItem>
                                                <SelectItem value="WEOD">Welding Engineering & Offshore Technology</SelectItem>
                                                <SelectItem value="CSIT">Computer Science & Information Technology</SelectItem>
                                                <SelectItem value="PMBS">Petroleum Marketing & Business Studies</SelectItem>
                                                <SelectItem value="ISET">Industrial Safety & Environmental Technology</SelectItem>
                                                <SelectItem value="SLT">Science Laboratory Technology</SelectItem>
                                                <SelectItem value="CET">Computer Engineering Technology</SelectItem>
                                                <SelectItem value="MET">Mechatronics Engineering Technology</SelectItem>
                                                <SelectItem value="ESMT">Environmental Science & Management Technology</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                        <div className="grid gap-2">
                            <Button type="submit" className="w-full">
                                Register
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="mt-4 text-center text-sm">
                    Already registered?{" "}
                    <Link href="/signin" className="underline">
                        Sign in
                    </Link>
                </div>
            </CardContent>
        </Card>
        </form>
    </Form>
  )
}