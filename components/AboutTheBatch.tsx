import React from "react";
import { Card, CardContent } from "./ui/card";

const AboutTheBatch = () => {
  return (
    <Card className="lg:w-3/5 w-full shadow-lg mx-auto my-8">
      <CardContent>
        <p className="text-gray-700 p-4">
          Goa is an ideal destination for many of us, with appealing lush green
          mountains, the horizonless sea, and the cool breeze which makes
          everyone at ease. Students enjoy various activities apart from their
          curricula, such as sports, dance, music, and entertainment. They
          actively participate in several technical, cultural, and sporting
          events such as Inter-NIT competitions, CULTRANG (fest hosted by IIT
          Goa), and Happenings (hosted by GEC). The students of NIT Goa are also
          involved in the overall organization of the inter-NIT competitions,
          thus spreading the idea of cooperation and mutual harmony.
        </p>
        <h2 className="text-5xl font-bold p-4 mx-auto text-center">STUDENT @NITG</h2>
      </CardContent>
    </Card>
  );
};

export default AboutTheBatch;
