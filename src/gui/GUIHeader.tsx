import { GUIButtonTheme } from "./GUIButtonTheme";
import IconLogo from "../assets/logo.svg";

export default function GUIHeader() {
  return (
    <header className="w-full h-16 mx-auto rounded-xl shadow-md overflow-hidden">
      <div className="h-16 px-4 bg-white dark:bg-neutral-800">
        <div className="h-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img className="text-white" src={IconLogo} alt="" />
            <h1 className="sr-only">Extensions</h1>
          </div>
          <GUIButtonTheme />
        </div>
      </div>
    </header>
  )
}