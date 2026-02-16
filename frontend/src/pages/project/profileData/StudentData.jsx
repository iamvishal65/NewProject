import React from 'react'

const Studentdata = () => {
 const { handleSubmit, loading, goLogin } = useRegister("/api/auth/user/register");
   return (
     <div className="relative">
       <button
         onClick={goLogin}
         className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
       >
         Login
       </button>
 
       <RegisterForm onSubmit={handleSubmit} loading={loading} />
     </div>
   );
}

export default Studentdata
