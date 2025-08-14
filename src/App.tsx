import GUIHeader from "./gui/GUIHeader";
import GUIExtensionList from "./gui/GUIExtensionList";

function App() {
  return (
    <main className="max-w-6xl mx-auto p-4 flex flex-col items-center gap-8">
      <GUIHeader />
      <GUIExtensionList />
      <GUIAttribution />
    </main>
  )
}

function GUIAttribution() {
  return (
    <footer>
      <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
        Made with ❤️ by {" "}
        <a className="font-bold text-neutral-900 dark:text-white" href="https://frontendmentor.io/profile/OGShawnLee" target="_blank">
          Shawn Lee
        </a>
      </p>
    </footer>
  );
}

export default App
