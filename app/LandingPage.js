'use client'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import React, { useState } from 'react'
import ConsoleSpinner from './ConsoleSpinner'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Code2Icon, Instagram, Mail, MoveDown, MoveRight, TreePalm, Workflow } from 'lucide-react';
import { toast } from 'sonner';
import WaverCircle from "./WaverCircle"
import { Code2 } from "lucide"

function LandingPage() {
  const [vision, setVision] = useState(false);
  const [mission, setMission] = useState(false);
  const [contact, setContact] = useState(false);
  const [projects, setProjects] = useState(false);
  const [blur, setBlur] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const aiGlassesDescription = `We are building the next frontier of wearable technology by combining modern artificial intelligence techniques to produce a second brain for a user and interact with the brain by just speaking to the AI Glasses. By providing access to personal knowledge, class schedules, and academic todos, this will be an all-in-one personal assistant for anyone at UC Davis.`;

  const timeline = [
    {
      title: "Apps open",
      date: "9/28",
      description: "Applications open for all positions",
      link: ""
    },
    {
      title: "1st Info Night",
      date: "10/1",
      description: "Online Info Night @ 8:10 p.m"
    },
    {
      title: "2nd Info Night",
      date: "10/3",
      description: "Online Info Night @ 8:10 p.m"
    },
    {
      title: "Apps close + Invites sent",
      date: "10/9",
      description: "Key applications get sent interview invites"
    },
    {
      title: "Interviews",
      date: "10/10",
      description: "Interview all viable members"
    },
  ]

  return (
    <div className='h-screen w-screen flex items-center justify-center flex-col bg-[#000109]'>
      {blur && (
        <div className="absolute inset-0 bg-black/0 backdrop-blur-lg pointer-events-none z-2"></div>
      )}
      <div className='body-landing font-mono'>
        <h1 className='text-2xl mb-5'><ConsoleSpinner/>&nbsp;Innovation Labs @ UC Davis</h1>
        <h3 className='mb-5'><b>Don't wait for innovation. Become it.</b></h3>
        <h4>In this current age of AI, most startups, companies, and builders are shipping products that just apply AI to a use case <b>without innovation</b>.<br/><br/>We, at UCD Innovation Labs, strive to integrate state-of-the-art Artificial Intelligence techniques with hardware to building products that not only <b>wow</b> people but also solve problems.</h4>
        <br/>
        <div className='flex items-center gap-2'>
          <h3 onClick={() => setVision(!vision)} className='font-bold mb-2'>Our Vision</h3>
          {vision ? (
            <MoveDown onClick={() => setVision(false)} className='h-4 w-auto mb-2 text-neutral-300'/>
          ): (
            <MoveRight onClick={() => setVision(true)} className='h-4 w-auto mb-2 text-neutral-300'/>
          )}
        </div>
        {vision && (
          <h4 className='mb-4'>An interconnected suite of AI-driven hardware products backed by great software that empowers people to live smarter and more fulfilling lives.</h4>
        )}


        <div className='flex items-center gap-2'>
          <h3 onClick={() => setMission(!mission)} className='font-bold mb-2'>Our Mission</h3>
          {mission ? (
            <MoveDown onClick={() => setMission(false)} className='h-4 w-auto mb-2 text-neutral-300'/>
          ): (
            <MoveRight onClick={() => setMission(true)} className='h-4 w-auto mb-2 text-neutral-300'/>
          )}
        </div>
        {mission && (
          <h4 className='mb-4'>To empower students to transform bold ideas into groundbreaking hardware by fostering hands-on learning, interdisciplinary collaboration, and a culture of innovation.</h4>
        )}
        <br/>
        <div className='flex items-center gap-3 cursor-pointer justify-between'>
          <a onClick={() => window.open("https://bit.ly/ilabsucd", "_self")} className='hover:text-blue-500 transition-all text-orange-300'>Join us</a>
          <div className='flex items-center gap-3'>
            <a onClick={() => setContact(!contact)} className='hover:text-blue-500 transition-all text-white font-bold border p-2 px-3 border-neutral-700'>Contact</a>
            <Sheet>
              <SheetTrigger>
                <a className='hover:text-blue-500 transition-all text-white font-bold border p-2 rounded px-3 border-neutral-700'>Updates</a>
              </SheetTrigger>
              <SheetContent className='p-5 font-mono overflow-scroll'>
                <SheetHeader>
                  <SheetTitle>Current Timeline</SheetTitle>
                  <SheetDescription>
                  </SheetDescription>
                  <br/>
                  <div className=''>
                    {timeline.map((event) => (
                      <div key={event.title} className='mb-5'>
                        <h1 className='font-bold text-lg mb-2'>{event.date} — {event.title}</h1>
                        <h3 className='text-neutral-400'>{event.description}</h3>
                      </div>
                    ))}
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
            <Button onClick={() => {
              setProjects(true);
              setBlur(true);
            }} className="bg-blue-700 text-white rounded-none hover:bg-blue-800 cursor-pointer">Projects</Button>
          </div>
        </div>

        <br/>

        <div className='flex items-center justify-end gap-5'>
          <Instagram onClick={() => window.open("https://www.instagram.com/ucd.innovationlabs/", "_self")} className={`${!contact ? "text-transparent" : ""}`}/>
          <Dialog>
            <DialogTrigger>
              <Mail className={`${!contact ? "text-transparent" : ""}`}/>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Contact via E-mail</DialogTitle>
                <DialogDescription>
                  <br/>
                  You can mail us at&nbsp; <><a onClick={async () => {
                    await navigator.clipboard.writeText("ilabsucd@gmail.com");
                    toast.success("Email address copied to clipboard")
                  }} className='text-neutral-500 border-b pb-1 hover:text-white transition-all cursor-pointer hover:border-neutral-400'>ilabsucd@gmail.com
</a></>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <TreePalm onClick={() => window.open("https://linktr.ee/innovationlabsdavis")} className={`${!contact ? "text-transparent" : ""}`}/>
        </div>
      </div>

      <Dialog open={projects}>
        <DialogTrigger className="hidden">Open</DialogTrigger>
        <DialogContent className="min-w-[40vw] p-8 bg-black font-mono">
          <DialogHeader>
            <DialogTitle className="mb-4 flex items-center gap-3"><Code2Icon/>Projects</DialogTitle>
            {/* AI Glasses */}
            <Card className="bg-transparent">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <WaverCircle/>
                  <h1>FQ 2025</h1>
                </CardTitle>
                <CardAction>
                  <Button onClick={() => window.open("https://bit.ly/ilabsucd", "_self")} className="cursor-pointer" variant={'secondary'}>Join the project</Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <h1 className="scroll-m-20 text-xl font-semibold tracking-tight mb-3">
                  AI Glasses
                </h1>
                
                {/* Description with See More */}
                <h3 className="text-neutral-500">
                  {showMore 
                    ? aiGlassesDescription 
                    : aiGlassesDescription.slice(0, 140) + "..."}
                </h3>
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="text-blue-400 hover:text-blue-500 mt-2 text-sm"
                >
                  {showMore ? "See less" : "See more"}
                </button>
              </CardContent>
            </Card>

            <br/>
            <Button variant={'outline'} className="w-fit cursor-pointer" onClick={() => {setProjects(false);setBlur(false)}}>Close Projects</Button>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default LandingPage