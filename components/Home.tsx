"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Download, ChevronRight, Bell } from "lucide-react";

const images = ["/img1.jpeg", "/img2.jpeg", "/img3.webp"];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 space-y-4 sm:space-y-6 lg:space-y-8">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
          {/* Carousel Section */}
          <Card className="lg:w-1/2 w-full shadow-lg">
            <CardHeader className="space-y-1 sm:space-y-2">
              <CardTitle className="text-xl sm:text-2xl">Featured Highlights</CardTitle>
              <CardDescription className="text-sm sm:text-base">Latest events and achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <Carousel opts={{ loop: true }} className="w-full" tabIndex={currentIndex}>
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-video overflow-hidden rounded-lg">
                        <Image
                          src={image}
                          alt={`Slide ${index + 1}`}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden sm:block">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
              </Carousel>
            </CardContent>
          </Card>

          {/* Downloads Section */}
          <Card className="lg:w-1/2 w-full shadow-lg">
            <CardHeader className="space-y-1 sm:space-y-2">
              <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
                <Download className="w-5 h-5 sm:w-6 sm:h-6" />
                Important Downloads
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">Access essential documents and forms</CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4">
                <Button asChild variant="outline" className="w-full justify-between text-sm sm:text-base py-5 sm:py-6">
                  <Link href={""}>
                    Placement Brochure
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-between text-sm sm:text-base py-5 sm:py-6">
                  <Link href={""}>
                    Job Announcement Form
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
          {/* Welcome Section */}
          <Card className="lg:w-3/5 w-full shadow-lg">
            <CardHeader className="space-y-2 sm:space-y-3">
              <div className="space-y-2">
                <CardTitle className="text-xl sm:text-2xl lg:text-3xl">
                  Welcome to Training & Placement
                </CardTitle>
                <Badge variant="secondary" className="w-fit text-xs sm:text-sm">
                  NIT Goa
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Welcome to the web interface of Training and Placement (T&P) cell of
                National Institute of Technology Goa (NIT Goa). It is an institute
                of national importance established by Ministry of Human Resources
                Development (MHRD), Government of India in 2010. The training and
                placement cell is endowed with the responsibility to cater to the
                needs of training and placement of its elite students. It helps the
                institute in inviting companies for campus recruitment, organising
                pre-placement talks, interviews and corporate interaction. This
                interface serves as a guide for the companies to make them familiar
                with the facts and process, pertaining to recruitment.
              </p>
            </CardContent>
          </Card>

          {/* News Section */}
          <Card className="lg:w-2/5 w-full shadow-lg">
            <CardHeader className="space-y-1 sm:space-y-2">
              <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
                <Bell className="w-5 h-5 sm:w-6 sm:h-6" />
                Latest Updates
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Stay informed with recent announcements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[250px] sm:h-[300px] rounded-md border p-3 sm:p-4">
                <div className="space-y-3 sm:space-y-4">
                  {[
                    {
                      title: "Upcoming Placement Drive",
                      desc: "Major tech companies visiting next week"
                    },
                    {
                      title: "Mock Interview Sessions",
                      desc: "Register for upcoming mock interviews"
                    },
                    {
                      title: "Resume Workshop",
                      desc: "Learn to craft an impressive resume"
                    },
                    {
                      title: "Placement Statistics",
                      desc: "2023-24 placement results announced"
                    }
                  ].map((item, index) => (
                    <Link href="/" key={index} className="block">
                      <div className="group rounded-lg border p-3 sm:p-4 transition-colors hover:bg-muted">
                        <h3 className="font-semibold text-sm sm:text-base">{item.title}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;