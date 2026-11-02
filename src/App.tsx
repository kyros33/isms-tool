import { NavLink, Route, Routes } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage";
import { DocumentsPage } from "./pages/DocumentsPage";
import { RisksPage } from "./pages/RisksPage";
import { KpisPage } from "./pages/KpisPage";

const navigation = [["/", "Dashboard"], ["/documents", "Dokumente"], ["/risks", "Risiken"], ["/kpis", "KPI"]];
export function App() {
  return <div className="shell"><aside><div className="brand"><span>ISMS</span><strong>ISMS Platform</strong></div><nav>{navigation.map(([to,label]) => <NavLink key={to} to={to} end={to === "/"}>{label}</NavLink>)}</nav></aside><main><Routes><Route path="/" element={<DashboardPage/>}/><Route path="/documents" element={<DocumentsPage/>}/><Route path="/risks" element={<RisksPage/>}/><Route path="/kpis" element={<KpisPage/>}/></Routes></main></div>;
}
