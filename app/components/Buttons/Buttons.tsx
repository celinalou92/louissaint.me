import { Button } from "@mui/material"

export const getButtons = (project) => {
    console.log(project)
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
                    See Github
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