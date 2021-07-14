import React from 'react';

function Header(props) {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">TASK SCHEDULER</a>
                <div className="justify-content-end">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex m-3">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav">
                            <li className="nav-item m-lg-3">
                                <a className="nav-link active" aria-current="page" href="#">
                                    <span className="fa fa-money-check"></span> Support
                                </a>
                            </li>
                            <li className="nav-item dropdown m-lg-3">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="fa fa-network-wired"></span> Projects
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Project1</a></li>
                                    <li><a className="dropdown-item" href="#">Project2</a></li>
                                    <li><a className="dropdown-item" href="#">Project3</a></li>
                                </ul>
                            </li>
                            <li className="nav-item m-lg-3">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
                                    <span className="fa fa-share-alt"></span> Share
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;