import image from '../../assets/deals.png'
import { useEffect, useState } from 'react';

function DealsSection() {

  const countDownTimer = new Date("2025-11-11T00:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(countDownTimer));

  function getTimeRemaining(endTime) {
    const total = Date.parse(endTime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total, days, hours, minutes, seconds
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = getTimeRemaining(countDownTimer);
      setTimeLeft(newTime);

      if (newTime.total <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [countDownTimer]);


  return (
    <>
    <section className='bg-red-50'>
      <div className='mx-5 md:mx-10 lg:mx-20 2xl:mx-40 pt-20'>
        <div className='flex flex-col md:flex-row justify-between gap-10 md:gap-0'>
          <div className='flex justify-center'>
            <img className='' src={image} alt="" />
          </div>

          <div className='flex flex-col justify-center gap-10 md:mx-0'>
            <div className='flex flex-col gap-3'>
              <p className='text-xs lg:text-sm text-red-500 roboto pt-5'>Get Up To 20% Discount</p>
              <p className='text-2xl md:text-3xl 2xl:text-4xl poppins font-semibold'>Deals Of This Month</p>
              <p className='text-sm lg:text-base roboto text-gray-700 text-justify'>Our Women's Fashion Deals of the Month are here to make your style dreams a reality without breaking the bank. Discover a curated collection of exquisite clothing, accessories, and footwear, all handpicked to elevate your wardrobe.</p>
            </div>

            <div className='flex justify-center gap-3 pb-10 poppins'>
              <p className='bg-white rounded-full p-4 text-xs lg:text-sm drop-shadow-xl text-center content-center'>{timeLeft.days} <br />Days</p>
              <p className='bg-white rounded-full p-4 text-center content-center text-xs md:text-sm drop-shadow-xl'>{timeLeft.hours} <br />Hours</p>
              <p className='bg-white rounded-full p-4 text-center content-center text-xs lg:text-sm drop-shadow-xl'>{timeLeft.minutes} <br />Mins.</p>
              <p className='bg-white rounded-full p-4 text-center content-center text-xs md:text-sm drop-shadow-xl'>{timeLeft.seconds} <br />Secs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default DealsSection