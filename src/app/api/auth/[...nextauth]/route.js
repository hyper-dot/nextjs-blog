import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        '483913172031-1i0f07c7n1hi37mbiic2ubgimm2vvu01.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
