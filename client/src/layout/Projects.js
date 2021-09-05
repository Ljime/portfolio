import classes from './Projects.module.scss'
import { forwardRef } from 'react'
import SubHeading from '../components/UI/SubHeading'
import Project from '../components/Project'
import memories from '../assets/memories.png'
import movies from '../assets/movie.png'
import charity from '../assets/charity.png'
import restaurant from '../assets/restaurant.png'

const Projects = forwardRef((props, ref) => {
    return (
        <section ref={ref} className={classes.section}>
            <SubHeading className={classes.heading}>Projects</SubHeading>
            <Project
                image={memories}
                server="https://vuong-memories-app.herokuapp.com/"
                github="https://github.com/Ljime/memories"
                labels={["React", "Redux", "Express", "NodeJS", "Mongoose"]}
                title="Memories MERN App"
                desc="A CRUD app that allows the user to manage their memories by uploading their pictures using multer. Implemented with a safe and secure login system using jsonwebtoken and bcryptjs."
            />
            <Project
                image={charity}
                server="https://vuong-charity.herokuapp.com/"
                github="https://github.com/Ljime/charity-website"
                labels={["React", "NodeJS", "Stripe", 'Express']}
                title="Charity Donation Page"
                desc='A charity website that allows the user to donate to support the fight against breast cancer. Has an interactive multi-part form and uses Stripe for payment'
            />
            <Project
                image={restaurant}
                server="https://react-restaurant-9c6cb.web.app/main"
                github="https://github.com/Ljime/react-restaurant"
                labels={["React", "Redux"]}
                title="Restaurant Mockup"
                desc='A restaurant website that allows the user to add and remove food items to the cart fetched from the Spoonacular API. Cart state is managed using Redux'
            />{" "}
            <Project
                image={movies}
                server="https://react-movies-a0826.web.app/"
                github="https://github.com/Ljime/react-movies"
                labels={["React", "Context API"]}
                title="React Movies"
                desc='A movie search app that allows the user to fetch from the IMDB movie API while using React Context API to manage app-wide state'
            />
        </section>
    )
})

export default Projects