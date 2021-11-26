import { useHistory } from 'react-router'


const Services = () => {

    const history = useHistory();



    return (
        <> (<h1 style={{ width: '55%', margin: '50px auto', backgroundColor: 'blueviolet', borderRadius: '20px',textDecoration:'underline', padding:'10px 0 10px 50px' }} >hello we are using useHistory method</h1>)

            <button onClick={history.goBack} style={{ width: '30%', margin: '50px 0 0 500px', borderRadius: '20px', backgroundColor: 'chartreuse' }} >go back</button>
            <button onClick={() => history.push('./')} style={{ width: '30%', margin: '50px 0 0 500px', borderRadius: '20px', backgroundColor: 'chartreuse' }} >Home page</button>
        </>
    )
}

export default Services;
