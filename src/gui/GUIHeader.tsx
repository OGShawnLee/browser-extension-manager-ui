import IconMoon from "../assets/icon-moon.svg";

export default function GUIHeader() {
  return (
    <header className="w-full h-16 mx-auto rounded-xl shadow-md overflow-hidden">
      <div className="h-16 px-4 bg-white">
        <div className="h-full flex items-center justify-between gap-2">
          <h1 className="text-xl text-neutral-900 font-black">Extensions</h1>
          <button className="w-12 h-12 aspect-square flex items-center justify-center bg-neutral-100 rounded-2xl">
            <img src={IconMoon} alt="" />
          </button>
        </div>
      </div>
    </header>
  )
}