import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { Separator } from "./ui/separator";

const Message = () => {
  return (
    <>
      <Card className="lg:w-3/5 w-full mx-auto my-8 shadow-lg">
        <CardHeader className="space-y-2 sm:space-y-3">
          <div className="space-y-2">
            <CardTitle className="text-4xl md:text-5xl lg:text-3xl">
              DIRECTOR&apos;S MESSAGE
            </CardTitle>
            <Badge variant="secondary" className="w-fit text-xs sm:text-sm">
              Dr. O. R. Jaiswal
            </Badge>
            <Separator className="my-4"/>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full flex items-center justify-center">
            <Image
              src="/director.jpeg"
              width={300}
              height={300}
              className="rounded-full"
              alt="Director, NIT Goa"
            />
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              It is my privilege being the director of the institute, which is
              graduating this year. NIT Goa aims at providing quality education
              and producing people equipped with necessary skills to work in
              this fast changing world. The world is changing too fast in terms
              of technology, skills and working environment. Therefore, it is
              necessary that the upcoming skill force have adequate preparation
              in their forming years. The institute has taken adequate care in
              terms of building strong foundation of the students. The students
              have been exposed to strong foundation courses in terms of
              analytical and computing skills. With emphasis on problem solving
              and laboratory projects in small teams, they are prepared to work
              deeply in the real working environment. The students have worked
              with faculty members on a number of innovative projects. It is a
              matter of pride for this new institute that some of their works
              have been published in international conferences. On behalf of NIT
              Goa, it is my privilege to invite companies for the campus
              recruitment that are looking for talented pool of people. I am
              sure that you will be greeted with young, bright and aspiring
              minds.
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Message;
