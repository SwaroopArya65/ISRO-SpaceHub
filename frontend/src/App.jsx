import { Menus } from "./utils";
import Logo from "./assets/logo.png";
import DesktopMenu from "./components/DesktopMenu";
import MobMenu from "./components/MobMenu";

function App() {
  return (
    <div>
      <header className="h-16 text-[15px] fixed inset-0 flex-center bg-[#c0c0fb] ">
        <nav className=" px-3.5 flex-center-between w-full max-w-7xl mx-auto">
          <div className="flex-center gap-x-3 z-[999] relative">
            <img src={Logo} alt="" className="size-14" />
            <h3 className="text-lg font-semibold">SpaceHub</h3>
          </div>

          <ul className="gap-x-1 lg:flex-center hidden">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>
          <div className="flex-center gap-x-5">
            <button
              aria-label="sign-in"
              className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center"
            >
              Sign In
            </button>
            <div className="lg:hidden">
              <MobMenu Menus={Menus} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default App;
