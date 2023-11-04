// app/providers.tsx
'use client';

import { NextUIProvider } from '@nextui-org/react';
import { Session } from 'next-auth';
import { SessionProvider, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </SessionProvider>
  );
}
