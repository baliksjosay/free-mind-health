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
            <Row style={{paddingTop:"80px"}} >
            <Col  xl="1" lg="1" md="1" sm="1" />
            <Col  xl="6" lg="7" md="11" sm="11" style={{padding:"20px"}} className="aboutcontent">
                <Card>
                    <CardHeader style={{backgroundColor:"#3daa8a"}}>ABOUT FREE-MIND THERAPY UGANDA</CardHeader>
                    <CardBody style={{backgroundColor:"floralwhite"}}>
                        <p>
                            Free-Mind Therapy Uganda is an indigenous Non-government organization established in 2016 and legally incorporated in 
                            2019 with the aim of Combating Mental health Concerns (Psychological related disorders like Depression, Trauma, stress, etc.)
                            and Drug/Alcohol rehabilitation service among youth and women.
                        </p>
                        <p>
                            Our mission is to promote improved mental health for individuals through Prevention, Rehabilitation, provision 
                            effective Therapy support, advocacy, Education and engaging them in Productive socio-economic Activities.
                        </p>
                        <p>
                            The organization is growing by dedicating activities to improving mental health in youth with mental disorders and those
                            victimized in substance abuse. 
                        </p>
                        <p>
                            We provide comprehensive solutions to assist each victimized youth to engage in productive activities to achieve 
                            financial independence.  This mission is pursued by a values-based culture. 
                        </p>
                        <p>
                            Free-Mind Therapy Uganda is a client-focused and result driven organization that provides broad-based mental therapy and 
                            Drug/Alcohol rehabilitation services to Youths and women with help of a certified professional team.
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

                    </CardBody>
                </Card>
            </Col>

            <Col  xl="4" lg="3" md="12" sm="11" style={{padding:"20px"}} className="aboutcontent2">
                <Card>
                    <CardHeader style={{backgroundColor:"#3daa8a"}} ><b>Mission</b></CardHeader>
                    <CardBody style={{backgroundColor:"floralwhite"}}>
                    To promote improved mental health for individuals and families through Prevention works, advocacy, provision of effective 
                        Therapy support, Education, Rehabilitation, etc and engaging them in Productive socio-economic Activities.
                    </CardBody>
                </Card>
                <p></p>
                <Card>
                    <CardHeader style={{backgroundColor:"#3daa8a"}}><b>Vision</b></CardHeader>
                    <CardBody style={{backgroundColor:"floralwhite"}}>
                    To be a leading organization working to create a society where mental wellness is the foundation of a healthy community.
                    </CardBody>
                </Card>
                <p></p>

                <Card>
                    <CardHeader style={{backgroundColor:"#3daa8a"}}><b>Goals</b></CardHeader>
                    <CardBody style={{backgroundColor:"floralwhite"}}>
                    Assist individuals with mental disorders in leading more productive and autonomous lifestyles, and to promote mental health through
                     service, advocacy, education, rehabilitation etc.
                    </CardBody>
                </Card>
                <p></p>

                <Card>
                    <CardHeader style={{backgroundColor:"#3daa8a"}}><b>Values</b></CardHeader>
                    <CardBody style={{backgroundColor:"floralwhite"}}>
                    <p><span class="stop-mark">#   </span>Diversity</p>
                    <p><span class="stop-mark">#   </span>Integrity</p>
                    <p><span class="stop-mark">#   </span>Compassion</p>
                    <p><span class="stop-mark">#   </span>Empowerment</p>
                    <p><span class="stop-mark">#   </span>Professionalism</p>
                    </CardBody>
                </Card>
            </Col>
            <Col  xl="1" lg="1" md="1" sm="1" />
            </Row>
        </div>
	);
}
export default AboutPage;