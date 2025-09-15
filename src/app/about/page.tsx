import { cookies } from 'next/headers';

export default async function AboutPage() {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme');
  console.log(theme);
  console.log('About server component');
  return <h1>About page {new Date().toLocaleTimeString()}</h1>;
}

// This is a server component

// RSC + Next.js

// Every component in a Next.js app defaults to being a server component

// Pros: Running components on the server brings several advantages: zero-bundle size, direct access to server-side resources, improved security, and better SEO

// Cons: Server components can't interact with browser APIs or handle user interactions
