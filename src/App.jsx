
import { ArticlesContainer } from "./components/ArticlesContainer"
import { Header } from "./components/Header"
import { MainArticle } from "./components/MainArticle"
import { NewContainer } from "./components/NewContainer"


function App() {


  return (
    <main className="px-4 pt-6 pb-3">
      <Header/>
      <div className="lg:flex lg:gap-8 md:mb-10">
        <MainArticle/>
        <NewContainer/>
        <ArticlesContainer/>
      </div>
    </main>
  )
}

export default App
