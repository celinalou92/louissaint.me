import { Button } from "@mui/material"

const getButtons = () => {
    {
        return project.name != "Amanda Lynn Photography" ? (
            <>
                <Button
                    variant="outlined"
                    href={project.links[0]}
                    color="secondary"
                    target="_blank"
                    rel="noreferrer"
                >
                

                </Button>
                <Button
                    target="_blank"
                    rel="noreferrer"
                    variant="outlined"
                    href={project.links[1]}
                    color="secondary">
                    See Live Site
                </Button>
            </>
        ) : (
            <Button
                target="_blank"
                rel="noreferrer"
                variant="outlined"
                href={project.links[0]}
                color="secondary"
            >
                See Demo on Vimeo
            </Button>
        )
    }
}