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
import { BrowserRouter } from "react-router-dom";
import Router from "./RouterApp/Router";

import Quotes from "./Quote/Quotes";
import UseFetchHookTest from "./CustomHooks/useFetchTest";
import ScrollToTopAndBottom from "./Scroll/scroll-to-top-and-bottom";
import Progress from "./progress-bar/Progress";
import StarRating from "./Star/index";
import BMICalculator from "./BMI/index";

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
      {/* <One></One> */}
      {/* <Two></Two> */}
      {/* <Three/> */}
      {/* <Four></Four> */}
      {/* <Five></Five> */}
      {/* <Six/> */}
      {/* <Seven></Seven> */}
      {/* <Counter/>8 */}
      {/* 9<Api></Api> */}
      {/* 10 <Todo></Todo> */}
      {/* 11<Bg></Bg> */}

      {/* 13<Weather></Weather> */}
      {/* 14<SearchBar items={items}></SearchBar> */}
      {/* 15 <Page items={items} perPage={2} ></Page> */}
      {/* 16<Pickc></Pickc> */}
      {/* 17<Hamicon></Hamicon> */}
      {/* 18 <Theme></Theme> not completed */}
      {/* 19<CountRedu></CountRedu> */}
      {/* 20<Multistate></Multistate> */}
      {/* 21<Image></Image> */}
      {/* 22<Digiclock></Digiclock> */}
      {/* 23<Tooltip></Tooltip> */}

      {/* 24<BrowserRouter>
        <Router></Router>
      </BrowserRouter> */}

      {/* 25 <Quotes></Quotes> */}
      {/* 26<UseFetchHookTest></UseFetchHookTest> */}
      {/* 27<ScrollToTopAndBottom>27</ScrollToTopAndBottom> */}
      {/* 28<Progress>28</Progress> */}
      {/* 29<StarRating></StarRating> */}
        <BMICalculator></BMICalculator>
    </div>
  );
};

export default App;
