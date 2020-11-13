import React, { Component } from 'react';


const Exp = ({ exp }) => {
    return ( <
        div class = "resume-item d-flex flex-column flex-md-row justify-content-between mb-5" >
        <
        div class = "resume-content" >
        <
        h3 class = "mb-0" > { exp.title } < /h3> <
        div class = "subheading mb-3" > { exp.heading } < /div> <
        p > { exp.description } < /p> <
        /div> <
        div class = "resume-date text-md-right" >
        <
        span class = "text-primary" > { exp.dates } < /span> <
        /div> <
        /div>
    )
}

const experiences = [{
        title: 'Développeur stagiaire',
        heading: 'Iris informatique',
        description: 'Stage en entreprise sur le développement d\'applications avec Laravel',
        dates: 'Mai 2020 - Juillet 2020'
    },
    {
        title: 'Commercial',
        heading: 'Intersport Arras',
        description: 'Suivi clientèle , relance des contrats , prise de commandes et livraisons',
        dates: ' Septembre 2017 - Septembre 2018'
    },
    {
        title: 'Secrétaire Médical',
        heading: 'Filieris Liévin',
        description: '',
        dates: ' Février 2016 - Février 2017'
    },
    {
        title: 'Conseil immobilier',
        heading: 'Safti Arras',
        description: 'Prospection physiques et téléphoniques, visites , estimation des biens , rédiger des mandats de ventes',
        dates: 'Janvier 2015 - Janvier 2016'
    },
    {
        title: 'Chauffeur accompagnateur',
        heading: 'Mairie Le Touquet',
        description: 'Transport et accompagnement de personnes âgées',
        dates: 'Juin 2007 - Juin 2014'
    },
    {
        title: 'Commercial',
        heading: 'Hausbrandt Café',
        description: 'Suivi d ´une clientèle , relance des contrats , prise de commandes et livraisons .',
        dates: 'Mai 2005 -  Mai 2007'
    },
    {
        title: 'Vendeur',
        heading: 'Superdry Le Touquet',
        description: 'Suivi des stocks, réception des commandes , mise en rayon , accueil et conseils clients ',
        dates: 'Octobre 2004 - Octobre 2005'
    }
]

export default class Experience extends Component {
    render() {
        return ( <
            section class = "resume-section p-3 p-lg-5 d-flex justify-content-center"
            id = "experience" >
            <
            div class = "w-100 h-100" > {
                experiences.map(exp => {
                        return ( < Exp exp = { exp }
                            />)
                        })
                } <
                /div> <
                /section>
            )
        }
    }