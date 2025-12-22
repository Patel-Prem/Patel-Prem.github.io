import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./context/ThemeContext"

import SmartSuspenseFallback from "./components/Common/SmartSuspenseFallback";

/* Lazy imports */
const HomePage = lazy(() => import("./pages/HomePage"));
const ComponentPreview = lazy(() => import("./pages/ComponentPreview"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <ThemeProvider>
      {/* <AuthProvider> */}
        <Router>
          <Suspense fallback={<SmartSuspenseFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* <Route path="/preview" element={<ComponentPreview />} /> */}
              {/* <Route path="/admin/login" element={<Login />} /> */}

              {/* <Route path="/admin/dashboard" element={<AdminPage />}> */}
                {/* <Route index element={<Navigate to="projects" replace />} /> */}
                {/* <Route path="projects" element={<ProjectForm />} /> */}
                {/* <Route path="skills" element={<SkillForm />} /> */}
                {/* <Route path="experience" element={<ExperienceForm />} /> */}
                {/* <Route path="education" element={<EducationForm />} /> */}
                {/* <Route path="about" element={<AboutForm />} /> */}
                {/* <Route path="messages" element={<MessagesInbox />} /> */}
              {/* </Route> */}

              <Route path="*" element={<NotFound />} />
            </Routes>

            <ToastContainer
              position="top-right"
              autoClose={3000}
              theme="colored"
            />
          </Suspense>
        </Router>
      {/* </AuthProvider> */}
    </ThemeProvider>
  );
}

export default App;
