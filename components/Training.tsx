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
            The Training and Placement Cell (T&P) of the institute is endowed
            with the responsibility to cater to the training and placement needs
            of its elite students. Run and managed by an efficient team of
            professors, office staff, and students, the T&P cell handles all
            aspects of placement/internship at NIT Goa. It invites companies for
            campus recruitment, organizing pre- placement talks, interviews, and
            corporate interaction. Under the Training and Placement Cell, an
            efficient team mentors the aspiring students to enhance their
            technical, interpersonal, managerial, and leadership skills with
            soft-skill development programs, mock interviews, and tests. It
            helps the students to plan their professional careers and groom
            themselves with the skill set demanded by the industry. The training
            and placement cell gives exposure and opportunity to companies and
            students by assisting them in conducting lecture talks, tests,
            competitions, and interviews. Our students have done internships in
            industries and universities. This exposure to real-world situations
            makes the students more confident in making independent decisions.
            Many students become aware of internship and research opportunities
            in India and abroad. Many industries provide Pre-Placement Offers
            (PPOs) based on students’ performance during the internship period.
            It is commendable that the National Institute of Technology Goa has
            seen engineers budding exceptionally well during Summer and Winter
            Vacations, not only in Indian and foreign universities but also
            reputed companies as well (both on and off-campus). We help build
            and sustain relations with companies, universities, and social
            organizations that wish to recruit students for internships and
            research opportunities.
          </p>
          <h2 className="text-2xl text-center my-8">
            Some of the organizations our students visited this summer for
            Training & Internship
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:grid-cols-1">
            <Image
              src="/recruit1.png"
              alt="Training & Internship"
              width={600}
              height={600}
              className="mx-auto"
            />
            <Image
              src="/recruit2.png"
              alt="Training & Internship"
              width={600}
              height={600}
              className="mx-auto"
            />
            <Image
              src="/recruit3.png"
              alt="Training & Internship"
              width={600}
              height={600}
              className="mx-auto"
            />
            <Image
              src="/recruit4.png"
              alt="Training & Internship"
              width={600}
              height={600}
              className="mx-auto"
            />
          </div>
        </CardContent>
      </Card>
      <Card className="lg:w-3/5 w-full shadow-lg mx-auto my-8">
        <CardContent>
          <div className="flex flex-col md:flex-row items-center md:justify-between p-4">
            <div className="md:w-1/2">
              <Image
                src="/curriculum.jpg"
                alt="Description of the image"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h1 className="text-2xl font-bold my-2">
                DIVERSITY IN CURRICULUM
              </h1>
              <hr className="border-gray-300 mb-4" />
              <ul className="grid grid-cols-2 gap-4 list-disc p-4">
                <li>R&D Organization</li>
                <li>Trading</li>
                <li>IT Services</li>
                <li>Web Development</li>
                <li>Core Engineering Firms</li>
                <li>Sales & Marketing</li>
                <li>Financial Services</li>
                <li>Banking Services</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="lg:w-3/5 w-full shadow-lg mx-auto my-8">
        <CardContent>
          <div className="flex flex-col md:flex-row items-center md:justify-between p-4">
            <div className="md:w-1/2">
              <Image
                src="/internship.jpg"
                alt="Description of the image"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h1 className="text-2xl font-bold my-2">RESEARCH INTERNSHIPS</h1>
              <hr className="border-gray-300 mb-4" />
              <p className="text-gray-700 ">
                Our students have participated in R&D activities of some of the
                significant technology institutes of India like IISc Bangalore,
                BARC, DRDO, BEL, and various top IITs and NITs. Regarding
                international Scholarships and research internships, NIT Goa
                feels proud to send some of its students to International
                Universities and Research establishments for summer internships.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Training;
