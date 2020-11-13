import React, { Component } from 'react';


const educations = [{
        school: 'Lycée Condorcet Lens',
        degree: 'Bac STT',
        subject: '',
        gpa: '',
        dates: 'Septembre 1996 - Septembre 1999'
    },
    {
        school: 'AFPA Liévin',
        degree: 'Développeur web/mobile',
        subject: ' Diplômé du Titre professionnel Développeur Web et Mobile',
        gpa: '',
        dates: 'Octobre 2019 - Juillet 2020'
    }
]
const Ed = ({ ed }) => {
        return ( < div class = "resume-item d-flex flex-column flex-md-row justify-content-between mb-5" >
            <
            div class = "resume-content" >
            <
            h3 class = "mb-0" > { ed.school } < /h3> <
            div class = "subheading mb-3" > { ed.degree } < /div> <
            div > { ed.subject } < /div> <
            p > { ed.gpa } < /p> <
            /div> <
            div class = "resume-date text-md-right" >
            <
            span class = "text-primary" > { ed.dates } < /span> <
            /div> <
            /div>)
        }

        export default class Education extends Component {
            render() {
                    return ( < section class = "resume-section p-3 p-lg-5 d-flex align-items-center"
                        id = "education" >
                        <
                        div class = "w-100" > {
                            educations.map(ed => {
                                    return ( < Ed ed = { ed }
                                        />)
                                    })
                            } <
                            /div> <
                            /section>)
                        }
                    }