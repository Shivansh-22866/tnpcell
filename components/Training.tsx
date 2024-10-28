import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import Image from "next/image";

const Training = () => {
  return (
    <div>
      <Card className="lg:w-3/5 w-full shadow-lg mx-auto my-8">
        <CardHeader className="space-y-2 sm:space-y-3">
          <div className="space-y-2">
            <CardTitle className="text-xl sm:text-2xl lg:text-3xl">
              Training & Internship
            </CardTitle>
            <Separator />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Hands-on training is an integral part of curriculum at NIT Goa.
            Industrial training and internship offer students an opportunity to
            get experience of the working environment before they graduate. This
            helps them in correlating the knowledge gained from their curriculum
            to the insights gained from working in the industry and also
            motivates them to enhance their skills. Students also understand the
            bigger picture of working in industrial/corporate environment and
            understand the diversified skill requirement. All of this helps them
            to enhance their technical skills, interpersonal skills, managerial
            and leadership skills. Moreover, students get a chance to plan their
            professional career. This exposure will help them to deliver their
            best when they join the industry as working professionals. The
            Training and Placement Cell facilitates internships for students in
            industries, corporate, academia, NGO and organizations of National
            and International repute. Our students got internships in some of
            the best academic institutes, multinational companies and public
            sector organizations. A batch of 100 students interned at more than
            40 organizations/companies. The paramount being the internship at
            CERN where 6 students from all the three branches interned at
            Geneva, Switzerland for 2 months. Other important organizations in
            the limelight being Defence Research and Development Organization
            (DRDO), Bhabha Atomic Research Centre (BARC), Indian Institute of
            Remote Sensing (IIRS), Indian Institute of Astrophysics (IIA),
            Philips, Siemens, Bosch and various others. Some of the major ones
            are shown below.
          </p>
          <h2 className="text-2xl text-center my-8">Some of the organizations our students visited this summer for Training & Internship</h2>
          <Image src="/placement.jpg" alt="Training & Internship" width={600} height={600} className="mx-auto" />
        </CardContent>
      </Card>
    </div>
  );
};

export default Training;
