import { AdminPanel } from '@/pages/Admin'
import { Route, Routes } from 'react-router-dom'
import { Announcements } from '../../pages/Announcements/Announcements'
import { Areas } from '../../pages/Areas'
import { AuthLayout } from '../../pages/Layout/AuthLayout'
import { DefaultLayout } from '../../pages/Layout/DefaultLayout'
import { MeetingProgram } from '../../pages/MeetingProgram'
import { MeetingService } from '../../pages/MeetingService'
import { MinistryMeeting } from '../../pages/MinistryMeeting'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<AuthLayout />}>
      </Route>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<MeetingProgram />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="meeting-service" element={<MeetingService />} />
        <Route path="areas" element={<Areas />} />
        <Route path="announcements" element={<Announcements />} />
        <Route path="ministry-meeting" element={<MinistryMeeting />} />
      </Route>
    </Routes>
  )
}

export default App
