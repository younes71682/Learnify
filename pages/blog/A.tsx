import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const A = () => {
    const [page, setPage] = React.useState(1)
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }
    return (

        <div>

            <Stack spacing={2}>
                <Pagination count={3} page={page} onChange={handleChange} size="small" />
            </Stack>

        </div>
    )
}

export default A
