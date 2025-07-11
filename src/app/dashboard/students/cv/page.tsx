"use client";

import CVDetails from '@/components/(student)/cv/CVDetails'
import ProfileSection from '@/components/(student)/cv/ProfileSection'
import SectionHeader from '@/components/SectionHeader'
import React, { useState } from 'react'

export default function CV() {
  const [activeTab, setActiveTab] = useState<string>('Education');

  return (
    <div className='p-6 space-y-6'>
        <SectionHeader title='My CV' description='Build and manage your professional resume' leftContent='download' />

        <ProfileSection />

        <CVDetails activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}
