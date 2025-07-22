"use client";

import CourseEarningTable from '@/components/(bInstructor-cAdmin)/financial/CourseEarningTable';
import FinancialOrdersTable from '@/components/(bInstructor-cAdmin)/financial/FinancialOrdersTable';
import FinancialPayoutsTable from '@/components/(bInstructor-cAdmin)/financial/FinancialPayoutsTable';
import FinancialStates from '@/components/(bInstructor-cAdmin)/financial/FinancialStates';
import SectionHeader from '@/components/SectionHeader'
import Tabs from '@/components/Tabs'
import React, { useState } from 'react'

const tabs: string[] = [
    'Course Earnings',
    'Orders',
    'Payouts',
];

export default function Financial() {
    const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  return (
    <div className="p-6 space-y-6">
        {/* Section Header */}
        <SectionHeader title='Financial' description='Manage your earnings, orders, and payouts' leftContent='null' />

        {/* Tabs */}
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* States */}
        <FinancialStates />

        {/* Course Earning Table */}
        {activeTab === tabs[0] && <CourseEarningTable />}
        {activeTab === tabs[1] && <FinancialOrdersTable />}

        {activeTab === tabs[2] && <FinancialPayoutsTable />}
    </div>
  )
}
