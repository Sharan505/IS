import SignUp from './Signup'
import Login from './Login'
import './App.css'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const location = useLocation();


  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
            path="/login"
            element={
              <PageWrapper>
                <Login />
              </PageWrapper>
            }
          />
          <Route
            path="/signup"
            element={
              <PageWrapper>
                <SignUp />
              </PageWrapper>
            }
          />
          <Route
            path="/success"
            element={
              <PageWrapper>
                <>
                  <h1>Login Successful!</h1>
                </>
              </PageWrapper>
            }
          />
      </Routes>
    </>
  )
}
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} // Fixed this from 1 to 0 for the exit animation
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export default App
