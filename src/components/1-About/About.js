import React, { Component } from 'react';

export default class About extends Component {


    state = {

        firstName: 'Olivier',
        lastName: 'Krzyzostoniak',
        address: '6 square de la fourrée,62223 Anzin Saint Aubin ·',
        email: 'okrzyzos@outlook.fr',
        bio: ' Sortant d\' une formation de 9 mois à l\'AFPA de Liévin et actuellement diplômé du Titre professionnel Développeur Web et Mobile,je postule pour un emploi en tant que developpeur React JS où je me suis formé en autodidacte ainsi que node js. Un naturel réfléchi et organisé, je suis capable de m\’adapter à un poste de travail et à une équipe assez rapidement.J\’apprends vite et je serais ravi de mettre ces qualités au service de votre entreprise.',
        socials: {
            github: "https://github.com/okrzyzos",
            linkedin: "https://www.linkedin.com/in/olivier-krzyzostoniak/"
        }
    }







    render() {
        return ( < section className = "resume-section p-3 p-lg-5 d-flex align-items-center"
            id = "about" >
            <
            div className = "w-100 " >
            <
            h1 className = "mb-0" > { this.state.firstName } <
            span className = "text-primary" > { this.state.lastName } < /span> <
            /h1>

            <
            div className = "subheading mb-5" > { this.state.address } <
            a href = "mailto:name@email.com" > { this.state.email } < /a> <
            /div> <
            p className = "lead mb-5" > { this.state.bio } < /p>


            <
            div className = "social-icons" >
            <
            a href = { this.state.socials.linkedin }
            target = "_blank" >
            <
            i className = "fab fa-linkedin-in" > < /i> <
            /a> <
            a href = { this.state.socials.github }
            target = "_blank" >
            <
            i className = "fab fa-github" > < /i> <
            /a>

            <
            /div> <
            /div > <
            /section >)
        }
    }