import React, { useState } from 'react';

const Gallery=()=>{
  const [activeTab, setActiveTab] = useState('Ambience');

  const images = {
    Ambience: [
      'https://media.licdn.com/dms/image/v2/D4E05AQE5LY7h7gkP0A/videocover-high/videocover-high/0/1680276029533?e=2147483647&v=beta&t=QNc8UaXpPrHNHjXEJIrvsCE2QudccMTMu5vuk-mj-9I',
      'https://content3.jdmagicbox.com/comp/dhar/p8/9999p7292.7292.230314153029.a9p8/catalogue/naivedya-cafe-and-restaurant-dhamnod-dhar-restaurants-roi6jcf5hl.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3zTJ6blpFL8zevQ4O9XE6wcfyJXqi5xTS7g&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMcHfrm5bHOsGt-TAbC7AXe5qIFeLu-M3hUw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt4TcSumML6M-Ei1N0JfXcZoUHs1HsSwYvbw&s',
      'https://lh3.googleusercontent.com/p/AF1QipOvsZectRo5Z2N9Fz-iac8lBWKqro9PeBKygeK5=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipPJn7N1E6z2u86-ERDpyR0Sdbe8iAnseu2ZpH2S=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipODbXQgqye7t5Uc_NfyJyckuUpACM_U7vhph6Z3=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipMzZUula54X8AuYmeIUlsWL6lx-HbDXtHY5fEKZ=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipM748mI6dLjDmb0CrMvsXSRcf3h7HfS5GVkHoB7=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipMXIjD8q5BElmW-qrDv8ErTNUswLqe-4qoKIt0t=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipMK1MS69cRjfwLuk2VcrTzkCbb3g3WyZHxGh1d0=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipPDXErEl5USwntMB1c9oanrJL6qV5nXOUwJipw=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipMDJN3oJerHBmXg5U2223ivMrRu5fC7JfF3XGQt=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipO4Ne5Q3eF0EFPT3ciH61pERNk19nTAUxzsGMKM=s1360-w1360-h1020',
    ],
    Food: [
      'https://lh3.googleusercontent.com/p/AF1QipOYZmLT5k5iqdLyxCX24mxrkX2D1cSt0_2WWcG5=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipPaV78Ei45QSzm8CoYKutz1ash4aMfrJz2OzVf4=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipNuEbbpDV5ouPsdb_RR_oncOQeXbzWTa_6Ur1Dw=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipO5GSxHpr9mvHVO3EtwDlrNuT98-kV0psYIXTqK=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipOB2WV0f68F97smiB5aOex5V-bkVS8LxOpATeqW=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipMd1ZUTT8G667pb9hKz89RODswN0EB6klWDcXN8=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipOzgi-DFKDk1WwBLJSHmZoZdxuM85vIjGi1hsnF=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipMcZ9mSnjm5QTMRZ_uqrMhPW0N4mRHpONZ56KJf=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipOcbffBmXJEGZDwihhLnAcX7VZTsmf5KSkcXSOu=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipNiYWD-rsh5wCqT_s3wGE7IZUJhELVubcvVUckv=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipNjFdGKymSA7Oa_lcMDbjlmLGvxUJCo7HWBRmXk=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipPRPiaKR60J1XftHiImQe9G7O_F5WqWqhiwZY6b=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipOboXQxwgPIWPOXBGi9B6frZS8SAGUklRybYAmD=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipPHkD5fjBV0bNQBZtc1iqWcRj6l2tG0DuHO_Q-u=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipP0V4YGuI2fbO4B4af2MaD8oP57V94zoKqXk2eA=s1360-w1360-h1020',
    ],
    
  };

  return (
    <div className=' space-y-4 text-center p-5 w-[100vw] '>
      <h1 className='text-6xl font-cursiv '> Gallery</h1>
      <div className="tabs space-x-8  bg-indigo-600 item-center rounded-lg px-4 py-1  ">
        {Object.keys(images).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className= {activeTab === tab ? 'active' : ''}
          >
            {tab.replace('tab', 'Tab ')}
          </button>
        ))}
      </div>
      <div className="image-gallery  grid lg:grid-cols-5 grid-cols-1 ">
        {images[activeTab].map((src, index) => (
          <img  key={index} src={src} alt={`Tab ${activeTab} Image ${index + 1}`} className='h-full aspect-square object-cover' />
        ))}
      </div>
    </div>
  );
};
export default Gallery;


