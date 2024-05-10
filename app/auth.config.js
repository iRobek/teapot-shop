
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request }) {

        const isLoggedIn = auth?.user; //using session check if user is logged in
        const isOnDashboard = request.nextUrl.pathname.startsWith('/dashboard');
       
        console.log(isLoggedIn);
        console.log(isOnDashboard);

        if(isOnDashboard){
          if(isLoggedIn) return true;
          return false;
        } else if (isLoggedIn){
          return Response.redirect(new URL("/dashboard", request.nextUrl));
        }
        return false;
    },
  },
  providers: [],
} ;