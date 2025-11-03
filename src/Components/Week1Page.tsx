
import Stack from '@mui/material/Stack';
import BlogPostComponent from "./BlogPostComponent";
import "./BlogPostPage.css"
export default function Week1Page(){

    return(

        <div className={"page"}>
            <Stack  direction={"column"}>
                <BlogPostComponent name={"Jacob"}
                                   progress={"This week I set up the base projectile system and created the website for the group. The projectile system I created allows for the player to seemingly pick up an object off the ground into their hand which they can then throw. I also created a poof particle effect for the game that can be used for the dash or collisions. "}
                                   images={[]}/>
                <BlogPostComponent name={"Chloe"}
                                   progress={"Racoon Character sculpt started + concept art for intractable objects"}
                                   images={[
                                       "./assets/Images/Week1/chlo2.png",
                                       "./assets/Images/Week1/chloe1.png"

                                   ]}/>
                <BlogPostComponent name={"Irene"}
                                   progress={""}
                                   images={[
                                       "./assets/Images/Week1/irene1.png",
                                       "./assets/Images/Week1/irene2.png",
                                       "./assets/Images/Week1/irene3.png"


                                   ]}/>
                <BlogPostComponent name={"Sarah"}
                                   progress={"Shader set up\n" +
                                       "I found my old shader code for simple cell shading and lineart and ported them over to the project. \n" +
                                       "I also updated the project's settings to better support the shader. For those wondering, Unreal5’s dynamic lighting engine, while awesome, is not useful for cell shaded projects. I turned Dynamic Global Illumination from Lumen to off, as well as Dynamic reflections from Lumen to off. This forces us to build most of our lighting and have fewer dynamic lights but removes the jitter caused by Lumen. Since our games lighting is planned to be almost entirely stationary this is a reasonable trade off.\n" +
                                       "Additionally watching PrismaticaDev’s video I was able to add colored lights back in as an option. This has added a tint to the shadows on some maps caused by the sky reflection system. Will need to check in with art to see how they would like it to look. Still to do is to add the system to fake metallic objects as the math for a post process cell shader destroys the actual reflections from metallic objects. \n" +
                                       "This week I also worked on setting up a spreadsheet for a file check out system, to mitigate merge conflicts. \n"}
                                   images={[
                                       "./assets/Images/Week1/sarah1.jpg",
                                       "./assets/Images/Week1/sarah2.jpg",

                                   ]}/>

                <BlogPostComponent name={"Jake"}
                                   progress={"This week, I implemented the player health and damage systems. When the player takes 20 points of damage, they will respawn at player start. Additionally, I implemented a dash allowing the player to move forward a short distance by pressing shift. This ability has a five second cooldown."}
                                   images={[


                                   ]}/>

                <BlogPostComponent name={"Ethan"}
                                   progress={"This week I created a reticle to help the player aim, and implemented a health bar. The player creates a health bar widget, and passes a reference to itself. Whenever the player’s damage event is called, the health bar percentage is also updated accordingly. I’ve also begun working on making an inventory to hold 2 items.\n"}
                                   images={[


                                   ]}/>
                <BlogPostComponent name={"June"}
                                   progress={"This week, I got a start on audio work for the game, creating sounds for throwing objects, character footsteps, and digging for trash. I also began gathering inspiration for a main theme for the soundtrack, getting ready to start writing and drafting ideas. On the tech side of things, I mostly worked to overcome tech issues, and get my work environment set up.\n"}
                                   images={[


                                   ]}/>






            </Stack>
        </div>


    );


}