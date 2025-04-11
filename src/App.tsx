import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Navbar from "@/components/layout/Navbar";
import PlanYourTrip from "./pages/PlanTrip";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/plan-trip" component={PlanYourTrip} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Router />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
