import axios from "axios";
import { ref } from "vue";
import Polyline from "google-polyline";

export default function useCoordinates(fromDateNumber, toDateNumber) {
    const encodedPolyline = ref('');
    const decodedPolyline = ref([]);
    const id = 43;
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1MCwidXNlcm5hbWUiOiJnbG90IiwiZXhwIjoxNjkyOTU' +
        '2MDg4LCJlbWFpbCI6IiJ9.tmTpbDW0Da4Pezf83hXmuKjrQQXA9kKl9MVwb4gQ0oc';

    const fetchingCoordinates = async () => {
        try{
            const response = await axios.get(`https://glot.kz/api/v1/route/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    from: fromDateNumber.value,
                    to: toDateNumber.value,
                },
            });
            encodedPolyline.value = response.data;
            decodedPolyline.value = Polyline.decode(encodedPolyline.value);
        }catch (e) {
            alert(e);
        }
    }

    return {
        decodedPolyline,
        fetchingCoordinates
    };
}