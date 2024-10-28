import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import { Globe, Mail, MapPin } from 'lucide-react'
import { MobileIcon } from '@radix-ui/react-icons'

const ContactUs = () => {
  return (
    <div className='max-w-6xl mx-auto p-4 md:p-8'>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
            CONTACT US
        </h1>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            <Card className='hover:scale-105 transition-all duration-300'>
                <CardHeader>
                    <CardTitle className="text-md sm:text-md">
                        DR. VENKATANARESHBABU KUPPILLI
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                        <Image src="/drvnk.png" className='w-48 h-48 object-cover rounded-full' width={300} height={300} alt="Dr. Venkatanaresh Babu Kuppilli" />
                        
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div>
                        <p>Convener</p>
                        <p>CSE Department</p>
                        <a href='mailto:venkatanaresh@nitgoa.ac.in' className='block hover:underline hover:text-blue-800 text-blue-500'>Email: venkatanaresh@nitgoa.ac.in</a>
                        <a href="tel:+9109049436708" className="block hover:underline hover:text-blue-800 text-blue-500">Phone No.: 0904-94 36708</a>
                    </div>
                </CardContent>
            </Card>
            <Card className='hover:scale-105 transition-all duration-300'>
                <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl">
                        DR. LALAT INDU GIRI
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                        <Image src="/drlig.jpg" className='w-48 h-48 rounded-full' width={400} height={400} alt="Dr. Lalat Indu Giri" />
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div>
                        <p>Chairman</p>
                        <p>ECE Department</p>
                        <a href='mailto:tpo@nitgoa.ac.in' className='block hover:underline hover:text-blue-800 text-blue-500'>Email: tpo@nitgoa.ac.in</a>
                        <a href="tel:+9108322404213" className="block hover:underline hover:text-blue-800 text-blue-500">Phone No. :0832-2404213</a>
                    </div>
                </CardContent>
            </Card>
            <Card className='hover:scale-105 transition-all duration-300'>
                <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl">
                        DR. PRASANJIT DEY
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                        <Image src="/drpsd.jpg" className='w-48 h-48 object-cover rounded-full' width={400} height={400} alt="Dr. Prasanjit Dey" />
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div>
                        <p>Member</p>
                        <p>MCE Department</p>
                        <a href='mailto:prasanjit.dey@nitgoa.ac.in' className='block hover:underline hover:text-blue-800 text-blue-500'>Email: prasanjit.dey@nitgoa.ac.in</a>
                        <a href="tel:+9109049436708" className="block hover:underline hover:text-blue-800 text-blue-500">Phone No.: 0977-4735514</a>
                    </div>
                </CardContent>
            </Card>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 mt-6">
      <div className="flex items-center mb-4">
        <MapPin className="h-6 w-6 text-blue-500 mr-2" />
        <h2 className="text-xl font-semibold">Address</h2>
      </div>
      <p className="text-gray-700">
        National Institute of Technology Goa
      </p>
      <p className="text-gray-700">
        Kottamoll Plateau, Cuncolim Municipal Area,
      </p>
      <p className="text-gray-700">
        Salcete Taluka, South Goa District, Goa - 403703
      </p>
      <div className="flex items-center mt-4">
        <Globe className="h-5 w-5 text-blue-500 mr-2" />
        <a
          href="http://www.nitgoa.ac.in"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.nitgoa.ac.in
        </a>
      </div>
      <div className="flex items-center mt-4">
        <Mail className="h-5 w-5 text-blue-500 mr-2" />
        <a
          href="mailto:tpo@nitgoa.ac.in"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          tpo@nitgoa.ac.in
        </a>
      </div>
      <div className="flex items-center mt-4">
        <MobileIcon className="h-5 w-5 text-blue-500 mr-2" />
        <a
          href="tel:+919673408877"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          +91 96734 08877
        </a>
      </div>
    </div>
    </div>
  )
}

export default ContactUs