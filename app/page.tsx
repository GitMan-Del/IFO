import Hero from "./components/Hero";
import Mb_section from "./components/Mb_section";
import IFO_section from "./components/IFO_section";
import ProjectSection from "./components/Projects";
import { createClient } from '@/lib/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Home() { 

  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center font-sans">
      <Hero />
      <Mb_section />
      <IFO_section />
      <ProjectSection />
    </div>
  );
}
