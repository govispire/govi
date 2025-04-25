import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import PageTransition from "@/components/PageTransition";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import BrandVisualIdentity from "@/pages/BrandVisualIdentity";
import StrategicBrandContent from "@/pages/StrategicBrandContent";
import CustomizedServices from "@/pages/CustomizedServices";
import CreativeVideoSolution from "@/pages/CreativeVideoSolution";
import CommercialPhotography from "@/pages/CommercialPhotography";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      {/* Main route */}
      <Route path="/" component={Home} />
      
      {/* Service pages */}
      <Route path="/brand-visual-identity" component={BrandVisualIdentity} />
      <Route path="/strategic-brand-content" component={StrategicBrandContent} />
      <Route path="/customized-services" component={CustomizedServices} />
      <Route path="/creative-video-solution" component={CreativeVideoSolution} />
      <Route path="/commercial-photography" component={CommercialPhotography} />
      
      {/* Contact page */}
      <Route path="/contact" component={Contact} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <>
      <ScrollProgressBar />
      <PageTransition>
        <Router />
      </PageTransition>
      <Toaster />
    </>
  );
}

export default App;
