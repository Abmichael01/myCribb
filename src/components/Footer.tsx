import React from 'react'
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const quickLinks = [
    { title: 'About Us', href: '/about' },
    { title: 'Contact', href: '/contact' },
    { title: 'Terms & Conditions', href: '/terms' },
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Customer Policy', href: '/help' },
    { title: 'User Policy', href: '/faqs' },
    { title: 'Blog', href: '/blog' },
]

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-40 bg-primary mt-20 px-5 sm:px-10 md:px-14 lg:px-20 py-14">
        <h2 className='font-fancy font-semibold text-white text-3xl'>My Cribb</h2>
        <ul className="flex flex-col gap-1 flex-wrap">
            <li className='text-white/90 font-semibold'>Quick Links</li>
            {quickLinks.map(({ title, href }) => (
                <li key={title}>
                    <a href={href} className="text-white/80 dont-medium text-sm hover:text-gray-300 transition duration-300">
                        {title}
                    </a>
                </li>
            ))}
        </ul>
        <div>
            <h1 className='font-semibold text-white/90 mb-1'>Connect with us on our social media</h1>
            <div className='flex gap-3 text-white/80'>
                <Facebook className='cursor-pointer' size={24} />
                .
                <Twitter className='cursor-pointer' size={24} />
                .
                <Linkedin className='cursor-pointer' size={24} />
                .
                <Youtube className='cursor-pointer' size={24} />
            </div>
        </div>
    </div>
  )
}

export default Footer