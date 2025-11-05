


import CMAHero from '@/components/cma/CMAHero';
import CMALearningExperience from '@/components/cma/CMALearningExperience';
import WhyCMA from '@/components/cma/WhyCMA';
import CMASyllabus from '@/components/cma/CMASyllabus';
import CMAGlobalPlacements from '@/components/cma/CMAGlobalPlacements';
import CMAFeesROI from '@/components/cma/CMAFeesROI';
import CMAEligibilityChecker from '@/components/cma/CMAEligibilityChecker';
import CMAImageMarquee from '@/components/cma/CMAImageMarquee';

import CMAFAQ from '@/components/cma/CMAFAQ';
import CMATestimonialVideo from '@/components/cma/CMATestimonialVideo';


export default function Home() {
  return (
    <main>
      <CMAHero />

      <CMAImageMarquee />
      
      <WhyCMA />
     <CMALearningExperience />
   
    
     <CMASyllabus />
    <CMAGlobalPlacements />
     <CMATestimonialVideo />
     <CMAFeesROI />
     <CMAEligibilityChecker />
    
     
   
     <CMAFAQ />
 
    </main>
  );
}
