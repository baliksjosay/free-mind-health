import React from "react"
// import '../assets/aboutus.css';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,
  } from 'reactstrap';

const AboutPage = ()=> {
	return (
		<div >
            <Row>
            <Col  xl="7" lg="9" md="12" sm="12" style={{marginTop:"100px"}}>
                <h3>ABOUT FREE-MIND THERAPY UGANDA</h3>
                <hr />
                <p>  
                    Free-Mind Therapy Uganda is an indigenous Non-government organization established in 2016 and legally incorporated in 2019 
                    with the aim of Combating Mental health Concerns (Psychological related disorders like Depression, Trauma, stress, etc.) 
                    and Drug/Alcohol rehabilitation service.
                </p>
                <p>
                    Our mission is to promote improved mental health for individuals through Prevention, Rehabilitation, provision of effective 
                    Therapy support, advocacy, education and engaging them in Productive socio-economic Activities. 
                </p>
                <p>
                    The organization is growing by dedicating activities to improving mental health in youth with mental disorders and those 
                    victimized in substance abuse. 
                </p>
                <p>
                    We provide comprehensive solutions to assist each victimized youth to engage in productive activities to achieve financial 
                    independence.  This mission is pursued by a values-based culture. 
                </p>
                <p>
                    The scope of our firm’s offerings cover areas such as mental health (psychological disorders), Drug/Alcohol Rehabilitation
                    services, organizational psychology, Family therapy, online therapy Services and selling of self-help books materials, etc.
                </p>
                <p>
                    Free-Mind Therapy Uganda is a client-focused and result-driven organization that provides broad-based mental therapy and 
                    Drug/Alcohol rehabilitation services to Youths, mothers, and adults with mental/health problems with a well-developed 
                    experienced professional and passionate team.
                </p>
                <p>
                    We are living in an age where new techniques for mental therapy is in great demand and our organization provides these 
                    services with an added personal touch.
                </p>
                <p>
                    The organization demonstrates a commitment to sustainability by actively participating in communities and integrating 
                    sustainable practices wherever possible.
                    We believe that life experience and the environment we live in play a major part in influencing our mental health. Our 
                    upbringing, the pressures of day to day living, the experience of trauma, discrimination, harassment and poverty can all 
                    have adverse effects on our mental well-being.
                </p>
                <p>
                    Our vision is to be a leading organization working to create a society where mental wellness is the foundation of a healthy 
                    community. The organization dedicates to the community it serves through advocacy, Awareness, Education, Rehabilitation, 
                    Counseling, etc. the organization strives to raise public awareness to the needs of at-risk Individuals within our community.
                </p>
                <p>
                    Our Services are designed to strengthen and increase self-esteem, self-respect, and respect for others in society in order to
                    promote and optimize mental health.
                </p>
            </Col>

            <Col  xl="5" lg="3" md="12" sm="12" style={{marginBottom: "5px #ffa500"}}>
                <h3>Mission</h3>
                <hr />
                    <p>
                        To promote improved mental health for individuals and families through Prevention works, advocacy, provision of effective 
                        Therapy support, Education, Rehabilitation, etc and engaging them in Productive socio-economic Activities.
                    </p>
                <h3>Vision</h3>
                <hr />

                    <p>  
                        To be a leading organization working to create a society where mental wellness is the foundation of a healthy community.
                    </p>
                <h3>Values</h3>
                <hr />

                    <p><span class="stop-mark">#   </span>Diversity</p>
                    <p><span class="stop-mark">#   </span>Integrity</p>
                    <p><span class="stop-mark">#   </span>Compassion</p>
                    <p><span class="stop-mark">#   </span>Empowerment</p>
                    <p><span class="stop-mark">#   </span>Professionalism</p>

            </Col>
            </Row>
        </div>
	);
}
export default AboutPage;