'use client'
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
import { Instagram, Mail, MoveDown, MoveRight, TreePalm } from 'lucide-react';
import { toast } from 'sonner';

function LandingPage() {
  const [vision, setVision] = useState(false);
  const [mission, setMission] = useState(false);
  const [contact, setContact] = useState(false);
  return (
    <div className='h-screen w-screen flex items-center justify-center flex-col bg-[#000109]'>
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
          <a onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSc198IgwGXfZIY3Hk1Sj4LPIYdXLc7_xqhUduq01Q6OOvqSzQ/viewform", "_self")} className='hover:text-blue-500 transition-all text-orange-300'>Join us</a>
          <div className='flex items-center gap-3'>
            <a onClick={() => setContact(!contact)} className='hover:text-blue-500 transition-all text-white font-bold border p-2 px-3 border-neutral-700'>Contact</a>
            <a className='hover:text-blue-500 transition-all text-white font-bold border p-2 rounded px-3 border-neutral-700'>Updates</a>
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
                    await navigator.clipboard.writeText("Innovationlabsatdavis@gmail.com");
                    toast.success("Email address copied to clipboard")
                  }} className='text-neutral-500 border-b pb-1 hover:text-white transition-all cursor-pointer hover:border-neutral-400'>Innovationlabsatdavis@gmail.com</a></>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <TreePalm onClick={() => window.open("https://linktr.ee/innovationlabsdavis")} className={`${!contact ? "text-transparent" : ""}`}/>
        </div>
      </div>
    </div>
  )
}

export default LandingPage