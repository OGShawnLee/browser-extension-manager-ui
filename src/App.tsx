import GUIHeader from "./gui/GUIHeader";
import GUIExtensionList from "./gui/GUIExtensionList";

function App() {
  return (
    <main className="p-4 flex flex-col items-center gap-8">
      <GUIHeader />
      <GUIExtensionList />
    </main>
  )
}

export default App
