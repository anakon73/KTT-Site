import { Route, Routes } from 'react-router-dom'
import { AuthLayout } from '../../pages/Layouts/AuthLayout'
import { DefaultLayout } from '../../pages/Layouts/DefaultLayout'
import { MeetingProgram } from '../../pages/MeetingProgram'
import { MinistryMeeting } from '../../pages/MinistryMeeting'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<AuthLayout />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<MeetingProgram />} />
        <Route path="ministry-meeting" element={<MinistryMeeting />} />
      </Route>
    </Routes>
  )
}

export default App
