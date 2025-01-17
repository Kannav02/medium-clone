import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup.tsx'
import { Signin } from './pages/Signin.tsx'
import { Blog } from './pages/Blog.tsx'
import { Blogs } from './pages/Blogs.tsx'
import { RecoilRoot } from 'recoil'
import { CreateBlog } from './pages/CreateBlog.tsx'

function App() {

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/createBlog" element={<CreateBlog/>}/>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App