"use client";
import React, { useState } from 'react'
import { Input } from '../../components/ui/input'
import { Textarea } from '../../components/ui/textarea'
import { TbArrowUpRight } from "react-icons/tb"
import { Button } from '../../components/ui/button'

function classNames(...classes){
  return classes.filter(Boolean).join('')
}
export default function Contact() {
  const [agreed, setAgreed] = useState(false)
  return (
    <div className="px-6 py-16 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-4x1 text-primary">Contact Sales</ h2>
        <p className="mt-2 text-lg leading-8 text-muted-foreground">Please feel free to ask anything</p>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
          <div className='mt-2.5'>
            <Input type='name' id='firstname' placeholder='First Name' />
          </div>
          <div className='mt-2.5'>
            <Input type='name' id='lastname' placeholder='Last Name' />
          </div>
          <div className='sm:col-span-2'>
            <div className='mt-2.5'>
            <Input type='name' id='company' placeholder='Company' />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <div className='mt-2.5'>
            <Textarea placeholder='Type Your Message Here...'/>
            </div>
          </div>
          <div className="mt-10">
            <Button type="submit" className="flex w-full items-center px-8 py-3 Itext-white rounded-full shadow-lg ☐hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 ">
            Let's Talk <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}