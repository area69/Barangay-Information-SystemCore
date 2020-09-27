document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'interaction', 'dayGrid' ],
    height: 'parent',
    header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth'
    },
    defaultView: 'dayGridMonth',
    defaultDate: '2020-09-15',// can click day/week names to navigate views
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
        {
        title: 'Mr. John Doe',
        start: '2020-09-01',
        },
        {
        title: 'Meeting with Officials',
        start: '2020-09-07',
        end: '2020-09-10'
        },
        {
        groupId: 999,
        title: 'Mr. Jackie Chan',
        start: '2020-09-09T16:00:00'
        },
        {
        groupId: 999,
        title: 'Mr. Jackie Chan',
        start: '2020-09-16T16:00:00'
        },
        {
        title: 'Conference',
        start: '2020-09-11'
        },
        {
        title: 'Meeting',
        start: '2020-09-12T10:30:00',
        end: '2020-09-12T12:30:00'
        },
        {
        title: 'Lunch',
        start: '2020-09-12T12:00:00'
        },
        {
        title: 'Meeting',
        start: '2020-09-12T14:30:00'
        },
        {
        title: 'Happy Hour',
        start: '2020-09-12T17:30:00'
        },
        {
        title: 'Dinner',
        start: '2020-09-12T20:00:00'
        },
        {
        title: 'Mrs. Juana Reyes',
        start: '2020-09-13'
        }
    ]
    });

    calendar.render();
});

document.addEventListener('DOMContentLoaded', function() {
    var calendarList = document.getElementById('calendar-list');

    var calendarL = new FullCalendar.Calendar(calendarList, {
    plugins: [ 'list' ],

    header: {
        left: 'prev,next today',
        center: 'title',
        right: 'listDay,listWeek,dayGridMonth'
    },

    // customize the button names,
    // otherwise they'd all just say "list"
    views: {
        listDay: { buttonText: 'list day' },
        listWeek: { buttonText: 'list week' }
    },

    defaultView: 'listWeek',
    defaultDate: '2020-06-12',
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
        {
        title: 'All Day Event',
        start: '2020-06-01'
        },
        {
        title: 'Long Event',
        start: '2020-06-07',
        end: '2020-06-10'
        },
        {
        groupId: 999,
        title: 'Repeating Event',
        start: '2020-06-09T16:00:00'
        },
        {
        groupId: 999,
        title: 'Repeating Event',
        start: '2020-06-16T16:00:00'
        },
        {
        title: 'Conference',
        start: '2020-06-11',
        end: '2020-06-13'
        },
        {
        title: 'Meeting',
        start: '2020-06-12T10:30:00',
        end: '2020-06-12T12:30:00'
        },
        {
        title: 'Lunch',
        start: '2020-06-12T12:00:00'
        },
        {
        title: 'Meeting',
        start: '2020-06-12T14:30:00'
        },
        {
        title: 'Happy Hour',
        start: '2020-06-12T17:30:00'
        },
        {
        title: 'Dinner',
        start: '2020-06-12T20:00:00'
        },
        {
        title: 'Birthday Party',
        start: '2020-06-13T07:00:00'
        },
        {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2020-06-28'
        }
    ]
    });

    calendarL.render();
});