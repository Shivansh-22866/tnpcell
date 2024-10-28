import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import React from 'react'
import Home from "../Home"
import Message from "../Message"
import Dropdowns from "../Announcements"
import Training from "../Training"
import RecruitUs from "../RecruitUs"
import Recruiters from "../Recruiters"
import ContactUs from "../ContactUs"

const PlacementTabs = () => {
  return (
    <div className="flex justify-center py-4 w-screen">
        <Tabs defaultValue="home" className="">
  <TabsList color="primary" className="w-full">
    <TabsTrigger value="home">Home</TabsTrigger>
    <TabsTrigger value="messages">Messages</TabsTrigger>
    <TabsTrigger value="announcements">Announcements</TabsTrigger>
    <TabsTrigger value="training">Training</TabsTrigger>
    <TabsTrigger value="batchinfo">About the Batch</TabsTrigger>
    <TabsTrigger value="recruit">Why Recruit?</TabsTrigger>
    <TabsTrigger value="recruiters">For Recruiters</TabsTrigger>
    <TabsTrigger value="contact">Contact Us</TabsTrigger>
  </TabsList>
  <TabsContent value="home">
    <Home/>
  </TabsContent>
  <TabsContent value="messages">
    <Message />
  </TabsContent>
  <TabsContent value="announcements">
    <Dropdowns/>
  </TabsContent>
  <TabsContent value="training">
    <Training/>
  </TabsContent>
  <TabsContent value="batchinfo">About the Batch</TabsContent>
  <TabsContent value="recruit">
    <RecruitUs/>
  </TabsContent>
  <TabsContent value="recruiters">
    <Recruiters/>
  </TabsContent>
  <TabsContent value="contact">
    <ContactUs/>
  </TabsContent>
</Tabs>

    </div>
  )
}

export default PlacementTabs