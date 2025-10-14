'use client'
import HomePageIntroduction from "@/components/HomePageIntroduction"
import LoginForm from "@/components/LoginForm"
import { useUserContext } from "@/utils/contexts"
import { UserContextType } from "@/utils/types"

const Home = () => {
  const {user, setUser} = useUserContext() as UserContextType
 
  return (
    <section className="w-full">
      {user 
      ? <HomePageIntroduction/>
      : <div className="py-4 flex gap-4 flex-col w-full">
          <h2 className="font-header text-2xl text-center">Welcome!</h2>
          <p className="font-body font-light text-lg text-center">It appears you're not logged in,<br/> please use the login form below.</p>
          <LoginForm/>
        </div>
      }
    </section>
  );
}

export default Home