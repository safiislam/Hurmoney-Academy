export const navpreData = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/allClass',
        title: 'All Class'
    },
    {
        path: '/instructor',
        title: 'All instructor'
    },
    {
        path: `/dashbord/${userData?.role === 'admin' ? "menageClass" : userData?.role === 'instructor' ? 'addClass' : 'myBooking'}`,
        title: 'Dasbord'
    },
]
