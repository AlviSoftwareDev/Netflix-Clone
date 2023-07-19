import React from 'react';
import { BiPlay } from 'react-icons/bi';
import { BsPlus } from 'react-icons/bs';
import requests from '../Requests';
import BannerImage from '../assets/banner-img.jpg';
import BannerTitle from '../assets/banner-title.png';
import Header from './Header';
import Row from './Row';

const Home = () => {
  return (
    <>
      <Header />
      <main className="bg-black">
        <section>
          <div className="relative w-full h-[75vh] overflow-hidden">
            <div className="absolute w-full h-full bg-gradient-to-t from-black"></div>
            <img
              src={BannerImage}
              alt="Money Heist"
              className="w-full h-full object-cover"
            />
            <div className="absolute pl-8 top-0 w-[50%] h-full flex flex-col gap-8 justify-center items-start text-white">
              <img src={BannerTitle} alt="" className="w-[28rem]" />
              <p className="font-normal text-sm md:text-md leading-8 line-clamp-3">
                To carry out the biggest heist in history, a mysterious man
                called The Professor recruits a band of eight robbers who have a
                single characteristic: none of them has anything to lose. Five
                months of seclusion memorizing every step, every detail, every
                probability culminate in eleven days locked up in the National
                Coinage and Stamp Factory of Spain, surrounded by police forces
                and with dozens of hostages in their power, to find out whether
                their suicide wager will lead to everything or nothing.
              </p>
              <div className="flex gap-4">
                <button className="flex items-center gap-1 px-6 py-2 rounded-sm bg-gray bg-opacity-40">
                  <BiPlay size={24} />
                  <span className="font-semibold">Play</span>
                </button>
                <button className="flex items-center gap-1 px-6 py-2 rounded-sm bg-gray bg-opacity-40">
                  <BsPlus size={24} />
                  <span className="font-semibold">My List</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          {/* Row */}
          <Row
            id={1}
            title={'Trending Now'}
            endpoint={requests.requestPopular}
          />
          <Row
            id={2}
            title={'Now Playing'}
            endpoint={requests.requestNowPlaying}
          />
          <Row id={3} title={'Top Rated'} endpoint={requests.requestTopRated} />
          <Row id={4} title={'Upcoming'} endpoint={requests.requestUpcoming} />
        </section>
      </main>
    </>
  );
};

export default Home;
