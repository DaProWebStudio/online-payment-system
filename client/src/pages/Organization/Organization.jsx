import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getOrganization} from "../../store/organization/organizationActions";
import {Card, CardActions, CardContent, Typography} from "@mui/material";
import Button from "@mui/material/Button";

const Organization = () => {
    const dispatch = useDispatch()
    const { organization } = useSelector(state => state.organization)

    useEffect(() => {
        dispatch(getOrganization())
    }, []);

    return (
        <div className='container'>
            {organization.map(organ => (
                <Card sx={{ minWidth: 275, marginBottom: 5 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {organ.title}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {organ.balance}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {organ.is_active}
                        </Typography>
                        <Typography variant="body2">
                            {organ.created_at}
                            <br />
                            {organ.modified_at}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
};

export default Organization;