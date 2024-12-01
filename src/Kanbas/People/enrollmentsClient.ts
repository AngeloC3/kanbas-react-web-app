import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const fetchAllEnrollments = async () => {
    const { data } = await axiosWithCredentials.get(ENROLLMENTS_API);
    return data;
  };

export const enrollUser = async (courseId: string, userId: string) => {
    const response = await axiosWithCredentials.post(`${ENROLLMENTS_API}/enroll/${courseId}`, {uid: userId});
    return response.data;
};

export const unenrollUser = async (courseId: string, userId: string) => {
    const response = await axiosWithCredentials.post(`${ENROLLMENTS_API}/unenroll/${courseId}/${userId}`);
    return response.data;
};
