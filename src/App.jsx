import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ApplyDoctor from "./pages/ApplyDoctor";
import EmailPage from "./pages/EmailPage";
import PatientInformation from "./pages/PatientInformation";
import NotificationPage from "./pages/NotificationPage";
import Users from "./pages/admin/Users";
import Doctors from "./pages/admin/Doctors";
import Profile from "./pages/doctor/Profile";
import BookingPage from "./pages/BookingPage";
import Appointments from "./pages/Appointments";
import DoctorAppointments from "./pages/doctor/DoctorAppointments";
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
import Home from './components/Home'
import { useState } from 'react';
import CallerVideo from './components/CallerVideo'
import AnswerVideo from './components/AnswerVideo'
import FilesUpload from './components/FilesUpload'
import HomePayment from './components/HomePayment'
import PaymentAgreement from "./components/PaymentAgreement";
import PaymentSuccess from "./components/PaymentSuccess";
// import NotesBuilder from "./components/NotesBuilder";
function App() {
   //Video Call
  const [ callStatus, updateCallStatus ] = useState({})
  const [ localStream, setLocalStream ] = useState(null)
  const [ remoteStream, setRemoteStream ] = useState(null)
  const [ peerConnection, setPeerConnection ] = useState(null)
  const [ userName, setUserName ] = useState("")
  const [ offerData, setOfferData ] = useState(null)
  const { loading } = useSelector((state) => state.alerts);

 
  
  
  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/apply-doctor"
              element={
                <ProtectedRoute>
                  <ApplyDoctor />
                </ProtectedRoute>
              }
            />
            {/* <Route
              path="/notesPages"
              element={
                <ProtectedRoute>
                  <NotesBuilder />
                </ProtectedRoute>
              }
            /> */}
            <Route
              path="/payment"
              element={
                <ProtectedRoute>
                  <HomePayment/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/payment/agreement"
              element={
                <ProtectedRoute>
                  <PaymentAgreement/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/payment/agreement/success"
              element={
                <ProtectedRoute>
                  <PaymentSuccess/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/FilesUpload"
              element={
                <ProtectedRoute>
                  <FilesUpload />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Home"//video
              element={
                <ProtectedRoute>
                  <Home 
                  callStatus={callStatus} 
                  updateCallStatus={updateCallStatus}
                  localStream={localStream}
                  setLocalStream={setLocalStream}
                  remoteStream={remoteStream}
                  setRemoteStream={setRemoteStream}
                  peerConnection={peerConnection}
                  setPeerConnection={setPeerConnection}
                  userName={userName}
                  setUserName={setUserName}
                  offerData={offerData}
                  setOfferData={setOfferData} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/offer"
              element={
                <ProtectedRoute>
                  <CallerVideo 
                  callStatus={callStatus} 
                  updateCallStatus={updateCallStatus} 
                  localStream={localStream}
                  setLocalStream={setLocalStream}
                  remoteStream={remoteStream}
                  setRemoteStream={setRemoteStream}  
                  peerConnection={peerConnection}
                  userName={userName}
                  setUserName={setUserName}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/answer"
              element={
                <ProtectedRoute>
                  <AnswerVideo 
                  callStatus={callStatus} 
                  updateCallStatus={updateCallStatus} 
                  localStream={localStream}
                  setLocalStream={setLocalStream}
                  remoteStream={remoteStream}
                  setRemoteStream={setRemoteStream}               
                  peerConnection={peerConnection}
                  userName={userName}
                  setUserName={setUserName}
                  offerData={offerData}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Join/Startjoin"
              element={
                <ProtectedRoute>
                  <Join/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/Chat"
              element={
                <ProtectedRoute>
                  <Chat/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/PatientInfo"
              element={
                <ProtectedRoute>
                  <PatientInformation />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute>
                  <Users />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/doctors"
              element={
                <ProtectedRoute>
                  <Doctors />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctor/profile/:id"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctor/book-appointment/:doctorId"
              element={
                <ProtectedRoute>
                  <BookingPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/notification"
              element={
                <ProtectedRoute>
                  <NotificationPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/appointments"
              element={
                <ProtectedRoute>
                  <Appointments />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctor-appointments"
              element={
                <ProtectedRoute>
                  <DoctorAppointments />
                </ProtectedRoute>
              }
            />
            

            <Route
              path="/sendEmail"
              element={
                <ProtectedRoute>
                  <EmailPage/>
                </ProtectedRoute>
              }
            />
            
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;