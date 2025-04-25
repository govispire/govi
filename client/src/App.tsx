import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import BrandVisualIdentity from "@/pages/BrandVisualIdentity";
import StrategicBrandContent from "@/pages/StrategicBrandContent";
import CustomizedServices from "@/pages/CustomizedServices";
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
      <Router />
      <Toaster />
    </>
  );
}

export default App;
