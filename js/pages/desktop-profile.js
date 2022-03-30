const intro = introJs();

intro.setOptions({
    steps: [
        {
            intro: 'Welcome to the profile page... Lets take a tour'
        },
        {
            element: '#recentsales',
            intro: 'Table below shows a list of recent purchases made'
        },
        {
            element: '#notificationz',
            intro: 'Below are general notifications'
        },
        {
            element: '#faqz',
            intro: 'Below are questions many people ask about Darknet'
        },
        {
            element: '#questionz',
            intro: 'Here you can ask a question you have about the site'
        }
    ]
})

intro.start()




