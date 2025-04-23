import React from "react";
import { One } from "./One";
import Two from "./two";
import Three from "./Three";
import Four from "./four";
import Five from "./Five";
import Six from "./Six";
import Seven from "./Seven";
import Counter from "./Counter";
import Api from "./Api";
import Todo from "./todo";
import Bg from "./Bg";
import Weather from "./weather";
import SearchBar from "./SearchBar";
import Page from "./Page";
import Pickc from "./Pickc";
import Hamicon from "./Hamicon";
import Theme from "./Theme";
import CountRedu from "./CountRedu";
import Multistate from "./Multistate";
import Image from "./Image";
import Digiclock from "./Digiclock";
import Tooltip from "./Tooltip/Tooltip";
import { BrowserRouter,Route,Routes} from "react-router-dom";
import Router from "./RouterApp/Router";
import Quotes from "./Quote/Quotes";
import UseFetchHookTest from "./CustomHooks/useFetchTest";
import ScrollToTopAndBottom from "./Scroll/scroll-to-top-and-bottom";
import Progress from "./progress-bar/Progress";
import StarRating from "./Star/index";
import BMICalculator from "./BMI/index";
import Tabs from "./custom-tabs/tabs";
import BrandPage from "./Product-Page/BrandPage";
import FileUpload from "./FileUpload";
import Translator from "./Translator";
import ShoppingCart from "./Shopping/ShoppingCart";
import Home from "./Shopping/Home";
import CounterRedux from "./Redux/CounterRedux";

const App = () => {
  const items = [
    "1",
    "2",
    "3",
    "uvg e uy",
    "ndvhu",
    "uejnhevv",
    "kwtfkdru",
    "dgdkguig",
    "khffj",
  ];

  return (
    <div>
      {/* 1<One></One> */}
      {/* 2<Two></Two> */}
      {/* 3<Three/> */}
      {/* 4<Four></Four> */}
      {/* 5<Five></Five> */}
      {/* 6<Six/> */}
      {/* 7<Seven></Seven> */}
      {/* 8<Counter/>8 */}
      {/* 9<Api></Api> */}
      {/* 10 <Todo></Todo> */}
      {/* 11<Bg></Bg> */}
      {/* 12<Weather></Weather> */}
      {/* 13<SearchBar items={items}></SearchBar> */}
      {/* 14 <Page items={items} perPage={2} ></Page> */}
      {/* 15<Pickc></Pickc> */}
      {/* 16<Hamicon></Hamicon> */}
      {/* 17 <Theme></Theme> not completed */}
      {/* 18<CountRedu></CountRedu> */}
      {/* 19<Multistate></Multistate> */}
      {/* 20<Image></Image> */}
      {/* 21<Digiclock></Digiclock> */}
      {/* 22<Tooltip></Tooltip> */}
      {/* 23<BrowserRouter>
        <Router></Router>
      </BrowserRouter> */}
      {/* 24 <Quotes></Quotes> */}
      {/* 25<UseFetchHookTest></UseFetchHookTest> */}
      {/* 26<ScrollToTopAndBottom></ScrollToTopAndBottom> */}
      {/* 27<Progress></Progress> */}
      {/* 28<StarRating></StarRating> */}
      {/* 29<BMICalculator></BMICalculator> */}
      {/* 30 <Tabs></Tabs> */}
      {/* 31 <BrandPage></BrandPage> */}
      {/* 32<FileUpload></FileUpload> */}
      {/* 33<Translator></Translator> */}
      {/* 34<CounterRedux></CounterRedux> */}

      35<BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cart" element={<ShoppingCart/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
