import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Logo = () => {
    return (
        <div>
            <Link href="/" className='flex items-center gap-2'>
                <Image src="/logo.png" alt="Logo" width={50} height={40} />
                <h2 className='text-2xl font-bold'>Hero <span className='text-primary'>Kidz</span></h2>
            </Link>
        </div>
    );
};

export default Logo;