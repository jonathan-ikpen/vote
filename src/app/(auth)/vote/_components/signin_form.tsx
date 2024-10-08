"use client"

import Link from "next/link"
import { useVoterStore } from "@/store/voter"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { LoaderCircle } from 'lucide-react';
import { useState } from "react"
import toast from "react-hot-toast"


const formSchema = z.object({
  id: z
    .string({
      required_error: "Please input your voters id.",
    }),
})

export function SignInForm() {
  const { login } = useVoterStore()
  const [loading, setLoading] = useState(false)
  const [buttontxt, setButtontxt] = useState("Proceed")
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
    }
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    setLoading(true)
    setButtontxt("Loading")

    setTimeout(async () => {
      const {isAuthenticated, error} = await login(data.id);
      if(error) {
        setButtontxt("Proceed")
        toast.error(error)
      };
      if(isAuthenticated) {
        toast.success("success!")
        setButtontxt("Redirecting...")
        router.push('/cast-vote')
      }

      setLoading(false)
    }, 3000);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className={`w-full max-w-sm`}>
            
        <CardHeader>
            <CardTitle className="text-2xl">Vote</CardTitle>
            <CardDescription>
            Enter your voters id to vote now.
            </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-4">
            <FormField control={form.control} name="id"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Voters ID</FormLabel>
                        <FormControl>
                            <Input placeholder="luin00124" {...field} />
                        </FormControl>
                        <FormDescription>Contact admin to manage your account{" "}<Link href="/examples/contact_admin" className="hover:underline">admin</Link>.</FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </CardContent>

        <CardFooter>
            <Button className="w-full flex gap-2 fanimate-pulse" disabled={loading}>
              { loading ? <LoaderCircle className="animate-spin" /> : "" } {" "}
              {buttontxt}
            </Button>
        </CardFooter>

        </Card>

      </form>
    </Form>
  )
}
