'use client';
import { useState } from 'react';

export default function MobileNavBar({ categories }: { categories:Array<String> }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="relative block md:hidden">
            <div onClick={toggleDropDown} className="text-center">
                <p>Click To See Categories</p>
            </div>

            {isOpen && (
                <div>
                    {categories.map((category, index) => (
                    <a href="#"  key={index} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">{category}</a>
                ))}
                </div>
            )}
        </div>
    )
}