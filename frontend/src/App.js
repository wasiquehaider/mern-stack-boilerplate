import { Routes, Route } from 'react-router-dom'
import RequireAuth from './components/RequireAuth'
import ForgotPassword from './screens/auth/ForgotPassword'
import Home from './screens/auth/Home'
import Login from './screens/auth/Login'
import NotFound from './screens/auth/NotFound'
import ResetPassword from './screens/auth/ResetPassword'
// import Profile from './screens/account/Profile'
import UserProfile from './screens/account/UserProfile'
import RequestDocument from './screens/account/RequestDocument'
import ClientPermissions from './screens/admin/auth/ClientPermissions'
import Permissions from './screens/admin/auth/Permissions'
import Roles from './screens/admin/auth/Roles'
import UserRoles from './screens/admin/auth/UserRoles'
import UserProfiles from './screens/admin/auth/UserProfiles'
import Users from './screens/admin/auth/Users'
import { Layout } from './components'
import StaffDirectory from './screens/account/StaffDirectory'
import MyAcademics from './screens/account/MyAcademics'
import LibraryServices from './screens/account/LibraryServices'
import AdminPanel from './screens/admin/auth/AdminPanel'

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/forgot-password' element={<ForgotPassword />} />
          <Route
            path='/auth/reset-password/:restToken'
            element={<ResetPassword />}
          />

          <Route element={<RequireAuth />}>
            <Route path='/' element={<Home />} />
            <Route path='/account/profile' element={<UserProfile />} />
            {/* <Route path='/account/userprofile' element={<UserProfile />} /> */}
            <Route path='/account/requestdocument' element={<RequestDocument />} />
            <Route path='/account/academics' element={<MyAcademics />} />
            <Route path='/account/staffdirectory' element={<StaffDirectory />} />
            <Route path='/account/library' element={<LibraryServices />} />
            <Route path='/admin/admin-panel' element={<AdminPanel />} />
            <Route
              path='/admin/auth/client-permissions'
              element={<ClientPermissions />}
            />
            <Route path='/admin/auth/permissions' element={<Permissions />} />
            <Route path='/admin/auth/roles' element={<Roles />} />
            <Route path='/admin/auth/user-roles' element={<UserRoles />} />
            <Route
              path='/admin/auth/user-profiles'
              element={<UserProfiles />}
            />
            <Route path='/admin/auth/users' element={<Users />} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
