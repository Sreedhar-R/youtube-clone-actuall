import React from 'react';
import Scroll from './Scroll';

const Sidebar = () => {
    return (

        <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: "280px"}} >
            <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <a href="#" class="nav-link link-dark" aria-current="page">
                <img class="bi me-4" width="16" height="16" src="https://image.flaticon.com/icons/png/512/20/20176.png"/>
                Home
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-dark">
                <i class="fas fa-compass bi me-4" width="16" height="16"></i>
                Explore
                </a>
            </li>
            
            <li>
                <a href="#" class="nav-link link-dark">
                <img class="bi me-4" width="19" height="16" src="https://image.flaticon.com/icons/png/512/2111/2111795.png"/>
                Subscriptions
                </a>
            </li>
            <hr/>
            <li>
                <a href="#" class="nav-link link-dark">
                <img class="bi me-4" width="16" height="16" src="https://image.flaticon.com/icons/png/128/656/656444.png"/>
                Library
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-dark">
                <img class="bi me-4" width="16" height="16" src="https://image.flaticon.com/icons/png/128/2089/2089679.png"/>
                History
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-dark">
                <img class="bi me-4" width="16" height="16" src="https://image.flaticon.com/icons/png/128/2991/2991195.png"/>
                Your videos
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-dark">
                <img class="bi me-4" width="16" height="16" src="https://image.flaticon.com/icons/png/128/1827/1827379.png"/>
                Watch later
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-dark">
                <img class="bi me-4" width="16" height="16" src="https://image.flaticon.com/icons/png/128/633/633991.png"/>
                Liked videos
                </a>
            </li>
            </ul>

            <hr/>

            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
                <span class="fs-6">SUBSCRIPTIONS</span>
            </a>
            <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <a href="#" class="nav-link link-dark">
                <img src="https://static.wixstatic.com/media/576f44_5e9ea38a9c60410c8a4938510ca4b7f1~mv2.png/v1/fill/w_211,h_211,al_c/576f44_5e9ea38a9c60410c8a4938510ca4b7f1~mv2.png" alt="mdo"  width="22.5" height="22.5" className=" bi me-3 rounded-circle"/>
                Newton School
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link link-dark">
                <img src="data:image/png;base64,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" alt="mdo" width="22.5" height="22.5" className=" bi me-3 rounded-circle"/>
                Mad-Programmer
                </a>    
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link link-dark">
                <img src="data:image/png;base64,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" alt="mdo" width="22.5" height="22.5" className=" bi me-3 rounded-circle"/>
                Learn-299
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link link-dark">
                <img src="data:image/png;base64,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" alt="mdo" width="22.5" height="22.5" className=" bi me-3 rounded-circle"/>
                Simple-Shiksha
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link link-dark">
                <img src="data:image/jpeg;base64,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" alt="mdo" width="22.5" height="22.5" className=" bi me-3 rounded-circle"/>
                Fifa
                </a>
            </li>
            </ul>

            <hr/>

            <ul class="nav nav-pills flex-column mb-auto">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <span class="fs-6">MORE FROM YOUTUBE</span>
            </a>
            <li class="nav-item">
                <a href="#" class="nav-link link-dark" aria-current="page">
                <img class="bi me-3" width="20" height="20" src="https://image.flaticon.com/icons/png/128/1384/1384028.png"/>
                Youtube Premium
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-dark">
                <img class="bi me-3" width="20" height="20" src="https://image.flaticon.com/icons/png/128/13/13973.png"/>
                Gaming
                </a>
            </li>
            
            <li>
                <a href="#" class="nav-link link-dark">
                <img class="bi me-3" width="20" height="20" src="https://img-premium.flaticon.com/png/128/1515/premium/1515478.png?token=exp=1624790983~hmac=9f0e57ea220203c798fc4b51197b7eec"/>
                Movies
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-dark">
                <img class="bi me-3" width="20" height="20" src="https://image.flaticon.com/icons/png/128/983/983906.png"/>
                Live
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-dark">
                <img class="bi me-3" width="20" height="20" src="https://image.flaticon.com/icons/png/128/4472/4472971.png"/>
                Fashion and Beauty
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-dark">
                <img class="bi me-3" width="20" height="20" src="https://image.flaticon.com/icons/png/512/632/632391.png"/>
                Learning
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-dark">
                <img class="bi me-3" width="20" height="20" src="https://image.flaticon.com/icons/png/512/3180/3180242.png"/>
                Sports
                </a>
            </li>
            <hr/>
            <li>
                <a href="#" class="nav-link link-dark">
                <img class="bi me-3" width="20" height="20" src="https://image.flaticon.com/icons/png/128/503/503849.png"/>
                Settings
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-dark">
                <img class="bi me-3" width="20" height="20" src="https://image.flaticon.com/icons/png/128/455/455683.png"/>
                Report history
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-dark">
                <img class="bi me-3" width="20" height="20" src="https://image.flaticon.com/icons/png/128/1828/1828934.png"/>
                Help
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-dark">
                <img class="bi me-3" width="20" height="20" src="https://image.flaticon.com/icons/png/512/876/876170.png"/>
                Send feedback
                </a>
            </li>
            </ul>
            <hr/>
            <span>About</span><span>Press</span><span>Copyright</span><span>Contact us</span><span>Creators</span><span>Advertise</span><span>Developers</span>
            <br/>
            <span>TermsPrivacyPolicy & SafetyHow YouTube worksTest new features</span>
            <br/>
            <p>© 2021 Google LLC</p>

           
        </div>

    )
}

export default Sidebar;
