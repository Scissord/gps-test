import axios from "axios";
import { ref } from "vue";

export default function useRides(fromDateNumber, toDateNumber) {
    const tableVisible = ref(false);
    const resultOfRides = ref({});
    const id = 43;
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1MCwidXNlcm5hbWUiOiJnbG90IiwiZXhwIjoxNjkyOTU' +
        '2MDg4LCJlbWFpbCI6IiJ9.tmTpbDW0Da4Pezf83hXmuKjrQQXA9kKl9MVwb4gQ0oc';

    const fetchingRides = async () => {
        try{
            const response = await axios.get(`https://glot.kz/api/v1/report/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    type: 1,
                    from: fromDateNumber.value,
                    to: toDateNumber.value,
                },
            });
            resultOfRides.value = response.data;
        }catch (e) {
            alert(e);
        }finally {
            tableVisible.value = true;
        }
    }

    return {
        tableVisible,
        resultOfRides,
        fetchingRides
    };
}