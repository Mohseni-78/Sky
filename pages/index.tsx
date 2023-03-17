import Navbar from '@/components/navbar/Nabar'
import Head from "@/components/home/Head"
import Search from '@/components/search/Search'
import Support from '@/components/support/Support'
import Info from '@/components/info/Info'
export default function Home() {
  return (
    <>
      <Navbar/>
      <Head/>
      <Search/>
      <Support/>
      <Info/>
    </>
  )
}
