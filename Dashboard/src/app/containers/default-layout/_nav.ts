import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    name: 'Reports',
    title: true
  },
  {
    name: 'Appointments',
    url: '/appointments',
    iconComponent: { name: 'cil-chart-pie' },
    children: [
      {
        name: 'All Appointments',
        url: '/appointments/all'
      },
      {
        name: 'Daily Appointments',
        url: '/appointments/daily'
      },
      {
        name: 'Range Appointments',
        url: '/appointments/range'
      },
      {
        name: 'Doctor Appointments',
        url: '/appointments/doctor'
      },
      {
        name: 'Patient Appointments',
        url: '/appointments/patient'
      }
    ]
  },
  {
    name: 'Invoices',
    url: '/invoices',
    iconComponent: { name: 'cil-chart-pie' },
    children: [
      {
        name: 'All Invoices',
        url: '/invoices/all'
      },
      {
        name: 'Daily Invoices',
        url: '/invoices/daily'
      },
    ]
  },
  {
    title: true,
    name: 'Manage'
  },
  {
    name: 'Clinic',
    url: '/clinic',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Clinics List',
        url: '/clinic'
      },
      {
        name: 'Add Clinic',
        url: '/clinic/add'
      },
    ]
  },
  {
    name: 'Doctor',
    url: '/doctor',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Doctors List',
        url: '/doctor'
      },
      {
        name: 'Add Doctor',
        url: '/doctor/add'
      },
    ]
  },
  {
    name: 'Patient',
    url: '/patient',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Patients List',
        url: '/patient'
      },
      {
        name: 'Add Patient',
        url: '/patient/add'
      },
    ]
  },
  {
    name: 'Employee',
    url: '/employee',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Employee List',
        url: '/employee'
      },
      {
        name: 'Add Employee',
        url: '/employee/add'
      },
    ]
  },
];
