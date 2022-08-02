import './style/index.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/common/Footer';
import Header from './components/common/Header'
import Entertainment from './components/Videos/Entertainment';
import Network from './components/Network';
import News from './components/News/News';
import CreativeCompound from './components/CreativeCompound';
import Home from './components/Home/Home';
import Articles from './components/News/Articles'
import Videos from './components/Videos/Videos';
import Videos2 from './components/Videos/Videos2';
import CategoriesVideos from './components/Videos/CategoriesVideos';
import YTcategoriesVideos from './components/Videos/YTcategoriesVideos';
import Youtube from './Youtube'
import VimeoShow from './components/VimeoShow';
import VimeoRecaps from './components/VimeoRecaps';
import VimeoVideoList from './components/Videos/VimeoVideoList';
import PlayVimeoVideo from './components/Videos/PlayVimeoVideo';

function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recaps" component={VimeoRecaps} />
        <Route exact path="/news" component={News} />
        <Route exact path="/news/tags/:tag_slug" component={News} />
        <Route exact path="/news/category/:category_slug" component={News} />
        <Route exact path="/moreentertainment" component={Youtube} />
        <Route exact path="/shows" component={VimeoShow} />
        <Route exact path="/network" component={Network} />
        <Route exact path="/creative" component={CreativeCompound} />
        <Route exact path="/article" component={Articles} />
        <Route exact path="/news/:slug" component={Articles} />
        <Route exact path="/video" component={Videos} />
        <Route exact path="/morevids/:category_slug" component={CategoriesVideos} />
        <Route exact path="/YTmorevids/:category_slug" component={YTcategoriesVideos} />
        <Route exact path="/video/:slug" component={Videos} />
        <Route exact path="/YTvideo/:slug" component={Videos2} />
        <Route exact path="/videos/:slug" component={VimeoVideoList} />
        <Route exact path="/playvideo/:slug" component={PlayVimeoVideo} />
        <Route component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
