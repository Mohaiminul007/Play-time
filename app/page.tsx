'use client';
import SectionScrollerWrapper from "@/components/SectionScrollerWrapper";
import Quote from "@/components/Quote";
import SliderOne from "@/components/SliderOne";
import { JSX } from "react";
import SliderTwo from "@/components/SliderTwo";
import SliderThree from "@/components/SliderThree";
import SliderFour from "@/components/SliderFour";
import SliderFive from "@/components/SliderFive";
import SliderSix from "@/components/SliderSix";
import SliderSeven from "@/components/SliderSeven";
import SliderEight from "@/components/SliderEight";
import SliderNine from "@/components/SliderNine";
import LastPage from "@/components/LastPage";

export default function Home(): JSX.Element {
  return (
    <SectionScrollerWrapper
       showNavigationDots={false}
      transitionDuration={0.8}
      transitionEase="easeInOut"
    >
      <SliderOne />
      <Quote />
      <SliderTwo />
      <SliderThree />
      <SliderFour />
      <SliderFive />
      <SliderSix/>
      <SliderSeven/>
      <SliderEight/>
      <SliderNine/>
      <LastPage/>
     
    </SectionScrollerWrapper>
  );
}