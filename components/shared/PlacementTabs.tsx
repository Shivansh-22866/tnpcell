import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import React from 'react'
import Home from "../Home"
import Message from "../Message"
import Dropdowns from "../Announcements"
import Training from "../Training"
import RecruitUs from "../RecruitUs"
import Recruiters from "../Recruiters"
import ContactUs from "../ContactUs"
import AboutTheBatch from "../AboutTheBatch"

const PlacementTabs = () => {
  return (
    <div>
        <Tabs defaultValue="home">
  <TabsList color="primary" className="flex items-center justify-center flex-wrap h-auto py-2 my-4">
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
  <TabsContent value="batchinfo">
    <AboutTheBatch/>
  </TabsContent>
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