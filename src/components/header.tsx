import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import { Cointener } from "./container";
import { LogoContainer } from "./logo-container";
import { NavigationRoutes } from "./navigation-routes";
import { NavLink } from "react-router-dom";
import { ProfileContainer } from "./profile-container";
import { ToggleContainer } from "./toggle-container";
const Header = () => {
  const { userId } = useAuth(); // Fixed `useAuth` usage

  return (
   <header 
      className={cn("w-full border-b duration-150 transition-all ease-in-out")}
    >
     <Cointener>
        <div className="flex items-center gap-4 w-full">
          {/* Logo Section */}
          <LogoContainer />

          {/* Navigation Section */}
          <nav className="hidden md:flex items-center gap-3">
            <NavigationRoutes />
            {userId && (
              <NavLink
                to={"/generate"}
                className={({ isActive }) =>
                  cn(
                    "text-base text-neutral-600",
                    isActive && "text-neutral-900 font-semibold"
                  )
                }
              >
                Take An Interview
              </NavLink>
            )}
          </nav>

          <div className="ml-auto flex-items-center gap-6">
             {/* profile section*/}
             <ProfileContainer />

             {/*mobile toggle section*/}
             <ToggleContainer />
          </div>
        </div>
      </Cointener>
    </header>
  );
};

export default Header;
