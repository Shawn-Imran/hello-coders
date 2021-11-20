import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Body from './Body/Body';
import Data from './Body/Data/Data';
import Slider from './Body/Slider/Slider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Aos from 'aos';
import "aos/dist/aos.css";



import './Home.css'
import Courses from './Body/Courses/Courses';
import Blog from './Blog/Blog';

const Home = () => {

    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const [course, setCourse] = useState([]);

    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div className="container ">
            <Body></Body>

            <div data-aos="zoom-in-up">

                <Typography sx={{ fontWeight: 600, m: 2, color: '#80deea' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>

            </div>

            <div data-aos="zoom-in-down">

                <Typography sx={{ fontWeight: 600, m: 3 }} variant="h4" component="div">
                    SERVICE WE PROVIDE FOR YOU
                </Typography>
            </div>


            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 m-5 ">
                {
                    service.map(services => <Data
                        key={services.id}
                        services={services}
                    ></Data>)
                }
            </div>

            <Box sx={{ flexGrow: 1 }}>
                <Container>

                    <div data-aos="fade-down-right">

                        <Typography sx={{ fontWeight: 600, m: 3 }} variant="h5" component="div">
                            Our Premium Courses
                        </Typography>
                    </div>
                    <hr />
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            course.map(courses => <Courses
                                key={courses.id}
                                courses={courses}
                            ></Courses>)
                        }
                    </Grid>
                </Container>
            </Box>
            <Blog></Blog>
            <Slider></Slider>
        </div>
    );
};

export default Home;