// App.jsx or inside your route page
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import GlobalNetwork from './pages/GlobalNetwork';
import Certifications from './pages/Certifications';
import CodeOfConduct from './pages/CodeOfConduct';
import Industries from './pages/Industries';
import Products from './pages/Products';
import EventDetailsPage from './pages/event_details';
import PersonalCareCosmetic from './pages/PersonalCareCosmetic';
import FoodAndBeverages from './pages/FoodAndBeverages';
import Pharmaceutical from './pages/Pharmaceutical';
import FlavorAndFragrance from './pages/FlavorAndFragrance';
import AnimalHealthAndNutrition from './pages/AnimalHealthAndNutrition';
import SportNutrition from './pages/SportNutrition';
import CareerDetailPage from './pages/CareerDetailPage';


import Industrial from './pages/Industrial';
import Manufacturing from './pages/Manufacturing';
import Services from './pages/Services';
import Partners from './pages/Partners';
import Careers from './pages/Careers';
import Events from './pages/Events';

import Samples from './pages/Samples';
import QualityControl from './pages/QualityControl';
import RegulatoryAffairs from './pages/RegulatoryAffairs';
import QualityCare from './pages/QualityCare';

import News from './pages/News';
import SourcingPartner from './pages/SourcingPartner';
import CustomerFocused from './pages/CustomerFocused';
import CustomRD from './pages/CustomRD';
import GlobalSourcing from './pages/GlobalSourcing';
import AnalyticalLab from './pages/AnalyticalLab';
import CustomerService from './pages/CustomerService';
import CorporateHeadquartersFacility from './pages/CorporateHeadquartersFacility';


import ProductSearchResults from './pages/ProductSearchResults';

import QuoteRequest from './pages/QuoteRequest';
import TechnicalSupportDocumentation from './pages/TechnicalSupportDocumentation';
import ProductDetail from './components/ProductDetail';

import Contact from './pages/Contact';
import OurTeam from './pages/OurTeam';

function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/global-network" element={<GlobalNetwork />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/product-search" element={<ProductSearchResults />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:id" element={<EventDetailsPage />} />
          <Route path="/news" element={<News />} />
          <Route path="/samples" element={<Samples />} />
          <Route path="/quote-request" element={<QuoteRequest />} />
          <Route path="/sourcing-partner" element={<SourcingPartner />} />
          <Route path="/customer-focused" element={<CustomerFocused />} />
          <Route path="/custom-rd" element={<CustomRD />} />
          <Route path="/global-sourcing" element={<GlobalSourcing />} />
          <Route path="/analytical-lab" element={<AnalyticalLab />} />
          <Route path="/customer-service" element={<CustomerService />} />
          <Route path="/corporate-headquarters-facility" element={<CorporateHeadquartersFacility />} />


          <Route path="/quality-care" element={<QualityCare />} />
          <Route path="/quality-care/technical-support-documentation/" element={<TechnicalSupportDocumentation />} />
          <Route path="/quality-care/quality-control" element={<QualityControl />} />
          <Route path="/quality-care/regulatory-affairs" element={<RegulatoryAffairs />} />

          <Route path="/industries/personal-care-cosmetic" element={<PersonalCareCosmetic />} />
          <Route path="/industries/food-and-beverages" element={<FoodAndBeverages />} />
          <Route path="/industries/pharmaceutical" element={<Pharmaceutical />} />
          <Route path="/industries/flavor-and-fragrance" element={<FlavorAndFragrance />} />
          <Route path="/industries/animal-health-nutrition" element={<AnimalHealthAndNutrition />} />
          <Route path="/industries/sport-nutrition" element={<SportNutrition />} />
          <Route path="/industries/industrial" element={<Industrial />} />

          <Route path="/careers/:slug" element={<CareerDetailPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our-team" element={<OurTeam />} />
        </Routes>
     
    </Router>
  );
}

export default App;
