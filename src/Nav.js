import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(props) {
    return ( <
        div >
        <
        nav className = "navbar navbar-expand-lg navbar-dark bg-primary  fixed-top"
        id = "sideNav" >
        <
        a className = "navbar-brand js-scroll-trigger"
        href = "#page-top" >
        <
        span className = "d-block d-lg-none" > Olivier Krzyzozstoniak < /span> <
        span className = "d-none d-lg-block" >
        <
        img className = "img-fluid img-profile rounded-circle mx-auto mb-2"
        src = { props.olivier }
        alt = "" / >
        <
        /span> <
        /a> {
            /* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button> */
        } <
        div className = "collapse navbar-collapse"
        id = "navbarSupportedContent" >
        <
        ul className = "navbar-nav" >
        <
        li className = "nav-item" >
        <
        Link to = "/"
        className = "nav-link js-scroll-trigger" > About < /Link> <
        /li> <
        li className = "nav-item" >
        <
        Link to = "/experience"
        className = "nav-link js-scroll-trigger" > Experience < /Link>

        <
        /li> <
        li className = "nav-item" >
        <
        Link to = "/education"
        className = "nav-link js-scroll-trigger" > Education < /Link>

        <
        /li>

        <
        /ul> <
        /div> <
        /nav>

        <
        /div>
    )
}