import { getSession } from 'next-auth/react'
// Imported Models ===============>
import User from "@/models/User";
// Imported Components ============>
import Navbar from '@/components/navbar/Navbar'
import Head from "@/components/home/Head"
import Search from '@/components/search/Search'
import Support from '@/components/support/Support'
import Info from '@/components/info/Info'
import Lounge from '@/components/lounge/Lounge'
import Travel from '@/components/travel/Travel'
import Subscribers from '@/components/subscribers/Subscribers'
import Footer from '@/components/footer/Footer'
export default function Home({ user }: any) {
  return (
    <>
      <Navbar user={user} />
      <Head />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travel />
      <Subscribers />
      <Footer />
    </>
  )
}
export async function getServerSideProps({ req }: any) {
  const session = await getSession({ req });
  const user =await User.findOne({ email: session?.user?.email })


  return {
    props: { user: user?.name || "" }
  }
}
