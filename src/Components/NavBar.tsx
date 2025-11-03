
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
import {MouseEvent} from "react";
import "./NavBar.css"
export default function NavBar(){

    const navigate = useNavigate();

    const handleClick = (e: MouseEvent<HTMLElement>) => {
        const id = e.currentTarget.id;
        navigate(id);
    }

    return(
        <div className={"NavBar"}>
            <Stack spacing={1} direction={"row"} alignContent={"center"} >
                <Button  onClick={handleClick} id={"/rubbish_rumble_website/"} >

                    <p>
                        HomePage
                    </p>
                </Button>

                <Button  onClick={handleClick} id={"/rubbish_rumble_website/week1"} >

                    <p>
                        Week1
                    </p>
                </Button>


            </Stack>

        </div>
    );

}
