'use client';

import { useState } from 'react';

export default function DashboardPage() {
  console.log('Dashboard client component');
  const [name, setName] = useState('Peter');

  return (
    <div>
      <h1>Dashhboard</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}!</p>
    </div>
  );
}

// This is a client component
