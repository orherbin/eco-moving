import Alert from '@mui/material/Alert';
import axios from 'axios';

const sleep = (delay:number) => new Promise((resolve) => setTimeout(resolve, delay))


export const displayAlert = async (setAlert: any) => {
    setAlert(true)
    await sleep(5000)
    setAlert(false)
}

export const calculateDistance = async (origin:string, destination:string) => {
    const apiKey = '0T4j4phMrc9miSqv63D8OCKuCaxa8ZO8fclnoojyyg7LYE1guPGfoqXlv2Bb61mU';
    const url = 'https://api-v2.distancematrix.ai/maps/api/distancematrix/json'
    const originUrl = origin.replace(' ', '+');
    const destinationUrl = destination.replace(' ', '+');
    const urlWithParams = `${url}?key=${apiKey}&origins=${originUrl},+Israel&destinations=${destinationUrl},+Israel`
    const cors_url=`https://corsproxy.io/?${urlWithParams}`
    try {

        const response = await axios.get(cors_url);

        if (response.data.status === 'OK') {
            const distance = Math.round((response.data.rows[0].elements[0].distance.value)/1000);
            const from = response.data.origin_addresses[0]
            const to = response.data.destination_addresses[0]
            return {distance, from, to}
        } else {
            return {};
        }
    } catch (error) {
        return {};
    }
}

export const calculatePrice = (distance: number, formValues:any) => {
    let price = distance*100
    price += (formValues.refrigerator + formValues.oven + formValues.bed + formValues.closet + formValues.table + formValues.sofa + formValues.washingMachine + formValues.chair + formValues.tv + formValues.smallCloset + formValues.numOfBoxes)*50
    if (formValues.toFloor > 3 && !formValues.toElevator){
        price +=100*(formValues.toFloor-3)
    }
    if (formValues.fromFloor > 3 && !formValues.fromElevator){
        price +=100*(formValues.fromFloor-3)
    }
    return price
}

export const getStatusColor = (status:string) => {
    switch (status) {
        case 'Done':
            return {color: 'green'}
        case 'Waiting for Approval':
            return {color: 'gray'}
        case 'Pending':
            return {color: 'yellow'}
        case 'Canceled':
            return {color: 'red'}
        case 'canceled':
            return {color: 'red'}
        case 'open':
            return {color: 'red'}
        case 'solved':
            return {color: 'green'}
        default:
            return {color: 'black'}
    }
}

