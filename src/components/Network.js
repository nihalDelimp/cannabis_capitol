import React from 'react'
import network from '../assets/network-bg.jpg';
import networkMain from '../assets/network-main.png';
import ccMemberShip from '../assets/cc-membershi.png'
import ccEvents from '../assets/cc-events.png';
import ccNetworking from '../assets/cc-networking.png';
import ccVerification from '../assets/cc-verification.png';
import ccInteractive from '../assets/cc-interactive.png';
import ccMarketing from '../assets/cc-marketing.png';

function Network() {
    return (
        <div>
            <section className="hm_banner">
        <div className="banner_box">
            <img src={network} className="" alt="" />
        </div>
    </section>

    <section className="wrap_con">
        <div className="container">
            <div className="row">
                <div className="col">

                    <div className="intertainWraper">
                        <div className="compound_formMain bg-white">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <img src={networkMain} alt="" />
                                </div>
                                <div className="col-lg-7 pl-lg-5">
                                    <div className="validation_col--content networkTop text-left">
                                        <h1 className="sec_title text-left">What is the cannabis Capitol network?</h1>
                                        <p className="font25 text-left">Cannabis Capitol Network (or CCN) is a platform that connects Business
                                            Owners, Content Creators and Connoisseurs at the pinnacle of an already
                                            thriving cannabis community. It will also allow access to a Creative
                                            Compound Membership.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="intertainWraper container_fullWidth">
                        <div className="join_compound mt-5 mb-5">
                            <div className="join_compound--in col-lg-5">
                                <h1 className="sec_title text-white">Parks of CCN</h1>
                                <h4 className="text-center font30">Here are the perks of joining the Cannabis Capitol
                                    Network</h4>
                            </div>
                        </div>
                    </div>


                    <div className="intertainWraper container_fullWidth validation_compound">
                         {/* <div className="row justify-content-center">
                            <div className="validation_col--content col-lg-5">
                                <h3 className="font40 sec_title">Validation</h3>
                                <p>The Cannabis Capitol Network utlizises a proven strategy developed and used by
                                    Infused Digital, Sullent TV and Vape Capitol.</p>
                            </div>
                        </div> */}
                        <div className="container">
                            <div className="row cc_network">
                                <div className="col-lg-4">
                                    <div className="cc_network_col text-center">
                                        <img src={ccMemberShip} alt="" />
                                        <h3 className="sec_title text-center">CREATIVE COMPOUND MEMBERSHIP</h3>
                                        <p className="text-center">
                                            Signing up for a free account includes a Creative Compound Memberbship that
                                            grants you exclusive access to scheduling time at the Creative Compound to
                                            utilize the space for production/content creations or private events.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="cc_network_col text-center">
                                        <img src={ccEvents} alt="" />
                                        <h3 className="sec_title text-center">EVENTS</h3>
                                        <p className="text-center">In the calander you’ll find in-studio productions and
                                            hosted
                                            event open to the CCN community. Your account will allow you to register and
                                            secure a spot to attend these events.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="cc_network_col text-center">
                                        <img src={ccNetworking} alt="Networking" />
                                        <h3 className="sec_title text-center">NETWORKING</h3>
                                        <p className="text-center">“Network” is in the name for a reason. At it’s core this
                                            community wants to create oppurtunities between Businesses, Content Creators
                                            &amp;
                                            Connoisseurs to network. These connection will lead to opportunities
                                            oppurtunities that will benefit all parties involved.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="cc_network_col text-center">
                                        <img src={ccVerification} alt="Verification" />
                                        <h3 className="sec_title text-center">Verification</h3>
                                        <p className="text-center">All members will have the opportunity to become “Cannabis
                                            Capitol Approved” through a vetting proccess. This offers some reassurance
                                            and
                                            validity to a Business or Content Creator you’re considering working with.
                                            As a
                                            Connoisseurs this puts you in the clear to attend public events or in studio
                                            productions.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="cc_network_col text-center">
                                        <img src={ccInteractive} alt="Interactive" />
                                        <h3 className="sec_title text-center">interactive Community</h3>
                                        <p className="text-center">CCN will feature an interactive feed where you can post
                                            all
                                            your cannabis realated content without the fear of your account being
                                            flagged or
                                            deactivated. You’ll also be able to browse other CCN profiles and start a
                                            conversation via DM and network with other likeminded people in the
                                            community.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="cc_network_col text-center">
                                        <img src={ccMarketing} alt="Marketing" />
                                        <h3 className="sec_title text-center">Marketing</h3>
                                        <p className="text-center">As “Cannabis Capitol Approved” Business account you’ll
                                            have
                                            the ability to reserve and manage AD space that will be featured on the
                                            Cannabis
                                            Capitol website. This opens up an oppurtunity for your brand to visible
                                            beyond
                                            the reach of just the CCN.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Network
