import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { SlideCommonFooter } from "../../components/SlideCommon/SliderCommonFooter";
import { IntroSlide } from "../../Slides/IntroSlide";
import { UserPressFeedback } from "../../components/UserPressFeedback";

const MainPage: React.FC = () => {
  // let { path } = useRouteMatch();

  return (
    <>
      <UserPressFeedback />
      <Switch>
        <Route path="/main/1" exact>
          <IntroSlide />
        </Route>
        <Route>
          <Redirect to="/main/1" />
        </Route>
      </Switch>
      {/* <SlideCommonFooter /> */}
    </>
  );
};

export { MainPage };
