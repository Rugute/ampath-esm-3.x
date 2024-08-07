import React from 'react';
import {
  ChartColumn,
  DocumentAdd,
  Events,
  Home,
  Medication,
  Receipt,
  Renew,
  User,
  VolumeFileStorage,
  Report,
  InventoryManagement,
  HospitalBed,
} from '@carbon/react/icons';
const openmrsSpaBase = window['getOpenmrsSpaBase']();

const handleClearCache = async () => {
  document.cookie.split(';').forEach((c) => {
    document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
  });
  localStorage.clear();
  sessionStorage.clear();
  window.location.reload();
};

export const moduleLinks = [
  {
    label: 'System Info',
    url: `${openmrsSpaBase}about`,
    icon: <VolumeFileStorage size={24} />,
  },
  {
    label: 'AMRS POC Home',
    url: `https://ngx.ampath.or.ke/ng2-amrs/#/patient-dashboard/patient-search`,
    icon: <Home size={24} />,
  },
  {
    label: 'Facility Dashboard ',
    url: `https://spot.ampath.or.ke`,
    icon: <ChartColumn size={24} />,
  },
  {
    label: 'Clear Cache',
    icon: <Renew size={24} />,
    onClick: handleClearCache,
  },
  {
    label: 'Form Builder ',
    url: `${openmrsSpaBase}form-builder`,
    icon: <DocumentAdd size={24} />,
  },
  {
    label: 'Legacy Admin ',
    url: `/amrs/index.htm`,
    icon: <User size={24} />,
  },
  {
    label: 'Manage Stocks ',
    url: `${openmrsSpaBase}stock-management`,
    icon: <Report size={24} />,
  },
  {
    label: 'Billing ',
    url: `${openmrsSpaBase}home/billing`,
    icon: <Receipt size={24} />,
  },
  {
    label: 'Cohort Builder ',
    url: `${openmrsSpaBase}cohort-builder`,
    icon: <Events size={24} />,
  },
  {
    label: 'Dispensing App',
    url: `${openmrsSpaBase}dispensing`,
    icon: <Medication size={24} />,
  },
  {
    label: 'Billable Services',
    url: `${openmrsSpaBase}billable-services`,
    icon: <InventoryManagement size={24} />,
    requiresAdmin: true,
  },
  {
    label: 'Bed Management',
    url: `${openmrsSpaBase}bed-management`,
    icon: <HospitalBed size={24} />,
    requiresAdmin: true,
  },
  {
    label: 'Providers',
    url: `${openmrsSpaBase}home/providers`,
    icon: <Events size={24} />,
    requiresAdmin: true,
  },
];
