<<<<<<< HEAD
// Central menu configuration
export const categories = [
  {
    id: 'bookings',
    label: 'Bookings',
    hasDropdown: true,
    submenu: [
      { id: 'manage-bookings', label: 'Manage Bookings', component: 'Bookings/ManageBookings' }
    ]
  },
=======
// Central menu configuration - Payroll Only
export const categories = [
>>>>>>> 39ddfd30c65d48ebdd81a6130b5b729a08b92ed2
  { 
    id: 'payroll', 
    label: 'Payroll', 
    component: 'Payroll'
  }
]