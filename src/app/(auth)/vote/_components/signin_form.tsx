"use client"

import Link from "next/link"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const FormSchema = z.object({
  id: z
    .string({
      required_error: "Please input your voters id.",
    }),
})

export function SignInForm() {
  const router = useRouter()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
    router.push('/cast_vote')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="w-full max-w-sm">
            
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
            <Button className="w-full">Proceed</Button>
        </CardFooter>

        </Card>

      </form>
    </Form>
  )
}
