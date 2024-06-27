import React from "react";
import PageLayout from "../../components/PageLayout";
import ArticleInfo from "../../components/ArticleInfo";
import Button from "../../components/Button";
import HighlightField from "../../components/HighlightField";
import Arrow from "../../assets/svg/arrow";
import CodeContainer from "../../components/CodeContainer";
import img1 from "../../assets/img/LandingPageDesign1.PNG";
import img2 from "../../assets/img/LandingPageDesign2.PNG";
import img3 from "../../assets/img/LandingPageDesign3.PNG";
import video1 from "../../assets/video/LandingPageDesign4.mp4";
import ImageBox from "../../components/ImageBox";
import VideoBox from "../../components/VideoBox";

function LandingPageDesign() {
  return (
    <PageLayout>
      <div className="flex flex-col gap-4">
        <ArticleInfo
          title={"Landing page design"}
          shortDescription={
            "Designing and implementing functionalities of landing page for hungry app"
          }
        />
        <div className="flex gap-5 mb-6">
          <Button
            link={"https://hungry-reservations.netlify.app/"}
            text={"Live Demo"}
          />
          <Button
            link={
              "https://github.com/MilanGligorijevic/Reservations-App/blob/main/reservations-app/src/view/pages/Home/index.tsx"
            }
            text={"Source Code"}
          />
        </div>
        <h1 className="text-3xl text-custom-white">Description</h1>
        <p>
          Hungry app is an application made for making reservations in local
          restaurants and bars. I started making this app from a single
          restaurant page which was my main selling point so I ended up needing
          a landing/home page for my application.
        </p>
        <h1 className="text-3xl text-custom-white">Initial design</h1>
        <p>
          Initial idea was to have a few components on the page that would serve
          their purpose.
        </p>
        <p>
          First component would work for restaurant search by location, date,
          time and number of guests.
        </p>
        <p>
          I also needed a component that represented most popular food
          categories and listed restaurants by those categories.
        </p>
        <p>
          Besides those I needed a component that listed top picked restaurants.
        </p>
        <HighlightField
          children={
            <>
              <div className="flex gap-2">
                <Arrow /> Color palette and component design was already set up
                while making my initial single restaurant page
              </div>
            </>
          }
        />
        <h1 className="text-3xl text-custom-white">
          Popular food categories component
        </h1>
        <p>
          I started from popular categories component although it would not be a
          first component on the page.
        </p>
        <HighlightField
          children={
            <>
              <div className="flex gap-2">
                <Arrow /> Project is written in React and TypeScript
              </div>
              <div className="flex gap-2">
                <Arrow /> I used tailwind for component design as well as for
                responsiveness
              </div>
            </>
          }
        />
        <p>
          I made some initial structure of the component which would represent
          some of the most popular food categories out there.
        </p>
        <CodeContainer
          code={`import React from 'react'

function PopularCategories() {
    return (
        <div className='w-9/12'>
            <h1 className='text-3xl font-medium'>Popular categories</h1>
            <div className='flex gap-5'>
                <img src='' alt='Pasta' className='w-60 h-60 bg-custom-orange' />
                <img src='' alt='Burgers' className='w-60 h-60 bg-custom-orange' />
                <img src='' alt='Pizza' className='w-60 h-60 bg-custom-orange' />
                <img src='' alt='Sushi' className='w-60 h-60 bg-custom-orange' />
            </div>
        </div>
    )
}

export default PopularCategories`}
          componentName={"PopularCategories.tsx"}
          showMoreButton={true}
        />
        <p>
          Instead of using simple images to represent categories it made more
          sense to make custom reusable component FoodCategory.
        </p>
        <HighlightField
          children={
            <>
              <div className="flex gap-2">
                <Arrow /> I used https://www.pexels.com/ to find free images to
                represent my food categories
              </div>
            </>
          }
        />
        <p>
          After browsing images and making some smaller tweaks and changes I got
          a design I was satisfied with. It was pretty simple yet elegant and
          went well with the rest of my app.
        </p>
        <ImageBox src={img1} alt="popular categories" />
        <p>
          Clicking any of the categories would lead you to a page with
          restaurants from that food category which will not be represented in
          this article.
        </p>
        <CodeContainer
          code={`import React from 'react'
import { Link } from 'react-router-dom'

interface FoodCategoryProps {
    category: string,
    image: string,
}

function FoodCategory({ category, image }: FoodCategoryProps) {
    return (
        <Link to={'/localsGeomap?category=\${category}'} className='h-[25rem] w-[17rem] md:w-[48%] '>
            <img src={image} alt={category} className='h-[23rem] w-[17rem] object-cover md:w-[100%] sm:h-56' />
            <p className='my-1 text-lg font-medium sm:text-xl sm:p-1.5'>{category}</p>
        </Link>
    )
}

export default FoodCategory`}
          componentName={"FoodCategory.tsx"}
          showMoreButton={true}
        />
        <h1 className="text-3xl text-custom-white">
          Popular restaurants component
        </h1>
        <p>
          I decided to use similar approach to making popular restaurants view.
          Firstly I made a container component ExploreTopPicks that would
          contain some of the most popular restaurants.
        </p>
        <CodeContainer
          code={`import React from 'react'
import { useLocals } from '../../../context/localsContext'
import RestaurantPreview from '../RestaurantPreview';

function ExploreTopPicks() {
    const locals = useLocals();

    return (
        <div className='w-9/12 my-10'>
            <h1 className='text-3xl font-medium my-5'>Explore popular restaurants</h1>
            <div className='flex gap-5'>
                <RestaurantPreview id={locals[0].id} image={locals[0].images[0]} name={locals[0].name} address={locals[0].address} />
                <RestaurantPreview id={locals[1].id} image={locals[1].images[0]} name={locals[1].name} address={locals[1].address} />
                <RestaurantPreview id={locals[2].id} image={locals[2].images[0]} name={locals[2].name} address={locals[2].address} />
                <RestaurantPreview id={locals[3].id} image={locals[3].images[0]} name={locals[3].name} address={locals[3].address} />
            </div>
        </div>
    )
}

export default ExploreTopPicks`}
          componentName={"ExploreTopPicks.tsx"}
          showMoreButton={true}
        />
        <HighlightField
          children={
            <>
              <div className="flex gap-2">
                <Arrow /> useLocals() represents a custom hook that retrieves
                data from restaurants context API
              </div>
            </>
          }
        />
        <CodeContainer
          code={`import React from 'react'
import { Link } from 'react-router-dom'

interface RestaurantPreviewProps {
    id: string,
    image: string,
    name: string,
    address: string,
}

function RestaurantPreview({ id, name, image, address }: RestaurantPreviewProps) {
    return (
        <Link to={'/singleLocal/\${id}'} className='h-80 w-96 shadow xl:h-[22rem] sm:w-full'>
            <img src={image} alt={name} className='h-60 object-cover sm:w-full sm:h-72' />
            <p className='mx-2 mt-2 text-lg font-medium 2xl:text-base'>{name}</p>
            <p className='mx-2 text-base xl:text-sm '>{address}</p>
        </Link>
    )
}

export default RestaurantPreview`}
          componentName={"RestaurantPreview.tsx"}
          showMoreButton={true}
        />
        <ImageBox src={img2} alt="restaurants preview" />
        <p>
          The top picked restaurants were determined by market research but in
          some future development they could be listed by some advanced
          algorithm for rating restaurants by user reviews.
        </p>
        <h1 className="text-3xl text-custom-white">
          Search restaurants by parameters component
        </h1>
        <p>
          After two out of three components for landing page were finished, all
          that was left to do was to make the most complex one that included
          restaurant search by user inputed parameters.
        </p>
        <p>
          With that being said I needed some type of input fields for Location,
          Date, Time and Number of guests. Luckily, on single restaurant page I
          already used such components and made them reusable which was perfect
          for this scenario.
        </p>
        <CodeContainer
          code={`import React, { useState } from 'react'
import ReservationDate from '../ReservationDate'
import dayjs from 'dayjs';
import ReservationTime from '../ReservationTime';
import { SelectChangeEvent } from '@mui/material';
import { getWorkingHours } from '../../../utilities/functions';
import ReservationGuests from '../ReservationGuests';
import ReservationLocation from '../ReservationLocation';
import { SearchIcon } from '../../../assets/svg/SearchIcon';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function HomePageReservationBar() {

    const [reservationDate, setReservationDate] = useState<dayjs.Dayjs | null>(dayjs(new Date()));
    const [reservationTime, setReservationTime] = useState<string>("12:00");
    const [reservationLocation, setReservationLocation] = useState<string>("Belgrade");
    const locationOptions: string[] = ["Belgrade", "Novi Sad", "Nis"];
    const workingHours = getWorkingHours(8, 24);
    const [guestsNumber, setGuestsNumber] = useState<number>(2);



    function handleReservationDate(date: dayjs.Dayjs | null) {
        setReservationDate(date);
    }

    function handleReservationTime(event: SelectChangeEvent) {
        setReservationTime(event.target.value);
    }

    function addNumOfGuests() {
        setGuestsNumber(prevCount => prevCount + 1);
    }

    function subtractNumOfGuests() {
        setGuestsNumber(prevCount => prevCount - 1);
    }

    function handleReservationLocation(event: SelectChangeEvent) {
        setReservationLocation(event.target.value);
    }

    const reservationBarVariants = {
        hidden: {
            opacity: 0,
            y: -300,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.8,
                duration: 1.2,
                type: 'spring',
                stiffness: 100,
                damping: 20,
            }
        }
    }

    return (
        <motion.div className='w-9/12 flex p-5 shadow justify-around items-center rounded 2xl:w-10/12 xl:gap-6 md:mt-10 md:flex-wrap md:justify-around md:pl-5 md:relative' variants={reservationBarVariants} initial="hidden" animate="animate">
            <ReservationLocation handleReservationLocation={(newValue: any) => handleReservationLocation(newValue)} reservationLocation={reservationLocation} locationOptions={locationOptions} />
            <ReservationDate reservationDate={reservationDate} handleReservationDate={(newValue: any) => handleReservationDate(newValue)} />
            <ReservationTime reservationTime={reservationTime} reservationDate={reservationDate} handleReservationTime={(newValue: any) => handleReservationTime(newValue)} workingHours={workingHours} />
            <ReservationGuests guestsNumber={guestsNumber} addNumOfGuests={addNumOfGuests} subtractNumOfGuests={subtractNumOfGuests} />
            <Link to={'/localsGeomap?city=\${reservationLocation}&time=\${reservationTime}'} className='hidden md:block'>
                <button className='rounded bg-custom-orange h-12 w-64 text-white text-lg hover:bg-[#eb6902]'>Search</button>
            </Link>
            <Link to={'/localsGeomap?city=\${reservationLocation}&time=\${reservationTime}'} className='md:hidden'>
                <SearchIcon />
            </Link>
        </motion.div>
    )
}

export default HomePageReservationBar`}
          componentName={"HomePageReservationBar.tsx"}
          showMoreButton={true}
        />
        <HighlightField
          children={
            <>
              <div className="flex gap-2">
                <Arrow /> Each input component included in
                HomePageReservationBar.tsx is made using MUI react library
              </div>
              <div className="flex gap-2">
                <Arrow /> npm install @mui/material @emotion/react
                @emotion/styled
              </div>
              <div className="flex gap-2">
                <Arrow /> Framer Motion is my library of choice for React
                animations and it is used in this example as well
              </div>
              <div className="flex gap-2">
                <Arrow /> npm i framer-motion
              </div>
            </>
          }
        />
        <p>
          After configuring all handler functions and confirming that right
          restaurants are returned from data base, last landing page component
          is done.
        </p>
        <ImageBox src={img3} alt={"explore reastaurants bar"} />
        <p>
          On inserted valid parameters and confirmed search, user is redirected
          to a page with listed restaurants that satisfy those parameters.
        </p>
        <h1 className="text-3xl text-custom-white mt-2">
          Final design and implementation
        </h1>
        <VideoBox videoFile={video1} />
        <CodeContainer
          code={`import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HomePageReservationBar from '../../components/HomePageReservationBar';
import PopularCategories from '../../components/PopularCategories';
import ExploreTopPicks from '../../components/ExploreTopPicks';
import LoadingCircle from '../../components/LoadingCircle';
import NavbarMobile from '../../components/NavbarMobile';

function Home() {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
    }, [])

    return (
        <>
            <Navbar />
            <NavbarMobile />
            {isLoading ?
                <LoadingCircle />
                :
                <div className='flex flex-col items-center'>
                    <HomePageReservationBar />
                    <PopularCategories />
                    <ExploreTopPicks />
                </div>}
            <Footer />
        </>
    )
}

export default Home`}
          componentName={"Home.tsx"}
          showMoreButton={true}
        />
        <HighlightField
          children={
            <div className="flex gap-2">
              <Arrow /> Please note that final versions of components include
              some additional lines of code for handling responsiveness
            </div>
          }
        />
      </div>
    </PageLayout>
  );
}

export default LandingPageDesign;
