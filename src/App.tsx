import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import About from "./pages/About";
import Rules from "./pages/Rules";
import Fees from "./pages/Fees";
import StudentLogin from "./pages/auth/StudentLogin";
import ADLogin from "./pages/auth/ADLogin";
import OfficeLogin from "./pages/auth/OfficeLogin";
import StudentDashboard from "./pages/dashboards/StudentDashboard";
import StudentProfile from "./pages/student/StudentProfile";
import StudentNotices from "./pages/student/StudentNotices";
import LeaveApplication from "./pages/student/LeaveApplication";
import LeaveStatus from "./pages/student/LeaveStatus";
import PaymentPortal from "./pages/student/PaymentPortal";
import ADDashboard from "./pages/dashboards/ADDashboard";
import StudentsManagement from "./pages/ad/StudentsManagement";
import LeaveApprovals from "./pages/ad/LeaveApprovals";
import PostNotices from "./pages/ad/PostNotices";
import OfficeDashboard from "./pages/dashboards/OfficeDashboard";
import ProfileManagement from "./pages/office/ProfileManagement";
import PaymentTracking from "./pages/office/PaymentTracking";
import NoticesManagement from "./pages/office/NoticesManagement";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/fees" element={<Fees />} />
            
            {/* Auth Routes */}
            <Route path="/student/login" element={<StudentLogin />} />
            <Route path="/ad/login" element={<ADLogin />} />
            <Route path="/office/login" element={<OfficeLogin />} />
            
            {/* Student Protected Routes */}
            <Route path="/student/dashboard" element={
              <ProtectedRoute allowedRoles={['student']}>
                <StudentDashboard />
              </ProtectedRoute>
            } />
            <Route path="/student/profile" element={
              <ProtectedRoute allowedRoles={['student']}>
                <StudentProfile />
              </ProtectedRoute>
            } />
            <Route path="/student/notices" element={
              <ProtectedRoute allowedRoles={['student']}>
                <StudentNotices />
              </ProtectedRoute>
            } />
            <Route path="/student/leave-application" element={
              <ProtectedRoute allowedRoles={['student']}>
                <LeaveApplication />
              </ProtectedRoute>
            } />
            <Route path="/student/leave-status" element={
              <ProtectedRoute allowedRoles={['student']}>
                <LeaveStatus />
              </ProtectedRoute>
            } />
            <Route path="/student/payment" element={
              <ProtectedRoute allowedRoles={['student']}>
                <PaymentPortal />
              </ProtectedRoute>
            } />
            
            {/* AD Protected Routes */}
            <Route path="/ad/dashboard" element={
              <ProtectedRoute allowedRoles={['ad']}>
                <ADDashboard />
              </ProtectedRoute>
            } />
            <Route path="/ad/students" element={
              <ProtectedRoute allowedRoles={['ad']}>
                <StudentsManagement />
              </ProtectedRoute>
            } />
            <Route path="/ad/leave-approvals" element={
              <ProtectedRoute allowedRoles={['ad']}>
                <LeaveApprovals />
              </ProtectedRoute>
            } />
            <Route path="/ad/post-notices" element={
              <ProtectedRoute allowedRoles={['ad']}>
                <PostNotices />
              </ProtectedRoute>
            } />
            
            {/* Office Protected Routes */}
            <Route path="/office/dashboard" element={
              <ProtectedRoute allowedRoles={['office']}>
                <OfficeDashboard />
              </ProtectedRoute>
            } />
            <Route path="/office/profiles" element={
              <ProtectedRoute allowedRoles={['office']}>
                <ProfileManagement />
              </ProtectedRoute>
            } />
            <Route path="/office/payments" element={
              <ProtectedRoute allowedRoles={['office']}>
                <PaymentTracking />
              </ProtectedRoute>
            } />
            <Route path="/office/notices" element={
              <ProtectedRoute allowedRoles={['office']}>
                <NoticesManagement />
              </ProtectedRoute>
            } />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
