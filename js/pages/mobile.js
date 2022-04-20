const intro = introJs();

intro.setOptions({
    steps: [
        {
            intro: 'Welcome to Darknet... Lets take a tour'
        },
        {
            element: '.feature-box-04',
            intro: 'This is a bank log available on our servers'
        },
        {
            element: '.medium',
            intro: 'Click here to buy your first bank log'
        },
        {
            element: '.dropdown-toggle',
            intro: 'Click here to view bank logs in cart'
        },
        {
            element: '#jinaHolder',
            intro: 'This is your display name'
        },
        {
            element: '.navbar-toggler',
            intro: 'This is the menu, scroll down to view different pages'
        },
        {
            element: '#logo',
            intro: 'Click here to visit the home page'
        },
        {
            element: '#banklinks',
            intro: 'These are other banks available on darknet',
        },
        {
            element: '#tutorialz',
            intro: 'These are cashout method guides'
        },
        {
            element: '.scroll-to-top',
            intro: 'Use this button to scroll back to the top'
        },
        {
            element: '#theswitch',
            intro: 'Use this button to change theme color'
        }
    ]
})

intro.start()




