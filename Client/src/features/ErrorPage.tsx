import { Container, Button, Alert, AlertTitle, List, ListItem, ListItemText } from "@mui/material";
import request from "../api/requests";
import { useState } from "react";

export default function ErrorPage() {

        const [validationErrors, setValidationErrors] = useState<string[]>([])



        function getValidationErrors() {
                request.Errors.getValidationError()
                        .then(() => console.log("no validation"))
                        .catch(errors => setValidationErrors(errors))
        }


        return (
                <Container>
                        {validationErrors?.length > 0 && (
                                <Alert severity="error" sx={{ mb: 2 }}>
                                        <AlertTitle>Validation Errors</AlertTitle>
                                        <List>
                                                {validationErrors.map((error, index) => (
                                                        <ListItem key={index}>
                                                                 <ListItemText>{error}</ListItemText>
                                                        </ListItem>
                                                ))}
                                        </List>
                                </Alert>
                        )}

                        <Button sx={{ m: 2, p: 2 }} variant="contained"
                                onClick={() => request.Errors.get400Error().catch(error => console.log(error))}>400 Error
                        </Button>
                        <Button sx={{ m: 2, p: 2 }} variant="contained"
                                onClick={() => request.Errors.get401Error().catch(error => console.log(error))}>401 Error
                        </Button>
                        <Button sx={{ m: 2, p: 2 }} variant="contained"
                                onClick={() => request.Errors.get404Error().catch(error => console.log(error))}>404 Error
                        </Button>
                        <Button sx={{ m: 2, p: 2 }} variant="contained"
                                onClick={() => request.Errors.get500Error().catch(error => console.log(error))}>500 Error
                        </Button>
                        <Button sx={{ m: 2, p: 2 }} variant="contained"
                                onClick={getValidationErrors}>Validation Error
                        </Button>
                </Container>
        );
}