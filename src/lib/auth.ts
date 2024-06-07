import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

const authOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  secret: process.env.SECRET_KEY || 'SeCr3T',
  callbacks: {
    jwt: async ({ token, user }: any) => {
      if (user) {
        token.id = user.id;
        token.token = user.token || 'undefined';
        token.displayName = user.displayName || 'undefined';
      }
      return token;
    },
    session: async ({ session, token }: any) => {
      if (session?.user) {
        session.user.id = token.id;
        session.user.displayName = token.displayName;
      }
      return session;
    },
  },
  pages: {
    signIn: '/sign-in',
  },
};

export default authOptions;
