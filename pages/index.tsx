import type {NextPage} from 'next';
import styles from '../components/css/globals.module.scss';
import Image from 'next/image';
import faceImage1 from '../public/home/faceimage.jpg';
import {Well} from '@adobe/react-spectrum';
import Head from 'next/head';
import {useState} from 'react';
const Home: NextPage = () => {
  const [fontopacity, setFontopacity]=useState(false);
  return (
    <main className=' flex flex-col '>
      <Head>
        <title>(◍’౪`◍)ﾉﾞ~hi, buddy~</title>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
      </Head>
      <div className='w-full h-screen flex justify-center items-center relative'>
        <div className='flex items-end px-12
        text-5xl h-96 blur-sm sm:text-3xl sm:h-28 md:text-4xl md:h-40 md:blur-0 lg:text-6xl xl:text-7xl xl:h-44 2xl:text-9xl 2xl:h-72
        titlemax z-10 '>
          <p className={`text-yellowcolor select-none ${fontopacity ? styles.titfontact: styles.titfont}`}>
            &ldquo; 80 percent of success is just showing up &rdquo;
          </p>
        </div>
        <Image alt='face' src={faceImage1} layout="fill" priority objectFit="cover"
          onLoadingComplete={()=>{
            setFontopacity(true);
          }}
        />
      </div>
      <div className='text-2xl text-titlcolor md:p-20 p-5'>
        <div className=" rounded-xl navtitle ">
          <Image
            alt='errui'
            src={`${process.env.IMG_HOST}errui.jpg`}
            width='100'
            height='100'
            quality={100}
            priority
            className='rounded-full select-none'
          />
          <Well role="region" aria-labelledby="wellLabel">
            <p >Hi! My name is Arrey Chan.</p>
            <p>A frontend and independent game developer.</p>
            <div className='flex gap-[1.5rem] w-full pt-5'>
              <a href="https://twitter.com/arrey_chan" target='_blank' rel='noreferrer'>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='w-8 h-auto fill-titlcolor hover:fill-sky-600 stroke-1 hover:stroke-2'>
                  <title>Twitter</title>
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127
                1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666
                2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827
                4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995
                13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://github.com/arreychan" target='_blank' rel='noreferrer'>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='w-8 h-auto fill-titlcolor hover:fill-indigo-600 stroke-1 hover:stroke-2'>
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
                 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7
                 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809
                 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38
                 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006
                 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23
                 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a href="mailto:arreychan@outlook.com">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='w-8 h-auto fill-titlcolor hover:fill-rose-600 stroke-1 hover:stroke-2'>
                  <title>Gmail</title>
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636
                1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69
                2.28 24 3.434 24 5.457z"/>
                </svg>
              </a>


            </div>
          </Well>


        </div>


      </div>
    </main>
  );
};

export default Home;
