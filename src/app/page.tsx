// src/app/page.tsx
"use client";

import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">HIK Device Management</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Configure Device</CardTitle>
            <Button className="mt-4">Connect Device</Button>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}
